'use strict';

var jsXdr = require('@stellar/js-xdr');
var enumValue = require('../values/enum-value.js');

class LiquidityPoolType extends enumValue.EnumValue {
  static liquidityPoolConstantProduct = new LiquidityPoolType(
    "liquidityPoolConstantProduct",
    0
  );
  static schema = jsXdr.enumType("LiquidityPoolType", {
    liquidityPoolConstantProduct: 0
  });
  static fromValue(value) {
    return enumValue.enumFromValue(
      "LiquidityPoolType",
      LiquidityPoolType.schema,
      LiquidityPoolType,
      value
    );
  }
  static fromName(name) {
    return enumValue.enumFromName("LiquidityPoolType", LiquidityPoolType, name);
  }
  static fromXdrObject(wire) {
    return LiquidityPoolType.fromValue(wire);
  }
}

exports.LiquidityPoolType = LiquidityPoolType;
//# sourceMappingURL=liquidity-pool-type.js.map
