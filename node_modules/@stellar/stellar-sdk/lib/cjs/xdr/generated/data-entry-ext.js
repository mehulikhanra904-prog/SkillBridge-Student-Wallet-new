'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');

class DataEntryExtBase extends xdrValue.XdrValue {
  constructor() {
    super();
    if (new.target === DataEntryExtBase) {
      throw new TypeError(
        "new xdr.DataEntryExt(...) is not supported: XDR unions are built from per-variant factories. Call xdr.DataEntryExt.v0() (or another arm factory) instead."
      );
    }
  }
  static schema = jsXdr.union("DataEntryExt", {
    switchOn: jsXdr.int32(),
    cases: [jsXdr.case("v0", 0, jsXdr.void())],
    switchKey: "v"
  });
  static v0() {
    return new DataEntryExtV0();
  }
  static fromXdrObject(wire) {
    switch (wire.v) {
      case 0:
        return new DataEntryExtV0();
    }
    throw new jsXdr.XdrError(`DataEntryExt: unknown v ${wire.v}`);
  }
  /**
   * Type guard narrowing an unknown value to a concrete DataEntryExt variant.
   * Use this instead of `instanceof DataEntryExt`: the exported `DataEntryExt` value
   * is the abstract base, so `instanceof` narrows to the base (not the
   * variant union) and forces a cast. `DataEntryExt.is(x)` narrows to the union.
   */
  static is(value) {
    return value instanceof DataEntryExtBase;
  }
}
class DataEntryExtV0 extends DataEntryExtBase {
  type = "v0";
  get value() {
    return null;
  }
  toXdrObject() {
    return { v: 0 };
  }
}
const DataEntryExt = DataEntryExtBase;

exports.DataEntryExt = DataEntryExt;
exports.DataEntryExtV0 = DataEntryExtV0;
//# sourceMappingURL=data-entry-ext.js.map
