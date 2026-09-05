'use strict';

require('../../xdr/index.js');
var keypair = require('../keypair.js');
var strkey = require('../strkey.js');
var uint8arrayExtras = require('uint8array-extras');
var operations = require('../util/operations.js');
var assetCode = require('../../xdr/generated/asset-code.js');
var assetCode4 = require('../../xdr/generated/asset-code4.js');
var assetCode12 = require('../../xdr/generated/asset-code12.js');
var trustLineFlags = require('../../xdr/generated/trust-line-flags.js');
var allowTrustOp = require('../../xdr/generated/allow-trust-op.js');
var operationBody = require('../../xdr/generated/operation-body.js');
var operation = require('../../xdr/generated/operation.js');

function allowTrust(opts) {
  if (!strkey.StrKey.isValidEd25519PublicKey(opts.trustor)) {
    throw new Error("trustor is invalid");
  }
  const trustor = keypair.Keypair.fromPublicKey(opts.trustor).xdrAccountId();
  let asset;
  if (opts.assetCode.length <= 4) {
    const code = uint8arrayExtras.stringToUint8Array(opts.assetCode.padEnd(4, "\0"));
    asset = assetCode.AssetCode.assetTypeCreditAlphanum4(new assetCode4.AssetCode4(code));
  } else if (opts.assetCode.length <= 12) {
    const code = uint8arrayExtras.stringToUint8Array(opts.assetCode.padEnd(12, "\0"));
    asset = assetCode.AssetCode.assetTypeCreditAlphanum12(new assetCode12.AssetCode12(code));
  } else {
    throw new Error("Asset code must be 12 characters at max.");
  }
  let authorize;
  if (typeof opts.authorize === "boolean") {
    if (opts.authorize) {
      authorize = trustLineFlags.TrustLineFlags.authorizedFlag.value;
    } else {
      authorize = 0;
    }
  } else if (opts.authorize == null) {
    throw new Error("authorize is required");
  } else {
    authorize = opts.authorize;
  }
  const allowTrustOp$1 = new allowTrustOp.AllowTrustOp({
    trustor,
    asset,
    authorize
  });
  const opAttributes = {
    sourceAccount: null,
    body: operationBody.OperationBody.allowTrust(allowTrustOp$1)
  };
  operations.setSourceAccount(opAttributes, opts);
  return new operation.Operation(opAttributes);
}

exports.allowTrust = allowTrust;
//# sourceMappingURL=allow_trust.js.map
