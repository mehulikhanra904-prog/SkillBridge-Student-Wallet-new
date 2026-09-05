'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var poolId = require('./pool-id.js');

class LiquidityPoolWithdrawOp extends xdrValue.XdrValue {
  liquidityPoolId;
  amount;
  minAmountA;
  minAmountB;
  static schema = jsXdr.struct(
    "LiquidityPoolWithdrawOp",
    {
      liquidityPoolId: poolId.PoolId.schema,
      amount: jsXdr.int64(),
      minAmountA: jsXdr.int64(),
      minAmountB: jsXdr.int64()
    }
  );
  constructor(input) {
    super();
    this.liquidityPoolId = input.liquidityPoolId;
    this.amount = input.amount;
    this.minAmountA = input.minAmountA;
    this.minAmountB = input.minAmountB;
  }
  toXdrObject() {
    return {
      liquidityPoolId: this.liquidityPoolId.toXdrObject(),
      amount: this.amount,
      minAmountA: this.minAmountA,
      minAmountB: this.minAmountB
    };
  }
  static fromXdrObject(wire) {
    return new LiquidityPoolWithdrawOp({
      liquidityPoolId: poolId.PoolId.fromXdrObject(wire.liquidityPoolId),
      amount: wire.amount,
      minAmountA: wire.minAmountA,
      minAmountB: wire.minAmountB
    });
  }
}

exports.LiquidityPoolWithdrawOp = LiquidityPoolWithdrawOp;
//# sourceMappingURL=liquidity-pool-withdraw-op.js.map
