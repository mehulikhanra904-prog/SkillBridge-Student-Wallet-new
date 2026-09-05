import { union, case as _case, field, XdrError } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { LedgerEntryChangeType } from './ledger-entry-change-type.js';
import { LedgerEntry } from './ledger-entry.js';
import { LedgerKey } from './ledger-key.js';

class LedgerEntryChangeBase extends XdrValue {
  constructor() {
    super();
    if (new.target === LedgerEntryChangeBase) {
      throw new TypeError(
        "new xdr.LedgerEntryChange(...) is not supported: XDR unions are built from per-variant factories. Call xdr.LedgerEntryChange.ledgerEntryCreated(...) (or another arm factory) instead."
      );
    }
  }
  static schema = union(
    "LedgerEntryChange",
    {
      switchOn: LedgerEntryChangeType.schema,
      cases: [
        _case("ledgerEntryCreated", 0, field("created", LedgerEntry.schema)),
        _case("ledgerEntryUpdated", 1, field("updated", LedgerEntry.schema)),
        _case("ledgerEntryRemoved", 2, field("removed", LedgerKey.schema)),
        _case("ledgerEntryState", 3, field("state", LedgerEntry.schema)),
        _case("ledgerEntryRestored", 4, field("restored", LedgerEntry.schema))
      ]
    }
  );
  static ledgerEntryCreated(created) {
    return new LedgerEntryChangeCreated(created);
  }
  static ledgerEntryUpdated(updated) {
    return new LedgerEntryChangeUpdated(updated);
  }
  static ledgerEntryRemoved(removed) {
    return new LedgerEntryChangeRemoved(removed);
  }
  static ledgerEntryState(state) {
    return new LedgerEntryChangeState(state);
  }
  static ledgerEntryRestored(restored) {
    return new LedgerEntryChangeRestored(restored);
  }
  static fromXdrObject(wire) {
    switch (wire.type) {
      case 0:
        return new LedgerEntryChangeCreated(
          LedgerEntry.fromXdrObject(wire.created)
        );
      case 1:
        return new LedgerEntryChangeUpdated(
          LedgerEntry.fromXdrObject(wire.updated)
        );
      case 2:
        return new LedgerEntryChangeRemoved(
          LedgerKey.fromXdrObject(wire.removed)
        );
      case 3:
        return new LedgerEntryChangeState(
          LedgerEntry.fromXdrObject(wire.state)
        );
      case 4:
        return new LedgerEntryChangeRestored(
          LedgerEntry.fromXdrObject(wire.restored)
        );
    }
    throw new XdrError(
      `LedgerEntryChange: unknown type ${wire.type}`
    );
  }
  /**
   * Type guard narrowing an unknown value to a concrete LedgerEntryChange variant.
   * Use this instead of `instanceof LedgerEntryChange`: the exported `LedgerEntryChange` value
   * is the abstract base, so `instanceof` narrows to the base (not the
   * variant union) and forces a cast. `LedgerEntryChange.is(x)` narrows to the union.
   */
  static is(value) {
    return value instanceof LedgerEntryChangeBase;
  }
}
class LedgerEntryChangeCreated extends LedgerEntryChangeBase {
  type = "ledgerEntryCreated";
  created;
  constructor(created) {
    super();
    this.created = created;
  }
  get value() {
    return this.created;
  }
  toXdrObject() {
    return { type: 0, created: this.created.toXdrObject() };
  }
}
class LedgerEntryChangeUpdated extends LedgerEntryChangeBase {
  type = "ledgerEntryUpdated";
  updated;
  constructor(updated) {
    super();
    this.updated = updated;
  }
  get value() {
    return this.updated;
  }
  toXdrObject() {
    return { type: 1, updated: this.updated.toXdrObject() };
  }
}
class LedgerEntryChangeRemoved extends LedgerEntryChangeBase {
  type = "ledgerEntryRemoved";
  removed;
  constructor(removed) {
    super();
    this.removed = removed;
  }
  get value() {
    return this.removed;
  }
  toXdrObject() {
    return { type: 2, removed: this.removed.toXdrObject() };
  }
}
class LedgerEntryChangeState extends LedgerEntryChangeBase {
  type = "ledgerEntryState";
  state;
  constructor(state) {
    super();
    this.state = state;
  }
  get value() {
    return this.state;
  }
  toXdrObject() {
    return { type: 3, state: this.state.toXdrObject() };
  }
}
class LedgerEntryChangeRestored extends LedgerEntryChangeBase {
  type = "ledgerEntryRestored";
  restored;
  constructor(restored) {
    super();
    this.restored = restored;
  }
  get value() {
    return this.restored;
  }
  toXdrObject() {
    return { type: 4, restored: this.restored.toXdrObject() };
  }
}
const LedgerEntryChange = LedgerEntryChangeBase;

export { LedgerEntryChange, LedgerEntryChangeCreated, LedgerEntryChangeRemoved, LedgerEntryChangeRestored, LedgerEntryChangeState, LedgerEntryChangeUpdated };
//# sourceMappingURL=ledger-entry-change.js.map
