import { isValidAmount, constructAmountRequirementsError, toXdrAmount, toXdrPrice, setSourceAccount } from '../util/operations.js';
import '../../xdr/index.js';
import { hexToUint8Array } from 'uint8array-extras';
import { LiquidityPoolDepositOp } from '../../xdr/generated/liquidity-pool-deposit-op.js';
import { PoolId } from '../../xdr/generated/pool-id.js';
import { OperationBody } from '../../xdr/generated/operation-body.js';
import { Operation } from '../../xdr/generated/operation.js';

function liquidityPoolDeposit(opts = {}) {
  const { liquidityPoolId, maxAmountA, maxAmountB, minPrice, maxPrice } = opts;
  if (!liquidityPoolId) {
    throw new TypeError("liquidityPoolId argument is required");
  }
  const liquidityPoolIdXdr = new PoolId(hexToUint8Array(liquidityPoolId));
  if (!isValidAmount(maxAmountA, true)) {
    throw new TypeError(constructAmountRequirementsError("maxAmountA"));
  }
  const maxAmountAXdr = toXdrAmount(maxAmountA);
  if (!isValidAmount(maxAmountB, true)) {
    throw new TypeError(constructAmountRequirementsError("maxAmountB"));
  }
  const maxAmountBXdr = toXdrAmount(maxAmountB);
  if (minPrice === void 0) {
    throw new TypeError("minPrice argument is required");
  }
  const minPriceXdr = toXdrPrice(minPrice);
  if (maxPrice === void 0) {
    throw new TypeError("maxPrice argument is required");
  }
  const maxPriceXdr = toXdrPrice(maxPrice);
  const liquidityPoolDepositOp = new LiquidityPoolDepositOp({
    liquidityPoolId: liquidityPoolIdXdr,
    maxAmountA: maxAmountAXdr,
    maxAmountB: maxAmountBXdr,
    minPrice: minPriceXdr,
    maxPrice: maxPriceXdr
  });
  const opAttributes = {
    sourceAccount: null,
    body: OperationBody.liquidityPoolDeposit(liquidityPoolDepositOp)
  };
  setSourceAccount(opAttributes, opts);
  return new Operation(opAttributes);
}

export { liquidityPoolDeposit };
//# sourceMappingURL=liquidity_pool_deposit.js.map
