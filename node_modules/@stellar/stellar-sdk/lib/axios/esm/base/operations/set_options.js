import '../../xdr/index.js';
import { hexToUint8Array } from 'uint8array-extras';
import { Keypair } from '../keypair.js';
import { StrKey } from '../strkey.js';
import { checkUnsignedIntValue, setSourceAccount } from '../util/operations.js';
import { SignerKey as SignerKey$1 } from '../../xdr/generated/signer-key.js';
import { SignerKeyEd25519SignedPayload } from '../../xdr/generated/signer-key-ed25519-signed-payload.js';
import { Signer } from '../../xdr/generated/signer.js';
import { SetOptionsOp } from '../../xdr/generated/set-options-op.js';
import { OperationBody } from '../../xdr/generated/operation-body.js';
import { Operation } from '../../xdr/generated/operation.js';

function weightCheckFunction(value, name) {
  if (value >= 0 && value <= 255) {
    return true;
  }
  throw new Error(`${name} value must be between 0 and 255`);
}
function setOptions(opts) {
  let inflationDest = null;
  if (opts.inflationDest) {
    if (!StrKey.isValidEd25519PublicKey(opts.inflationDest)) {
      throw new Error("inflationDest is invalid");
    }
    inflationDest = Keypair.fromPublicKey(opts.inflationDest).xdrAccountId();
  }
  const clearFlags = checkUnsignedIntValue("clearFlags", opts.clearFlags) ?? null;
  const setFlags = checkUnsignedIntValue("setFlags", opts.setFlags) ?? null;
  const masterWeight = checkUnsignedIntValue(
    "masterWeight",
    opts.masterWeight,
    weightCheckFunction
  ) ?? null;
  const lowThreshold = checkUnsignedIntValue(
    "lowThreshold",
    opts.lowThreshold,
    weightCheckFunction
  ) ?? null;
  const medThreshold = checkUnsignedIntValue(
    "medThreshold",
    opts.medThreshold,
    weightCheckFunction
  ) ?? null;
  const highThreshold = checkUnsignedIntValue(
    "highThreshold",
    opts.highThreshold,
    weightCheckFunction
  ) ?? null;
  if (opts.homeDomain !== void 0 && typeof opts.homeDomain !== "string") {
    throw new TypeError("homeDomain argument must be of type String");
  }
  const homeDomain = opts.homeDomain;
  let signer = null;
  if (opts.signer) {
    const weight = checkUnsignedIntValue(
      "signer.weight",
      opts.signer.weight,
      weightCheckFunction
    );
    let key;
    let setValues = 0;
    if (opts.signer.ed25519PublicKey) {
      if (!StrKey.isValidEd25519PublicKey(opts.signer.ed25519PublicKey)) {
        throw new Error("signer.ed25519PublicKey is invalid.");
      }
      const rawKey = StrKey.decodeEd25519PublicKey(
        opts.signer.ed25519PublicKey
      );
      key = SignerKey$1.signerKeyTypeEd25519(rawKey);
      setValues += 1;
    }
    if (opts.signer.preAuthTx) {
      let preAuthTx;
      if (typeof opts.signer.preAuthTx === "string") {
        preAuthTx = hexToUint8Array(opts.signer.preAuthTx);
      } else {
        preAuthTx = opts.signer.preAuthTx;
      }
      if (!(preAuthTx instanceof Uint8Array && preAuthTx.length === 32)) {
        throw new Error("signer.preAuthTx must be 32 bytes Uint8Array.");
      }
      key = SignerKey$1.signerKeyTypePreAuthTx(preAuthTx);
      setValues += 1;
    }
    if (opts.signer.sha256Hash) {
      let sha256Hash;
      if (typeof opts.signer.sha256Hash === "string") {
        sha256Hash = hexToUint8Array(opts.signer.sha256Hash);
      } else {
        sha256Hash = opts.signer.sha256Hash;
      }
      if (!(sha256Hash instanceof Uint8Array && sha256Hash.length === 32)) {
        throw new Error("signer.sha256Hash must be 32 bytes Uint8Array.");
      }
      key = SignerKey$1.signerKeyTypeHashX(sha256Hash);
      setValues += 1;
    }
    if (opts.signer.ed25519SignedPayload) {
      if (!StrKey.isValidSignedPayload(opts.signer.ed25519SignedPayload)) {
        throw new Error("signer.ed25519SignedPayload is invalid.");
      }
      const rawKey = StrKey.decodeSignedPayload(
        opts.signer.ed25519SignedPayload
      );
      const signedPayloadXdr = SignerKeyEd25519SignedPayload.fromXdr(rawKey);
      key = SignerKey$1.signerKeyTypeEd25519SignedPayload(signedPayloadXdr);
      setValues += 1;
    }
    if (setValues !== 1) {
      throw new Error(
        "Signer object must contain exactly one of signer.ed25519PublicKey, signer.sha256Hash, signer.preAuthTx, or signer.ed25519SignedPayload."
      );
    }
    if (weight === void 0) {
      throw new Error("signer weight is required.");
    }
    if (key === void 0) {
      throw new Error("signer key is required.");
    }
    signer = new Signer({ key, weight });
  }
  const setOptionsOp = new SetOptionsOp({
    inflationDest,
    clearFlags,
    setFlags,
    masterWeight,
    lowThreshold,
    medThreshold,
    highThreshold,
    homeDomain: homeDomain ?? null,
    signer
  });
  const opAttributes = {
    sourceAccount: null,
    body: OperationBody.setOptions(setOptionsOp)
  };
  setSourceAccount(opAttributes, opts);
  return new Operation(opAttributes);
}

export { setOptions };
//# sourceMappingURL=set_options.js.map
