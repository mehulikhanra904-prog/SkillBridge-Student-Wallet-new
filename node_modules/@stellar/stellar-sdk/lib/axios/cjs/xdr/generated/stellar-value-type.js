'use strict';

var jsXdr = require('@stellar/js-xdr');
var enumValue = require('../values/enum-value.js');

class StellarValueType extends enumValue.EnumValue {
  static stellarValueBasic = new StellarValueType(
    "stellarValueBasic",
    0
  );
  static stellarValueSigned = new StellarValueType(
    "stellarValueSigned",
    1
  );
  static stellarValueEmptyTxSet = new StellarValueType(
    "stellarValueEmptyTxSet",
    2
  );
  static schema = enumValue.withMemberPrefix(
    jsXdr.enumType("StellarValueType", {
      stellarValueBasic: 0,
      stellarValueSigned: 1,
      stellarValueEmptyTxSet: 2
    }),
    "stellarValue"
  );
  static fromValue(value) {
    return enumValue.enumFromValue(
      "StellarValueType",
      StellarValueType.schema,
      StellarValueType,
      value
    );
  }
  static fromName(name) {
    return enumValue.enumFromName("StellarValueType", StellarValueType, name);
  }
  static fromXdrObject(wire) {
    return StellarValueType.fromValue(wire);
  }
}

exports.StellarValueType = StellarValueType;
//# sourceMappingURL=stellar-value-type.js.map
