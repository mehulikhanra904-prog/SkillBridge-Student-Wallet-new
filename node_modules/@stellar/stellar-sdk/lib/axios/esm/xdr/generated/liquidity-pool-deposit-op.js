import { struct, int64 } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { PoolId } from './pool-id.js';
import { Price } from './price.js';

class LiquidityPoolDepositOp extends XdrValue {
  liquidityPoolId;
  maxAmountA;
  maxAmountB;
  minPrice;
  maxPrice;
  static schema = struct(
    "LiquidityPoolDepositOp",
    {
      liquidityPoolId: PoolId.schema,
      maxAmountA: int64(),
      maxAmountB: int64(),
      minPrice: Price.schema,
      maxPrice: Price.schema
    }
  );
  constructor(input) {
    super();
    this.liquidityPoolId = input.liquidityPoolId;
    this.maxAmountA = input.maxAmountA;
    this.maxAmountB = input.maxAmountB;
    this.minPrice = input.minPrice;
    this.maxPrice = input.maxPrice;
  }
  toXdrObject() {
    return {
      liquidityPoolId: this.liquidityPoolId.toXdrObject(),
      maxAmountA: this.maxAmountA,
      maxAmountB: this.maxAmountB,
      minPrice: this.minPrice.toXdrObject(),
      maxPrice: this.maxPrice.toXdrObject()
    };
  }
  static fromXdrObject(wire) {
    return new LiquidityPoolDepositOp({
      liquidityPoolId: PoolId.fromXdrObject(wire.liquidityPoolId),
      maxAmountA: wire.maxAmountA,
      maxAmountB: wire.maxAmountB,
      minPrice: Price.fromXdrObject(wire.minPrice),
      maxPrice: Price.fromXdrObject(wire.maxPrice)
    });
  }
}

export { LiquidityPoolDepositOp };
//# sourceMappingURL=liquidity-pool-deposit-op.js.map
