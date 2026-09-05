import { union, case as _case, void as _void, field, int32, XdrError } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { AccountEntryExtensionV3 } from './account-entry-extension-v3.js';

class AccountEntryExtensionV2ExtBase extends XdrValue {
  constructor() {
    super();
    if (new.target === AccountEntryExtensionV2ExtBase) {
      throw new TypeError(
        "new xdr.AccountEntryExtensionV2Ext(...) is not supported: XDR unions are built from per-variant factories. Call xdr.AccountEntryExtensionV2Ext.v0() (or another arm factory) instead."
      );
    }
  }
  static schema = union(
    "AccountEntryExtensionV2Ext",
    {
      switchOn: int32(),
      cases: [
        _case("v0", 0, _void()),
        _case("v3", 3, field("v3", AccountEntryExtensionV3.schema))
      ],
      switchKey: "v"
    }
  );
  static v0() {
    return new AccountEntryExtensionV2ExtV0();
  }
  static v3(v3) {
    return new AccountEntryExtensionV2ExtV3(v3);
  }
  static fromXdrObject(wire) {
    switch (wire.v) {
      case 0:
        return new AccountEntryExtensionV2ExtV0();
      case 3:
        return new AccountEntryExtensionV2ExtV3(
          AccountEntryExtensionV3.fromXdrObject(wire.v3)
        );
    }
    throw new XdrError(
      `AccountEntryExtensionV2Ext: unknown v ${wire.v}`
    );
  }
  /**
   * Type guard narrowing an unknown value to a concrete AccountEntryExtensionV2Ext variant.
   * Use this instead of `instanceof AccountEntryExtensionV2Ext`: the exported `AccountEntryExtensionV2Ext` value
   * is the abstract base, so `instanceof` narrows to the base (not the
   * variant union) and forces a cast. `AccountEntryExtensionV2Ext.is(x)` narrows to the union.
   */
  static is(value) {
    return value instanceof AccountEntryExtensionV2ExtBase;
  }
}
class AccountEntryExtensionV2ExtV0 extends AccountEntryExtensionV2ExtBase {
  type = "v0";
  get value() {
    return null;
  }
  toXdrObject() {
    return { v: 0 };
  }
}
class AccountEntryExtensionV2ExtV3 extends AccountEntryExtensionV2ExtBase {
  type = "v3";
  v3;
  constructor(v3) {
    super();
    this.v3 = v3;
  }
  get value() {
    return this.v3;
  }
  toXdrObject() {
    return { v: 3, v3: this.v3.toXdrObject() };
  }
}
const AccountEntryExtensionV2Ext = AccountEntryExtensionV2ExtBase;

export { AccountEntryExtensionV2Ext, AccountEntryExtensionV2ExtV0, AccountEntryExtensionV2ExtV3 };
//# sourceMappingURL=account-entry-extension-v2-ext.js.map
