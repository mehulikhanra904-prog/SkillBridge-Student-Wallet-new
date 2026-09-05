import { union, case as _case, void as _void, field, int32, XdrError } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { LedgerEntryExtensionV1 } from './ledger-entry-extension-v1.js';

class LedgerEntryExtBase extends XdrValue {
  constructor() {
    super();
    if (new.target === LedgerEntryExtBase) {
      throw new TypeError(
        "new xdr.LedgerEntryExt(...) is not supported: XDR unions are built from per-variant factories. Call xdr.LedgerEntryExt.v0() (or another arm factory) instead."
      );
    }
  }
  static schema = union(
    "LedgerEntryExt",
    {
      switchOn: int32(),
      cases: [
        _case("v0", 0, _void()),
        _case("v1", 1, field("v1", LedgerEntryExtensionV1.schema))
      ],
      switchKey: "v"
    }
  );
  static v0() {
    return new LedgerEntryExtV0();
  }
  static v1(v1) {
    return new LedgerEntryExtV1(v1);
  }
  static fromXdrObject(wire) {
    switch (wire.v) {
      case 0:
        return new LedgerEntryExtV0();
      case 1:
        return new LedgerEntryExtV1(
          LedgerEntryExtensionV1.fromXdrObject(wire.v1)
        );
    }
    throw new XdrError(
      `LedgerEntryExt: unknown v ${wire.v}`
    );
  }
  /**
   * Type guard narrowing an unknown value to a concrete LedgerEntryExt variant.
   * Use this instead of `instanceof LedgerEntryExt`: the exported `LedgerEntryExt` value
   * is the abstract base, so `instanceof` narrows to the base (not the
   * variant union) and forces a cast. `LedgerEntryExt.is(x)` narrows to the union.
   */
  static is(value) {
    return value instanceof LedgerEntryExtBase;
  }
}
class LedgerEntryExtV0 extends LedgerEntryExtBase {
  type = "v0";
  get value() {
    return null;
  }
  toXdrObject() {
    return { v: 0 };
  }
}
class LedgerEntryExtV1 extends LedgerEntryExtBase {
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
const LedgerEntryExt = LedgerEntryExtBase;

export { LedgerEntryExt, LedgerEntryExtV0, LedgerEntryExtV1 };
//# sourceMappingURL=ledger-entry-ext.js.map
