'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var assetType = require('./asset-type.js');
var alphaNum4 = require('./alpha-num4.js');
var alphaNum12 = require('./alpha-num12.js');
var poolId = require('./pool-id.js');

class TrustLineAssetBase extends xdrValue.XdrValue {
  constructor() {
    super();
    if (new.target === TrustLineAssetBase) {
      throw new TypeError(
        "new xdr.TrustLineAsset(...) is not supported: XDR unions are built from per-variant factories. Call xdr.TrustLineAsset.assetTypeNative() (or another arm factory) instead."
      );
    }
  }
  static schema = jsXdr.union(
    "TrustLineAsset",
    {
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
        ),
        jsXdr.case("assetTypePoolShare", 3, jsXdr.field("liquidityPoolId", poolId.PoolId.schema))
      ]
    }
  );
  static assetTypeNative() {
    return new TrustLineAssetNative();
  }
  static assetTypeCreditAlphanum4(alphaNum4) {
    return new TrustLineAssetCreditAlphanum4(alphaNum4);
  }
  static assetTypeCreditAlphanum12(alphaNum12) {
    return new TrustLineAssetCreditAlphanum12(alphaNum12);
  }
  static assetTypePoolShare(liquidityPoolId) {
    return new TrustLineAssetPoolShare(liquidityPoolId);
  }
  static fromXdrObject(wire) {
    switch (wire.type) {
      case 0:
        return new TrustLineAssetNative();
      case 1:
        return new TrustLineAssetCreditAlphanum4(
          alphaNum4.AlphaNum4.fromXdrObject(wire.alphaNum4)
        );
      case 2:
        return new TrustLineAssetCreditAlphanum12(
          alphaNum12.AlphaNum12.fromXdrObject(wire.alphaNum12)
        );
      case 3:
        return new TrustLineAssetPoolShare(
          poolId.PoolId.fromXdrObject(wire.liquidityPoolId)
        );
    }
    throw new jsXdr.XdrError(
      `TrustLineAsset: unknown type ${wire.type}`
    );
  }
  /**
   * Type guard narrowing an unknown value to a concrete TrustLineAsset variant.
   * Use this instead of `instanceof TrustLineAsset`: the exported `TrustLineAsset` value
   * is the abstract base, so `instanceof` narrows to the base (not the
   * variant union) and forces a cast. `TrustLineAsset.is(x)` narrows to the union.
   */
  static is(value) {
    return value instanceof TrustLineAssetBase;
  }
}
class TrustLineAssetNative extends TrustLineAssetBase {
  type = "assetTypeNative";
  get value() {
    return null;
  }
  toXdrObject() {
    return { type: 0 };
  }
}
class TrustLineAssetCreditAlphanum4 extends TrustLineAssetBase {
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
class TrustLineAssetCreditAlphanum12 extends TrustLineAssetBase {
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
class TrustLineAssetPoolShare extends TrustLineAssetBase {
  type = "assetTypePoolShare";
  liquidityPoolId;
  constructor(liquidityPoolId) {
    super();
    this.liquidityPoolId = liquidityPoolId;
  }
  get value() {
    return this.liquidityPoolId;
  }
  toXdrObject() {
    return { type: 3, liquidityPoolId: this.liquidityPoolId.toXdrObject() };
  }
}
const TrustLineAsset = TrustLineAssetBase;

exports.TrustLineAsset = TrustLineAsset;
exports.TrustLineAssetCreditAlphanum12 = TrustLineAssetCreditAlphanum12;
exports.TrustLineAssetCreditAlphanum4 = TrustLineAssetCreditAlphanum4;
exports.TrustLineAssetNative = TrustLineAssetNative;
exports.TrustLineAssetPoolShare = TrustLineAssetPoolShare;
//# sourceMappingURL=trust-line-asset.js.map
