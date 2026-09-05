'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');

class FeeBumpTransactionExtBase extends xdrValue.XdrValue {
  constructor() {
    super();
    if (new.target === FeeBumpTransactionExtBase) {
      throw new TypeError(
        "new xdr.FeeBumpTransactionExt(...) is not supported: XDR unions are built from per-variant factories. Call xdr.FeeBumpTransactionExt.v0() (or another arm factory) instead."
      );
    }
  }
  static schema = jsXdr.union(
    "FeeBumpTransactionExt",
    {
      switchOn: jsXdr.int32(),
      cases: [jsXdr.case("v0", 0, jsXdr.void())],
      switchKey: "v"
    }
  );
  static v0() {
    return new FeeBumpTransactionExtV0();
  }
  static fromXdrObject(wire) {
    switch (wire.v) {
      case 0:
        return new FeeBumpTransactionExtV0();
    }
    throw new jsXdr.XdrError(
      `FeeBumpTransactionExt: unknown v ${wire.v}`
    );
  }
  /**
   * Type guard narrowing an unknown value to a concrete FeeBumpTransactionExt variant.
   * Use this instead of `instanceof FeeBumpTransactionExt`: the exported `FeeBumpTransactionExt` value
   * is the abstract base, so `instanceof` narrows to the base (not the
   * variant union) and forces a cast. `FeeBumpTransactionExt.is(x)` narrows to the union.
   */
  static is(value) {
    return value instanceof FeeBumpTransactionExtBase;
  }
}
class FeeBumpTransactionExtV0 extends FeeBumpTransactionExtBase {
  type = "v0";
  get value() {
    return null;
  }
  toXdrObject() {
    return { v: 0 };
  }
}
const FeeBumpTransactionExt = FeeBumpTransactionExtBase;

exports.FeeBumpTransactionExt = FeeBumpTransactionExt;
exports.FeeBumpTransactionExtV0 = FeeBumpTransactionExtV0;
//# sourceMappingURL=fee-bump-transaction-ext.js.map
