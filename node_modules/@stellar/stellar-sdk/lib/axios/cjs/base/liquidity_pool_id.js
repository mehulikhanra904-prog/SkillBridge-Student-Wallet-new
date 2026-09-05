'use strict';

var uint8arrayExtras = require('uint8array-extras');
require('../xdr/index.js');
var poolId = require('../xdr/generated/pool-id.js');
var trustLineAsset = require('../xdr/generated/trust-line-asset.js');

class LiquidityPoolId {
  liquidityPoolId;
  /**
   * @param liquidityPoolId - The ID of the liquidity pool in string 'hex'.
   */
  constructor(liquidityPoolId) {
    if (!liquidityPoolId) {
      throw new Error("liquidityPoolId cannot be empty");
    }
    if (!/^[a-f0-9]{64}$/.test(liquidityPoolId)) {
      throw new Error("Liquidity pool ID is not a valid hash");
    }
    this.liquidityPoolId = liquidityPoolId;
  }
  /**
   * Returns a liquidity pool ID object from its xdr.TrustLineAsset representation.
   * @param tlAssetXdr - The asset XDR object.
   */
  static fromOperation(tlAssetXdr) {
    const assetType = tlAssetXdr.type;
    if (assetType === "assetTypePoolShare") {
      const liquidityPoolId = uint8arrayExtras.uint8ArrayToHex(tlAssetXdr.value.value);
      return new LiquidityPoolId(liquidityPoolId);
    }
    throw new Error(`Invalid asset type: ${assetType}`);
  }
  /**
   * Returns the `xdr.TrustLineAsset` object for this liquidity pool ID.
   *
   * Note: To convert from {@link Asset | `Asset`} to `xdr.TrustLineAsset` please
   * refer to the
   * {@link Asset.toTrustLineXdrObject | `Asset.toTrustLineXdrObject`} method.
   */
  toXdrObject() {
    const xdrPoolId = new poolId.PoolId(this.liquidityPoolId);
    return trustLineAsset.TrustLineAsset.assetTypePoolShare(xdrPoolId);
  }
  /**
   * @deprecated Use {@link toXdrObject} instead.
   * Deprecated in version v17.0.0
   */
  toXDRObject() {
    return this.toXdrObject();
  }
  /**
   * Returns the liquidity pool ID as a hex string.
   */
  getLiquidityPoolId() {
    return String(this.liquidityPoolId);
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
   * Returns true if this liquidity pool ID equals the given one.
   *
   * @param asset - LiquidityPoolId to compare.
   */
  equals(asset) {
    return this.liquidityPoolId === asset.getLiquidityPoolId();
  }
  /**
   * Returns a string representation of this liquidity pool ID.
   */
  toString() {
    return `liquidity_pool:${this.liquidityPoolId}`;
  }
}

exports.LiquidityPoolId = LiquidityPoolId;
//# sourceMappingURL=liquidity_pool_id.js.map
