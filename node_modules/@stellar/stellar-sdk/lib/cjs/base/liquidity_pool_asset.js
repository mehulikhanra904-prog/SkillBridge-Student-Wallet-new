'use strict';

var uint8arrayExtras = require('uint8array-extras');
require('../xdr/index.js');
var asset = require('./asset.js');
var get_liquidity_pool_id = require('./get_liquidity_pool_id.js');
var liquidityPoolConstantProductParameters = require('../xdr/generated/liquidity-pool-constant-product-parameters.js');
var liquidityPoolParameters = require('../xdr/generated/liquidity-pool-parameters.js');
var changeTrustAsset = require('../xdr/generated/change-trust-asset.js');

class LiquidityPoolAsset {
  assetA;
  assetB;
  fee;
  /**
   * @param assetA - The first asset in the Pool, it must respect the rule `assetA < assetB`. See {@link Asset.compare} for more details on how assets are sorted.
   * @param assetB - The second asset in the Pool, it must respect the rule `assetA < assetB`. See {@link Asset.compare} for more details on how assets are sorted.
   * @param fee - The liquidity pool fee. For now the only fee supported is `30`.
   */
  constructor(assetA, assetB, fee) {
    if (!assetA || !(assetA instanceof asset.Asset)) {
      throw new Error("assetA is invalid");
    }
    if (!assetB || !(assetB instanceof asset.Asset)) {
      throw new Error("assetB is invalid");
    }
    if (asset.Asset.compare(assetA, assetB) !== -1) {
      throw new Error("Assets are not in lexicographic order");
    }
    if (!fee || fee !== get_liquidity_pool_id.LiquidityPoolFeeV18) {
      throw new Error("fee is invalid");
    }
    this.assetA = assetA;
    this.assetB = assetB;
    this.fee = fee;
  }
  /**
   * Returns a liquidity pool asset object from its XDR ChangeTrustAsset object
   * representation.
   *
   * @param ctAssetXdr - The asset XDR object.
   */
  static fromOperation(ctAssetXdr) {
    const assetType = ctAssetXdr.type;
    if (assetType === "assetTypePoolShare") {
      const liquidityPoolParameters = ctAssetXdr.value.value;
      return new this(
        asset.Asset.fromOperation(liquidityPoolParameters.assetA),
        asset.Asset.fromOperation(liquidityPoolParameters.assetB),
        liquidityPoolParameters.fee
      );
    }
    throw new Error(`Invalid asset type: ${assetType}`);
  }
  /**
   * Returns the `xdr.ChangeTrustAsset` object for this liquidity pool asset.
   *
   * Note: To convert from an {@link Asset | `Asset`} to `xdr.ChangeTrustAsset`
   * please refer to the
   * {@link Asset.toChangeTrustXdrObject | `Asset.toChangeTrustXdrObject`} method.
   */
  toXdrObject() {
    const lpConstantProductParamsXdr = new liquidityPoolConstantProductParameters.LiquidityPoolConstantProductParameters({
      assetA: this.assetA.toXdrObject(),
      assetB: this.assetB.toXdrObject(),
      fee: this.fee
    });
    const lpParamsXdr = liquidityPoolParameters.LiquidityPoolParameters.liquidityPoolConstantProduct(
      lpConstantProductParamsXdr
    );
    return changeTrustAsset.ChangeTrustAsset.assetTypePoolShare(lpParamsXdr);
  }
  /**
   * @deprecated Use {@link toXdrObject} instead.
   * Deprecated in version v17.0.0
   */
  toXDRObject() {
    return this.toXdrObject();
  }
  /**
   * Returns liquidity pool parameters.
   */
  getLiquidityPoolParameters() {
    return {
      ...this,
      assetA: this.assetA,
      assetB: this.assetB,
      fee: this.fee
    };
  }
  /**
   * Returns the asset type, always `"liquidity_pool_shares"`.
   *
   * @see [Assets concept](https://developers.stellar.org/docs/glossary/assets/)
   */
  getAssetType() {
    return "liquidity_pool_shares";
  }
  /**
   * Returns true if this liquidity pool asset equals the given one.
   *
   * @param other - the LiquidityPoolAsset to compare
   */
  equals(other) {
    return this.assetA.equals(other.assetA) && this.assetB.equals(other.assetB) && this.fee === other.fee;
  }
  /** Returns a string representation in `liquidity_pool:<hex pool id>` format. */
  toString() {
    const poolId = uint8arrayExtras.uint8ArrayToHex(
      get_liquidity_pool_id.getLiquidityPoolId("constant_product", this.getLiquidityPoolParameters())
    );
    return `liquidity_pool:${poolId}`;
  }
}

exports.LiquidityPoolAsset = LiquidityPoolAsset;
//# sourceMappingURL=liquidity_pool_asset.js.map
