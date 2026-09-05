import { enumType } from '@stellar/js-xdr';
import { EnumValue, withMemberPrefix, enumFromValue, enumFromName } from '../values/enum-value.js';

class ContractExecutableType extends EnumValue {
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
  static schema = withMemberPrefix(
    enumType("ContractExecutableType", {
      contractExecutableWasm: 0,
      contractExecutableStellarAsset: 1,
      contractExecutableExternalRef: 2
    }),
    "contractExecutable"
  );
  static fromValue(value) {
    return enumFromValue(
      "ContractExecutableType",
      ContractExecutableType.schema,
      ContractExecutableType,
      value
    );
  }
  static fromName(name) {
    return enumFromName("ContractExecutableType", ContractExecutableType, name);
  }
  static fromXdrObject(wire) {
    return ContractExecutableType.fromValue(wire);
  }
}

export { ContractExecutableType };
//# sourceMappingURL=contract-executable-type.js.map
