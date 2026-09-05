'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');

class LedgerHeaderHistoryEntryExtBase extends xdrValue.XdrValue {
  constructor() {
    super();
    if (new.target === LedgerHeaderHistoryEntryExtBase) {
      throw new TypeError(
        "new xdr.LedgerHeaderHistoryEntryExt(...) is not supported: XDR unions are built from per-variant factories. Call xdr.LedgerHeaderHistoryEntryExt.v0() (or another arm factory) instead."
      );
    }
  }
  static schema = jsXdr.union(
    "LedgerHeaderHistoryEntryExt",
    {
      switchOn: jsXdr.int32(),
      cases: [jsXdr.case("v0", 0, jsXdr.void())],
      switchKey: "v"
    }
  );
  static v0() {
    return new LedgerHeaderHistoryEntryExtV0();
  }
  static fromXdrObject(wire) {
    switch (wire.v) {
      case 0:
        return new LedgerHeaderHistoryEntryExtV0();
    }
    throw new jsXdr.XdrError(
      `LedgerHeaderHistoryEntryExt: unknown v ${wire.v}`
    );
  }
  /**
   * Type guard narrowing an unknown value to a concrete LedgerHeaderHistoryEntryExt variant.
   * Use this instead of `instanceof LedgerHeaderHistoryEntryExt`: the exported `LedgerHeaderHistoryEntryExt` value
   * is the abstract base, so `instanceof` narrows to the base (not the
   * variant union) and forces a cast. `LedgerHeaderHistoryEntryExt.is(x)` narrows to the union.
   */
  static is(value) {
    return value instanceof LedgerHeaderHistoryEntryExtBase;
  }
}
class LedgerHeaderHistoryEntryExtV0 extends LedgerHeaderHistoryEntryExtBase {
  type = "v0";
  get value() {
    return null;
  }
  toXdrObject() {
    return { v: 0 };
  }
}
const LedgerHeaderHistoryEntryExt = LedgerHeaderHistoryEntryExtBase;

exports.LedgerHeaderHistoryEntryExt = LedgerHeaderHistoryEntryExt;
exports.LedgerHeaderHistoryEntryExtV0 = LedgerHeaderHistoryEntryExtV0;
//# sourceMappingURL=ledger-header-history-entry-ext.js.map
