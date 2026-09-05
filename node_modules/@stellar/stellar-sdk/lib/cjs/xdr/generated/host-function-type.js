'use strict';

var jsXdr = require('@stellar/js-xdr');
var enumValue = require('../values/enum-value.js');

class HostFunctionType extends enumValue.EnumValue {
  static hostFunctionTypeInvokeContract = new HostFunctionType(
    "hostFunctionTypeInvokeContract",
    0
  );
  static hostFunctionTypeCreateContract = new HostFunctionType(
    "hostFunctionTypeCreateContract",
    1
  );
  static hostFunctionTypeUploadContractWasm = new HostFunctionType(
    "hostFunctionTypeUploadContractWasm",
    2
  );
  static hostFunctionTypeCreateContractV2 = new HostFunctionType(
    "hostFunctionTypeCreateContractV2",
    3
  );
  static schema = enumValue.withMemberPrefix(
    jsXdr.enumType("HostFunctionType", {
      hostFunctionTypeInvokeContract: 0,
      hostFunctionTypeCreateContract: 1,
      hostFunctionTypeUploadContractWasm: 2,
      hostFunctionTypeCreateContractV2: 3
    }),
    "hostFunctionType"
  );
  static fromValue(value) {
    return enumValue.enumFromValue(
      "HostFunctionType",
      HostFunctionType.schema,
      HostFunctionType,
      value
    );
  }
  static fromName(name) {
    return enumValue.enumFromName("HostFunctionType", HostFunctionType, name);
  }
  static fromXdrObject(wire) {
    return HostFunctionType.fromValue(wire);
  }
}

exports.HostFunctionType = HostFunctionType;
//# sourceMappingURL=host-function-type.js.map
