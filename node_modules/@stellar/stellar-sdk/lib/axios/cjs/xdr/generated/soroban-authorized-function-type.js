'use strict';

var jsXdr = require('@stellar/js-xdr');
var enumValue = require('../values/enum-value.js');

class SorobanAuthorizedFunctionType extends enumValue.EnumValue {
  static sorobanAuthorizedFunctionTypeContractFn = new SorobanAuthorizedFunctionType(
    "sorobanAuthorizedFunctionTypeContractFn",
    0
  );
  static sorobanAuthorizedFunctionTypeCreateContractHostFn = new SorobanAuthorizedFunctionType(
    "sorobanAuthorizedFunctionTypeCreateContractHostFn",
    1
  );
  static sorobanAuthorizedFunctionTypeCreateContractV2HostFn = new SorobanAuthorizedFunctionType(
    "sorobanAuthorizedFunctionTypeCreateContractV2HostFn",
    2
  );
  static schema = enumValue.withMemberPrefix(
    jsXdr.enumType("SorobanAuthorizedFunctionType", {
      sorobanAuthorizedFunctionTypeContractFn: 0,
      sorobanAuthorizedFunctionTypeCreateContractHostFn: 1,
      sorobanAuthorizedFunctionTypeCreateContractV2HostFn: 2
    }),
    "sorobanAuthorizedFunctionType"
  );
  static fromValue(value) {
    return enumValue.enumFromValue(
      "SorobanAuthorizedFunctionType",
      SorobanAuthorizedFunctionType.schema,
      SorobanAuthorizedFunctionType,
      value
    );
  }
  static fromName(name) {
    return enumValue.enumFromName(
      "SorobanAuthorizedFunctionType",
      SorobanAuthorizedFunctionType,
      name
    );
  }
  static fromXdrObject(wire) {
    return SorobanAuthorizedFunctionType.fromValue(wire);
  }
}

exports.SorobanAuthorizedFunctionType = SorobanAuthorizedFunctionType;
//# sourceMappingURL=soroban-authorized-function-type.js.map
