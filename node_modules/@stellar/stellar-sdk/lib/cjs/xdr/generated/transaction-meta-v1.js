'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var ledgerEntryChange = require('./ledger-entry-change.js');
var operationMeta = require('./operation-meta.js');

class TransactionMetaV1 extends xdrValue.XdrValue {
  txChanges;
  operations;
  static schema = jsXdr.struct(
    "TransactionMetaV1",
    {
      txChanges: jsXdr.array(ledgerEntryChange.LedgerEntryChange.schema, jsXdr.UNBOUNDED_MAX_LENGTH),
      operations: jsXdr.array(operationMeta.OperationMeta.schema, jsXdr.UNBOUNDED_MAX_LENGTH)
    }
  );
  constructor(input) {
    super();
    this.txChanges = input.txChanges;
    this.operations = input.operations;
  }
  toXdrObject() {
    return {
      txChanges: this.txChanges.map((v) => v.toXdrObject()),
      operations: this.operations.map((v) => v.toXdrObject())
    };
  }
  static fromXdrObject(wire) {
    return new TransactionMetaV1({
      txChanges: wire.txChanges.map((w) => ledgerEntryChange.LedgerEntryChange.fromXdrObject(w)),
      operations: wire.operations.map((w) => operationMeta.OperationMeta.fromXdrObject(w))
    });
  }
}

exports.TransactionMetaV1 = TransactionMetaV1;
//# sourceMappingURL=transaction-meta-v1.js.map
