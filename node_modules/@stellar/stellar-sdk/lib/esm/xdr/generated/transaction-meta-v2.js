import { struct, array, UNBOUNDED_MAX_LENGTH } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { LedgerEntryChange } from './ledger-entry-change.js';
import { OperationMeta } from './operation-meta.js';

class TransactionMetaV2 extends XdrValue {
  txChangesBefore;
  operations;
  txChangesAfter;
  static schema = struct(
    "TransactionMetaV2",
    {
      txChangesBefore: array(LedgerEntryChange.schema, UNBOUNDED_MAX_LENGTH),
      operations: array(OperationMeta.schema, UNBOUNDED_MAX_LENGTH),
      txChangesAfter: array(LedgerEntryChange.schema, UNBOUNDED_MAX_LENGTH)
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
        (w) => LedgerEntryChange.fromXdrObject(w)
      ),
      operations: wire.operations.map((w) => OperationMeta.fromXdrObject(w)),
      txChangesAfter: wire.txChangesAfter.map(
        (w) => LedgerEntryChange.fromXdrObject(w)
      )
    });
  }
}

export { TransactionMetaV2 };
//# sourceMappingURL=transaction-meta-v2.js.map
