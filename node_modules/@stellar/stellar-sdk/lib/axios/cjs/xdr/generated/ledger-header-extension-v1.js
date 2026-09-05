'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var ledgerHeaderExtensionV1Ext = require('./ledger-header-extension-v1-ext.js');

class LedgerHeaderExtensionV1 extends xdrValue.XdrValue {
  flags;
  ext;
  static schema = jsXdr.struct(
    "LedgerHeaderExtensionV1",
    {
      flags: jsXdr.uint32(),
      ext: ledgerHeaderExtensionV1Ext.LedgerHeaderExtensionV1Ext.schema
    }
  );
  constructor(input) {
    super();
    this.flags = input.flags;
    this.ext = input.ext;
  }
  toXdrObject() {
    return {
      flags: this.flags,
      ext: this.ext.toXdrObject()
    };
  }
  static fromXdrObject(wire) {
    return new LedgerHeaderExtensionV1({
      flags: wire.flags,
      ext: ledgerHeaderExtensionV1Ext.LedgerHeaderExtensionV1Ext.fromXdrObject(wire.ext)
    });
  }
}

exports.LedgerHeaderExtensionV1 = LedgerHeaderExtensionV1;
//# sourceMappingURL=ledger-header-extension-v1.js.map
