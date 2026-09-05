'use strict';

var jsXdr = require('@stellar/js-xdr');
var enumValue = require('../values/enum-value.js');

class CreateClaimableBalanceResultCode extends enumValue.EnumValue {
  static createClaimableBalanceSuccess = new CreateClaimableBalanceResultCode("createClaimableBalanceSuccess", 0);
  static createClaimableBalanceMalformed = new CreateClaimableBalanceResultCode("createClaimableBalanceMalformed", -1);
  static createClaimableBalanceLowReserve = new CreateClaimableBalanceResultCode(
    "createClaimableBalanceLowReserve",
    -2
  );
  static createClaimableBalanceNoTrust = new CreateClaimableBalanceResultCode("createClaimableBalanceNoTrust", -3);
  static createClaimableBalanceNotAuthorized = new CreateClaimableBalanceResultCode(
    "createClaimableBalanceNotAuthorized",
    -4
  );
  static createClaimableBalanceUnderfunded = new CreateClaimableBalanceResultCode(
    "createClaimableBalanceUnderfunded",
    -5
  );
  static schema = enumValue.withMemberPrefix(
    jsXdr.enumType("CreateClaimableBalanceResultCode", {
      createClaimableBalanceSuccess: 0,
      createClaimableBalanceMalformed: -1,
      createClaimableBalanceLowReserve: -2,
      createClaimableBalanceNoTrust: -3,
      createClaimableBalanceNotAuthorized: -4,
      createClaimableBalanceUnderfunded: -5
    }),
    "createClaimableBalance"
  );
  static fromValue(value) {
    return enumValue.enumFromValue(
      "CreateClaimableBalanceResultCode",
      CreateClaimableBalanceResultCode.schema,
      CreateClaimableBalanceResultCode,
      value
    );
  }
  static fromName(name) {
    return enumValue.enumFromName(
      "CreateClaimableBalanceResultCode",
      CreateClaimableBalanceResultCode,
      name
    );
  }
  static fromXdrObject(wire) {
    return CreateClaimableBalanceResultCode.fromValue(wire);
  }
}

exports.CreateClaimableBalanceResultCode = CreateClaimableBalanceResultCode;
//# sourceMappingURL=create-claimable-balance-result-code.js.map
