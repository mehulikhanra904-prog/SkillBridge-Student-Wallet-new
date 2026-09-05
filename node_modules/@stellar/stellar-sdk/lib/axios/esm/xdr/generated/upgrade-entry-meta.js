import { struct, array, UNBOUNDED_MAX_LENGTH } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { LedgerUpgrade } from './ledger-upgrade.js';
import { LedgerEntryChange } from './ledger-entry-change.js';

class UpgradeEntryMeta extends XdrValue {
  upgrade;
  changes;
  static schema = struct(
    "UpgradeEntryMeta",
    {
      upgrade: LedgerUpgrade.schema,
      changes: array(LedgerEntryChange.schema, UNBOUNDED_MAX_LENGTH)
    }
  );
  constructor(input) {
    super();
    this.upgrade = input.upgrade;
    this.changes = input.changes;
  }
  toXdrObject() {
    return {
      upgrade: this.upgrade.toXdrObject(),
      changes: this.changes.map((v) => v.toXdrObject())
    };
  }
  static fromXdrObject(wire) {
    return new UpgradeEntryMeta({
      upgrade: LedgerUpgrade.fromXdrObject(wire.upgrade),
      changes: wire.changes.map((w) => LedgerEntryChange.fromXdrObject(w))
    });
  }
}

export { UpgradeEntryMeta };
//# sourceMappingURL=upgrade-entry-meta.js.map
