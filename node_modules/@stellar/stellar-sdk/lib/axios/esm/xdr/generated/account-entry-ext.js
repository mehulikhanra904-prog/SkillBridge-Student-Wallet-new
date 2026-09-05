import { union, case as _case, void as _void, field, int32, XdrError } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { AccountEntryExtensionV1 } from './account-entry-extension-v1.js';

class AccountEntryExtBase extends XdrValue {
  constructor() {
    super();
    if (new.target === AccountEntryExtBase) {
      throw new TypeError(
        "new xdr.AccountEntryExt(...) is not supported: XDR unions are built from per-variant factories. Call xdr.AccountEntryExt.v0() (or another arm factory) instead."
      );
    }
  }
  static schema = union(
    "AccountEntryExt",
    {
      switchOn: int32(),
      cases: [
        _case("v0", 0, _void()),
        _case("v1", 1, field("v1", AccountEntryExtensionV1.schema))
      ],
      switchKey: "v"
    }
  );
  static v0() {
    return new AccountEntryExtV0();
  }
  static v1(v1) {
    return new AccountEntryExtV1(v1);
  }
  static fromXdrObject(wire) {
    switch (wire.v) {
      case 0:
        return new AccountEntryExtV0();
      case 1:
        return new AccountEntryExtV1(
          AccountEntryExtensionV1.fromXdrObject(wire.v1)
        );
    }
    throw new XdrError(
      `AccountEntryExt: unknown v ${wire.v}`
    );
  }
  /**
   * Type guard narrowing an unknown value to a concrete AccountEntryExt variant.
   * Use this instead of `instanceof AccountEntryExt`: the exported `AccountEntryExt` value
   * is the abstract base, so `instanceof` narrows to the base (not the
   * variant union) and forces a cast. `AccountEntryExt.is(x)` narrows to the union.
   */
  static is(value) {
    return value instanceof AccountEntryExtBase;
  }
}
class AccountEntryExtV0 extends AccountEntryExtBase {
  type = "v0";
  get value() {
    return null;
  }
  toXdrObject() {
    return { v: 0 };
  }
}
class AccountEntryExtV1 extends AccountEntryExtBase {
  type = "v1";
  v1;
  constructor(v1) {
    super();
    this.v1 = v1;
  }
  get value() {
    return this.v1;
  }
  toXdrObject() {
    return { v: 1, v1: this.v1.toXdrObject() };
  }
}
const AccountEntryExt = AccountEntryExtBase;

export { AccountEntryExt, AccountEntryExtV0, AccountEntryExtV1 };
//# sourceMappingURL=account-entry-ext.js.map
