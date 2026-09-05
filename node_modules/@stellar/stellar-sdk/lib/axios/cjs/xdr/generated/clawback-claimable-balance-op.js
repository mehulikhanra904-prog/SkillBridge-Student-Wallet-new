'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var claimableBalanceId = require('./claimable-balance-id.js');

class ClawbackClaimableBalanceOp extends xdrValue.XdrValue {
  balanceId;
  static schema = jsXdr.struct(
    "ClawbackClaimableBalanceOp",
    {
      balanceId: claimableBalanceId.ClaimableBalanceId.schema
    }
  );
  constructor(input) {
    super();
    this.balanceId = input.balanceId;
  }
  toXdrObject() {
    return {
      balanceId: this.balanceId.toXdrObject()
    };
  }
  static fromXdrObject(wire) {
    return new ClawbackClaimableBalanceOp({
      balanceId: claimableBalanceId.ClaimableBalanceId.fromXdrObject(wire.balanceId)
    });
  }
}

exports.ClawbackClaimableBalanceOp = ClawbackClaimableBalanceOp;
//# sourceMappingURL=clawback-claimable-balance-op.js.map
