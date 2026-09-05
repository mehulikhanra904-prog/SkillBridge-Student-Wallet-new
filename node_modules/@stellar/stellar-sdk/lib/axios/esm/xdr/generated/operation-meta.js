import { struct, array, UNBOUNDED_MAX_LENGTH } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { LedgerEntryChange } from './ledger-entry-change.js';

class OperationMeta extends XdrValue {
  changes;
  static schema = struct("OperationMeta", {
    changes: array(LedgerEntryChange.schema, UNBOUNDED_MAX_LENGTH)
  });
  constructor(input) {
    super();
    this.changes = input.changes;
  }
  toXdrObject() {
    return {
      changes: this.changes.map((v) => v.toXdrObject())
    };
  }
  static fromXdrObject(wire) {
    return new OperationMeta({
      changes: wire.changes.map((w) => LedgerEntryChange.fromXdrObject(w))
    });
  }
}

export { OperationMeta };
//# sourceMappingURL=operation-meta.js.map
