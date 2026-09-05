'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var liquidityPoolType = require('./liquidity-pool-type.js');
var liquidityPoolConstantProductParameters = require('./liquidity-pool-constant-product-parameters.js');

class LiquidityPoolParametersBase extends xdrValue.XdrValue {
  constructor() {
    super();
    if (new.target === LiquidityPoolParametersBase) {
      throw new TypeError(
        "new xdr.LiquidityPoolParameters(...) is not supported: XDR unions are built from per-variant factories. Call xdr.LiquidityPoolParameters.liquidityPoolConstantProduct(...) (or another arm factory) instead."
      );
    }
  }
  static schema = jsXdr.union(
    "LiquidityPoolParameters",
    {
      switchOn: liquidityPoolType.LiquidityPoolType.schema,
      cases: [
        jsXdr.case(
          "liquidityPoolConstantProduct",
          0,
          jsXdr.field(
            "constantProduct",
            liquidityPoolConstantProductParameters.LiquidityPoolConstantProductParameters.schema
          )
        )
      ]
    }
  );
  static liquidityPoolConstantProduct(constantProduct) {
    return new LiquidityPoolParametersLiquidityPoolConstantProduct(
      constantProduct
    );
  }
  static fromXdrObject(wire) {
    switch (wire.type) {
      case 0:
        return new LiquidityPoolParametersLiquidityPoolConstantProduct(
          liquidityPoolConstantProductParameters.LiquidityPoolConstantProductParameters.fromXdrObject(
            wire.constantProduct
          )
        );
    }
    throw new jsXdr.XdrError(
      `LiquidityPoolParameters: unknown type ${wire.type}`
    );
  }
  /**
   * Type guard narrowing an unknown value to a concrete LiquidityPoolParameters variant.
   * Use this instead of `instanceof LiquidityPoolParameters`: the exported `LiquidityPoolParameters` value
   * is the abstract base, so `instanceof` narrows to the base (not the
   * variant union) and forces a cast. `LiquidityPoolParameters.is(x)` narrows to the union.
   */
  static is(value) {
    return value instanceof LiquidityPoolParametersBase;
  }
}
class LiquidityPoolParametersLiquidityPoolConstantProduct extends LiquidityPoolParametersBase {
  type = "liquidityPoolConstantProduct";
  constantProduct;
  constructor(constantProduct) {
    super();
    this.constantProduct = constantProduct;
  }
  get value() {
    return this.constantProduct;
  }
  toXdrObject() {
    return { type: 0, constantProduct: this.constantProduct.toXdrObject() };
  }
}
const LiquidityPoolParameters = LiquidityPoolParametersBase;

exports.LiquidityPoolParameters = LiquidityPoolParameters;
exports.LiquidityPoolParametersLiquidityPoolConstantProduct = LiquidityPoolParametersLiquidityPoolConstantProduct;
//# sourceMappingURL=liquidity-pool-parameters.js.map
