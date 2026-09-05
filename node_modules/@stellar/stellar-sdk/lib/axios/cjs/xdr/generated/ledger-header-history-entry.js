'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var hash = require('./hash.js');
var ledgerHeader = require('./ledger-header.js');
var ledgerHeaderHistoryEntryExt = require('./ledger-header-history-entry-ext.js');

class LedgerHeaderHistoryEntry extends xdrValue.XdrValue {
  hash;
  header;
  ext;
  static schema = jsXdr.struct(
    "LedgerHeaderHistoryEntry",
    {
      hash: hash.Hash.schema,
      header: ledgerHeader.LedgerHeader.schema,
      ext: ledgerHeaderHistoryEntryExt.LedgerHeaderHistoryEntryExt.schema
    }
  );
  constructor(input) {
    super();
    this.hash = input.hash instanceof hash.Hash ? input.hash : new hash.Hash(input.hash);
    this.header = input.header;
    this.ext = input.ext;
  }
  toXdrObject() {
    return {
      hash: this.hash.toXdrObject(),
      header: this.header.toXdrObject(),
      ext: this.ext.toXdrObject()
    };
  }
  static fromXdrObject(wire) {
    return new LedgerHeaderHistoryEntry({
      hash: hash.Hash.fromXdrObject(wire.hash),
      header: ledgerHeader.LedgerHeader.fromXdrObject(wire.header),
      ext: ledgerHeaderHistoryEntryExt.LedgerHeaderHistoryEntryExt.fromXdrObject(wire.ext)
    });
  }
}

exports.LedgerHeaderHistoryEntry = LedgerHeaderHistoryEntry;
//# sourceMappingURL=ledger-header-history-entry.js.map
