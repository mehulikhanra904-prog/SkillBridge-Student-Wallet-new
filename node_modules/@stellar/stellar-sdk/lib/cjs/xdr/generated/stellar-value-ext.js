'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var stellarValueType = require('./stellar-value-type.js');
var ledgerCloseValueSignature = require('./ledger-close-value-signature.js');
var stellarValueProposedValue = require('./stellar-value-proposed-value.js');

class StellarValueExtBase extends xdrValue.XdrValue {
  constructor() {
    super();
    if (new.target === StellarValueExtBase) {
      throw new TypeError(
        "new xdr.StellarValueExt(...) is not supported: XDR unions are built from per-variant factories. Call xdr.StellarValueExt.stellarValueBasic() (or another arm factory) instead."
      );
    }
  }
  static schema = jsXdr.union(
    "StellarValueExt",
    {
      switchOn: stellarValueType.StellarValueType.schema,
      cases: [
        jsXdr.case("stellarValueBasic", 0, jsXdr.void()),
        jsXdr.case(
          "stellarValueSigned",
          1,
          jsXdr.field("lcValueSignature", ledgerCloseValueSignature.LedgerCloseValueSignature.schema)
        ),
        jsXdr.case(
          "stellarValueEmptyTxSet",
          2,
          jsXdr.field("proposedValue", stellarValueProposedValue.StellarValueProposedValue.schema)
        )
      ],
      switchKey: "v"
    }
  );
  static stellarValueBasic() {
    return new StellarValueExtBasic();
  }
  static stellarValueSigned(lcValueSignature) {
    return new StellarValueExtSigned(lcValueSignature);
  }
  static stellarValueEmptyTxSet(proposedValue) {
    return new StellarValueExtEmptyTxSet(proposedValue);
  }
  static fromXdrObject(wire) {
    switch (wire.v) {
      case 0:
        return new StellarValueExtBasic();
      case 1:
        return new StellarValueExtSigned(
          ledgerCloseValueSignature.LedgerCloseValueSignature.fromXdrObject(wire.lcValueSignature)
        );
      case 2:
        return new StellarValueExtEmptyTxSet(
          stellarValueProposedValue.StellarValueProposedValue.fromXdrObject(wire.proposedValue)
        );
    }
    throw new jsXdr.XdrError(
      `StellarValueExt: unknown v ${wire.v}`
    );
  }
  /**
   * Type guard narrowing an unknown value to a concrete StellarValueExt variant.
   * Use this instead of `instanceof StellarValueExt`: the exported `StellarValueExt` value
   * is the abstract base, so `instanceof` narrows to the base (not the
   * variant union) and forces a cast. `StellarValueExt.is(x)` narrows to the union.
   */
  static is(value) {
    return value instanceof StellarValueExtBase;
  }
}
class StellarValueExtBasic extends StellarValueExtBase {
  type = "stellarValueBasic";
  get value() {
    return null;
  }
  toXdrObject() {
    return { v: 0 };
  }
}
class StellarValueExtSigned extends StellarValueExtBase {
  type = "stellarValueSigned";
  lcValueSignature;
  constructor(lcValueSignature) {
    super();
    this.lcValueSignature = lcValueSignature;
  }
  get value() {
    return this.lcValueSignature;
  }
  toXdrObject() {
    return { v: 1, lcValueSignature: this.lcValueSignature.toXdrObject() };
  }
}
class StellarValueExtEmptyTxSet extends StellarValueExtBase {
  type = "stellarValueEmptyTxSet";
  proposedValue;
  constructor(proposedValue) {
    super();
    this.proposedValue = proposedValue;
  }
  get value() {
    return this.proposedValue;
  }
  toXdrObject() {
    return { v: 2, proposedValue: this.proposedValue.toXdrObject() };
  }
}
const StellarValueExt = StellarValueExtBase;

exports.StellarValueExt = StellarValueExt;
exports.StellarValueExtBasic = StellarValueExtBasic;
exports.StellarValueExtEmptyTxSet = StellarValueExtEmptyTxSet;
exports.StellarValueExtSigned = StellarValueExtSigned;
//# sourceMappingURL=stellar-value-ext.js.map
