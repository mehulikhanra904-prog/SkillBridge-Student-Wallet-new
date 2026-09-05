'use strict';

var ed = require('@noble/ed25519');
var sha2_js = require('@noble/hashes/sha2.js');
var uint8arrayExtras = require('uint8array-extras');
var signing = require('./signing.js');
var strkey = require('./strkey.js');
var hashing = require('./hashing.js');
var index = require('../xdr/index.js');
var publicKey = require('../xdr/generated/public-key.js');
var muxedAccount = require('../xdr/generated/muxed-account.js');
var muxedAccountMed25519 = require('../xdr/generated/muxed-account-med25519.js');
var decoratedSignature = require('../xdr/generated/decorated-signature.js');
var signature = require('../xdr/generated/signature.js');

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n.default = e;
  return Object.freeze(n);
}

var ed__namespace = /*#__PURE__*/_interopNamespace(ed);

ed__namespace.hashes.sha512 = sha2_js.sha512;
const MESSAGE_PREFIX = uint8arrayExtras.stringToUint8Array("Stellar Signed Message:\n");
function isSignature(value) {
  if (value instanceof signature.Signature) return true;
  if (typeof value !== "object" || value === null) return false;
  const ctor = value.constructor;
  if (ctor?.schema?.name !== signature.Signature.schema.name) return false;
  return typeof value.toBytes === "function";
}
function toBytes(input) {
  return typeof input === "string" ? uint8arrayExtras.stringToUint8Array(input) : Uint8Array.from(input);
}
class Keypair {
  type;
  _publicKey;
  _secretSeed;
  _secretKey;
  /**
   * @param keys - at least one of keys must be provided.
   *   - `type`: public-key signature system name (currently only `ed25519` keys are supported)
   *   - `publicKey`: raw public key
   *   - `secretKey`: raw secret key (32-byte secret seed in ed25519)
   */
  constructor(keys) {
    if (keys.type !== "ed25519") {
      throw new Error("Invalid keys type");
    }
    this.type = keys.type;
    if ("secretKey" in keys) {
      const secretKey = toBytes(keys.secretKey);
      if (secretKey.length !== 32) {
        throw new Error("secretKey length is invalid");
      }
      this._secretSeed = secretKey;
      this._publicKey = signing.generate(secretKey);
      this._secretKey = secretKey;
      if (keys.publicKey && !uint8arrayExtras.areUint8ArraysEqual(this._publicKey, toBytes(keys.publicKey))) {
        throw new Error("secretKey does not match publicKey");
      }
    } else if ("publicKey" in keys) {
      this._publicKey = toBytes(keys.publicKey);
      if (this._publicKey.length !== 32) {
        throw new Error("publicKey length is invalid");
      }
    } else {
      throw new Error(
        "At least one of publicKey or secretKey must be provided"
      );
    }
  }
  /**
   * Creates a new `Keypair` instance from secret. This can either be secret key or secret seed depending
   * on underlying public-key signature system. Currently `Keypair` only supports ed25519.
   * @param secret - secret key (ex. `SDAK....`)
   */
  static fromSecret(secret) {
    const rawSecret = strkey.StrKey.decodeEd25519SecretSeed(secret);
    return this.fromRawEd25519Seed(rawSecret);
  }
  /**
   * Creates a new `Keypair` object from ed25519 secret key seed raw bytes.
   *
   * @param rawSeed - raw 32-byte ed25519 secret key seed
   */
  static fromRawEd25519Seed(rawSeed) {
    return new this({ type: "ed25519", secretKey: rawSeed });
  }
  /**
   * Returns `Keypair` object representing network master key.
   * @param networkPassphrase - passphrase of the target stellar network (e.g. "Public Global Stellar Network ; September 2015")
   */
  static master(networkPassphrase) {
    if (!networkPassphrase) {
      throw new Error(
        "No network selected. Please pass a network argument, e.g. `Keypair.master(Networks.PUBLIC)`."
      );
    }
    return this.fromRawEd25519Seed(hashing.hash(networkPassphrase));
  }
  /**
   * Creates a new `Keypair` object from public key.
   * @param publicKey - public key (ex. `GB3KJPLFUYN5VL6R3GU3EGCGVCKFDSD7BEDX42HWG5BWFKB3KQGJJRMA`)
   */
  static fromPublicKey(publicKey) {
    const rawPublicKey = strkey.StrKey.decodeEd25519PublicKey(publicKey);
    if (rawPublicKey.length !== 32) {
      throw new Error("Invalid Stellar public key");
    }
    return new this({ type: "ed25519", publicKey: rawPublicKey });
  }
  /**
   * Create a random `Keypair` object.
   */
  static random() {
    const secretKey = ed__namespace.utils.randomSecretKey();
    return this.fromRawEd25519Seed(secretKey);
  }
  /** Returns this public key as an xdr.AccountId. */
  xdrAccountId() {
    return publicKey.PublicKey.publicKeyTypeEd25519(this._publicKey);
  }
  /** Returns this public key as an xdr.PublicKey. */
  xdrPublicKey() {
    return publicKey.PublicKey.publicKeyTypeEd25519(this._publicKey);
  }
  /**
   * Creates a {@link xdr.MuxedAccount} object from the public key.
   *
   * You will get a different type of muxed account depending on whether or not
   * you pass an ID.
   *
   * @param id - stringified integer indicating the underlying muxed
   *     ID of the new account object
   */
  xdrMuxedAccount(id) {
    if (typeof id !== "undefined") {
      if (typeof id !== "string") {
        throw new TypeError(`expected string for ID, got ${typeof id}`);
      }
      return muxedAccount.MuxedAccount.keyTypeMuxedEd25519(
        new muxedAccountMed25519.MuxedAccountMed25519({
          id: index.Uint64.fromString(id),
          ed25519: this._publicKey
        })
      );
    }
    return muxedAccount.MuxedAccount.keyTypeEd25519(this._publicKey);
  }
  /**
   * Returns raw public key bytes
   */
  rawPublicKey() {
    return this._publicKey;
  }
  /**
   * Returns the signature hint for this keypair.
   * The hint is the last 4 bytes of the account ID XDR representation.
   */
  signatureHint() {
    const a = this.xdrAccountId().toXdr();
    return a.slice(a.length - 4);
  }
  /**
   * Returns public key associated with this `Keypair` object.
   */
  publicKey() {
    return strkey.StrKey.encodeEd25519PublicKey(this._publicKey);
  }
  /**
   * Returns secret key associated with this `Keypair` object.
   *
   * The secret key is encoded in Stellar format (e.g., `SDAK....`).
   *
   * @throws if no secret key is available
   */
  secret() {
    if (!this._secretSeed) {
      throw new Error("no secret key available");
    }
    if (this.type === "ed25519") {
      return strkey.StrKey.encodeEd25519SecretSeed(this._secretSeed);
    }
    throw new Error("Invalid Keypair type");
  }
  /**
   * Returns raw secret key bytes.
   *
   * @throws if no secret seed is available
   */
  rawSecretKey() {
    if (!this._secretSeed) {
      throw new Error("no secret seed available");
    }
    return this._secretSeed;
  }
  /**
   * Returns `true` if this `Keypair` object contains secret key and can sign.
   */
  canSign() {
    return !!this._secretKey;
  }
  /**
   * Signs data.
   *
   * @param data - data to sign
   * @throws if no secret key is available
   */
  sign(data) {
    if (!this._secretKey) {
      throw new Error("cannot sign: no secret key available");
    }
    return signing.sign(data, this._secretKey);
  }
  /**
   * Verifies if `signature` for `data` is valid.
   *
   * A well-formed signature that doesn't match returns `false`; an argument of
   * an unaccepted type throws, because reporting it as an invalid signature
   * would be indistinguishable from a forgery.
   *
   * @param data - signed data
   * @param signature - signature to verify, either raw bytes or the
   *    `xdr.Signature` wrapper that `DecoratedSignature.signature` holds
   * @throws a `TypeError` if `data` is not a `Uint8Array`, or if `signature` is
   *    neither a `Uint8Array` nor an `xdr.Signature` — a hex/base64 string, a
   *    plain array of byte values, or the `xdr.DecoratedSignature` that
   *    `tx.signatures[0]` holds is rejected rather than reported as an invalid
   *    signature.
   */
  verify(data, signature) {
    if (!uint8arrayExtras.isUint8Array(data)) {
      throw new TypeError(`expected Uint8Array for data, got ${typeof data}`);
    }
    const signatureBytes = isSignature(signature) ? signature.toBytes() : signature;
    if (!uint8arrayExtras.isUint8Array(signatureBytes)) {
      throw new TypeError(
        `expected Uint8Array or xdr.Signature for signature, got ${typeof signature}`
      );
    }
    try {
      return signing.verify(data, signatureBytes, this._publicKey);
    } catch {
      return false;
    }
  }
  /**
   * Signs an arbitrary message per SEP-53.
   *
   * The message is UTF-8 encoded (if a string), prefixed with the fixed
   * `"Stellar Signed Message:\n"` marker, hashed with SHA-256, and that hash is
   * signed with this keypair's ed25519 secret key.
   *
   * @param message - the message to sign (a UTF-8 string or raw bytes)
   * @returns the 64-byte ed25519 signature
   * @throws an `Error` if no secret key is available, or a `TypeError` if
   *    `message` is neither a string nor a `Uint8Array`
   * @see https://github.com/stellar/stellar-protocol/blob/master/ecosystem/sep-0053.md
   */
  signMessage(message) {
    return this.sign(this._hashMessage(message));
  }
  /**
   * Verifies a SEP-53 signed message against this keypair's public key.
   *
   * @param message - the original message (a UTF-8 string or raw bytes)
   * @param signature - the 64-byte signature to verify, either raw bytes or an
   *    `xdr.Signature` wrapper
   * @returns `true` if `signature` is valid for `message` and this key
   * @throws a `TypeError` if `message` is neither a string nor a `Uint8Array`,
   *    or if `signature` is neither a `Uint8Array` nor an `xdr.Signature` (e.g.
   *    a hex/base64 signature string): an unaccepted type is rejected rather
   *    than reported as an invalid signature.
   * @see https://github.com/stellar/stellar-protocol/blob/master/ecosystem/sep-0053.md
   */
  verifyMessage(message, signature) {
    return this.verify(this._hashMessage(message), signature);
  }
  /**
   * Computes the SEP-53 message hash:
   * `SHA-256("Stellar Signed Message:\n" + message)`.
   */
  _hashMessage(message) {
    if (typeof message !== "string" && !uint8arrayExtras.isUint8Array(message)) {
      throw new TypeError(
        `expected string or Uint8Array for message, got ${typeof message}`
      );
    }
    const messageBytes = typeof message === "string" ? uint8arrayExtras.stringToUint8Array(message) : message;
    return hashing.hash(uint8arrayExtras.concatUint8Arrays([MESSAGE_PREFIX, messageBytes]));
  }
  /**
   * Returns the decorated signature (hint+sig) for arbitrary data.
   *
   * The returned structure can be added directly to a transaction envelope.
   *
   * @param data - arbitrary data to sign
   *
   * @see TransactionBase.addDecoratedSignature
   */
  signDecorated(data) {
    const signature = this.sign(data);
    const hint = this.signatureHint();
    return new decoratedSignature.DecoratedSignature({ hint, signature });
  }
  /**
   * Returns the raw decorated signature (hint+sig) for a signed payload signer.
   *
   *  The hint is defined as the last 4 bytes of the signer key XORed with last
   *  4 bytes of the payload (zero-left-padded if necessary).
   *
   * @param data - data to both sign and treat as the payload
   *
   * @see https://github.com/stellar/stellar-protocol/blob/master/core/cap-0040.md#signature-hint
   * @see TransactionBase.addDecoratedSignature
   */
  signPayloadDecorated(data) {
    const signature = this.sign(data);
    const keyHint = this.signatureHint();
    const hint = new Uint8Array(4);
    hint.set(data.slice(-4), 0);
    for (let i = 0; i < hint.length; i++) {
      hint[i] = hint[i] ^ keyHint[i];
    }
    return new decoratedSignature.DecoratedSignature({
      hint,
      signature
    });
  }
}

exports.Keypair = Keypair;
//# sourceMappingURL=keypair.js.map
