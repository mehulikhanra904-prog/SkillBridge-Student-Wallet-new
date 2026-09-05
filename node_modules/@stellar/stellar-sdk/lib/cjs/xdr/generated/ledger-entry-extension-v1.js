'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var publicKey = require('./public-key.js');
var ledgerEntryExtensionV1Ext = require('./ledger-entry-extension-v1-ext.js');

class LedgerEntryExtensionV1 extends xdrValue.XdrValue {
  sponsoringId;
  ext;
  static schema = jsXdr.struct(
    "LedgerEntryExtensionV1",
    {
      sponsoringId: jsXdr.option(publicKey.PublicKey.schema),
      ext: ledgerEntryExtensionV1Ext.LedgerEntryExtensionV1Ext.schema
    }
  );
  constructor(input) {
    super();
    this.sponsoringId = input.sponsoringId;
    this.ext = input.ext;
  }
  toXdrObject() {
    return {
      sponsoringId: this.sponsoringId === null ? null : this.sponsoringId.toXdrObject(),
      ext: this.ext.toXdrObject()
    };
  }
  static fromXdrObject(wire) {
    return new LedgerEntryExtensionV1({
      sponsoringId: wire.sponsoringId === null ? null : publicKey.PublicKey.fromXdrObject(wire.sponsoringId),
      ext: ledgerEntryExtensionV1Ext.LedgerEntryExtensionV1Ext.fromXdrObject(wire.ext)
    });
  }
}

exports.LedgerEntryExtensionV1 = LedgerEntryExtensionV1;
//# sourceMappingURL=ledger-entry-extension-v1.js.map
