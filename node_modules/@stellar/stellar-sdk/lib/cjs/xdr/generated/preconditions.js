'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var preconditionType = require('./precondition-type.js');
var timeBounds = require('./time-bounds.js');
var preconditionsV2 = require('./preconditions-v2.js');

class PreconditionsBase extends xdrValue.XdrValue {
  constructor() {
    super();
    if (new.target === PreconditionsBase) {
      throw new TypeError(
        "new xdr.Preconditions(...) is not supported: XDR unions are built from per-variant factories. Call xdr.Preconditions.precondNone() (or another arm factory) instead."
      );
    }
  }
  static schema = jsXdr.union("Preconditions", {
    switchOn: preconditionType.PreconditionType.schema,
    cases: [
      jsXdr.case("precondNone", 0, jsXdr.void()),
      jsXdr.case("precondTime", 1, jsXdr.field("timeBounds", timeBounds.TimeBounds.schema)),
      jsXdr.case("precondV2", 2, jsXdr.field("v2", preconditionsV2.PreconditionsV2.schema))
    ]
  });
  static precondNone() {
    return new PreconditionsNone();
  }
  static precondTime(timeBounds) {
    return new PreconditionsTime(timeBounds);
  }
  static precondV2(v2) {
    return new PreconditionsV2Arm(v2);
  }
  static fromXdrObject(wire) {
    switch (wire.type) {
      case 0:
        return new PreconditionsNone();
      case 1:
        return new PreconditionsTime(timeBounds.TimeBounds.fromXdrObject(wire.timeBounds));
      case 2:
        return new PreconditionsV2Arm(preconditionsV2.PreconditionsV2.fromXdrObject(wire.v2));
    }
    throw new jsXdr.XdrError(
      `Preconditions: unknown type ${wire.type}`
    );
  }
  /**
   * Type guard narrowing an unknown value to a concrete Preconditions variant.
   * Use this instead of `instanceof Preconditions`: the exported `Preconditions` value
   * is the abstract base, so `instanceof` narrows to the base (not the
   * variant union) and forces a cast. `Preconditions.is(x)` narrows to the union.
   */
  static is(value) {
    return value instanceof PreconditionsBase;
  }
}
class PreconditionsNone extends PreconditionsBase {
  type = "precondNone";
  get value() {
    return null;
  }
  toXdrObject() {
    return { type: 0 };
  }
}
class PreconditionsTime extends PreconditionsBase {
  type = "precondTime";
  timeBounds;
  constructor(timeBounds) {
    super();
    this.timeBounds = timeBounds;
  }
  get value() {
    return this.timeBounds;
  }
  toXdrObject() {
    return { type: 1, timeBounds: this.timeBounds.toXdrObject() };
  }
}
class PreconditionsV2Arm extends PreconditionsBase {
  type = "precondV2";
  v2;
  constructor(v2) {
    super();
    this.v2 = v2;
  }
  get value() {
    return this.v2;
  }
  toXdrObject() {
    return { type: 2, v2: this.v2.toXdrObject() };
  }
}
const Preconditions = PreconditionsBase;

exports.Preconditions = Preconditions;
exports.PreconditionsNone = PreconditionsNone;
exports.PreconditionsTime = PreconditionsTime;
exports.PreconditionsV2Arm = PreconditionsV2Arm;
//# sourceMappingURL=preconditions.js.map
