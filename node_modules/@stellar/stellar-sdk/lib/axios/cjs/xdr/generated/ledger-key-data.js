'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var xdrString = require('../values/xdr-string.js');
var publicKey = require('./public-key.js');

class LedgerKeyData extends xdrValue.XdrValue {
  accountId;
  dataName;
  static schema = jsXdr.struct("LedgerKeyData", {
    accountId: publicKey.PublicKey.schema,
    dataName: xdrString.xdrString(64)
  });
  constructor(input) {
    super();
    this.accountId = input.accountId;
    this.dataName = input.dataName instanceof xdrString.XdrString ? input.dataName : new xdrString.XdrString(input.dataName);
  }
  toXdrObject() {
    return {
      accountId: this.accountId.toXdrObject(),
      dataName: this.dataName
    };
  }
  static fromXdrObject(wire) {
    return new LedgerKeyData({
      accountId: publicKey.PublicKey.fromXdrObject(wire.accountId),
      dataName: wire.dataName
    });
  }
}

exports.LedgerKeyData = LedgerKeyData;
//# sourceMappingURL=ledger-key-data.js.map
