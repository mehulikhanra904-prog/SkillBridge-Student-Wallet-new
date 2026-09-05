'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var ledgerEntryChange = require('./ledger-entry-change.js');
var operationMeta = require('./operation-meta.js');

class TransactionMetaV2 extends xdrValue.XdrValue {
  txChangesBefore;
  operations;
  txChangesAfter;
  static schema = jsXdr.struct(
    "TransactionMetaV2",
    {
      txChangesBefore: jsXdr.array(ledgerEntryChange.LedgerEntryChange.schema, jsXdr.UNBOUNDED_MAX_LENGTH),
      operations: jsXdr.array(operationMeta.OperationMeta.schema, jsXdr.UNBOUNDED_MAX_LENGTH),
      txChangesAfter: jsXdr.array(ledgerEntryChange.LedgerEntryChange.schema, jsXdr.UNBOUNDED_MAX_LENGTH)
    }
  );
  constructor(input) {
    super();
    this.txChangesBefore = input.txChangesBefore;
    this.operations = input.operations;
    this.txChangesAfter = input.txChangesAfter;
  }
  toXdrObject() {
    return {
      txChangesBefore: this.txChangesBefore.map((v) => v.toXdrObject()),
      operations: this.operations.map((v) => v.toXdrObject()),
      txChangesAfter: this.txChangesAfter.map((v) => v.toXdrObject())
    };
  }
  static fromXdrObject(wire) {
    return new TransactionMetaV2({
      txChangesBefore: wire.txChangesBefore.map(
        (w) => ledgerEntryChange.LedgerEntryChange.fromXdrObject(w)
      ),
      operations: wire.operations.map((w) => operationMeta.OperationMeta.fromXdrObject(w)),
      txChangesAfter: wire.txChangesAfter.map(
        (w) => ledgerEntryChange.LedgerEntryChange.fromXdrObject(w)
      )
    });
  }
}

exports.TransactionMetaV2 = TransactionMetaV2;
//# sourceMappingURL=transaction-meta-v2.js.map
