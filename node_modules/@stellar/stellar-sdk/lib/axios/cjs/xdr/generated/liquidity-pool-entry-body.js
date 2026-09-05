'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var liquidityPoolType = require('./liquidity-pool-type.js');
var liquidityPoolEntryConstantProduct = require('./liquidity-pool-entry-constant-product.js');

class LiquidityPoolEntryBodyBase extends xdrValue.XdrValue {
  constructor() {
    super();
    if (new.target === LiquidityPoolEntryBodyBase) {
      throw new TypeError(
        "new xdr.LiquidityPoolEntryBody(...) is not supported: XDR unions are built from per-variant factories. Call xdr.LiquidityPoolEntryBody.liquidityPoolConstantProduct(...) (or another arm factory) instead."
      );
    }
  }
  static schema = jsXdr.union(
    "LiquidityPoolEntryBody",
    {
      switchOn: liquidityPoolType.LiquidityPoolType.schema,
      cases: [
        jsXdr.case(
          "liquidityPoolConstantProduct",
          0,
          jsXdr.field("constantProduct", liquidityPoolEntryConstantProduct.LiquidityPoolEntryConstantProduct.schema)
        )
      ]
    }
  );
  static liquidityPoolConstantProduct(constantProduct) {
    return new LiquidityPoolEntryBodyLiquidityPoolConstantProduct(
      constantProduct
    );
  }
  static fromXdrObject(wire) {
    switch (wire.type) {
      case 0:
        return new LiquidityPoolEntryBodyLiquidityPoolConstantProduct(
          liquidityPoolEntryConstantProduct.LiquidityPoolEntryConstantProduct.fromXdrObject(wire.constantProduct)
        );
    }
    throw new jsXdr.XdrError(
      `LiquidityPoolEntryBody: unknown type ${wire.type}`
    );
  }
  /**
   * Type guard narrowing an unknown value to a concrete LiquidityPoolEntryBody variant.
   * Use this instead of `instanceof LiquidityPoolEntryBody`: the exported `LiquidityPoolEntryBody` value
   * is the abstract base, so `instanceof` narrows to the base (not the
   * variant union) and forces a cast. `LiquidityPoolEntryBody.is(x)` narrows to the union.
   */
  static is(value) {
    return value instanceof LiquidityPoolEntryBodyBase;
  }
}
class LiquidityPoolEntryBodyLiquidityPoolConstantProduct extends LiquidityPoolEntryBodyBase {
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
const LiquidityPoolEntryBody = LiquidityPoolEntryBodyBase;

exports.LiquidityPoolEntryBody = LiquidityPoolEntryBody;
exports.LiquidityPoolEntryBodyLiquidityPoolConstantProduct = LiquidityPoolEntryBodyLiquidityPoolConstantProduct;
//# sourceMappingURL=liquidity-pool-entry-body.js.map
