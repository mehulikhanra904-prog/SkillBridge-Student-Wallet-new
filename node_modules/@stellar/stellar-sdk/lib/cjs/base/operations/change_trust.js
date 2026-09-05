'use strict';

var index = require('../../xdr/index.js');
var asset = require('../asset.js');
var liquidity_pool_asset = require('../liquidity_pool_asset.js');
var operations = require('../util/operations.js');
var changeTrustOp = require('../../xdr/generated/change-trust-op.js');
var operationBody = require('../../xdr/generated/operation-body.js');
var operation = require('../../xdr/generated/operation.js');

const MAX_INT64 = "9223372036854775807";
function changeTrust(opts) {
  const asset$1 = opts.asset ?? opts.line;
  let line;
  if (asset$1 instanceof asset.Asset) {
    line = asset$1.toChangeTrustXdrObject();
  } else if (asset$1 instanceof liquidity_pool_asset.LiquidityPoolAsset) {
    line = asset$1.toXdrObject();
  } else {
    throw new TypeError("asset must be Asset or LiquidityPoolAsset");
  }
  if (opts.limit !== void 0 && !operations.isValidAmount(opts.limit, true)) {
    throw new TypeError(operations.constructAmountRequirementsError("limit"));
  }
  const limit = opts.limit ? operations.toXdrAmount(opts.limit) : index.Int64.fromString(MAX_INT64);
  const changeTrustOp$1 = new changeTrustOp.ChangeTrustOp({ line, limit });
  const opAttributes = {
    sourceAccount: null,
    body: operationBody.OperationBody.changeTrust(changeTrustOp$1)
  };
  operations.setSourceAccount(opAttributes, opts);
  return new operation.Operation(opAttributes);
}

exports.changeTrust = changeTrust;
//# sourceMappingURL=change_trust.js.map
