import { isValidAmount, constructAmountRequirementsError, toXdrAmount, setSourceAccount } from '../util/operations.js';
import '../../xdr/index.js';
import { hexToUint8Array } from 'uint8array-extras';
import { LiquidityPoolWithdrawOp } from '../../xdr/generated/liquidity-pool-withdraw-op.js';
import { PoolId } from '../../xdr/generated/pool-id.js';
import { OperationBody } from '../../xdr/generated/operation-body.js';
import { Operation } from '../../xdr/generated/operation.js';

function liquidityPoolWithdraw(opts = {}) {
  if (!opts.liquidityPoolId) {
    throw new TypeError("liquidityPoolId argument is required");
  }
  const liquidityPoolId = new PoolId(hexToUint8Array(opts.liquidityPoolId));
  if (!isValidAmount(opts.amount)) {
    throw new TypeError(constructAmountRequirementsError("amount"));
  }
  const amount = toXdrAmount(opts.amount);
  if (!isValidAmount(opts.minAmountA, true)) {
    throw new TypeError(constructAmountRequirementsError("minAmountA"));
  }
  const minAmountA = toXdrAmount(opts.minAmountA);
  if (!isValidAmount(opts.minAmountB, true)) {
    throw new TypeError(constructAmountRequirementsError("minAmountB"));
  }
  const minAmountB = toXdrAmount(opts.minAmountB);
  const liquidityPoolWithdrawOp = new LiquidityPoolWithdrawOp({
    liquidityPoolId,
    amount,
    minAmountA,
    minAmountB
  });
  const opAttributes = {
    sourceAccount: null,
    body: OperationBody.liquidityPoolWithdraw(liquidityPoolWithdrawOp)
  };
  setSourceAccount(opAttributes, opts);
  return new Operation(opAttributes);
}

export { liquidityPoolWithdraw };
//# sourceMappingURL=liquidity_pool_withdraw.js.map
