'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var invokeHostFunctionResultCode = require('./invoke-host-function-result-code.js');
var hash = require('./hash.js');

class InvokeHostFunctionResultBase extends xdrValue.XdrValue {
  constructor() {
    super();
    if (new.target === InvokeHostFunctionResultBase) {
      throw new TypeError(
        "new xdr.InvokeHostFunctionResult(...) is not supported: XDR unions are built from per-variant factories. Call xdr.InvokeHostFunctionResult.invokeHostFunctionSuccess(...) (or another arm factory) instead."
      );
    }
  }
  static schema = jsXdr.union(
    "InvokeHostFunctionResult",
    {
      switchOn: invokeHostFunctionResultCode.InvokeHostFunctionResultCode.schema,
      cases: [
        jsXdr.case("invokeHostFunctionSuccess", 0, jsXdr.field("success", hash.Hash.schema)),
        jsXdr.case("invokeHostFunctionMalformed", -1, jsXdr.void()),
        jsXdr.case("invokeHostFunctionTrapped", -2, jsXdr.void()),
        jsXdr.case("invokeHostFunctionResourceLimitExceeded", -3, jsXdr.void()),
        jsXdr.case("invokeHostFunctionEntryArchived", -4, jsXdr.void()),
        jsXdr.case("invokeHostFunctionInsufficientRefundableFee", -5, jsXdr.void())
      ],
      switchKey: "code"
    }
  );
  static invokeHostFunctionSuccess(success) {
    return new InvokeHostFunctionResultSuccess(success);
  }
  static invokeHostFunctionMalformed() {
    return new InvokeHostFunctionResultMalformed();
  }
  static invokeHostFunctionTrapped() {
    return new InvokeHostFunctionResultTrapped();
  }
  static invokeHostFunctionResourceLimitExceeded() {
    return new InvokeHostFunctionResultResourceLimitExceeded();
  }
  static invokeHostFunctionEntryArchived() {
    return new InvokeHostFunctionResultEntryArchived();
  }
  static invokeHostFunctionInsufficientRefundableFee() {
    return new InvokeHostFunctionResultInsufficientRefundableFee();
  }
  static fromXdrObject(wire) {
    switch (wire.code) {
      case 0:
        return new InvokeHostFunctionResultSuccess(
          hash.Hash.fromXdrObject(wire.success)
        );
      case -1:
        return new InvokeHostFunctionResultMalformed();
      case -2:
        return new InvokeHostFunctionResultTrapped();
      case -3:
        return new InvokeHostFunctionResultResourceLimitExceeded();
      case -4:
        return new InvokeHostFunctionResultEntryArchived();
      case -5:
        return new InvokeHostFunctionResultInsufficientRefundableFee();
    }
    throw new jsXdr.XdrError(
      `InvokeHostFunctionResult: unknown code ${wire.code}`
    );
  }
  /**
   * Type guard narrowing an unknown value to a concrete InvokeHostFunctionResult variant.
   * Use this instead of `instanceof InvokeHostFunctionResult`: the exported `InvokeHostFunctionResult` value
   * is the abstract base, so `instanceof` narrows to the base (not the
   * variant union) and forces a cast. `InvokeHostFunctionResult.is(x)` narrows to the union.
   */
  static is(value) {
    return value instanceof InvokeHostFunctionResultBase;
  }
}
class InvokeHostFunctionResultSuccess extends InvokeHostFunctionResultBase {
  type = "invokeHostFunctionSuccess";
  success;
  constructor(success) {
    super();
    this.success = success instanceof hash.Hash ? success : new hash.Hash(success);
  }
  get value() {
    return this.success;
  }
  toXdrObject() {
    return { code: 0, success: this.success.toXdrObject() };
  }
}
class InvokeHostFunctionResultMalformed extends InvokeHostFunctionResultBase {
  type = "invokeHostFunctionMalformed";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -1 };
  }
}
class InvokeHostFunctionResultTrapped extends InvokeHostFunctionResultBase {
  type = "invokeHostFunctionTrapped";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -2 };
  }
}
class InvokeHostFunctionResultResourceLimitExceeded extends InvokeHostFunctionResultBase {
  type = "invokeHostFunctionResourceLimitExceeded";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -3 };
  }
}
class InvokeHostFunctionResultEntryArchived extends InvokeHostFunctionResultBase {
  type = "invokeHostFunctionEntryArchived";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -4 };
  }
}
class InvokeHostFunctionResultInsufficientRefundableFee extends InvokeHostFunctionResultBase {
  type = "invokeHostFunctionInsufficientRefundableFee";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -5 };
  }
}
const InvokeHostFunctionResult = InvokeHostFunctionResultBase;

exports.InvokeHostFunctionResult = InvokeHostFunctionResult;
exports.InvokeHostFunctionResultEntryArchived = InvokeHostFunctionResultEntryArchived;
exports.InvokeHostFunctionResultInsufficientRefundableFee = InvokeHostFunctionResultInsufficientRefundableFee;
exports.InvokeHostFunctionResultMalformed = InvokeHostFunctionResultMalformed;
exports.InvokeHostFunctionResultResourceLimitExceeded = InvokeHostFunctionResultResourceLimitExceeded;
exports.InvokeHostFunctionResultSuccess = InvokeHostFunctionResultSuccess;
exports.InvokeHostFunctionResultTrapped = InvokeHostFunctionResultTrapped;
//# sourceMappingURL=invoke-host-function-result.js.map
