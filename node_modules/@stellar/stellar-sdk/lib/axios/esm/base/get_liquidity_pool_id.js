import '../xdr/index.js';
import { Asset } from './asset.js';
import { hash } from './hashing.js';
import { LiquidityPoolParameters } from '../xdr/generated/liquidity-pool-parameters.js';
import { LiquidityPoolConstantProductParameters } from '../xdr/generated/liquidity-pool-constant-product-parameters.js';

const LiquidityPoolFeeV18 = 30;
function getLiquidityPoolId(liquidityPoolType, liquidityPoolParameters) {
  if (liquidityPoolType !== "constant_product") {
    throw new Error("liquidityPoolType is invalid");
  }
  const { assetA, assetB, fee } = liquidityPoolParameters ?? {};
  if (!assetA || !(assetA instanceof Asset)) {
    throw new Error("assetA is invalid");
  }
  if (!assetB || !(assetB instanceof Asset)) {
    throw new Error("assetB is invalid");
  }
  if (!fee || fee !== LiquidityPoolFeeV18) {
    throw new Error("fee is invalid");
  }
  if (Asset.compare(assetA, assetB) !== -1) {
    throw new Error("Assets are not in lexicographic order");
  }
  const payload = LiquidityPoolParameters.liquidityPoolConstantProduct(
    new LiquidityPoolConstantProductParameters({
      assetA: assetA.toXdrObject(),
      assetB: assetB.toXdrObject(),
      fee
    })
  ).toXdr();
  return hash(payload);
}

export { LiquidityPoolFeeV18, getLiquidityPoolId };
//# sourceMappingURL=get_liquidity_pool_id.js.map
