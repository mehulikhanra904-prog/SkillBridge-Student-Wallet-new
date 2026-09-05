import { union, case as _case, field, XdrError } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { AssetType } from './asset-type.js';
import { AssetCode4 } from './asset-code4.js';
import { AssetCode12 } from './asset-code12.js';

class AssetCodeBase extends XdrValue {
  constructor() {
    super();
    if (new.target === AssetCodeBase) {
      throw new TypeError(
        "new xdr.AssetCode(...) is not supported: XDR unions are built from per-variant factories. Call xdr.AssetCode.assetTypeCreditAlphanum4(...) (or another arm factory) instead."
      );
    }
  }
  static schema = union("AssetCode", {
    switchOn: AssetType.schema,
    cases: [
      _case(
        "assetTypeCreditAlphanum4",
        1,
        field("assetCode4", AssetCode4.schema)
      ),
      _case(
        "assetTypeCreditAlphanum12",
        2,
        field("assetCode12", AssetCode12.schema)
      )
    ]
  });
  static assetTypeCreditAlphanum4(assetCode4) {
    return new AssetCodeCreditAlphanum4(assetCode4);
  }
  static assetTypeCreditAlphanum12(assetCode12) {
    return new AssetCodeCreditAlphanum12(assetCode12);
  }
  static fromXdrObject(wire) {
    switch (wire.type) {
      case 1:
        return new AssetCodeCreditAlphanum4(
          AssetCode4.fromXdrObject(wire.assetCode4)
        );
      case 2:
        return new AssetCodeCreditAlphanum12(
          AssetCode12.fromXdrObject(wire.assetCode12)
        );
    }
    throw new XdrError(
      `AssetCode: unknown type ${wire.type}`
    );
  }
  /**
   * Type guard narrowing an unknown value to a concrete AssetCode variant.
   * Use this instead of `instanceof AssetCode`: the exported `AssetCode` value
   * is the abstract base, so `instanceof` narrows to the base (not the
   * variant union) and forces a cast. `AssetCode.is(x)` narrows to the union.
   */
  static is(value) {
    return value instanceof AssetCodeBase;
  }
}
class AssetCodeCreditAlphanum4 extends AssetCodeBase {
  type = "assetTypeCreditAlphanum4";
  assetCode4;
  constructor(assetCode4) {
    super();
    this.assetCode4 = assetCode4 instanceof AssetCode4 ? assetCode4 : new AssetCode4(assetCode4);
  }
  get value() {
    return this.assetCode4;
  }
  toXdrObject() {
    return { type: 1, assetCode4: this.assetCode4.toXdrObject() };
  }
}
class AssetCodeCreditAlphanum12 extends AssetCodeBase {
  type = "assetTypeCreditAlphanum12";
  assetCode12;
  constructor(assetCode12) {
    super();
    this.assetCode12 = assetCode12 instanceof AssetCode12 ? assetCode12 : new AssetCode12(assetCode12);
  }
  get value() {
    return this.assetCode12;
  }
  toXdrObject() {
    return { type: 2, assetCode12: this.assetCode12.toXdrObject() };
  }
}
const AssetCode = AssetCodeBase;

export { AssetCode, AssetCodeCreditAlphanum12, AssetCodeCreditAlphanum4 };
//# sourceMappingURL=asset-code.js.map
