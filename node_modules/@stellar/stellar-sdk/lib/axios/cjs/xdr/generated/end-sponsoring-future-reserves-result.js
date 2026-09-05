'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var endSponsoringFutureReservesResultCode = require('./end-sponsoring-future-reserves-result-code.js');

class EndSponsoringFutureReservesResultBase extends xdrValue.XdrValue {
  constructor() {
    super();
    if (new.target === EndSponsoringFutureReservesResultBase) {
      throw new TypeError(
        "new xdr.EndSponsoringFutureReservesResult(...) is not supported: XDR unions are built from per-variant factories. Call xdr.EndSponsoringFutureReservesResult.endSponsoringFutureReservesSuccess() (or another arm factory) instead."
      );
    }
  }
  static schema = jsXdr.union("EndSponsoringFutureReservesResult", {
    switchOn: endSponsoringFutureReservesResultCode.EndSponsoringFutureReservesResultCode.schema,
    cases: [
      jsXdr.case("endSponsoringFutureReservesSuccess", 0, jsXdr.void()),
      jsXdr.case("endSponsoringFutureReservesNotSponsored", -1, jsXdr.void())
    ],
    switchKey: "code"
  });
  static endSponsoringFutureReservesSuccess() {
    return new EndSponsoringFutureReservesResultSuccess();
  }
  static endSponsoringFutureReservesNotSponsored() {
    return new EndSponsoringFutureReservesResultNotSponsored();
  }
  static fromXdrObject(wire) {
    switch (wire.code) {
      case 0:
        return new EndSponsoringFutureReservesResultSuccess();
      case -1:
        return new EndSponsoringFutureReservesResultNotSponsored();
    }
    throw new jsXdr.XdrError(
      `EndSponsoringFutureReservesResult: unknown code ${wire.code}`
    );
  }
  /**
   * Type guard narrowing an unknown value to a concrete EndSponsoringFutureReservesResult variant.
   * Use this instead of `instanceof EndSponsoringFutureReservesResult`: the exported `EndSponsoringFutureReservesResult` value
   * is the abstract base, so `instanceof` narrows to the base (not the
   * variant union) and forces a cast. `EndSponsoringFutureReservesResult.is(x)` narrows to the union.
   */
  static is(value) {
    return value instanceof EndSponsoringFutureReservesResultBase;
  }
}
class EndSponsoringFutureReservesResultSuccess extends EndSponsoringFutureReservesResultBase {
  type = "endSponsoringFutureReservesSuccess";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: 0 };
  }
}
class EndSponsoringFutureReservesResultNotSponsored extends EndSponsoringFutureReservesResultBase {
  type = "endSponsoringFutureReservesNotSponsored";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -1 };
  }
}
const EndSponsoringFutureReservesResult = EndSponsoringFutureReservesResultBase;

exports.EndSponsoringFutureReservesResult = EndSponsoringFutureReservesResult;
exports.EndSponsoringFutureReservesResultNotSponsored = EndSponsoringFutureReservesResultNotSponsored;
exports.EndSponsoringFutureReservesResultSuccess = EndSponsoringFutureReservesResultSuccess;
//# sourceMappingURL=end-sponsoring-future-reserves-result.js.map
