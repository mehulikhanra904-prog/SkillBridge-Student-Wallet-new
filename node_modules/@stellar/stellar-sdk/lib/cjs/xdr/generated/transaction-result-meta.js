'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var transactionResultPair = require('./transaction-result-pair.js');
var ledgerEntryChange = require('./ledger-entry-change.js');
var transactionMeta = require('./transaction-meta.js');

class TransactionResultMeta extends xdrValue.XdrValue {
  result;
  feeProcessing;
  txApplyProcessing;
  static schema = jsXdr.struct(
    "TransactionResultMeta",
    {
      result: transactionResultPair.TransactionResultPair.schema,
      feeProcessing: jsXdr.array(ledgerEntryChange.LedgerEntryChange.schema, jsXdr.UNBOUNDED_MAX_LENGTH),
      txApplyProcessing: transactionMeta.TransactionMeta.schema
    }
  );
  constructor(input) {
    super();
    this.result = input.result;
    this.feeProcessing = input.feeProcessing;
    this.txApplyProcessing = input.txApplyProcessing;
  }
  toXdrObject() {
    return {
      result: this.result.toXdrObject(),
      feeProcessing: this.feeProcessing.map((v) => v.toXdrObject()),
      txApplyProcessing: this.txApplyProcessing.toXdrObject()
    };
  }
  static fromXdrObject(wire) {
    return new TransactionResultMeta({
      result: transactionResultPair.TransactionResultPair.fromXdrObject(wire.result),
      feeProcessing: wire.feeProcessing.map(
        (w) => ledgerEntryChange.LedgerEntryChange.fromXdrObject(w)
      ),
      txApplyProcessing: transactionMeta.TransactionMeta.fromXdrObject(wire.txApplyProcessing)
    });
  }
}

exports.TransactionResultMeta = TransactionResultMeta;
//# sourceMappingURL=transaction-result-meta.js.map
