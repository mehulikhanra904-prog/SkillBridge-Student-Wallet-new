'use strict';

require('../xdr/index.js');
var strkey = require('./strkey.js');
var signerKey = require('../xdr/generated/signer-key.js');
var signerKeyEd25519SignedPayload = require('../xdr/generated/signer-key-ed25519-signed-payload.js');

class SignerKey {
  /**
   * Decodes a StrKey address into an xdr.SignerKey instance.
   *
   * Only ED25519 public keys (G...), pre-auth transactions (T...), hashes
   * (H...), and signed payloads (P...) can be signer keys.
   *
   * @param address - a StrKey-encoded signer address
   */
  static decodeAddress(address) {
    const vb = strkey.StrKey.getVersionByteForPrefix(address);
    if (vb === void 0) {
      throw new Error(`invalid signer key type (${vb})`);
    }
    const raw = strkey.decodeCheck(vb, address);
    switch (vb) {
      case "signedPayload": {
        const payloadLength = new DataView(
          raw.buffer,
          raw.byteOffset,
          raw.byteLength
        ).getUint32(32);
        return signerKey.SignerKey.signerKeyTypeEd25519SignedPayload(
          new signerKeyEd25519SignedPayload.SignerKeyEd25519SignedPayload({
            ed25519: raw.subarray(0, 32),
            payload: raw.subarray(36, 36 + payloadLength)
          })
        );
      }
      case "ed25519PublicKey":
        return signerKey.SignerKey.signerKeyTypeEd25519(raw);
      case "preAuthTx":
        return signerKey.SignerKey.signerKeyTypePreAuthTx(raw);
      case "sha256Hash":
        return signerKey.SignerKey.signerKeyTypeHashX(raw);
      default:
        throw new Error(`invalid signer key type (${vb})`);
    }
  }
  /**
   * Encodes a signer key into its StrKey equivalent.
   *
   * @param signerKey - the signer
   */
  static encodeSignerKey(signerKey) {
    let strkeyType;
    let raw;
    switch (signerKey.type) {
      case "signerKeyTypeEd25519":
        strkeyType = "ed25519PublicKey";
        raw = signerKey.value.toBytes();
        break;
      case "signerKeyTypePreAuthTx":
        strkeyType = "preAuthTx";
        raw = signerKey.value.toBytes();
        break;
      case "signerKeyTypeHashX":
        strkeyType = "sha256Hash";
        raw = signerKey.value.toBytes();
        break;
      case "signerKeyTypeEd25519SignedPayload":
        strkeyType = "signedPayload";
        raw = signerKey.value.toXdr("raw");
        break;
      default:
        throw new Error(
          `invalid SignerKey (type: ${signerKey.type})`
        );
    }
    return strkey.encodeCheck(strkeyType, raw);
  }
}

exports.SignerKey = SignerKey;
//# sourceMappingURL=signerkey.js.map
