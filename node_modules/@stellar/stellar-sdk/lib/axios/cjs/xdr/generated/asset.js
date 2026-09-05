'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var assetType = require('./asset-type.js');
var alphaNum4 = require('./alpha-num4.js');
var alphaNum12 = require('./alpha-num12.js');

class AssetBase extends xdrValue.XdrValue {
  constructor() {
    super();
    if (new.target === AssetBase) {
      throw new TypeError(
        "new xdr.Asset(...) is not supported: XDR unions are built from per-variant factories. Call xdr.Asset.assetTypeNative() (or another arm factory) instead."
      );
    }
  }
  static schema = jsXdr.union("Asset", {
    switchOn: assetType.AssetType.schema,
    cases: [
      jsXdr.case("assetTypeNative", 0, jsXdr.void()),
      jsXdr.case(
        "assetTypeCreditAlphanum4",
        1,
        jsXdr.field("alphaNum4", alphaNum4.AlphaNum4.schema)
      ),
      jsXdr.case(
        "assetTypeCreditAlphanum12",
        2,
        jsXdr.field("alphaNum12", alphaNum12.AlphaNum12.schema)
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
          alphaNum4.AlphaNum4.fromXdrObject(wire.alphaNum4)
        );
      case 2:
        return new AssetCreditAlphanum12(
          alphaNum12.AlphaNum12.fromXdrObject(wire.alphaNum12)
        );
    }
    throw new jsXdr.XdrError(
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

exports.Asset = Asset$1;
exports.AssetCreditAlphanum12 = AssetCreditAlphanum12;
exports.AssetCreditAlphanum4 = AssetCreditAlphanum4;
exports.AssetNative = AssetNative;
//# sourceMappingURL=asset.js.map
