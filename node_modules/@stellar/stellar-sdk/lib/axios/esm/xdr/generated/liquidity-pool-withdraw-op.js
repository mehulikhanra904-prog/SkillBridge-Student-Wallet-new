import { struct, int64 } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { PoolId } from './pool-id.js';

class LiquidityPoolWithdrawOp extends XdrValue {
  liquidityPoolId;
  amount;
  minAmountA;
  minAmountB;
  static schema = struct(
    "LiquidityPoolWithdrawOp",
    {
      liquidityPoolId: PoolId.schema,
      amount: int64(),
      minAmountA: int64(),
      minAmountB: int64()
    }
  );
  constructor(input) {
    super();
    this.liquidityPoolId = input.liquidityPoolId;
    this.amount = input.amount;
    this.minAmountA = input.minAmountA;
    this.minAmountB = input.minAmountB;
  }
  toXdrObject() {
    return {
      liquidityPoolId: this.liquidityPoolId.toXdrObject(),
      amount: this.amount,
      minAmountA: this.minAmountA,
      minAmountB: this.minAmountB
    };
  }
  static fromXdrObject(wire) {
    return new LiquidityPoolWithdrawOp({
      liquidityPoolId: PoolId.fromXdrObject(wire.liquidityPoolId),
      amount: wire.amount,
      minAmountA: wire.minAmountA,
      minAmountB: wire.minAmountB
    });
  }
}

export { LiquidityPoolWithdrawOp };
//# sourceMappingURL=liquidity-pool-withdraw-op.js.map
