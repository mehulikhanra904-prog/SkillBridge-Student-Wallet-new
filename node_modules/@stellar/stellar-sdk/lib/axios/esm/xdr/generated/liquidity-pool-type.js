import { enumType } from '@stellar/js-xdr';
import { EnumValue, enumFromValue, enumFromName } from '../values/enum-value.js';

class LiquidityPoolType extends EnumValue {
  static liquidityPoolConstantProduct = new LiquidityPoolType(
    "liquidityPoolConstantProduct",
    0
  );
  static schema = enumType("LiquidityPoolType", {
    liquidityPoolConstantProduct: 0
  });
  static fromValue(value) {
    return enumFromValue(
      "LiquidityPoolType",
      LiquidityPoolType.schema,
      LiquidityPoolType,
      value
    );
  }
  static fromName(name) {
    return enumFromName("LiquidityPoolType", LiquidityPoolType, name);
  }
  static fromXdrObject(wire) {
    return LiquidityPoolType.fromValue(wire);
  }
}

export { LiquidityPoolType };
//# sourceMappingURL=liquidity-pool-type.js.map
