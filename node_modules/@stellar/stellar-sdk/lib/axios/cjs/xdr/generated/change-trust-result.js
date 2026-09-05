'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var changeTrustResultCode = require('./change-trust-result-code.js');

class ChangeTrustResultBase extends xdrValue.XdrValue {
  constructor() {
    super();
    if (new.target === ChangeTrustResultBase) {
      throw new TypeError(
        "new xdr.ChangeTrustResult(...) is not supported: XDR unions are built from per-variant factories. Call xdr.ChangeTrustResult.changeTrustSuccess() (or another arm factory) instead."
      );
    }
  }
  static schema = jsXdr.union(
    "ChangeTrustResult",
    {
      switchOn: changeTrustResultCode.ChangeTrustResultCode.schema,
      cases: [
        jsXdr.case("changeTrustSuccess", 0, jsXdr.void()),
        jsXdr.case("changeTrustMalformed", -1, jsXdr.void()),
        jsXdr.case("changeTrustNoIssuer", -2, jsXdr.void()),
        jsXdr.case("changeTrustInvalidLimit", -3, jsXdr.void()),
        jsXdr.case("changeTrustLowReserve", -4, jsXdr.void()),
        jsXdr.case("changeTrustSelfNotAllowed", -5, jsXdr.void()),
        jsXdr.case("changeTrustTrustLineMissing", -6, jsXdr.void()),
        jsXdr.case("changeTrustCannotDelete", -7, jsXdr.void()),
        jsXdr.case("changeTrustNotAuthMaintainLiabilities", -8, jsXdr.void())
      ],
      switchKey: "code"
    }
  );
  static changeTrustSuccess() {
    return new ChangeTrustResultSuccess();
  }
  static changeTrustMalformed() {
    return new ChangeTrustResultMalformed();
  }
  static changeTrustNoIssuer() {
    return new ChangeTrustResultNoIssuer();
  }
  static changeTrustInvalidLimit() {
    return new ChangeTrustResultInvalidLimit();
  }
  static changeTrustLowReserve() {
    return new ChangeTrustResultLowReserve();
  }
  static changeTrustSelfNotAllowed() {
    return new ChangeTrustResultSelfNotAllowed();
  }
  static changeTrustTrustLineMissing() {
    return new ChangeTrustResultTrustLineMissing();
  }
  static changeTrustCannotDelete() {
    return new ChangeTrustResultCannotDelete();
  }
  static changeTrustNotAuthMaintainLiabilities() {
    return new ChangeTrustResultNotAuthMaintainLiabilities();
  }
  static fromXdrObject(wire) {
    switch (wire.code) {
      case 0:
        return new ChangeTrustResultSuccess();
      case -1:
        return new ChangeTrustResultMalformed();
      case -2:
        return new ChangeTrustResultNoIssuer();
      case -3:
        return new ChangeTrustResultInvalidLimit();
      case -4:
        return new ChangeTrustResultLowReserve();
      case -5:
        return new ChangeTrustResultSelfNotAllowed();
      case -6:
        return new ChangeTrustResultTrustLineMissing();
      case -7:
        return new ChangeTrustResultCannotDelete();
      case -8:
        return new ChangeTrustResultNotAuthMaintainLiabilities();
    }
    throw new jsXdr.XdrError(
      `ChangeTrustResult: unknown code ${wire.code}`
    );
  }
  /**
   * Type guard narrowing an unknown value to a concrete ChangeTrustResult variant.
   * Use this instead of `instanceof ChangeTrustResult`: the exported `ChangeTrustResult` value
   * is the abstract base, so `instanceof` narrows to the base (not the
   * variant union) and forces a cast. `ChangeTrustResult.is(x)` narrows to the union.
   */
  static is(value) {
    return value instanceof ChangeTrustResultBase;
  }
}
class ChangeTrustResultSuccess extends ChangeTrustResultBase {
  type = "changeTrustSuccess";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: 0 };
  }
}
class ChangeTrustResultMalformed extends ChangeTrustResultBase {
  type = "changeTrustMalformed";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -1 };
  }
}
class ChangeTrustResultNoIssuer extends ChangeTrustResultBase {
  type = "changeTrustNoIssuer";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -2 };
  }
}
class ChangeTrustResultInvalidLimit extends ChangeTrustResultBase {
  type = "changeTrustInvalidLimit";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -3 };
  }
}
class ChangeTrustResultLowReserve extends ChangeTrustResultBase {
  type = "changeTrustLowReserve";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -4 };
  }
}
class ChangeTrustResultSelfNotAllowed extends ChangeTrustResultBase {
  type = "changeTrustSelfNotAllowed";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -5 };
  }
}
class ChangeTrustResultTrustLineMissing extends ChangeTrustResultBase {
  type = "changeTrustTrustLineMissing";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -6 };
  }
}
class ChangeTrustResultCannotDelete extends ChangeTrustResultBase {
  type = "changeTrustCannotDelete";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -7 };
  }
}
class ChangeTrustResultNotAuthMaintainLiabilities extends ChangeTrustResultBase {
  type = "changeTrustNotAuthMaintainLiabilities";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -8 };
  }
}
const ChangeTrustResult = ChangeTrustResultBase;

exports.ChangeTrustResult = ChangeTrustResult;
exports.ChangeTrustResultCannotDelete = ChangeTrustResultCannotDelete;
exports.ChangeTrustResultInvalidLimit = ChangeTrustResultInvalidLimit;
exports.ChangeTrustResultLowReserve = ChangeTrustResultLowReserve;
exports.ChangeTrustResultMalformed = ChangeTrustResultMalformed;
exports.ChangeTrustResultNoIssuer = ChangeTrustResultNoIssuer;
exports.ChangeTrustResultNotAuthMaintainLiabilities = ChangeTrustResultNotAuthMaintainLiabilities;
exports.ChangeTrustResultSelfNotAllowed = ChangeTrustResultSelfNotAllowed;
exports.ChangeTrustResultSuccess = ChangeTrustResultSuccess;
exports.ChangeTrustResultTrustLineMissing = ChangeTrustResultTrustLineMissing;
//# sourceMappingURL=change-trust-result.js.map
