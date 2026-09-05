'use strict';

var jsXdr = require('@stellar/js-xdr');
var enumValue = require('../values/enum-value.js');

class ClawbackResultCode extends enumValue.EnumValue {
  static clawbackSuccess = new ClawbackResultCode(
    "clawbackSuccess",
    0
  );
  static clawbackMalformed = new ClawbackResultCode(
    "clawbackMalformed",
    -1
  );
  static clawbackNotClawbackEnabled = new ClawbackResultCode(
    "clawbackNotClawbackEnabled",
    -2
  );
  static clawbackNoTrust = new ClawbackResultCode(
    "clawbackNoTrust",
    -3
  );
  static clawbackUnderfunded = new ClawbackResultCode(
    "clawbackUnderfunded",
    -4
  );
  static schema = enumValue.withMemberPrefix(
    jsXdr.enumType("ClawbackResultCode", {
      clawbackSuccess: 0,
      clawbackMalformed: -1,
      clawbackNotClawbackEnabled: -2,
      clawbackNoTrust: -3,
      clawbackUnderfunded: -4
    }),
    "clawback"
  );
  static fromValue(value) {
    return enumValue.enumFromValue(
      "ClawbackResultCode",
      ClawbackResultCode.schema,
      ClawbackResultCode,
      value
    );
  }
  static fromName(name) {
    return enumValue.enumFromName("ClawbackResultCode", ClawbackResultCode, name);
  }
  static fromXdrObject(wire) {
    return ClawbackResultCode.fromValue(wire);
  }
}

exports.ClawbackResultCode = ClawbackResultCode;
//# sourceMappingURL=clawback-result-code.js.map
