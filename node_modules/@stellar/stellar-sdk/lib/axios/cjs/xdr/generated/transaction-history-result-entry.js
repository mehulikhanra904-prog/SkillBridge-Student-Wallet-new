'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var transactionResultSet = require('./transaction-result-set.js');
var transactionHistoryResultEntryExt = require('./transaction-history-result-entry-ext.js');

class TransactionHistoryResultEntry extends xdrValue.XdrValue {
  ledgerSeq;
  txResultSet;
  ext;
  static schema = jsXdr.struct(
    "TransactionHistoryResultEntry",
    {
      ledgerSeq: jsXdr.uint32(),
      txResultSet: transactionResultSet.TransactionResultSet.schema,
      ext: transactionHistoryResultEntryExt.TransactionHistoryResultEntryExt.schema
    }
  );
  constructor(input) {
    super();
    this.ledgerSeq = input.ledgerSeq;
    this.txResultSet = input.txResultSet;
    this.ext = input.ext;
  }
  toXdrObject() {
    return {
      ledgerSeq: this.ledgerSeq,
      txResultSet: this.txResultSet.toXdrObject(),
      ext: this.ext.toXdrObject()
    };
  }
  static fromXdrObject(wire) {
    return new TransactionHistoryResultEntry({
      ledgerSeq: wire.ledgerSeq,
      txResultSet: transactionResultSet.TransactionResultSet.fromXdrObject(wire.txResultSet),
      ext: transactionHistoryResultEntryExt.TransactionHistoryResultEntryExt.fromXdrObject(wire.ext)
    });
  }
}

exports.TransactionHistoryResultEntry = TransactionHistoryResultEntry;
//# sourceMappingURL=transaction-history-result-entry.js.map
