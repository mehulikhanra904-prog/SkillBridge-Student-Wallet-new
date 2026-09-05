'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var scErrorType = require('./sc-error-type.js');
var scErrorCode = require('./sc-error-code.js');

class ScErrorBase extends xdrValue.XdrValue {
  constructor() {
    super();
    if (new.target === ScErrorBase) {
      throw new TypeError(
        "new xdr.ScError(...) is not supported: XDR unions are built from per-variant factories. Call xdr.ScError.sceContract(...) (or another arm factory) instead."
      );
    }
  }
  static schema = jsXdr.union("ScError", {
    switchOn: scErrorType.ScErrorType.schema,
    cases: [
      jsXdr.case("sceContract", 0, jsXdr.field("contractCode", jsXdr.uint32())),
      jsXdr.case("sceWasmVm", 1, jsXdr.field("code", scErrorCode.ScErrorCode.schema)),
      jsXdr.case("sceContext", 2, jsXdr.field("code", scErrorCode.ScErrorCode.schema)),
      jsXdr.case("sceStorage", 3, jsXdr.field("code", scErrorCode.ScErrorCode.schema)),
      jsXdr.case("sceObject", 4, jsXdr.field("code", scErrorCode.ScErrorCode.schema)),
      jsXdr.case("sceCrypto", 5, jsXdr.field("code", scErrorCode.ScErrorCode.schema)),
      jsXdr.case("sceEvents", 6, jsXdr.field("code", scErrorCode.ScErrorCode.schema)),
      jsXdr.case("sceBudget", 7, jsXdr.field("code", scErrorCode.ScErrorCode.schema)),
      jsXdr.case("sceValue", 8, jsXdr.field("code", scErrorCode.ScErrorCode.schema)),
      jsXdr.case("sceAuth", 9, jsXdr.field("code", scErrorCode.ScErrorCode.schema))
    ]
  });
  static sceContract(contractCode) {
    return new ScErrorContract(contractCode);
  }
  static sceWasmVm(code) {
    return new ScErrorWasmVm(code);
  }
  static sceContext(code) {
    return new ScErrorContext(code);
  }
  static sceStorage(code) {
    return new ScErrorStorage(code);
  }
  static sceObject(code) {
    return new ScErrorObject(code);
  }
  static sceCrypto(code) {
    return new ScErrorCrypto(code);
  }
  static sceEvents(code) {
    return new ScErrorEvents(code);
  }
  static sceBudget(code) {
    return new ScErrorBudget(code);
  }
  static sceValue(code) {
    return new ScErrorValue(code);
  }
  static sceAuth(code) {
    return new ScErrorAuth(code);
  }
  static fromXdrObject(wire) {
    switch (wire.type) {
      case 0:
        return new ScErrorContract(wire.contractCode);
      case 1:
        return new ScErrorWasmVm(scErrorCode.ScErrorCode.fromXdrObject(wire.code));
      case 2:
        return new ScErrorContext(scErrorCode.ScErrorCode.fromXdrObject(wire.code));
      case 3:
        return new ScErrorStorage(scErrorCode.ScErrorCode.fromXdrObject(wire.code));
      case 4:
        return new ScErrorObject(scErrorCode.ScErrorCode.fromXdrObject(wire.code));
      case 5:
        return new ScErrorCrypto(scErrorCode.ScErrorCode.fromXdrObject(wire.code));
      case 6:
        return new ScErrorEvents(scErrorCode.ScErrorCode.fromXdrObject(wire.code));
      case 7:
        return new ScErrorBudget(scErrorCode.ScErrorCode.fromXdrObject(wire.code));
      case 8:
        return new ScErrorValue(scErrorCode.ScErrorCode.fromXdrObject(wire.code));
      case 9:
        return new ScErrorAuth(scErrorCode.ScErrorCode.fromXdrObject(wire.code));
    }
    throw new jsXdr.XdrError(
      `ScError: unknown type ${wire.type}`
    );
  }
  /**
   * Type guard narrowing an unknown value to a concrete ScError variant.
   * Use this instead of `instanceof ScError`: the exported `ScError` value
   * is the abstract base, so `instanceof` narrows to the base (not the
   * variant union) and forces a cast. `ScError.is(x)` narrows to the union.
   */
  static is(value) {
    return value instanceof ScErrorBase;
  }
}
class ScErrorContract extends ScErrorBase {
  type = "sceContract";
  contractCode;
  constructor(contractCode) {
    super();
    this.contractCode = contractCode;
  }
  get value() {
    return this.contractCode;
  }
  toXdrObject() {
    return { type: 0, contractCode: this.contractCode };
  }
}
class ScErrorWasmVm extends ScErrorBase {
  type = "sceWasmVm";
  code;
  constructor(code) {
    super();
    this.code = code;
  }
  get value() {
    return this.code;
  }
  toXdrObject() {
    return { type: 1, code: this.code.toXdrObject() };
  }
}
class ScErrorContext extends ScErrorBase {
  type = "sceContext";
  code;
  constructor(code) {
    super();
    this.code = code;
  }
  get value() {
    return this.code;
  }
  toXdrObject() {
    return { type: 2, code: this.code.toXdrObject() };
  }
}
class ScErrorStorage extends ScErrorBase {
  type = "sceStorage";
  code;
  constructor(code) {
    super();
    this.code = code;
  }
  get value() {
    return this.code;
  }
  toXdrObject() {
    return { type: 3, code: this.code.toXdrObject() };
  }
}
class ScErrorObject extends ScErrorBase {
  type = "sceObject";
  code;
  constructor(code) {
    super();
    this.code = code;
  }
  get value() {
    return this.code;
  }
  toXdrObject() {
    return { type: 4, code: this.code.toXdrObject() };
  }
}
class ScErrorCrypto extends ScErrorBase {
  type = "sceCrypto";
  code;
  constructor(code) {
    super();
    this.code = code;
  }
  get value() {
    return this.code;
  }
  toXdrObject() {
    return { type: 5, code: this.code.toXdrObject() };
  }
}
class ScErrorEvents extends ScErrorBase {
  type = "sceEvents";
  code;
  constructor(code) {
    super();
    this.code = code;
  }
  get value() {
    return this.code;
  }
  toXdrObject() {
    return { type: 6, code: this.code.toXdrObject() };
  }
}
class ScErrorBudget extends ScErrorBase {
  type = "sceBudget";
  code;
  constructor(code) {
    super();
    this.code = code;
  }
  get value() {
    return this.code;
  }
  toXdrObject() {
    return { type: 7, code: this.code.toXdrObject() };
  }
}
class ScErrorValue extends ScErrorBase {
  type = "sceValue";
  code;
  constructor(code) {
    super();
    this.code = code;
  }
  get value() {
    return this.code;
  }
  toXdrObject() {
    return { type: 8, code: this.code.toXdrObject() };
  }
}
class ScErrorAuth extends ScErrorBase {
  type = "sceAuth";
  code;
  constructor(code) {
    super();
    this.code = code;
  }
  get value() {
    return this.code;
  }
  toXdrObject() {
    return { type: 9, code: this.code.toXdrObject() };
  }
}
const ScError = ScErrorBase;

exports.ScError = ScError;
exports.ScErrorAuth = ScErrorAuth;
exports.ScErrorBudget = ScErrorBudget;
exports.ScErrorContext = ScErrorContext;
exports.ScErrorContract = ScErrorContract;
exports.ScErrorCrypto = ScErrorCrypto;
exports.ScErrorEvents = ScErrorEvents;
exports.ScErrorObject = ScErrorObject;
exports.ScErrorStorage = ScErrorStorage;
exports.ScErrorValue = ScErrorValue;
exports.ScErrorWasmVm = ScErrorWasmVm;
//# sourceMappingURL=sc-error.js.map
