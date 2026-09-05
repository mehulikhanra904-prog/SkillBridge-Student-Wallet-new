import { struct, array, UNBOUNDED_MAX_LENGTH } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { LedgerEntryChange } from './ledger-entry-change.js';
import { OperationMeta } from './operation-meta.js';

class TransactionMetaV1 extends XdrValue {
  txChanges;
  operations;
  static schema = struct(
    "TransactionMetaV1",
    {
      txChanges: array(LedgerEntryChange.schema, UNBOUNDED_MAX_LENGTH),
      operations: array(OperationMeta.schema, UNBOUNDED_MAX_LENGTH)
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
      txChanges: wire.txChanges.map((w) => LedgerEntryChange.fromXdrObject(w)),
      operations: wire.operations.map((w) => OperationMeta.fromXdrObject(w))
    });
  }
}

export { TransactionMetaV1 };
//# sourceMappingURL=transaction-meta-v1.js.map
