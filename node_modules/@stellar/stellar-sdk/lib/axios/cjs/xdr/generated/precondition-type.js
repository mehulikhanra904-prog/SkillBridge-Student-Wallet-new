'use strict';

var jsXdr = require('@stellar/js-xdr');
var enumValue = require('../values/enum-value.js');

class PreconditionType extends enumValue.EnumValue {
  static precondNone = new PreconditionType("precondNone", 0);
  static precondTime = new PreconditionType("precondTime", 1);
  static precondV2 = new PreconditionType("precondV2", 2);
  static schema = enumValue.withMemberPrefix(
    jsXdr.enumType("PreconditionType", {
      precondNone: 0,
      precondTime: 1,
      precondV2: 2
    }),
    "precond"
  );
  static fromValue(value) {
    return enumValue.enumFromValue(
      "PreconditionType",
      PreconditionType.schema,
      PreconditionType,
      value
    );
  }
  static fromName(name) {
    return enumValue.enumFromName("PreconditionType", PreconditionType, name);
  }
  static fromXdrObject(wire) {
    return PreconditionType.fromValue(wire);
  }
}

exports.PreconditionType = PreconditionType;
//# sourceMappingURL=precondition-type.js.map
