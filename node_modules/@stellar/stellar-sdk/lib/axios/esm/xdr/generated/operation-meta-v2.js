import { struct, array, UNBOUNDED_MAX_LENGTH } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { ExtensionPoint } from './extension-point.js';
import { LedgerEntryChange } from './ledger-entry-change.js';
import { ContractEvent } from './contract-event.js';

class OperationMetaV2 extends XdrValue {
  ext;
  changes;
  events;
  static schema = struct(
    "OperationMetaV2",
    {
      ext: ExtensionPoint.schema,
      changes: array(LedgerEntryChange.schema, UNBOUNDED_MAX_LENGTH),
      events: array(ContractEvent.schema, UNBOUNDED_MAX_LENGTH)
    }
  );
  constructor(input) {
    super();
    this.ext = input.ext;
    this.changes = input.changes;
    this.events = input.events;
  }
  toXdrObject() {
    return {
      ext: this.ext.toXdrObject(),
      changes: this.changes.map((v) => v.toXdrObject()),
      events: this.events.map((v) => v.toXdrObject())
    };
  }
  static fromXdrObject(wire) {
    return new OperationMetaV2({
      ext: ExtensionPoint.fromXdrObject(wire.ext),
      changes: wire.changes.map((w) => LedgerEntryChange.fromXdrObject(w)),
      events: wire.events.map((w) => ContractEvent.fromXdrObject(w))
    });
  }
}

export { OperationMetaV2 };
//# sourceMappingURL=operation-meta-v2.js.map
