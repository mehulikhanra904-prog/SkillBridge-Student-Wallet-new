'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var poolId = require('./pool-id.js');
var price = require('./price.js');

class LiquidityPoolDepositOp extends xdrValue.XdrValue {
  liquidityPoolId;
  maxAmountA;
  maxAmountB;
  minPrice;
  maxPrice;
  static schema = jsXdr.struct(
    "LiquidityPoolDepositOp",
    {
      liquidityPoolId: poolId.PoolId.schema,
      maxAmountA: jsXdr.int64(),
      maxAmountB: jsXdr.int64(),
      minPrice: price.Price.schema,
      maxPrice: price.Price.schema
    }
  );
  constructor(input) {
    super();
    this.liquidityPoolId = input.liquidityPoolId;
    this.maxAmountA = input.maxAmountA;
    this.maxAmountB = input.maxAmountB;
    this.minPrice = input.minPrice;
    this.maxPrice = input.maxPrice;
  }
  toXdrObject() {
    return {
      liquidityPoolId: this.liquidityPoolId.toXdrObject(),
      maxAmountA: this.maxAmountA,
      maxAmountB: this.maxAmountB,
      minPrice: this.minPrice.toXdrObject(),
      maxPrice: this.maxPrice.toXdrObject()
    };
  }
  static fromXdrObject(wire) {
    return new LiquidityPoolDepositOp({
      liquidityPoolId: poolId.PoolId.fromXdrObject(wire.liquidityPoolId),
      maxAmountA: wire.maxAmountA,
      maxAmountB: wire.maxAmountB,
      minPrice: price.Price.fromXdrObject(wire.minPrice),
      maxPrice: price.Price.fromXdrObject(wire.maxPrice)
    });
  }
}

exports.LiquidityPoolDepositOp = LiquidityPoolDepositOp;
//# sourceMappingURL=liquidity-pool-deposit-op.js.map
