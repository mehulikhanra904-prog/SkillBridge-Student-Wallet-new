'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var poolId = require('./pool-id.js');

class LedgerKeyLiquidityPool extends xdrValue.XdrValue {
  liquidityPoolId;
  static schema = jsXdr.struct(
    "LedgerKeyLiquidityPool",
    {
      liquidityPoolId: poolId.PoolId.schema
    }
  );
  constructor(input) {
    super();
    this.liquidityPoolId = input.liquidityPoolId;
  }
  toXdrObject() {
    return {
      liquidityPoolId: this.liquidityPoolId.toXdrObject()
    };
  }
  static fromXdrObject(wire) {
    return new LedgerKeyLiquidityPool({
      liquidityPoolId: poolId.PoolId.fromXdrObject(wire.liquidityPoolId)
    });
  }
}

exports.LedgerKeyLiquidityPool = LedgerKeyLiquidityPool;
//# sourceMappingURL=ledger-key-liquidity-pool.js.map
