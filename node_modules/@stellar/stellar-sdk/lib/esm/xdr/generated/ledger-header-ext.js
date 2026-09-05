import { union, case as _case, void as _void, field, int32, XdrError } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { LedgerHeaderExtensionV1 } from './ledger-header-extension-v1.js';

class LedgerHeaderExtBase extends XdrValue {
  constructor() {
    super();
    if (new.target === LedgerHeaderExtBase) {
      throw new TypeError(
        "new xdr.LedgerHeaderExt(...) is not supported: XDR unions are built from per-variant factories. Call xdr.LedgerHeaderExt.v0() (or another arm factory) instead."
      );
    }
  }
  static schema = union(
    "LedgerHeaderExt",
    {
      switchOn: int32(),
      cases: [
        _case("v0", 0, _void()),
        _case("v1", 1, field("v1", LedgerHeaderExtensionV1.schema))
      ],
      switchKey: "v"
    }
  );
  static v0() {
    return new LedgerHeaderExtV0();
  }
  static v1(v1) {
    return new LedgerHeaderExtV1(v1);
  }
  static fromXdrObject(wire) {
    switch (wire.v) {
      case 0:
        return new LedgerHeaderExtV0();
      case 1:
        return new LedgerHeaderExtV1(
          LedgerHeaderExtensionV1.fromXdrObject(wire.v1)
        );
    }
    throw new XdrError(
      `LedgerHeaderExt: unknown v ${wire.v}`
    );
  }
  /**
   * Type guard narrowing an unknown value to a concrete LedgerHeaderExt variant.
   * Use this instead of `instanceof LedgerHeaderExt`: the exported `LedgerHeaderExt` value
   * is the abstract base, so `instanceof` narrows to the base (not the
   * variant union) and forces a cast. `LedgerHeaderExt.is(x)` narrows to the union.
   */
  static is(value) {
    return value instanceof LedgerHeaderExtBase;
  }
}
class LedgerHeaderExtV0 extends LedgerHeaderExtBase {
  type = "v0";
  get value() {
    return null;
  }
  toXdrObject() {
    return { v: 0 };
  }
}
class LedgerHeaderExtV1 extends LedgerHeaderExtBase {
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
const LedgerHeaderExt = LedgerHeaderExtBase;

export { LedgerHeaderExt, LedgerHeaderExtV0, LedgerHeaderExtV1 };
//# sourceMappingURL=ledger-header-ext.js.map
