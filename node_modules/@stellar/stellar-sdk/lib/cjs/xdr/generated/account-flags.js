'use strict';

var jsXdr = require('@stellar/js-xdr');
var enumValue = require('../values/enum-value.js');

class AccountFlags extends enumValue.EnumValue {
  static authRequiredFlag = new AccountFlags("authRequiredFlag", 1);
  static authRevocableFlag = new AccountFlags("authRevocableFlag", 2);
  static authImmutableFlag = new AccountFlags("authImmutableFlag", 4);
  static authClawbackEnabledFlag = new AccountFlags(
    "authClawbackEnabledFlag",
    8
  );
  static schema = enumValue.withMemberPrefix(
    jsXdr.enumType("AccountFlags", {
      authRequiredFlag: 1,
      authRevocableFlag: 2,
      authImmutableFlag: 4,
      authClawbackEnabledFlag: 8
    }),
    "auth"
  );
  static fromValue(value) {
    return enumValue.enumFromValue(
      "AccountFlags",
      AccountFlags.schema,
      AccountFlags,
      value
    );
  }
  static fromName(name) {
    return enumValue.enumFromName("AccountFlags", AccountFlags, name);
  }
  static fromXdrObject(wire) {
    return AccountFlags.fromValue(wire);
  }
}

exports.AccountFlags = AccountFlags;
//# sourceMappingURL=account-flags.js.map
