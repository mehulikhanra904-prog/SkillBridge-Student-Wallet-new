'use strict';

var jsXdr = require('@stellar/js-xdr');
var enumValue = require('../values/enum-value.js');

class CreateAccountResultCode extends enumValue.EnumValue {
  static createAccountSuccess = new CreateAccountResultCode(
    "createAccountSuccess",
    0
  );
  static createAccountMalformed = new CreateAccountResultCode(
    "createAccountMalformed",
    -1
  );
  static createAccountUnderfunded = new CreateAccountResultCode(
    "createAccountUnderfunded",
    -2
  );
  static createAccountLowReserve = new CreateAccountResultCode(
    "createAccountLowReserve",
    -3
  );
  static createAccountAlreadyExist = new CreateAccountResultCode(
    "createAccountAlreadyExist",
    -4
  );
  static schema = enumValue.withMemberPrefix(
    jsXdr.enumType("CreateAccountResultCode", {
      createAccountSuccess: 0,
      createAccountMalformed: -1,
      createAccountUnderfunded: -2,
      createAccountLowReserve: -3,
      createAccountAlreadyExist: -4
    }),
    "createAccount"
  );
  static fromValue(value) {
    return enumValue.enumFromValue(
      "CreateAccountResultCode",
      CreateAccountResultCode.schema,
      CreateAccountResultCode,
      value
    );
  }
  static fromName(name) {
    return enumValue.enumFromName(
      "CreateAccountResultCode",
      CreateAccountResultCode,
      name
    );
  }
  static fromXdrObject(wire) {
    return CreateAccountResultCode.fromValue(wire);
  }
}

exports.CreateAccountResultCode = CreateAccountResultCode;
//# sourceMappingURL=create-account-result-code.js.map
