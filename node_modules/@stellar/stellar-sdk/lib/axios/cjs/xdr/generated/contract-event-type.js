'use strict';

var jsXdr = require('@stellar/js-xdr');
var enumValue = require('../values/enum-value.js');

class ContractEventType extends enumValue.EnumValue {
  static system = new ContractEventType("system", 0);
  static contract = new ContractEventType("contract", 1);
  static diagnostic = new ContractEventType("diagnostic", 2);
  static schema = jsXdr.enumType("ContractEventType", {
    system: 0,
    contract: 1,
    diagnostic: 2
  });
  static fromValue(value) {
    return enumValue.enumFromValue(
      "ContractEventType",
      ContractEventType.schema,
      ContractEventType,
      value
    );
  }
  static fromName(name) {
    return enumValue.enumFromName("ContractEventType", ContractEventType, name);
  }
  static fromXdrObject(wire) {
    return ContractEventType.fromValue(wire);
  }
}

exports.ContractEventType = ContractEventType;
//# sourceMappingURL=contract-event-type.js.map
