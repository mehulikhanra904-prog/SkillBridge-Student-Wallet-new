'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var ledgerEntryData = require('./ledger-entry-data.js');
var ledgerEntryExt = require('./ledger-entry-ext.js');

class LedgerEntry extends xdrValue.XdrValue {
  lastModifiedLedgerSeq;
  data;
  ext;
  static schema = jsXdr.struct("LedgerEntry", {
    lastModifiedLedgerSeq: jsXdr.uint32(),
    data: ledgerEntryData.LedgerEntryData.schema,
    ext: ledgerEntryExt.LedgerEntryExt.schema
  });
  constructor(input) {
    super();
    this.lastModifiedLedgerSeq = input.lastModifiedLedgerSeq;
    this.data = input.data;
    this.ext = input.ext;
  }
  toXdrObject() {
    return {
      lastModifiedLedgerSeq: this.lastModifiedLedgerSeq,
      data: this.data.toXdrObject(),
      ext: this.ext.toXdrObject()
    };
  }
  static fromXdrObject(wire) {
    return new LedgerEntry({
      lastModifiedLedgerSeq: wire.lastModifiedLedgerSeq,
      data: ledgerEntryData.LedgerEntryData.fromXdrObject(wire.data),
      ext: ledgerEntryExt.LedgerEntryExt.fromXdrObject(wire.ext)
    });
  }
}

exports.LedgerEntry = LedgerEntry;
//# sourceMappingURL=ledger-entry.js.map
