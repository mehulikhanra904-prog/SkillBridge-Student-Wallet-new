'use strict';

var jsXdr = require('@stellar/js-xdr');
var enumValue = require('../values/enum-value.js');

class ContractExecutableType extends enumValue.EnumValue {
  static contractExecutableWasm = new ContractExecutableType(
    "contractExecutableWasm",
    0
  );
  static contractExecutableStellarAsset = new ContractExecutableType(
    "contractExecutableStellarAsset",
    1
  );
  static contractExecutableExternalRef = new ContractExecutableType(
    "contractExecutableExternalRef",
    2
  );
  static schema = enumValue.withMemberPrefix(
    jsXdr.enumType("ContractExecutableType", {
      contractExecutableWasm: 0,
      contractExecutableStellarAsset: 1,
      contractExecutableExternalRef: 2
    }),
    "contractExecutable"
  );
  static fromValue(value) {
    return enumValue.enumFromValue(
      "ContractExecutableType",
      ContractExecutableType.schema,
      ContractExecutableType,
      value
    );
  }
  static fromName(name) {
    return enumValue.enumFromName("ContractExecutableType", ContractExecutableType, name);
  }
  static fromXdrObject(wire) {
    return ContractExecutableType.fromValue(wire);
  }
}

exports.ContractExecutableType = ContractExecutableType;
//# sourceMappingURL=contract-executable-type.js.map
