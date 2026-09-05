import { struct, option, array, UNBOUNDED_MAX_LENGTH } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { ExtensionPoint } from './extension-point.js';
import { LedgerEntryChange } from './ledger-entry-change.js';
import { OperationMeta } from './operation-meta.js';
import { SorobanTransactionMeta } from './soroban-transaction-meta.js';

class TransactionMetaV3 extends XdrValue {
  ext;
  txChangesBefore;
  operations;
  txChangesAfter;
  sorobanMeta;
  static schema = struct(
    "TransactionMetaV3",
    {
      ext: ExtensionPoint.schema,
      txChangesBefore: array(LedgerEntryChange.schema, UNBOUNDED_MAX_LENGTH),
      operations: array(OperationMeta.schema, UNBOUNDED_MAX_LENGTH),
      txChangesAfter: array(LedgerEntryChange.schema, UNBOUNDED_MAX_LENGTH),
      sorobanMeta: option(SorobanTransactionMeta.schema)
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
      ext: ExtensionPoint.fromXdrObject(wire.ext),
      txChangesBefore: wire.txChangesBefore.map(
        (w) => LedgerEntryChange.fromXdrObject(w)
      ),
      operations: wire.operations.map((w) => OperationMeta.fromXdrObject(w)),
      txChangesAfter: wire.txChangesAfter.map(
        (w) => LedgerEntryChange.fromXdrObject(w)
      ),
      sorobanMeta: wire.sorobanMeta === null ? null : SorobanTransactionMeta.fromXdrObject(wire.sorobanMeta)
    });
  }
}

export { TransactionMetaV3 };
//# sourceMappingURL=transaction-meta-v3.js.map
