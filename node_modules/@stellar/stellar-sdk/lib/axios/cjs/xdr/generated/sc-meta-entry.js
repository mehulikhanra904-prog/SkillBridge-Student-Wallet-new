'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var scMetaKind = require('./sc-meta-kind.js');
var scMetaV0 = require('./sc-meta-v0.js');

class ScMetaEntryBase extends xdrValue.XdrValue {
  constructor() {
    super();
    if (new.target === ScMetaEntryBase) {
      throw new TypeError(
        "new xdr.ScMetaEntry(...) is not supported: XDR unions are built from per-variant factories. Call xdr.ScMetaEntry.scMetaV0(...) (or another arm factory) instead."
      );
    }
  }
  static schema = jsXdr.union("ScMetaEntry", {
    switchOn: scMetaKind.ScMetaKind.schema,
    cases: [jsXdr.case("scMetaV0", 0, jsXdr.field("v0", scMetaV0.ScMetaV0.schema))],
    switchKey: "kind"
  });
  static scMetaV0(v0) {
    return new ScMetaEntryScMetaV0(v0);
  }
  static fromXdrObject(wire) {
    switch (wire.kind) {
      case 0:
        return new ScMetaEntryScMetaV0(scMetaV0.ScMetaV0.fromXdrObject(wire.v0));
    }
    throw new jsXdr.XdrError(
      `ScMetaEntry: unknown kind ${wire.kind}`
    );
  }
  /**
   * Type guard narrowing an unknown value to a concrete ScMetaEntry variant.
   * Use this instead of `instanceof ScMetaEntry`: the exported `ScMetaEntry` value
   * is the abstract base, so `instanceof` narrows to the base (not the
   * variant union) and forces a cast. `ScMetaEntry.is(x)` narrows to the union.
   */
  static is(value) {
    return value instanceof ScMetaEntryBase;
  }
}
class ScMetaEntryScMetaV0 extends ScMetaEntryBase {
  type = "scMetaV0";
  v0;
  constructor(v0) {
    super();
    this.v0 = v0;
  }
  get value() {
    return this.v0;
  }
  toXdrObject() {
    return { kind: 0, v0: this.v0.toXdrObject() };
  }
}
const ScMetaEntry = ScMetaEntryBase;

exports.ScMetaEntry = ScMetaEntry;
exports.ScMetaEntryScMetaV0 = ScMetaEntryScMetaV0;
//# sourceMappingURL=sc-meta-entry.js.map
