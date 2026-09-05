'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');

class OfferEntryExtBase extends xdrValue.XdrValue {
  constructor() {
    super();
    if (new.target === OfferEntryExtBase) {
      throw new TypeError(
        "new xdr.OfferEntryExt(...) is not supported: XDR unions are built from per-variant factories. Call xdr.OfferEntryExt.v0() (or another arm factory) instead."
      );
    }
  }
  static schema = jsXdr.union("OfferEntryExt", {
    switchOn: jsXdr.int32(),
    cases: [jsXdr.case("v0", 0, jsXdr.void())],
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
    throw new jsXdr.XdrError(
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

exports.OfferEntryExt = OfferEntryExt;
exports.OfferEntryExtV0 = OfferEntryExtV0;
//# sourceMappingURL=offer-entry-ext.js.map
