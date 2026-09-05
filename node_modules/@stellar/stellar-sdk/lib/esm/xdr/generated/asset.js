import { union, case as _case, void as _void, field, XdrError } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { AssetType } from './asset-type.js';
import { AlphaNum4 } from './alpha-num4.js';
import { AlphaNum12 } from './alpha-num12.js';

class AssetBase extends XdrValue {
  constructor() {
    super();
    if (new.target === AssetBase) {
      throw new TypeError(
        "new xdr.Asset(...) is not supported: XDR unions are built from per-variant factories. Call xdr.Asset.assetTypeNative() (or another arm factory) instead."
      );
    }
  }
  static schema = union("Asset", {
    switchOn: AssetType.schema,
    cases: [
      _case("assetTypeNative", 0, _void()),
      _case(
        "assetTypeCreditAlphanum4",
        1,
        field("alphaNum4", AlphaNum4.schema)
      ),
      _case(
        "assetTypeCreditAlphanum12",
        2,
        field("alphaNum12", AlphaNum12.schema)
      )
    ]
  });
  static assetTypeNative() {
    return new AssetNative();
  }
  static assetTypeCreditAlphanum4(alphaNum4) {
    return new AssetCreditAlphanum4(alphaNum4);
  }
  static assetTypeCreditAlphanum12(alphaNum12) {
    return new AssetCreditAlphanum12(alphaNum12);
  }
  static fromXdrObject(wire) {
    switch (wire.type) {
      case 0:
        return new AssetNative();
      case 1:
        return new AssetCreditAlphanum4(
          AlphaNum4.fromXdrObject(wire.alphaNum4)
        );
      case 2:
        return new AssetCreditAlphanum12(
          AlphaNum12.fromXdrObject(wire.alphaNum12)
        );
    }
    throw new XdrError(
      `Asset: unknown type ${wire.type}`
    );
  }
  /**
   * Type guard narrowing an unknown value to a concrete Asset variant.
   * Use this instead of `instanceof Asset`: the exported `Asset` value
   * is the abstract base, so `instanceof` narrows to the base (not the
   * variant union) and forces a cast. `Asset.is(x)` narrows to the union.
   */
  static is(value) {
    return value instanceof AssetBase;
  }
}
class AssetNative extends AssetBase {
  type = "assetTypeNative";
  get value() {
    return null;
  }
  toXdrObject() {
    return { type: 0 };
  }
}
class AssetCreditAlphanum4 extends AssetBase {
  type = "assetTypeCreditAlphanum4";
  alphaNum4;
  constructor(alphaNum4) {
    super();
    this.alphaNum4 = alphaNum4;
  }
  get value() {
    return this.alphaNum4;
  }
  toXdrObject() {
    return { type: 1, alphaNum4: this.alphaNum4.toXdrObject() };
  }
}
class AssetCreditAlphanum12 extends AssetBase {
  type = "assetTypeCreditAlphanum12";
  alphaNum12;
  constructor(alphaNum12) {
    super();
    this.alphaNum12 = alphaNum12;
  }
  get value() {
    return this.alphaNum12;
  }
  toXdrObject() {
    return { type: 2, alphaNum12: this.alphaNum12.toXdrObject() };
  }
}
const Asset$1 = AssetBase;

export { Asset$1 as Asset, AssetCreditAlphanum12, AssetCreditAlphanum4, AssetNative };
//# sourceMappingURL=asset.js.map
