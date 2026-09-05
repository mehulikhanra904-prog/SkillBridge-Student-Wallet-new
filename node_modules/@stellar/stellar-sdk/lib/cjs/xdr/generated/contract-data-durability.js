'use strict';

var jsXdr = require('@stellar/js-xdr');
var enumValue = require('../values/enum-value.js');

class ContractDataDurability extends enumValue.EnumValue {
  static temporary = new ContractDataDurability("temporary", 0);
  static persistent = new ContractDataDurability("persistent", 1);
  static schema = jsXdr.enumType("ContractDataDurability", {
    temporary: 0,
    persistent: 1
  });
  static fromValue(value) {
    return enumValue.enumFromValue(
      "ContractDataDurability",
      ContractDataDurability.schema,
      ContractDataDurability,
      value
    );
  }
  static fromName(name) {
    return enumValue.enumFromName("ContractDataDurability", ContractDataDurability, name);
  }
  static fromXdrObject(wire) {
    return ContractDataDurability.fromValue(wire);
  }
}

exports.ContractDataDurability = ContractDataDurability;
//# sourceMappingURL=contract-data-durability.js.map
