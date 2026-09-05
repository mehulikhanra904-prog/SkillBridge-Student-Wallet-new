'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var allowTrustResultCode = require('./allow-trust-result-code.js');

class AllowTrustResultBase extends xdrValue.XdrValue {
  constructor() {
    super();
    if (new.target === AllowTrustResultBase) {
      throw new TypeError(
        "new xdr.AllowTrustResult(...) is not supported: XDR unions are built from per-variant factories. Call xdr.AllowTrustResult.allowTrustSuccess() (or another arm factory) instead."
      );
    }
  }
  static schema = jsXdr.union(
    "AllowTrustResult",
    {
      switchOn: allowTrustResultCode.AllowTrustResultCode.schema,
      cases: [
        jsXdr.case("allowTrustSuccess", 0, jsXdr.void()),
        jsXdr.case("allowTrustMalformed", -1, jsXdr.void()),
        jsXdr.case("allowTrustNoTrustLine", -2, jsXdr.void()),
        jsXdr.case("allowTrustTrustNotRequired", -3, jsXdr.void()),
        jsXdr.case("allowTrustCantRevoke", -4, jsXdr.void()),
        jsXdr.case("allowTrustSelfNotAllowed", -5, jsXdr.void()),
        jsXdr.case("allowTrustLowReserve", -6, jsXdr.void())
      ],
      switchKey: "code"
    }
  );
  static allowTrustSuccess() {
    return new AllowTrustResultSuccess();
  }
  static allowTrustMalformed() {
    return new AllowTrustResultMalformed();
  }
  static allowTrustNoTrustLine() {
    return new AllowTrustResultNoTrustLine();
  }
  static allowTrustTrustNotRequired() {
    return new AllowTrustResultTrustNotRequired();
  }
  static allowTrustCantRevoke() {
    return new AllowTrustResultCantRevoke();
  }
  static allowTrustSelfNotAllowed() {
    return new AllowTrustResultSelfNotAllowed();
  }
  static allowTrustLowReserve() {
    return new AllowTrustResultLowReserve();
  }
  static fromXdrObject(wire) {
    switch (wire.code) {
      case 0:
        return new AllowTrustResultSuccess();
      case -1:
        return new AllowTrustResultMalformed();
      case -2:
        return new AllowTrustResultNoTrustLine();
      case -3:
        return new AllowTrustResultTrustNotRequired();
      case -4:
        return new AllowTrustResultCantRevoke();
      case -5:
        return new AllowTrustResultSelfNotAllowed();
      case -6:
        return new AllowTrustResultLowReserve();
    }
    throw new jsXdr.XdrError(
      `AllowTrustResult: unknown code ${wire.code}`
    );
  }
  /**
   * Type guard narrowing an unknown value to a concrete AllowTrustResult variant.
   * Use this instead of `instanceof AllowTrustResult`: the exported `AllowTrustResult` value
   * is the abstract base, so `instanceof` narrows to the base (not the
   * variant union) and forces a cast. `AllowTrustResult.is(x)` narrows to the union.
   */
  static is(value) {
    return value instanceof AllowTrustResultBase;
  }
}
class AllowTrustResultSuccess extends AllowTrustResultBase {
  type = "allowTrustSuccess";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: 0 };
  }
}
class AllowTrustResultMalformed extends AllowTrustResultBase {
  type = "allowTrustMalformed";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -1 };
  }
}
class AllowTrustResultNoTrustLine extends AllowTrustResultBase {
  type = "allowTrustNoTrustLine";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -2 };
  }
}
class AllowTrustResultTrustNotRequired extends AllowTrustResultBase {
  type = "allowTrustTrustNotRequired";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -3 };
  }
}
class AllowTrustResultCantRevoke extends AllowTrustResultBase {
  type = "allowTrustCantRevoke";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -4 };
  }
}
class AllowTrustResultSelfNotAllowed extends AllowTrustResultBase {
  type = "allowTrustSelfNotAllowed";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -5 };
  }
}
class AllowTrustResultLowReserve extends AllowTrustResultBase {
  type = "allowTrustLowReserve";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -6 };
  }
}
const AllowTrustResult = AllowTrustResultBase;

exports.AllowTrustResult = AllowTrustResult;
exports.AllowTrustResultCantRevoke = AllowTrustResultCantRevoke;
exports.AllowTrustResultLowReserve = AllowTrustResultLowReserve;
exports.AllowTrustResultMalformed = AllowTrustResultMalformed;
exports.AllowTrustResultNoTrustLine = AllowTrustResultNoTrustLine;
exports.AllowTrustResultSelfNotAllowed = AllowTrustResultSelfNotAllowed;
exports.AllowTrustResultSuccess = AllowTrustResultSuccess;
exports.AllowTrustResultTrustNotRequired = AllowTrustResultTrustNotRequired;
//# sourceMappingURL=allow-trust-result.js.map
