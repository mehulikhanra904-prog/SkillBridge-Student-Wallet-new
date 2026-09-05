'use strict';

require('../xdr/index.js');
var asset = require('./asset.js');
var hashing = require('./hashing.js');
var liquidityPoolParameters = require('../xdr/generated/liquidity-pool-parameters.js');
var liquidityPoolConstantProductParameters = require('../xdr/generated/liquidity-pool-constant-product-parameters.js');

const LiquidityPoolFeeV18 = 30;
function getLiquidityPoolId(liquidityPoolType, liquidityPoolParameters$1) {
  if (liquidityPoolType !== "constant_product") {
    throw new Error("liquidityPoolType is invalid");
  }
  const { assetA, assetB, fee } = liquidityPoolParameters$1 ?? {};
  if (!assetA || !(assetA instanceof asset.Asset)) {
    throw new Error("assetA is invalid");
  }
  if (!assetB || !(assetB instanceof asset.Asset)) {
    throw new Error("assetB is invalid");
  }
  if (!fee || fee !== LiquidityPoolFeeV18) {
    throw new Error("fee is invalid");
  }
  if (asset.Asset.compare(assetA, assetB) !== -1) {
    throw new Error("Assets are not in lexicographic order");
  }
  const payload = liquidityPoolParameters.LiquidityPoolParameters.liquidityPoolConstantProduct(
    new liquidityPoolConstantProductParameters.LiquidityPoolConstantProductParameters({
      assetA: assetA.toXdrObject(),
      assetB: assetB.toXdrObject(),
      fee
    })
  ).toXdr();
  return hashing.hash(payload);
}

exports.LiquidityPoolFeeV18 = LiquidityPoolFeeV18;
exports.getLiquidityPoolId = getLiquidityPoolId;
//# sourceMappingURL=get_liquidity_pool_id.js.map
