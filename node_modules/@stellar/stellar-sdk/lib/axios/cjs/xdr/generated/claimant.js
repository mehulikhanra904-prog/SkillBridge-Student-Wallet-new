'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var claimantType = require('./claimant-type.js');
var claimantV0 = require('./claimant-v0.js');

class ClaimantBase extends xdrValue.XdrValue {
  constructor() {
    super();
    if (new.target === ClaimantBase) {
      throw new TypeError(
        "new xdr.Claimant(...) is not supported: XDR unions are built from per-variant factories. Call xdr.Claimant.claimantTypeV0(...) (or another arm factory) instead."
      );
    }
  }
  static schema = jsXdr.union("Claimant", {
    switchOn: claimantType.ClaimantType.schema,
    cases: [jsXdr.case("claimantTypeV0", 0, jsXdr.field("v0", claimantV0.ClaimantV0.schema))]
  });
  static claimantTypeV0(v0) {
    return new ClaimantV0Arm(v0);
  }
  static fromXdrObject(wire) {
    switch (wire.type) {
      case 0:
        return new ClaimantV0Arm(claimantV0.ClaimantV0.fromXdrObject(wire.v0));
    }
    throw new jsXdr.XdrError(
      `Claimant: unknown type ${wire.type}`
    );
  }
  /**
   * Type guard narrowing an unknown value to a concrete Claimant variant.
   * Use this instead of `instanceof Claimant`: the exported `Claimant` value
   * is the abstract base, so `instanceof` narrows to the base (not the
   * variant union) and forces a cast. `Claimant.is(x)` narrows to the union.
   */
  static is(value) {
    return value instanceof ClaimantBase;
  }
}
class ClaimantV0Arm extends ClaimantBase {
  type = "claimantTypeV0";
  v0;
  constructor(v0) {
    super();
    this.v0 = v0;
  }
  get value() {
    return this.v0;
  }
  toXdrObject() {
    return { type: 0, v0: this.v0.toXdrObject() };
  }
}
const Claimant$1 = ClaimantBase;

exports.Claimant = Claimant$1;
exports.ClaimantV0Arm = ClaimantV0Arm;
//# sourceMappingURL=claimant.js.map
