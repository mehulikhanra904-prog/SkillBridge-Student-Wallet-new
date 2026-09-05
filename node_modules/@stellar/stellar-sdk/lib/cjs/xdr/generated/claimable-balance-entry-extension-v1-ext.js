'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');

class ClaimableBalanceEntryExtensionV1ExtBase extends xdrValue.XdrValue {
  constructor() {
    super();
    if (new.target === ClaimableBalanceEntryExtensionV1ExtBase) {
      throw new TypeError(
        "new xdr.ClaimableBalanceEntryExtensionV1Ext(...) is not supported: XDR unions are built from per-variant factories. Call xdr.ClaimableBalanceEntryExtensionV1Ext.v0() (or another arm factory) instead."
      );
    }
  }
  static schema = jsXdr.union("ClaimableBalanceEntryExtensionV1Ext", {
    switchOn: jsXdr.int32(),
    cases: [jsXdr.case("v0", 0, jsXdr.void())],
    switchKey: "v"
  });
  static v0() {
    return new ClaimableBalanceEntryExtensionV1ExtV0();
  }
  static fromXdrObject(wire) {
    switch (wire.v) {
      case 0:
        return new ClaimableBalanceEntryExtensionV1ExtV0();
    }
    throw new jsXdr.XdrError(
      `ClaimableBalanceEntryExtensionV1Ext: unknown v ${wire.v}`
    );
  }
  /**
   * Type guard narrowing an unknown value to a concrete ClaimableBalanceEntryExtensionV1Ext variant.
   * Use this instead of `instanceof ClaimableBalanceEntryExtensionV1Ext`: the exported `ClaimableBalanceEntryExtensionV1Ext` value
   * is the abstract base, so `instanceof` narrows to the base (not the
   * variant union) and forces a cast. `ClaimableBalanceEntryExtensionV1Ext.is(x)` narrows to the union.
   */
  static is(value) {
    return value instanceof ClaimableBalanceEntryExtensionV1ExtBase;
  }
}
class ClaimableBalanceEntryExtensionV1ExtV0 extends ClaimableBalanceEntryExtensionV1ExtBase {
  type = "v0";
  get value() {
    return null;
  }
  toXdrObject() {
    return { v: 0 };
  }
}
const ClaimableBalanceEntryExtensionV1Ext = ClaimableBalanceEntryExtensionV1ExtBase;

exports.ClaimableBalanceEntryExtensionV1Ext = ClaimableBalanceEntryExtensionV1Ext;
exports.ClaimableBalanceEntryExtensionV1ExtV0 = ClaimableBalanceEntryExtensionV1ExtV0;
//# sourceMappingURL=claimable-balance-entry-extension-v1-ext.js.map
