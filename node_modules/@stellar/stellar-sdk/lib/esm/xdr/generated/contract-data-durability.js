import { enumType } from '@stellar/js-xdr';
import { EnumValue, enumFromValue, enumFromName } from '../values/enum-value.js';

class ContractDataDurability extends EnumValue {
  static temporary = new ContractDataDurability("temporary", 0);
  static persistent = new ContractDataDurability("persistent", 1);
  static schema = enumType("ContractDataDurability", {
    temporary: 0,
    persistent: 1
  });
  static fromValue(value) {
    return enumFromValue(
      "ContractDataDurability",
      ContractDataDurability.schema,
      ContractDataDurability,
      value
    );
  }
  static fromName(name) {
    return enumFromName("ContractDataDurability", ContractDataDurability, name);
  }
  static fromXdrObject(wire) {
    return ContractDataDurability.fromValue(wire);
  }
}

export { ContractDataDurability };
//# sourceMappingURL=contract-data-durability.js.map
