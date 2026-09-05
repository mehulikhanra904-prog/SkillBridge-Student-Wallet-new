'use strict';

var jsXdr = require('@stellar/js-xdr');
var enumValue = require('../values/enum-value.js');

class ContractIdPreimageType extends enumValue.EnumValue {
  static contractIdPreimageFromAddress = new ContractIdPreimageType(
    "contractIdPreimageFromAddress",
    0
  );
  static contractIdPreimageFromAsset = new ContractIdPreimageType(
    "contractIdPreimageFromAsset",
    1
  );
  static schema = enumValue.withMemberPrefix(
    jsXdr.enumType("ContractIdPreimageType", {
      contractIdPreimageFromAddress: 0,
      contractIdPreimageFromAsset: 1
    }),
    "contractIdPreimageFrom"
  );
  static fromValue(value) {
    return enumValue.enumFromValue(
      "ContractIdPreimageType",
      ContractIdPreimageType.schema,
      ContractIdPreimageType,
      value
    );
  }
  static fromName(name) {
    return enumValue.enumFromName("ContractIdPreimageType", ContractIdPreimageType, name);
  }
  static fromXdrObject(wire) {
    return ContractIdPreimageType.fromValue(wire);
  }
}

exports.ContractIdPreimageType = ContractIdPreimageType;
//# sourceMappingURL=contract-id-preimage-type.js.map
