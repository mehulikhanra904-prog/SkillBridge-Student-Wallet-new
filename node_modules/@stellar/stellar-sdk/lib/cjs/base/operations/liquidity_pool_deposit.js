'use strict';

var operations = require('../util/operations.js');
require('../../xdr/index.js');
var uint8arrayExtras = require('uint8array-extras');
var liquidityPoolDepositOp = require('../../xdr/generated/liquidity-pool-deposit-op.js');
var poolId = require('../../xdr/generated/pool-id.js');
var operationBody = require('../../xdr/generated/operation-body.js');
var operation = require('../../xdr/generated/operation.js');

function liquidityPoolDeposit(opts = {}) {
  const { liquidityPoolId, maxAmountA, maxAmountB, minPrice, maxPrice } = opts;
  if (!liquidityPoolId) {
    throw new TypeError("liquidityPoolId argument is required");
  }
  const liquidityPoolIdXdr = new poolId.PoolId(uint8arrayExtras.hexToUint8Array(liquidityPoolId));
  if (!operations.isValidAmount(maxAmountA, true)) {
    throw new TypeError(operations.constructAmountRequirementsError("maxAmountA"));
  }
  const maxAmountAXdr = operations.toXdrAmount(maxAmountA);
  if (!operations.isValidAmount(maxAmountB, true)) {
    throw new TypeError(operations.constructAmountRequirementsError("maxAmountB"));
  }
  const maxAmountBXdr = operations.toXdrAmount(maxAmountB);
  if (minPrice === void 0) {
    throw new TypeError("minPrice argument is required");
  }
  const minPriceXdr = operations.toXdrPrice(minPrice);
  if (maxPrice === void 0) {
    throw new TypeError("maxPrice argument is required");
  }
  const maxPriceXdr = operations.toXdrPrice(maxPrice);
  const liquidityPoolDepositOp$1 = new liquidityPoolDepositOp.LiquidityPoolDepositOp({
    liquidityPoolId: liquidityPoolIdXdr,
    maxAmountA: maxAmountAXdr,
    maxAmountB: maxAmountBXdr,
    minPrice: minPriceXdr,
    maxPrice: maxPriceXdr
  });
  const opAttributes = {
    sourceAccount: null,
    body: operationBody.OperationBody.liquidityPoolDeposit(liquidityPoolDepositOp$1)
  };
  operations.setSourceAccount(opAttributes, opts);
  return new operation.Operation(opAttributes);
}

exports.liquidityPoolDeposit = liquidityPoolDeposit;
//# sourceMappingURL=liquidity_pool_deposit.js.map
