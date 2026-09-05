import { struct, int32 } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { Asset as Asset$1 } from './asset.js';

class LiquidityPoolConstantProductParameters extends XdrValue {
  assetA;
  assetB;
  fee;
  static schema = struct("LiquidityPoolConstantProductParameters", {
    assetA: Asset$1.schema,
    assetB: Asset$1.schema,
    fee: int32()
  });
  constructor(input) {
    super();
    this.assetA = input.assetA;
    this.assetB = input.assetB;
    this.fee = input.fee;
  }
  toXdrObject() {
    return {
      assetA: this.assetA.toXdrObject(),
      assetB: this.assetB.toXdrObject(),
      fee: this.fee
    };
  }
  static fromXdrObject(wire) {
    return new LiquidityPoolConstantProductParameters({
      assetA: Asset$1.fromXdrObject(wire.assetA),
      assetB: Asset$1.fromXdrObject(wire.assetB),
      fee: wire.fee
    });
  }
}

export { LiquidityPoolConstantProductParameters };
//# sourceMappingURL=liquidity-pool-constant-product-parameters.js.map
