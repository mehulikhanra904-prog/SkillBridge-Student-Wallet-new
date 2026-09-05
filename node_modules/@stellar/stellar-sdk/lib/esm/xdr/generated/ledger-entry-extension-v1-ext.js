import { union, case as _case, void as _void, int32, XdrError } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';

class LedgerEntryExtensionV1ExtBase extends XdrValue {
  constructor() {
    super();
    if (new.target === LedgerEntryExtensionV1ExtBase) {
      throw new TypeError(
        "new xdr.LedgerEntryExtensionV1Ext(...) is not supported: XDR unions are built from per-variant factories. Call xdr.LedgerEntryExtensionV1Ext.v0() (or another arm factory) instead."
      );
    }
  }
  static schema = union(
    "LedgerEntryExtensionV1Ext",
    {
      switchOn: int32(),
      cases: [_case("v0", 0, _void())],
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
    throw new XdrError(
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

export { LedgerEntryExtensionV1Ext, LedgerEntryExtensionV1ExtV0 };
//# sourceMappingURL=ledger-entry-extension-v1-ext.js.map
