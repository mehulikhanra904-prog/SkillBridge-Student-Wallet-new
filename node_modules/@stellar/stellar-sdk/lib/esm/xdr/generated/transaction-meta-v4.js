import { struct, array, UNBOUNDED_MAX_LENGTH, option } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { ExtensionPoint } from './extension-point.js';
import { LedgerEntryChange } from './ledger-entry-change.js';
import { OperationMetaV2 } from './operation-meta-v2.js';
import { SorobanTransactionMetaV2 } from './soroban-transaction-meta-v2.js';
import { TransactionEvent } from './transaction-event.js';
import { DiagnosticEvent } from './diagnostic-event.js';

class TransactionMetaV4 extends XdrValue {
  ext;
  txChangesBefore;
  operations;
  txChangesAfter;
  sorobanMeta;
  events;
  diagnosticEvents;
  static schema = struct(
    "TransactionMetaV4",
    {
      ext: ExtensionPoint.schema,
      txChangesBefore: array(LedgerEntryChange.schema, UNBOUNDED_MAX_LENGTH),
      operations: array(OperationMetaV2.schema, UNBOUNDED_MAX_LENGTH),
      txChangesAfter: array(LedgerEntryChange.schema, UNBOUNDED_MAX_LENGTH),
      sorobanMeta: option(SorobanTransactionMetaV2.schema),
      events: array(TransactionEvent.schema, UNBOUNDED_MAX_LENGTH),
      diagnosticEvents: array(DiagnosticEvent.schema, UNBOUNDED_MAX_LENGTH)
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
      ext: ExtensionPoint.fromXdrObject(wire.ext),
      txChangesBefore: wire.txChangesBefore.map(
        (w) => LedgerEntryChange.fromXdrObject(w)
      ),
      operations: wire.operations.map((w) => OperationMetaV2.fromXdrObject(w)),
      txChangesAfter: wire.txChangesAfter.map(
        (w) => LedgerEntryChange.fromXdrObject(w)
      ),
      sorobanMeta: wire.sorobanMeta === null ? null : SorobanTransactionMetaV2.fromXdrObject(wire.sorobanMeta),
      events: wire.events.map((w) => TransactionEvent.fromXdrObject(w)),
      diagnosticEvents: wire.diagnosticEvents.map(
        (w) => DiagnosticEvent.fromXdrObject(w)
      )
    });
  }
}

export { TransactionMetaV4 };
//# sourceMappingURL=transaction-meta-v4.js.map
