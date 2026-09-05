import { enumType } from '@stellar/js-xdr';
import { EnumValue, withMemberPrefix, enumFromValue, enumFromName } from '../values/enum-value.js';

class HostFunctionType extends EnumValue {
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
  static schema = withMemberPrefix(
    enumType("HostFunctionType", {
      hostFunctionTypeInvokeContract: 0,
      hostFunctionTypeCreateContract: 1,
      hostFunctionTypeUploadContractWasm: 2,
      hostFunctionTypeCreateContractV2: 3
    }),
    "hostFunctionType"
  );
  static fromValue(value) {
    return enumFromValue(
      "HostFunctionType",
      HostFunctionType.schema,
      HostFunctionType,
      value
    );
  }
  static fromName(name) {
    return enumFromName("HostFunctionType", HostFunctionType, name);
  }
  static fromXdrObject(wire) {
    return HostFunctionType.fromValue(wire);
  }
}

export { HostFunctionType };
//# sourceMappingURL=host-function-type.js.map
