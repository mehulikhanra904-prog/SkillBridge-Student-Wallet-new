'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');

class TrustLineEntryExtensionV2ExtBase extends xdrValue.XdrValue {
  constructor() {
    super();
    if (new.target === TrustLineEntryExtensionV2ExtBase) {
      throw new TypeError(
        "new xdr.TrustLineEntryExtensionV2Ext(...) is not supported: XDR unions are built from per-variant factories. Call xdr.TrustLineEntryExtensionV2Ext.v0() (or another arm factory) instead."
      );
    }
  }
  static schema = jsXdr.union(
    "TrustLineEntryExtensionV2Ext",
    {
      switchOn: jsXdr.int32(),
      cases: [jsXdr.case("v0", 0, jsXdr.void())],
      switchKey: "v"
    }
  );
  static v0() {
    return new TrustLineEntryExtensionV2ExtV0();
  }
  static fromXdrObject(wire) {
    switch (wire.v) {
      case 0:
        return new TrustLineEntryExtensionV2ExtV0();
    }
    throw new jsXdr.XdrError(
      `TrustLineEntryExtensionV2Ext: unknown v ${wire.v}`
    );
  }
  /**
   * Type guard narrowing an unknown value to a concrete TrustLineEntryExtensionV2Ext variant.
   * Use this instead of `instanceof TrustLineEntryExtensionV2Ext`: the exported `TrustLineEntryExtensionV2Ext` value
   * is the abstract base, so `instanceof` narrows to the base (not the
   * variant union) and forces a cast. `TrustLineEntryExtensionV2Ext.is(x)` narrows to the union.
   */
  static is(value) {
    return value instanceof TrustLineEntryExtensionV2ExtBase;
  }
}
class TrustLineEntryExtensionV2ExtV0 extends TrustLineEntryExtensionV2ExtBase {
  type = "v0";
  get value() {
    return null;
  }
  toXdrObject() {
    return { v: 0 };
  }
}
const TrustLineEntryExtensionV2Ext = TrustLineEntryExtensionV2ExtBase;

exports.TrustLineEntryExtensionV2Ext = TrustLineEntryExtensionV2Ext;
exports.TrustLineEntryExtensionV2ExtV0 = TrustLineEntryExtensionV2ExtV0;
//# sourceMappingURL=trust-line-entry-extension-v2-ext.js.map
