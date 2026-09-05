import { union, case as _case, void as _void, field, int32, XdrError } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { ClaimableBalanceEntryExtensionV1 } from './claimable-balance-entry-extension-v1.js';

class ClaimableBalanceEntryExtBase extends XdrValue {
  constructor() {
    super();
    if (new.target === ClaimableBalanceEntryExtBase) {
      throw new TypeError(
        "new xdr.ClaimableBalanceEntryExt(...) is not supported: XDR unions are built from per-variant factories. Call xdr.ClaimableBalanceEntryExt.v0() (or another arm factory) instead."
      );
    }
  }
  static schema = union(
    "ClaimableBalanceEntryExt",
    {
      switchOn: int32(),
      cases: [
        _case("v0", 0, _void()),
        _case("v1", 1, field("v1", ClaimableBalanceEntryExtensionV1.schema))
      ],
      switchKey: "v"
    }
  );
  static v0() {
    return new ClaimableBalanceEntryExtV0();
  }
  static v1(v1) {
    return new ClaimableBalanceEntryExtV1(v1);
  }
  static fromXdrObject(wire) {
    switch (wire.v) {
      case 0:
        return new ClaimableBalanceEntryExtV0();
      case 1:
        return new ClaimableBalanceEntryExtV1(
          ClaimableBalanceEntryExtensionV1.fromXdrObject(wire.v1)
        );
    }
    throw new XdrError(
      `ClaimableBalanceEntryExt: unknown v ${wire.v}`
    );
  }
  /**
   * Type guard narrowing an unknown value to a concrete ClaimableBalanceEntryExt variant.
   * Use this instead of `instanceof ClaimableBalanceEntryExt`: the exported `ClaimableBalanceEntryExt` value
   * is the abstract base, so `instanceof` narrows to the base (not the
   * variant union) and forces a cast. `ClaimableBalanceEntryExt.is(x)` narrows to the union.
   */
  static is(value) {
    return value instanceof ClaimableBalanceEntryExtBase;
  }
}
class ClaimableBalanceEntryExtV0 extends ClaimableBalanceEntryExtBase {
  type = "v0";
  get value() {
    return null;
  }
  toXdrObject() {
    return { v: 0 };
  }
}
class ClaimableBalanceEntryExtV1 extends ClaimableBalanceEntryExtBase {
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
const ClaimableBalanceEntryExt = ClaimableBalanceEntryExtBase;

export { ClaimableBalanceEntryExt, ClaimableBalanceEntryExtV0, ClaimableBalanceEntryExtV1 };
//# sourceMappingURL=claimable-balance-entry-ext.js.map
