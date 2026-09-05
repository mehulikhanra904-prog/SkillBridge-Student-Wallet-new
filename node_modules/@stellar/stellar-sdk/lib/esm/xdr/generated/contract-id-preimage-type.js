import { enumType } from '@stellar/js-xdr';
import { EnumValue, withMemberPrefix, enumFromValue, enumFromName } from '../values/enum-value.js';

class ContractIdPreimageType extends EnumValue {
  static contractIdPreimageFromAddress = new ContractIdPreimageType(
    "contractIdPreimageFromAddress",
    0
  );
  static contractIdPreimageFromAsset = new ContractIdPreimageType(
    "contractIdPreimageFromAsset",
    1
  );
  static schema = withMemberPrefix(
    enumType("ContractIdPreimageType", {
      contractIdPreimageFromAddress: 0,
      contractIdPreimageFromAsset: 1
    }),
    "contractIdPreimageFrom"
  );
  static fromValue(value) {
    return enumFromValue(
      "ContractIdPreimageType",
      ContractIdPreimageType.schema,
      ContractIdPreimageType,
      value
    );
  }
  static fromName(name) {
    return enumFromName("ContractIdPreimageType", ContractIdPreimageType, name);
  }
  static fromXdrObject(wire) {
    return ContractIdPreimageType.fromValue(wire);
  }
}

export { ContractIdPreimageType };
//# sourceMappingURL=contract-id-preimage-type.js.map
