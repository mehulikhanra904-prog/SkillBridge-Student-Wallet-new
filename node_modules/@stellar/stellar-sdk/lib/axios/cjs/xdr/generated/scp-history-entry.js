'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var scpHistoryEntryV0 = require('./scp-history-entry-v0.js');

class ScpHistoryEntryBase extends xdrValue.XdrValue {
  constructor() {
    super();
    if (new.target === ScpHistoryEntryBase) {
      throw new TypeError(
        "new xdr.ScpHistoryEntry(...) is not supported: XDR unions are built from per-variant factories. Call xdr.ScpHistoryEntry.v0(...) (or another arm factory) instead."
      );
    }
  }
  static schema = jsXdr.union(
    "ScpHistoryEntry",
    {
      switchOn: jsXdr.int32(),
      cases: [jsXdr.case("v0", 0, jsXdr.field("v0", scpHistoryEntryV0.ScpHistoryEntryV0.schema))],
      switchKey: "v"
    }
  );
  static v0(v0) {
    return new ScpHistoryEntryV0Arm(v0);
  }
  static fromXdrObject(wire) {
    switch (wire.v) {
      case 0:
        return new ScpHistoryEntryV0Arm(
          scpHistoryEntryV0.ScpHistoryEntryV0.fromXdrObject(wire.v0)
        );
    }
    throw new jsXdr.XdrError(
      `ScpHistoryEntry: unknown v ${wire.v}`
    );
  }
  /**
   * Type guard narrowing an unknown value to a concrete ScpHistoryEntry variant.
   * Use this instead of `instanceof ScpHistoryEntry`: the exported `ScpHistoryEntry` value
   * is the abstract base, so `instanceof` narrows to the base (not the
   * variant union) and forces a cast. `ScpHistoryEntry.is(x)` narrows to the union.
   */
  static is(value) {
    return value instanceof ScpHistoryEntryBase;
  }
}
class ScpHistoryEntryV0Arm extends ScpHistoryEntryBase {
  type = "v0";
  v0;
  constructor(v0) {
    super();
    this.v0 = v0;
  }
  get value() {
    return this.v0;
  }
  toXdrObject() {
    return { v: 0, v0: this.v0.toXdrObject() };
  }
}
const ScpHistoryEntry = ScpHistoryEntryBase;

exports.ScpHistoryEntry = ScpHistoryEntry;
exports.ScpHistoryEntryV0Arm = ScpHistoryEntryV0Arm;
//# sourceMappingURL=scp-history-entry.js.map
