'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var inflationResultCode = require('./inflation-result-code.js');
var inflationPayout = require('./inflation-payout.js');

class InflationResultBase extends xdrValue.XdrValue {
  constructor() {
    super();
    if (new.target === InflationResultBase) {
      throw new TypeError(
        "new xdr.InflationResult(...) is not supported: XDR unions are built from per-variant factories. Call xdr.InflationResult.inflationSuccess(...) (or another arm factory) instead."
      );
    }
  }
  static schema = jsXdr.union(
    "InflationResult",
    {
      switchOn: inflationResultCode.InflationResultCode.schema,
      cases: [
        jsXdr.case(
          "inflationSuccess",
          0,
          jsXdr.field("payouts", jsXdr.array(inflationPayout.InflationPayout.schema, jsXdr.UNBOUNDED_MAX_LENGTH))
        ),
        jsXdr.case("inflationNotTime", -1, jsXdr.void())
      ],
      switchKey: "code"
    }
  );
  static inflationSuccess(payouts) {
    return new InflationResultSuccess(payouts);
  }
  static inflationNotTime() {
    return new InflationResultNotTime();
  }
  static fromXdrObject(wire) {
    switch (wire.code) {
      case 0:
        return new InflationResultSuccess(
          wire.payouts.map((w) => inflationPayout.InflationPayout.fromXdrObject(w))
        );
      case -1:
        return new InflationResultNotTime();
    }
    throw new jsXdr.XdrError(
      `InflationResult: unknown code ${wire.code}`
    );
  }
  /**
   * Type guard narrowing an unknown value to a concrete InflationResult variant.
   * Use this instead of `instanceof InflationResult`: the exported `InflationResult` value
   * is the abstract base, so `instanceof` narrows to the base (not the
   * variant union) and forces a cast. `InflationResult.is(x)` narrows to the union.
   */
  static is(value) {
    return value instanceof InflationResultBase;
  }
}
class InflationResultSuccess extends InflationResultBase {
  type = "inflationSuccess";
  payouts;
  constructor(payouts) {
    super();
    this.payouts = payouts;
  }
  get value() {
    return this.payouts;
  }
  toXdrObject() {
    return { code: 0, payouts: this.payouts.map((v) => v.toXdrObject()) };
  }
}
class InflationResultNotTime extends InflationResultBase {
  type = "inflationNotTime";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -1 };
  }
}
const InflationResult = InflationResultBase;

exports.InflationResult = InflationResult;
exports.InflationResultNotTime = InflationResultNotTime;
exports.InflationResultSuccess = InflationResultSuccess;
//# sourceMappingURL=inflation-result.js.map
