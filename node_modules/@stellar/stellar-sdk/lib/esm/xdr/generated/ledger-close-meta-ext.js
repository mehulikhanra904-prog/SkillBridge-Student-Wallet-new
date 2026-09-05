import { union, case as _case, void as _void, field, int32, XdrError } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { LedgerCloseMetaExtV1 } from './ledger-close-meta-ext-v1.js';

class LedgerCloseMetaExtBase extends XdrValue {
  constructor() {
    super();
    if (new.target === LedgerCloseMetaExtBase) {
      throw new TypeError(
        "new xdr.LedgerCloseMetaExt(...) is not supported: XDR unions are built from per-variant factories. Call xdr.LedgerCloseMetaExt.v0() (or another arm factory) instead."
      );
    }
  }
  static schema = union(
    "LedgerCloseMetaExt",
    {
      switchOn: int32(),
      cases: [
        _case("v0", 0, _void()),
        _case("v1", 1, field("v1", LedgerCloseMetaExtV1.schema))
      ],
      switchKey: "v"
    }
  );
  static v0() {
    return new LedgerCloseMetaExtV0();
  }
  static v1(v1) {
    return new LedgerCloseMetaExtV1Arm(v1);
  }
  static fromXdrObject(wire) {
    switch (wire.v) {
      case 0:
        return new LedgerCloseMetaExtV0();
      case 1:
        return new LedgerCloseMetaExtV1Arm(
          LedgerCloseMetaExtV1.fromXdrObject(wire.v1)
        );
    }
    throw new XdrError(
      `LedgerCloseMetaExt: unknown v ${wire.v}`
    );
  }
  /**
   * Type guard narrowing an unknown value to a concrete LedgerCloseMetaExt variant.
   * Use this instead of `instanceof LedgerCloseMetaExt`: the exported `LedgerCloseMetaExt` value
   * is the abstract base, so `instanceof` narrows to the base (not the
   * variant union) and forces a cast. `LedgerCloseMetaExt.is(x)` narrows to the union.
   */
  static is(value) {
    return value instanceof LedgerCloseMetaExtBase;
  }
}
class LedgerCloseMetaExtV0 extends LedgerCloseMetaExtBase {
  type = "v0";
  get value() {
    return null;
  }
  toXdrObject() {
    return { v: 0 };
  }
}
class LedgerCloseMetaExtV1Arm extends LedgerCloseMetaExtBase {
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
const LedgerCloseMetaExt = LedgerCloseMetaExtBase;

export { LedgerCloseMetaExt, LedgerCloseMetaExtV0, LedgerCloseMetaExtV1Arm };
//# sourceMappingURL=ledger-close-meta-ext.js.map
