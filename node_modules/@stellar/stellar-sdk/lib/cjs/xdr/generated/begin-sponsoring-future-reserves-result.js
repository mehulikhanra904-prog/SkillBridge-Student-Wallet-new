'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var beginSponsoringFutureReservesResultCode = require('./begin-sponsoring-future-reserves-result-code.js');

class BeginSponsoringFutureReservesResultBase extends xdrValue.XdrValue {
  constructor() {
    super();
    if (new.target === BeginSponsoringFutureReservesResultBase) {
      throw new TypeError(
        "new xdr.BeginSponsoringFutureReservesResult(...) is not supported: XDR unions are built from per-variant factories. Call xdr.BeginSponsoringFutureReservesResult.beginSponsoringFutureReservesSuccess() (or another arm factory) instead."
      );
    }
  }
  static schema = jsXdr.union("BeginSponsoringFutureReservesResult", {
    switchOn: beginSponsoringFutureReservesResultCode.BeginSponsoringFutureReservesResultCode.schema,
    cases: [
      jsXdr.case("beginSponsoringFutureReservesSuccess", 0, jsXdr.void()),
      jsXdr.case("beginSponsoringFutureReservesMalformed", -1, jsXdr.void()),
      jsXdr.case("beginSponsoringFutureReservesAlreadySponsored", -2, jsXdr.void()),
      jsXdr.case("beginSponsoringFutureReservesRecursive", -3, jsXdr.void())
    ],
    switchKey: "code"
  });
  static beginSponsoringFutureReservesSuccess() {
    return new BeginSponsoringFutureReservesResultSuccess();
  }
  static beginSponsoringFutureReservesMalformed() {
    return new BeginSponsoringFutureReservesResultMalformed();
  }
  static beginSponsoringFutureReservesAlreadySponsored() {
    return new BeginSponsoringFutureReservesResultAlreadySponsored();
  }
  static beginSponsoringFutureReservesRecursive() {
    return new BeginSponsoringFutureReservesResultRecursive();
  }
  static fromXdrObject(wire) {
    switch (wire.code) {
      case 0:
        return new BeginSponsoringFutureReservesResultSuccess();
      case -1:
        return new BeginSponsoringFutureReservesResultMalformed();
      case -2:
        return new BeginSponsoringFutureReservesResultAlreadySponsored();
      case -3:
        return new BeginSponsoringFutureReservesResultRecursive();
    }
    throw new jsXdr.XdrError(
      `BeginSponsoringFutureReservesResult: unknown code ${wire.code}`
    );
  }
  /**
   * Type guard narrowing an unknown value to a concrete BeginSponsoringFutureReservesResult variant.
   * Use this instead of `instanceof BeginSponsoringFutureReservesResult`: the exported `BeginSponsoringFutureReservesResult` value
   * is the abstract base, so `instanceof` narrows to the base (not the
   * variant union) and forces a cast. `BeginSponsoringFutureReservesResult.is(x)` narrows to the union.
   */
  static is(value) {
    return value instanceof BeginSponsoringFutureReservesResultBase;
  }
}
class BeginSponsoringFutureReservesResultSuccess extends BeginSponsoringFutureReservesResultBase {
  type = "beginSponsoringFutureReservesSuccess";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: 0 };
  }
}
class BeginSponsoringFutureReservesResultMalformed extends BeginSponsoringFutureReservesResultBase {
  type = "beginSponsoringFutureReservesMalformed";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -1 };
  }
}
class BeginSponsoringFutureReservesResultAlreadySponsored extends BeginSponsoringFutureReservesResultBase {
  type = "beginSponsoringFutureReservesAlreadySponsored";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -2 };
  }
}
class BeginSponsoringFutureReservesResultRecursive extends BeginSponsoringFutureReservesResultBase {
  type = "beginSponsoringFutureReservesRecursive";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -3 };
  }
}
const BeginSponsoringFutureReservesResult = BeginSponsoringFutureReservesResultBase;

exports.BeginSponsoringFutureReservesResult = BeginSponsoringFutureReservesResult;
exports.BeginSponsoringFutureReservesResultAlreadySponsored = BeginSponsoringFutureReservesResultAlreadySponsored;
exports.BeginSponsoringFutureReservesResultMalformed = BeginSponsoringFutureReservesResultMalformed;
exports.BeginSponsoringFutureReservesResultRecursive = BeginSponsoringFutureReservesResultRecursive;
exports.BeginSponsoringFutureReservesResultSuccess = BeginSponsoringFutureReservesResultSuccess;
//# sourceMappingURL=begin-sponsoring-future-reserves-result.js.map
