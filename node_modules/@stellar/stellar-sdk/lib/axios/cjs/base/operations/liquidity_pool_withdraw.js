'use strict';

var operations = require('../util/operations.js');
require('../../xdr/index.js');
var uint8arrayExtras = require('uint8array-extras');
var liquidityPoolWithdrawOp = require('../../xdr/generated/liquidity-pool-withdraw-op.js');
var poolId = require('../../xdr/generated/pool-id.js');
var operationBody = require('../../xdr/generated/operation-body.js');
var operation = require('../../xdr/generated/operation.js');

function liquidityPoolWithdraw(opts = {}) {
  if (!opts.liquidityPoolId) {
    throw new TypeError("liquidityPoolId argument is required");
  }
  const liquidityPoolId = new poolId.PoolId(uint8arrayExtras.hexToUint8Array(opts.liquidityPoolId));
  if (!operations.isValidAmount(opts.amount)) {
    throw new TypeError(operations.constructAmountRequirementsError("amount"));
  }
  const amount = operations.toXdrAmount(opts.amount);
  if (!operations.isValidAmount(opts.minAmountA, true)) {
    throw new TypeError(operations.constructAmountRequirementsError("minAmountA"));
  }
  const minAmountA = operations.toXdrAmount(opts.minAmountA);
  if (!operations.isValidAmount(opts.minAmountB, true)) {
    throw new TypeError(operations.constructAmountRequirementsError("minAmountB"));
  }
  const minAmountB = operations.toXdrAmount(opts.minAmountB);
  const liquidityPoolWithdrawOp$1 = new liquidityPoolWithdrawOp.LiquidityPoolWithdrawOp({
    liquidityPoolId,
    amount,
    minAmountA,
    minAmountB
  });
  const opAttributes = {
    sourceAccount: null,
    body: operationBody.OperationBody.liquidityPoolWithdraw(liquidityPoolWithdrawOp$1)
  };
  operations.setSourceAccount(opAttributes, opts);
  return new operation.Operation(opAttributes);
}

exports.liquidityPoolWithdraw = liquidityPoolWithdraw;
//# sourceMappingURL=liquidity_pool_withdraw.js.map
