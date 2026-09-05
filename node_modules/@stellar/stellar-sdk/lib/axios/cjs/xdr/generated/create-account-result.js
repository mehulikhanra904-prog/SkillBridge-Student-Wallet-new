'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var createAccountResultCode = require('./create-account-result-code.js');

class CreateAccountResultBase extends xdrValue.XdrValue {
  constructor() {
    super();
    if (new.target === CreateAccountResultBase) {
      throw new TypeError(
        "new xdr.CreateAccountResult(...) is not supported: XDR unions are built from per-variant factories. Call xdr.CreateAccountResult.createAccountSuccess() (or another arm factory) instead."
      );
    }
  }
  static schema = jsXdr.union(
    "CreateAccountResult",
    {
      switchOn: createAccountResultCode.CreateAccountResultCode.schema,
      cases: [
        jsXdr.case("createAccountSuccess", 0, jsXdr.void()),
        jsXdr.case("createAccountMalformed", -1, jsXdr.void()),
        jsXdr.case("createAccountUnderfunded", -2, jsXdr.void()),
        jsXdr.case("createAccountLowReserve", -3, jsXdr.void()),
        jsXdr.case("createAccountAlreadyExist", -4, jsXdr.void())
      ],
      switchKey: "code"
    }
  );
  static createAccountSuccess() {
    return new CreateAccountResultSuccess();
  }
  static createAccountMalformed() {
    return new CreateAccountResultMalformed();
  }
  static createAccountUnderfunded() {
    return new CreateAccountResultUnderfunded();
  }
  static createAccountLowReserve() {
    return new CreateAccountResultLowReserve();
  }
  static createAccountAlreadyExist() {
    return new CreateAccountResultAlreadyExist();
  }
  static fromXdrObject(wire) {
    switch (wire.code) {
      case 0:
        return new CreateAccountResultSuccess();
      case -1:
        return new CreateAccountResultMalformed();
      case -2:
        return new CreateAccountResultUnderfunded();
      case -3:
        return new CreateAccountResultLowReserve();
      case -4:
        return new CreateAccountResultAlreadyExist();
    }
    throw new jsXdr.XdrError(
      `CreateAccountResult: unknown code ${wire.code}`
    );
  }
  /**
   * Type guard narrowing an unknown value to a concrete CreateAccountResult variant.
   * Use this instead of `instanceof CreateAccountResult`: the exported `CreateAccountResult` value
   * is the abstract base, so `instanceof` narrows to the base (not the
   * variant union) and forces a cast. `CreateAccountResult.is(x)` narrows to the union.
   */
  static is(value) {
    return value instanceof CreateAccountResultBase;
  }
}
class CreateAccountResultSuccess extends CreateAccountResultBase {
  type = "createAccountSuccess";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: 0 };
  }
}
class CreateAccountResultMalformed extends CreateAccountResultBase {
  type = "createAccountMalformed";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -1 };
  }
}
class CreateAccountResultUnderfunded extends CreateAccountResultBase {
  type = "createAccountUnderfunded";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -2 };
  }
}
class CreateAccountResultLowReserve extends CreateAccountResultBase {
  type = "createAccountLowReserve";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -3 };
  }
}
class CreateAccountResultAlreadyExist extends CreateAccountResultBase {
  type = "createAccountAlreadyExist";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -4 };
  }
}
const CreateAccountResult = CreateAccountResultBase;

exports.CreateAccountResult = CreateAccountResult;
exports.CreateAccountResultAlreadyExist = CreateAccountResultAlreadyExist;
exports.CreateAccountResultLowReserve = CreateAccountResultLowReserve;
exports.CreateAccountResultMalformed = CreateAccountResultMalformed;
exports.CreateAccountResultSuccess = CreateAccountResultSuccess;
exports.CreateAccountResultUnderfunded = CreateAccountResultUnderfunded;
//# sourceMappingURL=create-account-result.js.map
