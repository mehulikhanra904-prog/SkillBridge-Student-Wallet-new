'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var transactionSet = require('./transaction-set.js');
var transactionHistoryEntryExt = require('./transaction-history-entry-ext.js');

class TransactionHistoryEntry extends xdrValue.XdrValue {
  ledgerSeq;
  txSet;
  ext;
  static schema = jsXdr.struct(
    "TransactionHistoryEntry",
    {
      ledgerSeq: jsXdr.uint32(),
      txSet: transactionSet.TransactionSet.schema,
      ext: transactionHistoryEntryExt.TransactionHistoryEntryExt.schema
    }
  );
  constructor(input) {
    super();
    this.ledgerSeq = input.ledgerSeq;
    this.txSet = input.txSet;
    this.ext = input.ext;
  }
  toXdrObject() {
    return {
      ledgerSeq: this.ledgerSeq,
      txSet: this.txSet.toXdrObject(),
      ext: this.ext.toXdrObject()
    };
  }
  static fromXdrObject(wire) {
    return new TransactionHistoryEntry({
      ledgerSeq: wire.ledgerSeq,
      txSet: transactionSet.TransactionSet.fromXdrObject(wire.txSet),
      ext: transactionHistoryEntryExt.TransactionHistoryEntryExt.fromXdrObject(wire.ext)
    });
  }
}

exports.TransactionHistoryEntry = TransactionHistoryEntry;
//# sourceMappingURL=transaction-history-entry.js.map
