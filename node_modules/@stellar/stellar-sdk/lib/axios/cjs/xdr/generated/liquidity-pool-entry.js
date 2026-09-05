'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var poolId = require('./pool-id.js');
var liquidityPoolEntryBody = require('./liquidity-pool-entry-body.js');

class LiquidityPoolEntry extends xdrValue.XdrValue {
  liquidityPoolId;
  body;
  static schema = jsXdr.struct(
    "LiquidityPoolEntry",
    {
      liquidityPoolId: poolId.PoolId.schema,
      body: liquidityPoolEntryBody.LiquidityPoolEntryBody.schema
    }
  );
  constructor(input) {
    super();
    this.liquidityPoolId = input.liquidityPoolId;
    this.body = input.body;
  }
  toXdrObject() {
    return {
      liquidityPoolId: this.liquidityPoolId.toXdrObject(),
      body: this.body.toXdrObject()
    };
  }
  static fromXdrObject(wire) {
    return new LiquidityPoolEntry({
      liquidityPoolId: poolId.PoolId.fromXdrObject(wire.liquidityPoolId),
      body: liquidityPoolEntryBody.LiquidityPoolEntryBody.fromXdrObject(wire.body)
    });
  }
}

exports.LiquidityPoolEntry = LiquidityPoolEntry;
//# sourceMappingURL=liquidity-pool-entry.js.map
