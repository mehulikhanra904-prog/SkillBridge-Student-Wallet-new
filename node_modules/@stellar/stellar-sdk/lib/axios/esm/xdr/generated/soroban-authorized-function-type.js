import { enumType } from '@stellar/js-xdr';
import { EnumValue, withMemberPrefix, enumFromValue, enumFromName } from '../values/enum-value.js';

class SorobanAuthorizedFunctionType extends EnumValue {
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
  static schema = withMemberPrefix(
    enumType("SorobanAuthorizedFunctionType", {
      sorobanAuthorizedFunctionTypeContractFn: 0,
      sorobanAuthorizedFunctionTypeCreateContractHostFn: 1,
      sorobanAuthorizedFunctionTypeCreateContractV2HostFn: 2
    }),
    "sorobanAuthorizedFunctionType"
  );
  static fromValue(value) {
    return enumFromValue(
      "SorobanAuthorizedFunctionType",
      SorobanAuthorizedFunctionType.schema,
      SorobanAuthorizedFunctionType,
      value
    );
  }
  static fromName(name) {
    return enumFromName(
      "SorobanAuthorizedFunctionType",
      SorobanAuthorizedFunctionType,
      name
    );
  }
  static fromXdrObject(wire) {
    return SorobanAuthorizedFunctionType.fromValue(wire);
  }
}

export { SorobanAuthorizedFunctionType };
//# sourceMappingURL=soroban-authorized-function-type.js.map
