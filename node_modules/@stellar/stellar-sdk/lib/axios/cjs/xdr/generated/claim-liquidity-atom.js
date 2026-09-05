'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var poolId = require('./pool-id.js');
var asset = require('./asset.js');

class ClaimLiquidityAtom extends xdrValue.XdrValue {
  liquidityPoolId;
  assetSold;
  amountSold;
  assetBought;
  amountBought;
  static schema = jsXdr.struct(
    "ClaimLiquidityAtom",
    {
      liquidityPoolId: poolId.PoolId.schema,
      assetSold: asset.Asset.schema,
      amountSold: jsXdr.int64(),
      assetBought: asset.Asset.schema,
      amountBought: jsXdr.int64()
    }
  );
  constructor(input) {
    super();
    this.liquidityPoolId = input.liquidityPoolId;
    this.assetSold = input.assetSold;
    this.amountSold = input.amountSold;
    this.assetBought = input.assetBought;
    this.amountBought = input.amountBought;
  }
  toXdrObject() {
    return {
      liquidityPoolId: this.liquidityPoolId.toXdrObject(),
      assetSold: this.assetSold.toXdrObject(),
      amountSold: this.amountSold,
      assetBought: this.assetBought.toXdrObject(),
      amountBought: this.amountBought
    };
  }
  static fromXdrObject(wire) {
    return new ClaimLiquidityAtom({
      liquidityPoolId: poolId.PoolId.fromXdrObject(wire.liquidityPoolId),
      assetSold: asset.Asset.fromXdrObject(wire.assetSold),
      amountSold: wire.amountSold,
      assetBought: asset.Asset.fromXdrObject(wire.assetBought),
      amountBought: wire.amountBought
    });
  }
}

exports.ClaimLiquidityAtom = ClaimLiquidityAtom;
//# sourceMappingURL=claim-liquidity-atom.js.map
