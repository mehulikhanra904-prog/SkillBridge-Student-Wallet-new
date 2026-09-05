'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var setTrustLineFlagsResultCode = require('./set-trust-line-flags-result-code.js');

class SetTrustLineFlagsResultBase extends xdrValue.XdrValue {
  constructor() {
    super();
    if (new.target === SetTrustLineFlagsResultBase) {
      throw new TypeError(
        "new xdr.SetTrustLineFlagsResult(...) is not supported: XDR unions are built from per-variant factories. Call xdr.SetTrustLineFlagsResult.setTrustLineFlagsSuccess() (or another arm factory) instead."
      );
    }
  }
  static schema = jsXdr.union(
    "SetTrustLineFlagsResult",
    {
      switchOn: setTrustLineFlagsResultCode.SetTrustLineFlagsResultCode.schema,
      cases: [
        jsXdr.case("setTrustLineFlagsSuccess", 0, jsXdr.void()),
        jsXdr.case("setTrustLineFlagsMalformed", -1, jsXdr.void()),
        jsXdr.case("setTrustLineFlagsNoTrustLine", -2, jsXdr.void()),
        jsXdr.case("setTrustLineFlagsCantRevoke", -3, jsXdr.void()),
        jsXdr.case("setTrustLineFlagsInvalidState", -4, jsXdr.void()),
        jsXdr.case("setTrustLineFlagsLowReserve", -5, jsXdr.void())
      ],
      switchKey: "code"
    }
  );
  static setTrustLineFlagsSuccess() {
    return new SetTrustLineFlagsResultSuccess();
  }
  static setTrustLineFlagsMalformed() {
    return new SetTrustLineFlagsResultMalformed();
  }
  static setTrustLineFlagsNoTrustLine() {
    return new SetTrustLineFlagsResultNoTrustLine();
  }
  static setTrustLineFlagsCantRevoke() {
    return new SetTrustLineFlagsResultCantRevoke();
  }
  static setTrustLineFlagsInvalidState() {
    return new SetTrustLineFlagsResultInvalidState();
  }
  static setTrustLineFlagsLowReserve() {
    return new SetTrustLineFlagsResultLowReserve();
  }
  static fromXdrObject(wire) {
    switch (wire.code) {
      case 0:
        return new SetTrustLineFlagsResultSuccess();
      case -1:
        return new SetTrustLineFlagsResultMalformed();
      case -2:
        return new SetTrustLineFlagsResultNoTrustLine();
      case -3:
        return new SetTrustLineFlagsResultCantRevoke();
      case -4:
        return new SetTrustLineFlagsResultInvalidState();
      case -5:
        return new SetTrustLineFlagsResultLowReserve();
    }
    throw new jsXdr.XdrError(
      `SetTrustLineFlagsResult: unknown code ${wire.code}`
    );
  }
  /**
   * Type guard narrowing an unknown value to a concrete SetTrustLineFlagsResult variant.
   * Use this instead of `instanceof SetTrustLineFlagsResult`: the exported `SetTrustLineFlagsResult` value
   * is the abstract base, so `instanceof` narrows to the base (not the
   * variant union) and forces a cast. `SetTrustLineFlagsResult.is(x)` narrows to the union.
   */
  static is(value) {
    return value instanceof SetTrustLineFlagsResultBase;
  }
}
class SetTrustLineFlagsResultSuccess extends SetTrustLineFlagsResultBase {
  type = "setTrustLineFlagsSuccess";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: 0 };
  }
}
class SetTrustLineFlagsResultMalformed extends SetTrustLineFlagsResultBase {
  type = "setTrustLineFlagsMalformed";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -1 };
  }
}
class SetTrustLineFlagsResultNoTrustLine extends SetTrustLineFlagsResultBase {
  type = "setTrustLineFlagsNoTrustLine";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -2 };
  }
}
class SetTrustLineFlagsResultCantRevoke extends SetTrustLineFlagsResultBase {
  type = "setTrustLineFlagsCantRevoke";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -3 };
  }
}
class SetTrustLineFlagsResultInvalidState extends SetTrustLineFlagsResultBase {
  type = "setTrustLineFlagsInvalidState";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -4 };
  }
}
class SetTrustLineFlagsResultLowReserve extends SetTrustLineFlagsResultBase {
  type = "setTrustLineFlagsLowReserve";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -5 };
  }
}
const SetTrustLineFlagsResult = SetTrustLineFlagsResultBase;

exports.SetTrustLineFlagsResult = SetTrustLineFlagsResult;
exports.SetTrustLineFlagsResultCantRevoke = SetTrustLineFlagsResultCantRevoke;
exports.SetTrustLineFlagsResultInvalidState = SetTrustLineFlagsResultInvalidState;
exports.SetTrustLineFlagsResultLowReserve = SetTrustLineFlagsResultLowReserve;
exports.SetTrustLineFlagsResultMalformed = SetTrustLineFlagsResultMalformed;
exports.SetTrustLineFlagsResultNoTrustLine = SetTrustLineFlagsResultNoTrustLine;
exports.SetTrustLineFlagsResultSuccess = SetTrustLineFlagsResultSuccess;
//# sourceMappingURL=set-trust-line-flags-result.js.map
