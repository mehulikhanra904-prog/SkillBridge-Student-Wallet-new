'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var assetType = require('./asset-type.js');
var alphaNum4 = require('./alpha-num4.js');
var alphaNum12 = require('./alpha-num12.js');
var liquidityPoolParameters = require('./liquidity-pool-parameters.js');

class ChangeTrustAssetBase extends xdrValue.XdrValue {
  constructor() {
    super();
    if (new.target === ChangeTrustAssetBase) {
      throw new TypeError(
        "new xdr.ChangeTrustAsset(...) is not supported: XDR unions are built from per-variant factories. Call xdr.ChangeTrustAsset.assetTypeNative() (or another arm factory) instead."
      );
    }
  }
  static schema = jsXdr.union(
    "ChangeTrustAsset",
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
        jsXdr.case(
          "assetTypePoolShare",
          3,
          jsXdr.field("liquidityPool", liquidityPoolParameters.LiquidityPoolParameters.schema)
        )
      ]
    }
  );
  static assetTypeNative() {
    return new ChangeTrustAssetNative();
  }
  static assetTypeCreditAlphanum4(alphaNum4) {
    return new ChangeTrustAssetCreditAlphanum4(alphaNum4);
  }
  static assetTypeCreditAlphanum12(alphaNum12) {
    return new ChangeTrustAssetCreditAlphanum12(alphaNum12);
  }
  static assetTypePoolShare(liquidityPool) {
    return new ChangeTrustAssetPoolShare(liquidityPool);
  }
  static fromXdrObject(wire) {
    switch (wire.type) {
      case 0:
        return new ChangeTrustAssetNative();
      case 1:
        return new ChangeTrustAssetCreditAlphanum4(
          alphaNum4.AlphaNum4.fromXdrObject(wire.alphaNum4)
        );
      case 2:
        return new ChangeTrustAssetCreditAlphanum12(
          alphaNum12.AlphaNum12.fromXdrObject(wire.alphaNum12)
        );
      case 3:
        return new ChangeTrustAssetPoolShare(
          liquidityPoolParameters.LiquidityPoolParameters.fromXdrObject(wire.liquidityPool)
        );
    }
    throw new jsXdr.XdrError(
      `ChangeTrustAsset: unknown type ${wire.type}`
    );
  }
  /**
   * Type guard narrowing an unknown value to a concrete ChangeTrustAsset variant.
   * Use this instead of `instanceof ChangeTrustAsset`: the exported `ChangeTrustAsset` value
   * is the abstract base, so `instanceof` narrows to the base (not the
   * variant union) and forces a cast. `ChangeTrustAsset.is(x)` narrows to the union.
   */
  static is(value) {
    return value instanceof ChangeTrustAssetBase;
  }
}
class ChangeTrustAssetNative extends ChangeTrustAssetBase {
  type = "assetTypeNative";
  get value() {
    return null;
  }
  toXdrObject() {
    return { type: 0 };
  }
}
class ChangeTrustAssetCreditAlphanum4 extends ChangeTrustAssetBase {
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
class ChangeTrustAssetCreditAlphanum12 extends ChangeTrustAssetBase {
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
class ChangeTrustAssetPoolShare extends ChangeTrustAssetBase {
  type = "assetTypePoolShare";
  liquidityPool;
  constructor(liquidityPool) {
    super();
    this.liquidityPool = liquidityPool;
  }
  get value() {
    return this.liquidityPool;
  }
  toXdrObject() {
    return { type: 3, liquidityPool: this.liquidityPool.toXdrObject() };
  }
}
const ChangeTrustAsset = ChangeTrustAssetBase;

exports.ChangeTrustAsset = ChangeTrustAsset;
exports.ChangeTrustAssetCreditAlphanum12 = ChangeTrustAssetCreditAlphanum12;
exports.ChangeTrustAssetCreditAlphanum4 = ChangeTrustAssetCreditAlphanum4;
exports.ChangeTrustAssetNative = ChangeTrustAssetNative;
exports.ChangeTrustAssetPoolShare = ChangeTrustAssetPoolShare;
//# sourceMappingURL=change-trust-asset.js.map
