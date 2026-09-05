'use strict';

var jsXdr = require('@stellar/js-xdr');
var enumValue = require('../values/enum-value.js');

class ClaimantType extends enumValue.EnumValue {
  static claimantTypeV0 = new ClaimantType("claimantTypeV0", 0);
  static schema = jsXdr.enumType("ClaimantType", {
    claimantTypeV0: 0
  });
  static fromValue(value) {
    return enumValue.enumFromValue(
      "ClaimantType",
      ClaimantType.schema,
      ClaimantType,
      value
    );
  }
  static fromName(name) {
    return enumValue.enumFromName("ClaimantType", ClaimantType, name);
  }
  static fromXdrObject(wire) {
    return ClaimantType.fromValue(wire);
  }
}

exports.ClaimantType = ClaimantType;
//# sourceMappingURL=claimant-type.js.map
