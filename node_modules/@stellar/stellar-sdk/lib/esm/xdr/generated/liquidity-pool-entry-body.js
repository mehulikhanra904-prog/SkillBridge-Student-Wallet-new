import { union, case as _case, field, XdrError } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { LiquidityPoolType } from './liquidity-pool-type.js';
import { LiquidityPoolEntryConstantProduct } from './liquidity-pool-entry-constant-product.js';

class LiquidityPoolEntryBodyBase extends XdrValue {
  constructor() {
    super();
    if (new.target === LiquidityPoolEntryBodyBase) {
      throw new TypeError(
        "new xdr.LiquidityPoolEntryBody(...) is not supported: XDR unions are built from per-variant factories. Call xdr.LiquidityPoolEntryBody.liquidityPoolConstantProduct(...) (or another arm factory) instead."
      );
    }
  }
  static schema = union(
    "LiquidityPoolEntryBody",
    {
      switchOn: LiquidityPoolType.schema,
      cases: [
        _case(
          "liquidityPoolConstantProduct",
          0,
          field("constantProduct", LiquidityPoolEntryConstantProduct.schema)
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
          LiquidityPoolEntryConstantProduct.fromXdrObject(wire.constantProduct)
        );
    }
    throw new XdrError(
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

export { LiquidityPoolEntryBody, LiquidityPoolEntryBodyLiquidityPoolConstantProduct };
//# sourceMappingURL=liquidity-pool-entry-body.js.map
