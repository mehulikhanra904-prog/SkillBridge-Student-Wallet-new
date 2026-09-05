'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var extensionPoint = require('./extension-point.js');
var transactionResultPair = require('./transaction-result-pair.js');
var ledgerEntryChange = require('./ledger-entry-change.js');
var transactionMeta = require('./transaction-meta.js');

class TransactionResultMetaV1 extends xdrValue.XdrValue {
  ext;
  result;
  feeProcessing;
  txApplyProcessing;
  postTxApplyFeeProcessing;
  static schema = jsXdr.struct(
    "TransactionResultMetaV1",
    {
      ext: extensionPoint.ExtensionPoint.schema,
      result: transactionResultPair.TransactionResultPair.schema,
      feeProcessing: jsXdr.array(ledgerEntryChange.LedgerEntryChange.schema, jsXdr.UNBOUNDED_MAX_LENGTH),
      txApplyProcessing: transactionMeta.TransactionMeta.schema,
      postTxApplyFeeProcessing: jsXdr.array(
        ledgerEntryChange.LedgerEntryChange.schema,
        jsXdr.UNBOUNDED_MAX_LENGTH
      )
    }
  );
  constructor(input) {
    super();
    this.ext = input.ext;
    this.result = input.result;
    this.feeProcessing = input.feeProcessing;
    this.txApplyProcessing = input.txApplyProcessing;
    this.postTxApplyFeeProcessing = input.postTxApplyFeeProcessing;
  }
  toXdrObject() {
    return {
      ext: this.ext.toXdrObject(),
      result: this.result.toXdrObject(),
      feeProcessing: this.feeProcessing.map((v) => v.toXdrObject()),
      txApplyProcessing: this.txApplyProcessing.toXdrObject(),
      postTxApplyFeeProcessing: this.postTxApplyFeeProcessing.map(
        (v) => v.toXdrObject()
      )
    };
  }
  static fromXdrObject(wire) {
    return new TransactionResultMetaV1({
      ext: extensionPoint.ExtensionPoint.fromXdrObject(wire.ext),
      result: transactionResultPair.TransactionResultPair.fromXdrObject(wire.result),
      feeProcessing: wire.feeProcessing.map(
        (w) => ledgerEntryChange.LedgerEntryChange.fromXdrObject(w)
      ),
      txApplyProcessing: transactionMeta.TransactionMeta.fromXdrObject(wire.txApplyProcessing),
      postTxApplyFeeProcessing: wire.postTxApplyFeeProcessing.map(
        (w) => ledgerEntryChange.LedgerEntryChange.fromXdrObject(w)
      )
    });
  }
}

exports.TransactionResultMetaV1 = TransactionResultMetaV1;
//# sourceMappingURL=transaction-result-meta-v1.js.map
