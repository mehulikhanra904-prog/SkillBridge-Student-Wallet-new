'use strict';

var jsXdr = require('@stellar/js-xdr');
var enumValue = require('../values/enum-value.js');

class ClaimableBalanceIdType extends enumValue.EnumValue {
  static claimableBalanceIdTypeV0 = new ClaimableBalanceIdType(
    "claimableBalanceIdTypeV0",
    0
  );
  static schema = jsXdr.enumType("ClaimableBalanceIdType", {
    claimableBalanceIdTypeV0: 0
  });
  static fromValue(value) {
    return enumValue.enumFromValue(
      "ClaimableBalanceIdType",
      ClaimableBalanceIdType.schema,
      ClaimableBalanceIdType,
      value
    );
  }
  static fromName(name) {
    return enumValue.enumFromName("ClaimableBalanceIdType", ClaimableBalanceIdType, name);
  }
  static fromXdrObject(wire) {
    return ClaimableBalanceIdType.fromValue(wire);
  }
}

exports.ClaimableBalanceIdType = ClaimableBalanceIdType;
//# sourceMappingURL=claimable-balance-id-type.js.map
