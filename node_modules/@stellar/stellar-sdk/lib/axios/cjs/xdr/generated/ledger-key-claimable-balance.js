'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var claimableBalanceId = require('./claimable-balance-id.js');

class LedgerKeyClaimableBalance extends xdrValue.XdrValue {
  balanceId;
  static schema = jsXdr.struct(
    "LedgerKeyClaimableBalance",
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
    return new LedgerKeyClaimableBalance({
      balanceId: claimableBalanceId.ClaimableBalanceId.fromXdrObject(wire.balanceId)
    });
  }
}

exports.LedgerKeyClaimableBalance = LedgerKeyClaimableBalance;
//# sourceMappingURL=ledger-key-claimable-balance.js.map
