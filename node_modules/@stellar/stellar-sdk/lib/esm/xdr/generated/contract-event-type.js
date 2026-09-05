import { enumType } from '@stellar/js-xdr';
import { EnumValue, enumFromValue, enumFromName } from '../values/enum-value.js';

class ContractEventType extends EnumValue {
  static system = new ContractEventType("system", 0);
  static contract = new ContractEventType("contract", 1);
  static diagnostic = new ContractEventType("diagnostic", 2);
  static schema = enumType("ContractEventType", {
    system: 0,
    contract: 1,
    diagnostic: 2
  });
  static fromValue(value) {
    return enumFromValue(
      "ContractEventType",
      ContractEventType.schema,
      ContractEventType,
      value
    );
  }
  static fromName(name) {
    return enumFromName("ContractEventType", ContractEventType, name);
  }
  static fromXdrObject(wire) {
    return ContractEventType.fromValue(wire);
  }
}

export { ContractEventType };
//# sourceMappingURL=contract-event-type.js.map
