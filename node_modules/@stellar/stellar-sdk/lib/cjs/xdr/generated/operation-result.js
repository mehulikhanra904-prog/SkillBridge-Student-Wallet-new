'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var operationResultCode = require('./operation-result-code.js');
var operationResultTr = require('./operation-result-tr.js');

class OperationResultBase extends xdrValue.XdrValue {
  constructor() {
    super();
    if (new.target === OperationResultBase) {
      throw new TypeError(
        "new xdr.OperationResult(...) is not supported: XDR unions are built from per-variant factories. Call xdr.OperationResult.opInner(...) (or another arm factory) instead."
      );
    }
  }
  static schema = jsXdr.union(
    "OperationResult",
    {
      switchOn: operationResultCode.OperationResultCode.schema,
      cases: [
        jsXdr.case("opInner", 0, jsXdr.field("tr", operationResultTr.OperationResultTr.schema)),
        jsXdr.case("opBadAuth", -1, jsXdr.void()),
        jsXdr.case("opNoAccount", -2, jsXdr.void()),
        jsXdr.case("opNotSupported", -3, jsXdr.void()),
        jsXdr.case("opTooManySubentries", -4, jsXdr.void()),
        jsXdr.case("opExceededWorkLimit", -5, jsXdr.void()),
        jsXdr.case("opTooManySponsoring", -6, jsXdr.void())
      ],
      switchKey: "code"
    }
  );
  static opInner(tr) {
    return new OperationResultOpInner(tr);
  }
  static opBadAuth() {
    return new OperationResultOpBadAuth();
  }
  static opNoAccount() {
    return new OperationResultOpNoAccount();
  }
  static opNotSupported() {
    return new OperationResultOpNotSupported();
  }
  static opTooManySubentries() {
    return new OperationResultOpTooManySubentries();
  }
  static opExceededWorkLimit() {
    return new OperationResultOpExceededWorkLimit();
  }
  static opTooManySponsoring() {
    return new OperationResultOpTooManySponsoring();
  }
  static fromXdrObject(wire) {
    switch (wire.code) {
      case 0:
        return new OperationResultOpInner(
          operationResultTr.OperationResultTr.fromXdrObject(wire.tr)
        );
      case -1:
        return new OperationResultOpBadAuth();
      case -2:
        return new OperationResultOpNoAccount();
      case -3:
        return new OperationResultOpNotSupported();
      case -4:
        return new OperationResultOpTooManySubentries();
      case -5:
        return new OperationResultOpExceededWorkLimit();
      case -6:
        return new OperationResultOpTooManySponsoring();
    }
    throw new jsXdr.XdrError(
      `OperationResult: unknown code ${wire.code}`
    );
  }
  /**
   * Type guard narrowing an unknown value to a concrete OperationResult variant.
   * Use this instead of `instanceof OperationResult`: the exported `OperationResult` value
   * is the abstract base, so `instanceof` narrows to the base (not the
   * variant union) and forces a cast. `OperationResult.is(x)` narrows to the union.
   */
  static is(value) {
    return value instanceof OperationResultBase;
  }
}
class OperationResultOpInner extends OperationResultBase {
  type = "opInner";
  tr;
  constructor(tr) {
    super();
    this.tr = tr;
  }
  get value() {
    return this.tr;
  }
  toXdrObject() {
    return { code: 0, tr: this.tr.toXdrObject() };
  }
}
class OperationResultOpBadAuth extends OperationResultBase {
  type = "opBadAuth";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -1 };
  }
}
class OperationResultOpNoAccount extends OperationResultBase {
  type = "opNoAccount";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -2 };
  }
}
class OperationResultOpNotSupported extends OperationResultBase {
  type = "opNotSupported";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -3 };
  }
}
class OperationResultOpTooManySubentries extends OperationResultBase {
  type = "opTooManySubentries";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -4 };
  }
}
class OperationResultOpExceededWorkLimit extends OperationResultBase {
  type = "opExceededWorkLimit";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -5 };
  }
}
class OperationResultOpTooManySponsoring extends OperationResultBase {
  type = "opTooManySponsoring";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -6 };
  }
}
const OperationResult = OperationResultBase;

exports.OperationResult = OperationResult;
exports.OperationResultOpBadAuth = OperationResultOpBadAuth;
exports.OperationResultOpExceededWorkLimit = OperationResultOpExceededWorkLimit;
exports.OperationResultOpInner = OperationResultOpInner;
exports.OperationResultOpNoAccount = OperationResultOpNoAccount;
exports.OperationResultOpNotSupported = OperationResultOpNotSupported;
exports.OperationResultOpTooManySponsoring = OperationResultOpTooManySponsoring;
exports.OperationResultOpTooManySubentries = OperationResultOpTooManySubentries;
//# sourceMappingURL=operation-result.js.map
