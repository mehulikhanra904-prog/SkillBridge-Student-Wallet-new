'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');

class TransactionResultExtBase extends xdrValue.XdrValue {
  constructor() {
    super();
    if (new.target === TransactionResultExtBase) {
      throw new TypeError(
        "new xdr.TransactionResultExt(...) is not supported: XDR unions are built from per-variant factories. Call xdr.TransactionResultExt.v0() (or another arm factory) instead."
      );
    }
  }
  static schema = jsXdr.union(
    "TransactionResultExt",
    {
      switchOn: jsXdr.int32(),
      cases: [jsXdr.case("v0", 0, jsXdr.void())],
      switchKey: "v"
    }
  );
  static v0() {
    return new TransactionResultExtV0();
  }
  static fromXdrObject(wire) {
    switch (wire.v) {
      case 0:
        return new TransactionResultExtV0();
    }
    throw new jsXdr.XdrError(
      `TransactionResultExt: unknown v ${wire.v}`
    );
  }
  /**
   * Type guard narrowing an unknown value to a concrete TransactionResultExt variant.
   * Use this instead of `instanceof TransactionResultExt`: the exported `TransactionResultExt` value
   * is the abstract base, so `instanceof` narrows to the base (not the
   * variant union) and forces a cast. `TransactionResultExt.is(x)` narrows to the union.
   */
  static is(value) {
    return value instanceof TransactionResultExtBase;
  }
}
class TransactionResultExtV0 extends TransactionResultExtBase {
  type = "v0";
  get value() {
    return null;
  }
  toXdrObject() {
    return { v: 0 };
  }
}
const TransactionResultExt = TransactionResultExtBase;

exports.TransactionResultExt = TransactionResultExt;
exports.TransactionResultExtV0 = TransactionResultExtV0;
//# sourceMappingURL=transaction-result-ext.js.map
