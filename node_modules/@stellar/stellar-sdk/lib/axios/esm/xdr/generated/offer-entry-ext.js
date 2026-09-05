import { union, case as _case, void as _void, int32, XdrError } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';

class OfferEntryExtBase extends XdrValue {
  constructor() {
    super();
    if (new.target === OfferEntryExtBase) {
      throw new TypeError(
        "new xdr.OfferEntryExt(...) is not supported: XDR unions are built from per-variant factories. Call xdr.OfferEntryExt.v0() (or another arm factory) instead."
      );
    }
  }
  static schema = union("OfferEntryExt", {
    switchOn: int32(),
    cases: [_case("v0", 0, _void())],
    switchKey: "v"
  });
  static v0() {
    return new OfferEntryExtV0();
  }
  static fromXdrObject(wire) {
    switch (wire.v) {
      case 0:
        return new OfferEntryExtV0();
    }
    throw new XdrError(
      `OfferEntryExt: unknown v ${wire.v}`
    );
  }
  /**
   * Type guard narrowing an unknown value to a concrete OfferEntryExt variant.
   * Use this instead of `instanceof OfferEntryExt`: the exported `OfferEntryExt` value
   * is the abstract base, so `instanceof` narrows to the base (not the
   * variant union) and forces a cast. `OfferEntryExt.is(x)` narrows to the union.
   */
  static is(value) {
    return value instanceof OfferEntryExtBase;
  }
}
class OfferEntryExtV0 extends OfferEntryExtBase {
  type = "v0";
  get value() {
    return null;
  }
  toXdrObject() {
    return { v: 0 };
  }
}
const OfferEntryExt = OfferEntryExtBase;

export { OfferEntryExt, OfferEntryExtV0 };
//# sourceMappingURL=offer-entry-ext.js.map
