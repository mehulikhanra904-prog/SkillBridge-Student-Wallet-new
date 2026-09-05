'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var trustLineEntryV1 = require('./trust-line-entry-v1.js');

class TrustLineEntryExtBase extends xdrValue.XdrValue {
  constructor() {
    super();
    if (new.target === TrustLineEntryExtBase) {
      throw new TypeError(
        "new xdr.TrustLineEntryExt(...) is not supported: XDR unions are built from per-variant factories. Call xdr.TrustLineEntryExt.v0() (or another arm factory) instead."
      );
    }
  }
  static schema = jsXdr.union(
    "TrustLineEntryExt",
    {
      switchOn: jsXdr.int32(),
      cases: [
        jsXdr.case("v0", 0, jsXdr.void()),
        jsXdr.case("v1", 1, jsXdr.field("v1", trustLineEntryV1.TrustLineEntryV1.schema))
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
        return new TrustLineEntryExtV1(trustLineEntryV1.TrustLineEntryV1.fromXdrObject(wire.v1));
    }
    throw new jsXdr.XdrError(
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

exports.TrustLineEntryExt = TrustLineEntryExt;
exports.TrustLineEntryExtV0 = TrustLineEntryExtV0;
exports.TrustLineEntryExtV1 = TrustLineEntryExtV1;
//# sourceMappingURL=trust-line-entry-ext.js.map
