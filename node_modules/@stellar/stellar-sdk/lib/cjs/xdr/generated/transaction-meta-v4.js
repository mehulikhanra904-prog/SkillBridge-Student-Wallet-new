'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var extensionPoint = require('./extension-point.js');
var ledgerEntryChange = require('./ledger-entry-change.js');
var operationMetaV2 = require('./operation-meta-v2.js');
var sorobanTransactionMetaV2 = require('./soroban-transaction-meta-v2.js');
var transactionEvent = require('./transaction-event.js');
var diagnosticEvent = require('./diagnostic-event.js');

class TransactionMetaV4 extends xdrValue.XdrValue {
  ext;
  txChangesBefore;
  operations;
  txChangesAfter;
  sorobanMeta;
  events;
  diagnosticEvents;
  static schema = jsXdr.struct(
    "TransactionMetaV4",
    {
      ext: extensionPoint.ExtensionPoint.schema,
      txChangesBefore: jsXdr.array(ledgerEntryChange.LedgerEntryChange.schema, jsXdr.UNBOUNDED_MAX_LENGTH),
      operations: jsXdr.array(operationMetaV2.OperationMetaV2.schema, jsXdr.UNBOUNDED_MAX_LENGTH),
      txChangesAfter: jsXdr.array(ledgerEntryChange.LedgerEntryChange.schema, jsXdr.UNBOUNDED_MAX_LENGTH),
      sorobanMeta: jsXdr.option(sorobanTransactionMetaV2.SorobanTransactionMetaV2.schema),
      events: jsXdr.array(transactionEvent.TransactionEvent.schema, jsXdr.UNBOUNDED_MAX_LENGTH),
      diagnosticEvents: jsXdr.array(diagnosticEvent.DiagnosticEvent.schema, jsXdr.UNBOUNDED_MAX_LENGTH)
    }
  );
  constructor(input) {
    super();
    this.ext = input.ext;
    this.txChangesBefore = input.txChangesBefore;
    this.operations = input.operations;
    this.txChangesAfter = input.txChangesAfter;
    this.sorobanMeta = input.sorobanMeta;
    this.events = input.events;
    this.diagnosticEvents = input.diagnosticEvents;
  }
  toXdrObject() {
    return {
      ext: this.ext.toXdrObject(),
      txChangesBefore: this.txChangesBefore.map((v) => v.toXdrObject()),
      operations: this.operations.map((v) => v.toXdrObject()),
      txChangesAfter: this.txChangesAfter.map((v) => v.toXdrObject()),
      sorobanMeta: this.sorobanMeta === null ? null : this.sorobanMeta.toXdrObject(),
      events: this.events.map((v) => v.toXdrObject()),
      diagnosticEvents: this.diagnosticEvents.map((v) => v.toXdrObject())
    };
  }
  static fromXdrObject(wire) {
    return new TransactionMetaV4({
      ext: extensionPoint.ExtensionPoint.fromXdrObject(wire.ext),
      txChangesBefore: wire.txChangesBefore.map(
        (w) => ledgerEntryChange.LedgerEntryChange.fromXdrObject(w)
      ),
      operations: wire.operations.map((w) => operationMetaV2.OperationMetaV2.fromXdrObject(w)),
      txChangesAfter: wire.txChangesAfter.map(
        (w) => ledgerEntryChange.LedgerEntryChange.fromXdrObject(w)
      ),
      sorobanMeta: wire.sorobanMeta === null ? null : sorobanTransactionMetaV2.SorobanTransactionMetaV2.fromXdrObject(wire.sorobanMeta),
      events: wire.events.map((w) => transactionEvent.TransactionEvent.fromXdrObject(w)),
      diagnosticEvents: wire.diagnosticEvents.map(
        (w) => diagnosticEvent.DiagnosticEvent.fromXdrObject(w)
      )
    });
  }
}

exports.TransactionMetaV4 = TransactionMetaV4;
//# sourceMappingURL=transaction-meta-v4.js.map
