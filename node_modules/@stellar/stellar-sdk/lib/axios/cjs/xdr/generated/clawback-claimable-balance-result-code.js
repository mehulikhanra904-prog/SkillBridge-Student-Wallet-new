'use strict';

var jsXdr = require('@stellar/js-xdr');
var enumValue = require('../values/enum-value.js');

class ClawbackClaimableBalanceResultCode extends enumValue.EnumValue {
  static clawbackClaimableBalanceSuccess = new ClawbackClaimableBalanceResultCode(
    "clawbackClaimableBalanceSuccess",
    0
  );
  static clawbackClaimableBalanceDoesNotExist = new ClawbackClaimableBalanceResultCode(
    "clawbackClaimableBalanceDoesNotExist",
    -1
  );
  static clawbackClaimableBalanceNotIssuer = new ClawbackClaimableBalanceResultCode(
    "clawbackClaimableBalanceNotIssuer",
    -2
  );
  static clawbackClaimableBalanceNotClawbackEnabled = new ClawbackClaimableBalanceResultCode(
    "clawbackClaimableBalanceNotClawbackEnabled",
    -3
  );
  static schema = enumValue.withMemberPrefix(
    jsXdr.enumType("ClawbackClaimableBalanceResultCode", {
      clawbackClaimableBalanceSuccess: 0,
      clawbackClaimableBalanceDoesNotExist: -1,
      clawbackClaimableBalanceNotIssuer: -2,
      clawbackClaimableBalanceNotClawbackEnabled: -3
    }),
    "clawbackClaimableBalance"
  );
  static fromValue(value) {
    return enumValue.enumFromValue(
      "ClawbackClaimableBalanceResultCode",
      ClawbackClaimableBalanceResultCode.schema,
      ClawbackClaimableBalanceResultCode,
      value
    );
  }
  static fromName(name) {
    return enumValue.enumFromName(
      "ClawbackClaimableBalanceResultCode",
      ClawbackClaimableBalanceResultCode,
      name
    );
  }
  static fromXdrObject(wire) {
    return ClawbackClaimableBalanceResultCode.fromValue(wire);
  }
}

exports.ClawbackClaimableBalanceResultCode = ClawbackClaimableBalanceResultCode;
//# sourceMappingURL=clawback-claimable-balance-result-code.js.map
