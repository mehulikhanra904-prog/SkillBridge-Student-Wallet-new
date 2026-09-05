'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var sorobanResourcesExtV0 = require('./soroban-resources-ext-v0.js');

class SorobanTransactionDataExtBase extends xdrValue.XdrValue {
  constructor() {
    super();
    if (new.target === SorobanTransactionDataExtBase) {
      throw new TypeError(
        "new xdr.SorobanTransactionDataExt(...) is not supported: XDR unions are built from per-variant factories. Call xdr.SorobanTransactionDataExt.v0() (or another arm factory) instead."
      );
    }
  }
  static schema = jsXdr.union(
    "SorobanTransactionDataExt",
    {
      switchOn: jsXdr.int32(),
      cases: [
        jsXdr.case("v0", 0, jsXdr.void()),
        jsXdr.case(
          "resourceExt",
          1,
          jsXdr.field("resourceExt", sorobanResourcesExtV0.SorobanResourcesExtV0.schema)
        )
      ],
      switchKey: "v"
    }
  );
  static v0() {
    return new SorobanTransactionDataExtV0();
  }
  static resourceExt(resourceExt) {
    return new SorobanTransactionDataExtResourceExt(resourceExt);
  }
  static fromXdrObject(wire) {
    switch (wire.v) {
      case 0:
        return new SorobanTransactionDataExtV0();
      case 1:
        return new SorobanTransactionDataExtResourceExt(
          sorobanResourcesExtV0.SorobanResourcesExtV0.fromXdrObject(wire.resourceExt)
        );
    }
    throw new jsXdr.XdrError(
      `SorobanTransactionDataExt: unknown v ${wire.v}`
    );
  }
  /**
   * Type guard narrowing an unknown value to a concrete SorobanTransactionDataExt variant.
   * Use this instead of `instanceof SorobanTransactionDataExt`: the exported `SorobanTransactionDataExt` value
   * is the abstract base, so `instanceof` narrows to the base (not the
   * variant union) and forces a cast. `SorobanTransactionDataExt.is(x)` narrows to the union.
   */
  static is(value) {
    return value instanceof SorobanTransactionDataExtBase;
  }
}
class SorobanTransactionDataExtV0 extends SorobanTransactionDataExtBase {
  type = "v0";
  get value() {
    return null;
  }
  toXdrObject() {
    return { v: 0 };
  }
}
class SorobanTransactionDataExtResourceExt extends SorobanTransactionDataExtBase {
  type = "resourceExt";
  resourceExt;
  constructor(resourceExt) {
    super();
    this.resourceExt = resourceExt;
  }
  get value() {
    return this.resourceExt;
  }
  toXdrObject() {
    return { v: 1, resourceExt: this.resourceExt.toXdrObject() };
  }
}
const SorobanTransactionDataExt = SorobanTransactionDataExtBase;

exports.SorobanTransactionDataExt = SorobanTransactionDataExt;
exports.SorobanTransactionDataExtResourceExt = SorobanTransactionDataExtResourceExt;
exports.SorobanTransactionDataExtV0 = SorobanTransactionDataExtV0;
//# sourceMappingURL=soroban-transaction-data-ext.js.map
