import { union, case as _case, void as _void, int32, XdrError } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';

class LedgerHeaderExtensionV1ExtBase extends XdrValue {
  constructor() {
    super();
    if (new.target === LedgerHeaderExtensionV1ExtBase) {
      throw new TypeError(
        "new xdr.LedgerHeaderExtensionV1Ext(...) is not supported: XDR unions are built from per-variant factories. Call xdr.LedgerHeaderExtensionV1Ext.v0() (or another arm factory) instead."
      );
    }
  }
  static schema = union(
    "LedgerHeaderExtensionV1Ext",
    {
      switchOn: int32(),
      cases: [_case("v0", 0, _void())],
      switchKey: "v"
    }
  );
  static v0() {
    return new LedgerHeaderExtensionV1ExtV0();
  }
  static fromXdrObject(wire) {
    switch (wire.v) {
      case 0:
        return new LedgerHeaderExtensionV1ExtV0();
    }
    throw new XdrError(
      `LedgerHeaderExtensionV1Ext: unknown v ${wire.v}`
    );
  }
  /**
   * Type guard narrowing an unknown value to a concrete LedgerHeaderExtensionV1Ext variant.
   * Use this instead of `instanceof LedgerHeaderExtensionV1Ext`: the exported `LedgerHeaderExtensionV1Ext` value
   * is the abstract base, so `instanceof` narrows to the base (not the
   * variant union) and forces a cast. `LedgerHeaderExtensionV1Ext.is(x)` narrows to the union.
   */
  static is(value) {
    return value instanceof LedgerHeaderExtensionV1ExtBase;
  }
}
class LedgerHeaderExtensionV1ExtV0 extends LedgerHeaderExtensionV1ExtBase {
  type = "v0";
  get value() {
    return null;
  }
  toXdrObject() {
    return { v: 0 };
  }
}
const LedgerHeaderExtensionV1Ext = LedgerHeaderExtensionV1ExtBase;

export { LedgerHeaderExtensionV1Ext, LedgerHeaderExtensionV1ExtV0 };
//# sourceMappingURL=ledger-header-extension-v1-ext.js.map
