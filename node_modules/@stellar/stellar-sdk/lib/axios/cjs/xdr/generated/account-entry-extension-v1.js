'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var liabilities = require('./liabilities.js');
var accountEntryExtensionV1Ext = require('./account-entry-extension-v1-ext.js');

class AccountEntryExtensionV1 extends xdrValue.XdrValue {
  liabilities;
  ext;
  static schema = jsXdr.struct(
    "AccountEntryExtensionV1",
    {
      liabilities: liabilities.Liabilities.schema,
      ext: accountEntryExtensionV1Ext.AccountEntryExtensionV1Ext.schema
    }
  );
  constructor(input) {
    super();
    this.liabilities = input.liabilities;
    this.ext = input.ext;
  }
  toXdrObject() {
    return {
      liabilities: this.liabilities.toXdrObject(),
      ext: this.ext.toXdrObject()
    };
  }
  static fromXdrObject(wire) {
    return new AccountEntryExtensionV1({
      liabilities: liabilities.Liabilities.fromXdrObject(wire.liabilities),
      ext: accountEntryExtensionV1Ext.AccountEntryExtensionV1Ext.fromXdrObject(wire.ext)
    });
  }
}

exports.AccountEntryExtensionV1 = AccountEntryExtensionV1;
//# sourceMappingURL=account-entry-extension-v1.js.map
