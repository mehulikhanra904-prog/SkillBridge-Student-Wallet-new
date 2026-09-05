'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var extendFootprintTtlResultCode = require('./extend-footprint-ttl-result-code.js');

class ExtendFootprintTtlResultBase extends xdrValue.XdrValue {
  constructor() {
    super();
    if (new.target === ExtendFootprintTtlResultBase) {
      throw new TypeError(
        "new xdr.ExtendFootprintTtlResult(...) is not supported: XDR unions are built from per-variant factories. Call xdr.ExtendFootprintTtlResult.extendFootprintTtlSuccess() (or another arm factory) instead."
      );
    }
  }
  static schema = jsXdr.union(
    "ExtendFootprintTtlResult",
    {
      switchOn: extendFootprintTtlResultCode.ExtendFootprintTtlResultCode.schema,
      cases: [
        jsXdr.case("extendFootprintTtlSuccess", 0, jsXdr.void()),
        jsXdr.case("extendFootprintTtlMalformed", -1, jsXdr.void()),
        jsXdr.case("extendFootprintTtlResourceLimitExceeded", -2, jsXdr.void()),
        jsXdr.case("extendFootprintTtlInsufficientRefundableFee", -3, jsXdr.void())
      ],
      switchKey: "code"
    }
  );
  static extendFootprintTtlSuccess() {
    return new ExtendFootprintTtlResultSuccess();
  }
  static extendFootprintTtlMalformed() {
    return new ExtendFootprintTtlResultMalformed();
  }
  static extendFootprintTtlResourceLimitExceeded() {
    return new ExtendFootprintTtlResultResourceLimitExceeded();
  }
  static extendFootprintTtlInsufficientRefundableFee() {
    return new ExtendFootprintTtlResultInsufficientRefundableFee();
  }
  static fromXdrObject(wire) {
    switch (wire.code) {
      case 0:
        return new ExtendFootprintTtlResultSuccess();
      case -1:
        return new ExtendFootprintTtlResultMalformed();
      case -2:
        return new ExtendFootprintTtlResultResourceLimitExceeded();
      case -3:
        return new ExtendFootprintTtlResultInsufficientRefundableFee();
    }
    throw new jsXdr.XdrError(
      `ExtendFootprintTtlResult: unknown code ${wire.code}`
    );
  }
  /**
   * Type guard narrowing an unknown value to a concrete ExtendFootprintTtlResult variant.
   * Use this instead of `instanceof ExtendFootprintTtlResult`: the exported `ExtendFootprintTtlResult` value
   * is the abstract base, so `instanceof` narrows to the base (not the
   * variant union) and forces a cast. `ExtendFootprintTtlResult.is(x)` narrows to the union.
   */
  static is(value) {
    return value instanceof ExtendFootprintTtlResultBase;
  }
}
class ExtendFootprintTtlResultSuccess extends ExtendFootprintTtlResultBase {
  type = "extendFootprintTtlSuccess";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: 0 };
  }
}
class ExtendFootprintTtlResultMalformed extends ExtendFootprintTtlResultBase {
  type = "extendFootprintTtlMalformed";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -1 };
  }
}
class ExtendFootprintTtlResultResourceLimitExceeded extends ExtendFootprintTtlResultBase {
  type = "extendFootprintTtlResourceLimitExceeded";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -2 };
  }
}
class ExtendFootprintTtlResultInsufficientRefundableFee extends ExtendFootprintTtlResultBase {
  type = "extendFootprintTtlInsufficientRefundableFee";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -3 };
  }
}
const ExtendFootprintTtlResult = ExtendFootprintTtlResultBase;

exports.ExtendFootprintTtlResult = ExtendFootprintTtlResult;
exports.ExtendFootprintTtlResultInsufficientRefundableFee = ExtendFootprintTtlResultInsufficientRefundableFee;
exports.ExtendFootprintTtlResultMalformed = ExtendFootprintTtlResultMalformed;
exports.ExtendFootprintTtlResultResourceLimitExceeded = ExtendFootprintTtlResultResourceLimitExceeded;
exports.ExtendFootprintTtlResultSuccess = ExtendFootprintTtlResultSuccess;
//# sourceMappingURL=extend-footprint-ttl-result.js.map
