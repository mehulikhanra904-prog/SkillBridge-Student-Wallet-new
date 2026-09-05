'use strict';

var jsXdr = require('@stellar/js-xdr');
var enumValue = require('../values/enum-value.js');

class EndSponsoringFutureReservesResultCode extends enumValue.EnumValue {
  static endSponsoringFutureReservesSuccess = new EndSponsoringFutureReservesResultCode(
    "endSponsoringFutureReservesSuccess",
    0
  );
  static endSponsoringFutureReservesNotSponsored = new EndSponsoringFutureReservesResultCode(
    "endSponsoringFutureReservesNotSponsored",
    -1
  );
  static schema = enumValue.withMemberPrefix(
    jsXdr.enumType("EndSponsoringFutureReservesResultCode", {
      endSponsoringFutureReservesSuccess: 0,
      endSponsoringFutureReservesNotSponsored: -1
    }),
    "endSponsoringFutureReserves"
  );
  static fromValue(value) {
    return enumValue.enumFromValue(
      "EndSponsoringFutureReservesResultCode",
      EndSponsoringFutureReservesResultCode.schema,
      EndSponsoringFutureReservesResultCode,
      value
    );
  }
  static fromName(name) {
    return enumValue.enumFromName(
      "EndSponsoringFutureReservesResultCode",
      EndSponsoringFutureReservesResultCode,
      name
    );
  }
  static fromXdrObject(wire) {
    return EndSponsoringFutureReservesResultCode.fromValue(wire);
  }
}

exports.EndSponsoringFutureReservesResultCode = EndSponsoringFutureReservesResultCode;
//# sourceMappingURL=end-sponsoring-future-reserves-result-code.js.map
