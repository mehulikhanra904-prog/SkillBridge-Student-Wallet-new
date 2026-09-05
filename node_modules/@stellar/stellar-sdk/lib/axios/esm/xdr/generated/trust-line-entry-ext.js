import { union, case as _case, void as _void, field, int32, XdrError } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { TrustLineEntryV1 } from './trust-line-entry-v1.js';

class TrustLineEntryExtBase extends XdrValue {
  constructor() {
    super();
    if (new.target === TrustLineEntryExtBase) {
      throw new TypeError(
        "new xdr.TrustLineEntryExt(...) is not supported: XDR unions are built from per-variant factories. Call xdr.TrustLineEntryExt.v0() (or another arm factory) instead."
      );
    }
  }
  static schema = union(
    "TrustLineEntryExt",
    {
      switchOn: int32(),
      cases: [
        _case("v0", 0, _void()),
        _case("v1", 1, field("v1", TrustLineEntryV1.schema))
      ],
      switchKey: "v"
    }
  );
  static v0() {
    return new TrustLineEntryExtV0();
  }
  static v1(v1) {
    return new TrustLineEntryExtV1(v1);
  }
  static fromXdrObject(wire) {
    switch (wire.v) {
      case 0:
        return new TrustLineEntryExtV0();
      case 1:
        return new TrustLineEntryExtV1(TrustLineEntryV1.fromXdrObject(wire.v1));
    }
    throw new XdrError(
      `TrustLineEntryExt: unknown v ${wire.v}`
    );
  }
  /**
   * Type guard narrowing an unknown value to a concrete TrustLineEntryExt variant.
   * Use this instead of `instanceof TrustLineEntryExt`: the exported `TrustLineEntryExt` value
   * is the abstract base, so `instanceof` narrows to the base (not the
   * variant union) and forces a cast. `TrustLineEntryExt.is(x)` narrows to the union.
   */
  static is(value) {
    return value instanceof TrustLineEntryExtBase;
  }
}
class TrustLineEntryExtV0 extends TrustLineEntryExtBase {
  type = "v0";
  get value() {
    return null;
  }
  toXdrObject() {
    return { v: 0 };
  }
}
class TrustLineEntryExtV1 extends TrustLineEntryExtBase {
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
const TrustLineEntryExt = TrustLineEntryExtBase;

export { TrustLineEntryExt, TrustLineEntryExtV0, TrustLineEntryExtV1 };
//# sourceMappingURL=trust-line-entry-ext.js.map
