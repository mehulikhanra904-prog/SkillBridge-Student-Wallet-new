import { enumType } from '@stellar/js-xdr';
import { EnumValue, withMemberPrefix, enumFromValue, enumFromName } from '../values/enum-value.js';

class AccountFlags extends EnumValue {
  static authRequiredFlag = new AccountFlags("authRequiredFlag", 1);
  static authRevocableFlag = new AccountFlags("authRevocableFlag", 2);
  static authImmutableFlag = new AccountFlags("authImmutableFlag", 4);
  static authClawbackEnabledFlag = new AccountFlags(
    "authClawbackEnabledFlag",
    8
  );
  static schema = withMemberPrefix(
    enumType("AccountFlags", {
      authRequiredFlag: 1,
      authRevocableFlag: 2,
      authImmutableFlag: 4,
      authClawbackEnabledFlag: 8
    }),
    "auth"
  );
  static fromValue(value) {
    return enumFromValue(
      "AccountFlags",
      AccountFlags.schema,
      AccountFlags,
      value
    );
  }
  static fromName(name) {
    return enumFromName("AccountFlags", AccountFlags, name);
  }
  static fromXdrObject(wire) {
    return AccountFlags.fromValue(wire);
  }
}

export { AccountFlags };
//# sourceMappingURL=account-flags.js.map
