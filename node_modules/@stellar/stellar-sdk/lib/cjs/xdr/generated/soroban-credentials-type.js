'use strict';

var jsXdr = require('@stellar/js-xdr');
var enumValue = require('../values/enum-value.js');

class SorobanCredentialsType extends enumValue.EnumValue {
  static sorobanCredentialsSourceAccount = new SorobanCredentialsType(
    "sorobanCredentialsSourceAccount",
    0
  );
  static sorobanCredentialsAddress = new SorobanCredentialsType(
    "sorobanCredentialsAddress",
    1
  );
  static sorobanCredentialsAddressV2 = new SorobanCredentialsType(
    "sorobanCredentialsAddressV2",
    2
  );
  static sorobanCredentialsAddressWithDelegates = new SorobanCredentialsType("sorobanCredentialsAddressWithDelegates", 3);
  static schema = enumValue.withMemberPrefix(
    jsXdr.enumType("SorobanCredentialsType", {
      sorobanCredentialsSourceAccount: 0,
      sorobanCredentialsAddress: 1,
      sorobanCredentialsAddressV2: 2,
      sorobanCredentialsAddressWithDelegates: 3
    }),
    "sorobanCredentials"
  );
  static fromValue(value) {
    return enumValue.enumFromValue(
      "SorobanCredentialsType",
      SorobanCredentialsType.schema,
      SorobanCredentialsType,
      value
    );
  }
  static fromName(name) {
    return enumValue.enumFromName("SorobanCredentialsType", SorobanCredentialsType, name);
  }
  static fromXdrObject(wire) {
    return SorobanCredentialsType.fromValue(wire);
  }
}

exports.SorobanCredentialsType = SorobanCredentialsType;
//# sourceMappingURL=soroban-credentials-type.js.map
