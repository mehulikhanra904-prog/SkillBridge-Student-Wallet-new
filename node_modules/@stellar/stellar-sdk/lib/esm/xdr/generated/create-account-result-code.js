import { enumType } from '@stellar/js-xdr';
import { EnumValue, withMemberPrefix, enumFromValue, enumFromName } from '../values/enum-value.js';

class CreateAccountResultCode extends EnumValue {
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
  static schema = withMemberPrefix(
    enumType("CreateAccountResultCode", {
      createAccountSuccess: 0,
      createAccountMalformed: -1,
      createAccountUnderfunded: -2,
      createAccountLowReserve: -3,
      createAccountAlreadyExist: -4
    }),
    "createAccount"
  );
  static fromValue(value) {
    return enumFromValue(
      "CreateAccountResultCode",
      CreateAccountResultCode.schema,
      CreateAccountResultCode,
      value
    );
  }
  static fromName(name) {
    return enumFromName(
      "CreateAccountResultCode",
      CreateAccountResultCode,
      name
    );
  }
  static fromXdrObject(wire) {
    return CreateAccountResultCode.fromValue(wire);
  }
}

export { CreateAccountResultCode };
//# sourceMappingURL=create-account-result-code.js.map
