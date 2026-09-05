'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');

class InnerTransactionResultExtBase extends xdrValue.XdrValue {
  constructor() {
    super();
    if (new.target === InnerTransactionResultExtBase) {
      throw new TypeError(
        "new xdr.InnerTransactionResultExt(...) is not supported: XDR unions are built from per-variant factories. Call xdr.InnerTransactionResultExt.v0() (or another arm factory) instead."
      );
    }
  }
  static schema = jsXdr.union(
    "InnerTransactionResultExt",
    {
      switchOn: jsXdr.int32(),
      cases: [jsXdr.case("v0", 0, jsXdr.void())],
      switchKey: "v"
    }
  );
  static v0() {
    return new InnerTransactionResultExtV0();
  }
  static fromXdrObject(wire) {
    switch (wire.v) {
      case 0:
        return new InnerTransactionResultExtV0();
    }
    throw new jsXdr.XdrError(
      `InnerTransactionResultExt: unknown v ${wire.v}`
    );
  }
  /**
   * Type guard narrowing an unknown value to a concrete InnerTransactionResultExt variant.
   * Use this instead of `instanceof InnerTransactionResultExt`: the exported `InnerTransactionResultExt` value
   * is the abstract base, so `instanceof` narrows to the base (not the
   * variant union) and forces a cast. `InnerTransactionResultExt.is(x)` narrows to the union.
   */
  static is(value) {
    return value instanceof InnerTransactionResultExtBase;
  }
}
class InnerTransactionResultExtV0 extends InnerTransactionResultExtBase {
  type = "v0";
  get value() {
    return null;
  }
  toXdrObject() {
    return { v: 0 };
  }
}
const InnerTransactionResultExt = InnerTransactionResultExtBase;

exports.InnerTransactionResultExt = InnerTransactionResultExt;
exports.InnerTransactionResultExtV0 = InnerTransactionResultExtV0;
//# sourceMappingURL=inner-transaction-result-ext.js.map
