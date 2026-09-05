'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var extensionPoint = require('./extension-point.js');
var ledgerEntryChange = require('./ledger-entry-change.js');
var operationMeta = require('./operation-meta.js');
var sorobanTransactionMeta = require('./soroban-transaction-meta.js');

class TransactionMetaV3 extends xdrValue.XdrValue {
  ext;
  txChangesBefore;
  operations;
  txChangesAfter;
  sorobanMeta;
  static schema = jsXdr.struct(
    "TransactionMetaV3",
    {
      ext: extensionPoint.ExtensionPoint.schema,
      txChangesBefore: jsXdr.array(ledgerEntryChange.LedgerEntryChange.schema, jsXdr.UNBOUNDED_MAX_LENGTH),
      operations: jsXdr.array(operationMeta.OperationMeta.schema, jsXdr.UNBOUNDED_MAX_LENGTH),
      txChangesAfter: jsXdr.array(ledgerEntryChange.LedgerEntryChange.schema, jsXdr.UNBOUNDED_MAX_LENGTH),
      sorobanMeta: jsXdr.option(sorobanTransactionMeta.SorobanTransactionMeta.schema)
    }
  );
  constructor(input) {
    super();
    this.ext = input.ext;
    this.txChangesBefore = input.txChangesBefore;
    this.operations = input.operations;
    this.txChangesAfter = input.txChangesAfter;
    this.sorobanMeta = input.sorobanMeta;
  }
  toXdrObject() {
    return {
      ext: this.ext.toXdrObject(),
      txChangesBefore: this.txChangesBefore.map((v) => v.toXdrObject()),
      operations: this.operations.map((v) => v.toXdrObject()),
      txChangesAfter: this.txChangesAfter.map((v) => v.toXdrObject()),
      sorobanMeta: this.sorobanMeta === null ? null : this.sorobanMeta.toXdrObject()
    };
  }
  static fromXdrObject(wire) {
    return new TransactionMetaV3({
      ext: extensionPoint.ExtensionPoint.fromXdrObject(wire.ext),
      txChangesBefore: wire.txChangesBefore.map(
        (w) => ledgerEntryChange.LedgerEntryChange.fromXdrObject(w)
      ),
      operations: wire.operations.map((w) => operationMeta.OperationMeta.fromXdrObject(w)),
      txChangesAfter: wire.txChangesAfter.map(
        (w) => ledgerEntryChange.LedgerEntryChange.fromXdrObject(w)
      ),
      sorobanMeta: wire.sorobanMeta === null ? null : sorobanTransactionMeta.SorobanTransactionMeta.fromXdrObject(wire.sorobanMeta)
    });
  }
}

exports.TransactionMetaV3 = TransactionMetaV3;
//# sourceMappingURL=transaction-meta-v3.js.map
