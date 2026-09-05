'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var liquidityPoolConstantProductParameters = require('./liquidity-pool-constant-product-parameters.js');

class LiquidityPoolEntryConstantProduct extends xdrValue.XdrValue {
  params;
  reserveA;
  reserveB;
  totalPoolShares;
  poolSharesTrustLineCount;
  static schema = jsXdr.struct("LiquidityPoolEntryConstantProduct", {
    params: liquidityPoolConstantProductParameters.LiquidityPoolConstantProductParameters.schema,
    reserveA: jsXdr.int64(),
    reserveB: jsXdr.int64(),
    totalPoolShares: jsXdr.int64(),
    poolSharesTrustLineCount: jsXdr.int64()
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
      params: liquidityPoolConstantProductParameters.LiquidityPoolConstantProductParameters.fromXdrObject(wire.params),
      reserveA: wire.reserveA,
      reserveB: wire.reserveB,
      totalPoolShares: wire.totalPoolShares,
      poolSharesTrustLineCount: wire.poolSharesTrustLineCount
    });
  }
}

exports.LiquidityPoolEntryConstantProduct = LiquidityPoolEntryConstantProduct;
//# sourceMappingURL=liquidity-pool-entry-constant-product.js.map
