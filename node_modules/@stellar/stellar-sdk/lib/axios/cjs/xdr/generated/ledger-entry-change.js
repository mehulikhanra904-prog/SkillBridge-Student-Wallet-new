'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var ledgerEntryChangeType = require('./ledger-entry-change-type.js');
var ledgerEntry = require('./ledger-entry.js');
var ledgerKey = require('./ledger-key.js');

class LedgerEntryChangeBase extends xdrValue.XdrValue {
  constructor() {
    super();
    if (new.target === LedgerEntryChangeBase) {
      throw new TypeError(
        "new xdr.LedgerEntryChange(...) is not supported: XDR unions are built from per-variant factories. Call xdr.LedgerEntryChange.ledgerEntryCreated(...) (or another arm factory) instead."
      );
    }
  }
  static schema = jsXdr.union(
    "LedgerEntryChange",
    {
      switchOn: ledgerEntryChangeType.LedgerEntryChangeType.schema,
      cases: [
        jsXdr.case("ledgerEntryCreated", 0, jsXdr.field("created", ledgerEntry.LedgerEntry.schema)),
        jsXdr.case("ledgerEntryUpdated", 1, jsXdr.field("updated", ledgerEntry.LedgerEntry.schema)),
        jsXdr.case("ledgerEntryRemoved", 2, jsXdr.field("removed", ledgerKey.LedgerKey.schema)),
        jsXdr.case("ledgerEntryState", 3, jsXdr.field("state", ledgerEntry.LedgerEntry.schema)),
        jsXdr.case("ledgerEntryRestored", 4, jsXdr.field("restored", ledgerEntry.LedgerEntry.schema))
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
          ledgerEntry.LedgerEntry.fromXdrObject(wire.created)
        );
      case 1:
        return new LedgerEntryChangeUpdated(
          ledgerEntry.LedgerEntry.fromXdrObject(wire.updated)
        );
      case 2:
        return new LedgerEntryChangeRemoved(
          ledgerKey.LedgerKey.fromXdrObject(wire.removed)
        );
      case 3:
        return new LedgerEntryChangeState(
          ledgerEntry.LedgerEntry.fromXdrObject(wire.state)
        );
      case 4:
        return new LedgerEntryChangeRestored(
          ledgerEntry.LedgerEntry.fromXdrObject(wire.restored)
        );
    }
    throw new jsXdr.XdrError(
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

exports.LedgerEntryChange = LedgerEntryChange;
exports.LedgerEntryChangeCreated = LedgerEntryChangeCreated;
exports.LedgerEntryChangeRemoved = LedgerEntryChangeRemoved;
exports.LedgerEntryChangeRestored = LedgerEntryChangeRestored;
exports.LedgerEntryChangeState = LedgerEntryChangeState;
exports.LedgerEntryChangeUpdated = LedgerEntryChangeUpdated;
//# sourceMappingURL=ledger-entry-change.js.map
