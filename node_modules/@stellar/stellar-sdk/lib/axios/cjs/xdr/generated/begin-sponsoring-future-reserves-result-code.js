'use strict';

var jsXdr = require('@stellar/js-xdr');
var enumValue = require('../values/enum-value.js');

class BeginSponsoringFutureReservesResultCode extends enumValue.EnumValue {
  static beginSponsoringFutureReservesSuccess = new BeginSponsoringFutureReservesResultCode(
    "beginSponsoringFutureReservesSuccess",
    0
  );
  static beginSponsoringFutureReservesMalformed = new BeginSponsoringFutureReservesResultCode(
    "beginSponsoringFutureReservesMalformed",
    -1
  );
  static beginSponsoringFutureReservesAlreadySponsored = new BeginSponsoringFutureReservesResultCode(
    "beginSponsoringFutureReservesAlreadySponsored",
    -2
  );
  static beginSponsoringFutureReservesRecursive = new BeginSponsoringFutureReservesResultCode(
    "beginSponsoringFutureReservesRecursive",
    -3
  );
  static schema = enumValue.withMemberPrefix(
    jsXdr.enumType("BeginSponsoringFutureReservesResultCode", {
      beginSponsoringFutureReservesSuccess: 0,
      beginSponsoringFutureReservesMalformed: -1,
      beginSponsoringFutureReservesAlreadySponsored: -2,
      beginSponsoringFutureReservesRecursive: -3
    }),
    "beginSponsoringFutureReserves"
  );
  static fromValue(value) {
    return enumValue.enumFromValue(
      "BeginSponsoringFutureReservesResultCode",
      BeginSponsoringFutureReservesResultCode.schema,
      BeginSponsoringFutureReservesResultCode,
      value
    );
  }
  static fromName(name) {
    return enumValue.enumFromName(
      "BeginSponsoringFutureReservesResultCode",
      BeginSponsoringFutureReservesResultCode,
      name
    );
  }
  static fromXdrObject(wire) {
    return BeginSponsoringFutureReservesResultCode.fromValue(wire);
  }
}

exports.BeginSponsoringFutureReservesResultCode = BeginSponsoringFutureReservesResultCode;
//# sourceMappingURL=begin-sponsoring-future-reserves-result-code.js.map
