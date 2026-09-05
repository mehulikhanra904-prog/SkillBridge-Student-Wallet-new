import { struct, int64 } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { LiquidityPoolConstantProductParameters } from './liquidity-pool-constant-product-parameters.js';

class LiquidityPoolEntryConstantProduct extends XdrValue {
  params;
  reserveA;
  reserveB;
  totalPoolShares;
  poolSharesTrustLineCount;
  static schema = struct("LiquidityPoolEntryConstantProduct", {
    params: LiquidityPoolConstantProductParameters.schema,
    reserveA: int64(),
    reserveB: int64(),
    totalPoolShares: int64(),
    poolSharesTrustLineCount: int64()
  });
  constructor(input) {
    super();
    this.params = input.params;
    this.reserveA = input.reserveA;
    this.reserveB = input.reserveB;
    this.totalPoolShares = input.totalPoolShares;
    this.poolSharesTrustLineCount = input.poolSharesTrustLineCount;
  }
  toXdrObject() {
    return {
      params: this.params.toXdrObject(),
      reserveA: this.reserveA,
      reserveB: this.reserveB,
      totalPoolShares: this.totalPoolShares,
      poolSharesTrustLineCount: this.poolSharesTrustLineCount
    };
  }
  static fromXdrObject(wire) {
    return new LiquidityPoolEntryConstantProduct({
      params: LiquidityPoolConstantProductParameters.fromXdrObject(wire.params),
      reserveA: wire.reserveA,
      reserveB: wire.reserveB,
      totalPoolShares: wire.totalPoolShares,
      poolSharesTrustLineCount: wire.poolSharesTrustLineCount
    });
  }
}

export { LiquidityPoolEntryConstantProduct };
//# sourceMappingURL=liquidity-pool-entry-constant-product.js.map
