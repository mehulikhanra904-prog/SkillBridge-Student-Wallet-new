'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var asset = require('./asset.js');

class LiquidityPoolConstantProductParameters extends xdrValue.XdrValue {
  assetA;
  assetB;
  fee;
  static schema = jsXdr.struct("LiquidityPoolConstantProductParameters", {
    assetA: asset.Asset.schema,
    assetB: asset.Asset.schema,
    fee: jsXdr.int32()
  });
  constructor(input) {
    super();
    this.assetA = input.assetA;
    this.assetB = input.assetB;
    this.fee = input.fee;
  }
  toXdrObject() {
    return {
      assetA: this.assetA.toXdrObject(),
      assetB: this.assetB.toXdrObject(),
      fee: this.fee
    };
  }
  static fromXdrObject(wire) {
    return new LiquidityPoolConstantProductParameters({
      assetA: asset.Asset.fromXdrObject(wire.assetA),
      assetB: asset.Asset.fromXdrObject(wire.assetB),
      fee: wire.fee
    });
  }
}

exports.LiquidityPoolConstantProductParameters = LiquidityPoolConstantProductParameters;
//# sourceMappingURL=liquidity-pool-constant-product-parameters.js.map
