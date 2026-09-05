'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var claimableBalanceId = require('./claimable-balance-id.js');

class ClaimClaimableBalanceOp extends xdrValue.XdrValue {
  balanceId;
  static schema = jsXdr.struct(
    "ClaimClaimableBalanceOp",
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
    return new ClaimClaimableBalanceOp({
      balanceId: claimableBalanceId.ClaimableBalanceId.fromXdrObject(wire.balanceId)
    });
  }
}

exports.ClaimClaimableBalanceOp = ClaimClaimableBalanceOp;
//# sourceMappingURL=claim-claimable-balance-op.js.map
