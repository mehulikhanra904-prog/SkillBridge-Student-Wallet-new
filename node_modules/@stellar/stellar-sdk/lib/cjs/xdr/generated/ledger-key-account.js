'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var publicKey = require('./public-key.js');

class LedgerKeyAccount extends xdrValue.XdrValue {
  accountId;
  static schema = jsXdr.struct(
    "LedgerKeyAccount",
    {
      accountId: publicKey.PublicKey.schema
    }
  );
  constructor(input) {
    super();
    this.accountId = input.accountId;
  }
  toXdrObject() {
    return {
      accountId: this.accountId.toXdrObject()
    };
  }
  static fromXdrObject(wire) {
    return new LedgerKeyAccount({
      accountId: publicKey.PublicKey.fromXdrObject(wire.accountId)
    });
  }
}

exports.LedgerKeyAccount = LedgerKeyAccount;
//# sourceMappingURL=ledger-key-account.js.map
