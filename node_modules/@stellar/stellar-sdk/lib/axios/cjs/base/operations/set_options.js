'use strict';

require('../../xdr/index.js');
var uint8arrayExtras = require('uint8array-extras');
var keypair = require('../keypair.js');
var strkey = require('../strkey.js');
var operations = require('../util/operations.js');
var signerKey = require('../../xdr/generated/signer-key.js');
var signerKeyEd25519SignedPayload = require('../../xdr/generated/signer-key-ed25519-signed-payload.js');
var signer = require('../../xdr/generated/signer.js');
var setOptionsOp = require('../../xdr/generated/set-options-op.js');
var operationBody = require('../../xdr/generated/operation-body.js');
var operation = require('../../xdr/generated/operation.js');

function weightCheckFunction(value, name) {
  if (value >= 0 && value <= 255) {
    return true;
  }
  throw new Error(`${name} value must be between 0 and 255`);
}
function setOptions(opts) {
  let inflationDest = null;
  if (opts.inflationDest) {
    if (!strkey.StrKey.isValidEd25519PublicKey(opts.inflationDest)) {
      throw new Error("inflationDest is invalid");
    }
    inflationDest = keypair.Keypair.fromPublicKey(opts.inflationDest).xdrAccountId();
  }
  const clearFlags = operations.checkUnsignedIntValue("clearFlags", opts.clearFlags) ?? null;
  const setFlags = operations.checkUnsignedIntValue("setFlags", opts.setFlags) ?? null;
  const masterWeight = operations.checkUnsignedIntValue(
    "masterWeight",
    opts.masterWeight,
    weightCheckFunction
  ) ?? null;
  const lowThreshold = operations.checkUnsignedIntValue(
    "lowThreshold",
    opts.lowThreshold,
    weightCheckFunction
  ) ?? null;
  const medThreshold = operations.checkUnsignedIntValue(
    "medThreshold",
    opts.medThreshold,
    weightCheckFunction
  ) ?? null;
  const highThreshold = operations.checkUnsignedIntValue(
    "highThreshold",
    opts.highThreshold,
    weightCheckFunction
  ) ?? null;
  if (opts.homeDomain !== void 0 && typeof opts.homeDomain !== "string") {
    throw new TypeError("homeDomain argument must be of type String");
  }
  const homeDomain = opts.homeDomain;
  let signer$1 = null;
  if (opts.signer) {
    const weight = operations.checkUnsignedIntValue(
      "signer.weight",
      opts.signer.weight,
      weightCheckFunction
    );
    let key;
    let setValues = 0;
    if (opts.signer.ed25519PublicKey) {
      if (!strkey.StrKey.isValidEd25519PublicKey(opts.signer.ed25519PublicKey)) {
        throw new Error("signer.ed25519PublicKey is invalid.");
      }
      const rawKey = strkey.StrKey.decodeEd25519PublicKey(
        opts.signer.ed25519PublicKey
      );
      key = signerKey.SignerKey.signerKeyTypeEd25519(rawKey);
      setValues += 1;
    }
    if (opts.signer.preAuthTx) {
      let preAuthTx;
      if (typeof opts.signer.preAuthTx === "string") {
        preAuthTx = uint8arrayExtras.hexToUint8Array(opts.signer.preAuthTx);
      } else {
        preAuthTx = opts.signer.preAuthTx;
      }
      if (!(preAuthTx instanceof Uint8Array && preAuthTx.length === 32)) {
        throw new Error("signer.preAuthTx must be 32 bytes Uint8Array.");
      }
      key = signerKey.SignerKey.signerKeyTypePreAuthTx(preAuthTx);
      setValues += 1;
    }
    if (opts.signer.sha256Hash) {
      let sha256Hash;
      if (typeof opts.signer.sha256Hash === "string") {
        sha256Hash = uint8arrayExtras.hexToUint8Array(opts.signer.sha256Hash);
      } else {
        sha256Hash = opts.signer.sha256Hash;
      }
      if (!(sha256Hash instanceof Uint8Array && sha256Hash.length === 32)) {
        throw new Error("signer.sha256Hash must be 32 bytes Uint8Array.");
      }
      key = signerKey.SignerKey.signerKeyTypeHashX(sha256Hash);
      setValues += 1;
    }
    if (opts.signer.ed25519SignedPayload) {
      if (!strkey.StrKey.isValidSignedPayload(opts.signer.ed25519SignedPayload)) {
        throw new Error("signer.ed25519SignedPayload is invalid.");
      }
      const rawKey = strkey.StrKey.decodeSignedPayload(
        opts.signer.ed25519SignedPayload
      );
      const signedPayloadXdr = signerKeyEd25519SignedPayload.SignerKeyEd25519SignedPayload.fromXdr(rawKey);
      key = signerKey.SignerKey.signerKeyTypeEd25519SignedPayload(signedPayloadXdr);
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
    signer$1 = new signer.Signer({ key, weight });
  }
  const setOptionsOp$1 = new setOptionsOp.SetOptionsOp({
    inflationDest,
    clearFlags,
    setFlags,
    masterWeight,
    lowThreshold,
    medThreshold,
    highThreshold,
    homeDomain: homeDomain ?? null,
    signer: signer$1
  });
  const opAttributes = {
    sourceAccount: null,
    body: operationBody.OperationBody.setOptions(setOptionsOp$1)
  };
  operations.setSourceAccount(opAttributes, opts);
  return new operation.Operation(opAttributes);
}

exports.setOptions = setOptions;
//# sourceMappingURL=set_options.js.map
