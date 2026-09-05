import { union, case as _case, void as _void, int32, XdrError } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';

class TrustLineEntryExtensionV2ExtBase extends XdrValue {
  constructor() {
    super();
    if (new.target === TrustLineEntryExtensionV2ExtBase) {
      throw new TypeError(
        "new xdr.TrustLineEntryExtensionV2Ext(...) is not supported: XDR unions are built from per-variant factories. Call xdr.TrustLineEntryExtensionV2Ext.v0() (or another arm factory) instead."
      );
    }
  }
  static schema = union(
    "TrustLineEntryExtensionV2Ext",
    {
      switchOn: int32(),
      cases: [_case("v0", 0, _void())],
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
    throw new XdrError(
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

export { TrustLineEntryExtensionV2Ext, TrustLineEntryExtensionV2ExtV0 };
//# sourceMappingURL=trust-line-entry-extension-v2-ext.js.map
