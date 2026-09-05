'use strict';

var jsXdr = require('@stellar/js-xdr');
var enumValue = require('../values/enum-value.js');

class ClaimableBalanceFlags extends enumValue.EnumValue {
  static claimableBalanceClawbackEnabledFlag = new ClaimableBalanceFlags("claimableBalanceClawbackEnabledFlag", 1);
  static schema = jsXdr.enumType("ClaimableBalanceFlags", {
    claimableBalanceClawbackEnabledFlag: 1
  });
  static fromValue(value) {
    return enumValue.enumFromValue(
      "ClaimableBalanceFlags",
      ClaimableBalanceFlags.schema,
      ClaimableBalanceFlags,
      value
    );
  }
  static fromName(name) {
    return enumValue.enumFromName("ClaimableBalanceFlags", ClaimableBalanceFlags, name);
  }
  static fromXdrObject(wire) {
    return ClaimableBalanceFlags.fromValue(wire);
  }
}

exports.ClaimableBalanceFlags = ClaimableBalanceFlags;
//# sourceMappingURL=claimable-balance-flags.js.map
