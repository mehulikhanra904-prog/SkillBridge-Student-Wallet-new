'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');

class LedgerEntryExtensionV1ExtBase extends xdrValue.XdrValue {
  constructor() {
    super();
    if (new.target === LedgerEntryExtensionV1ExtBase) {
      throw new TypeError(
        "new xdr.LedgerEntryExtensionV1Ext(...) is not supported: XDR unions are built from per-variant factories. Call xdr.LedgerEntryExtensionV1Ext.v0() (or another arm factory) instead."
      );
    }
  }
  static schema = jsXdr.union(
    "LedgerEntryExtensionV1Ext",
    {
      switchOn: jsXdr.int32(),
      cases: [jsXdr.case("v0", 0, jsXdr.void())],
      switchKey: "v"
    }
  );
  static v0() {
    return new LedgerEntryExtensionV1ExtV0();
  }
  static fromXdrObject(wire) {
    switch (wire.v) {
      case 0:
        return new LedgerEntryExtensionV1ExtV0();
    }
    throw new jsXdr.XdrError(
      `LedgerEntryExtensionV1Ext: unknown v ${wire.v}`
    );
  }
  /**
   * Type guard narrowing an unknown value to a concrete LedgerEntryExtensionV1Ext variant.
   * Use this instead of `instanceof LedgerEntryExtensionV1Ext`: the exported `LedgerEntryExtensionV1Ext` value
   * is the abstract base, so `instanceof` narrows to the base (not the
   * variant union) and forces a cast. `LedgerEntryExtensionV1Ext.is(x)` narrows to the union.
   */
  static is(value) {
    return value instanceof LedgerEntryExtensionV1ExtBase;
  }
}
class LedgerEntryExtensionV1ExtV0 extends LedgerEntryExtensionV1ExtBase {
  type = "v0";
  get value() {
    return null;
  }
  toXdrObject() {
    return { v: 0 };
  }
}
const LedgerEntryExtensionV1Ext = LedgerEntryExtensionV1ExtBase;

exports.LedgerEntryExtensionV1Ext = LedgerEntryExtensionV1Ext;
exports.LedgerEntryExtensionV1ExtV0 = LedgerEntryExtensionV1ExtV0;
//# sourceMappingURL=ledger-entry-extension-v1-ext.js.map
