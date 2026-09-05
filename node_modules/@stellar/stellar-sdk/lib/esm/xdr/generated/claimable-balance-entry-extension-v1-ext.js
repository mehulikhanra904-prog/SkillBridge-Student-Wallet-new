import { union, case as _case, void as _void, int32, XdrError } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';

class ClaimableBalanceEntryExtensionV1ExtBase extends XdrValue {
  constructor() {
    super();
    if (new.target === ClaimableBalanceEntryExtensionV1ExtBase) {
      throw new TypeError(
        "new xdr.ClaimableBalanceEntryExtensionV1Ext(...) is not supported: XDR unions are built from per-variant factories. Call xdr.ClaimableBalanceEntryExtensionV1Ext.v0() (or another arm factory) instead."
      );
    }
  }
  static schema = union("ClaimableBalanceEntryExtensionV1Ext", {
    switchOn: int32(),
    cases: [_case("v0", 0, _void())],
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
    throw new XdrError(
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

export { ClaimableBalanceEntryExtensionV1Ext, ClaimableBalanceEntryExtensionV1ExtV0 };
//# sourceMappingURL=claimable-balance-entry-extension-v1-ext.js.map
