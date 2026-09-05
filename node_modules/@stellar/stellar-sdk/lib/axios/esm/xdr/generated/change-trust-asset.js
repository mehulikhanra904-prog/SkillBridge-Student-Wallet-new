import { union, case as _case, void as _void, field, XdrError } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { AssetType } from './asset-type.js';
import { AlphaNum4 } from './alpha-num4.js';
import { AlphaNum12 } from './alpha-num12.js';
import { LiquidityPoolParameters } from './liquidity-pool-parameters.js';

class ChangeTrustAssetBase extends XdrValue {
  constructor() {
    super();
    if (new.target === ChangeTrustAssetBase) {
      throw new TypeError(
        "new xdr.ChangeTrustAsset(...) is not supported: XDR unions are built from per-variant factories. Call xdr.ChangeTrustAsset.assetTypeNative() (or another arm factory) instead."
      );
    }
  }
  static schema = union(
    "ChangeTrustAsset",
    {
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
        ),
        _case(
          "assetTypePoolShare",
          3,
          field("liquidityPool", LiquidityPoolParameters.schema)
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
          AlphaNum4.fromXdrObject(wire.alphaNum4)
        );
      case 2:
        return new ChangeTrustAssetCreditAlphanum12(
          AlphaNum12.fromXdrObject(wire.alphaNum12)
        );
      case 3:
        return new ChangeTrustAssetPoolShare(
          LiquidityPoolParameters.fromXdrObject(wire.liquidityPool)
        );
    }
    throw new XdrError(
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

export { ChangeTrustAsset, ChangeTrustAssetCreditAlphanum12, ChangeTrustAssetCreditAlphanum4, ChangeTrustAssetNative, ChangeTrustAssetPoolShare };
//# sourceMappingURL=change-trust-asset.js.map
