'use strict';

var jsXdr = require('@stellar/js-xdr');
var enumValue = require('../values/enum-value.js');

class PathPaymentStrictSendResultCode extends enumValue.EnumValue {
  static pathPaymentStrictSendSuccess = new PathPaymentStrictSendResultCode("pathPaymentStrictSendSuccess", 0);
  static pathPaymentStrictSendMalformed = new PathPaymentStrictSendResultCode("pathPaymentStrictSendMalformed", -1);
  static pathPaymentStrictSendUnderfunded = new PathPaymentStrictSendResultCode("pathPaymentStrictSendUnderfunded", -2);
  static pathPaymentStrictSendSrcNoTrust = new PathPaymentStrictSendResultCode("pathPaymentStrictSendSrcNoTrust", -3);
  static pathPaymentStrictSendSrcNotAuthorized = new PathPaymentStrictSendResultCode(
    "pathPaymentStrictSendSrcNotAuthorized",
    -4
  );
  static pathPaymentStrictSendNoDestination = new PathPaymentStrictSendResultCode(
    "pathPaymentStrictSendNoDestination",
    -5
  );
  static pathPaymentStrictSendNoTrust = new PathPaymentStrictSendResultCode("pathPaymentStrictSendNoTrust", -6);
  static pathPaymentStrictSendNotAuthorized = new PathPaymentStrictSendResultCode(
    "pathPaymentStrictSendNotAuthorized",
    -7
  );
  static pathPaymentStrictSendLineFull = new PathPaymentStrictSendResultCode("pathPaymentStrictSendLineFull", -8);
  static pathPaymentStrictSendNoIssuer = new PathPaymentStrictSendResultCode("pathPaymentStrictSendNoIssuer", -9);
  static pathPaymentStrictSendTooFewOffers = new PathPaymentStrictSendResultCode(
    "pathPaymentStrictSendTooFewOffers",
    -10
  );
  static pathPaymentStrictSendOfferCrossSelf = new PathPaymentStrictSendResultCode(
    "pathPaymentStrictSendOfferCrossSelf",
    -11
  );
  static pathPaymentStrictSendUnderDestmin = new PathPaymentStrictSendResultCode(
    "pathPaymentStrictSendUnderDestmin",
    -12
  );
  static schema = enumValue.withMemberPrefix(
    jsXdr.enumType("PathPaymentStrictSendResultCode", {
      pathPaymentStrictSendSuccess: 0,
      pathPaymentStrictSendMalformed: -1,
      pathPaymentStrictSendUnderfunded: -2,
      pathPaymentStrictSendSrcNoTrust: -3,
      pathPaymentStrictSendSrcNotAuthorized: -4,
      pathPaymentStrictSendNoDestination: -5,
      pathPaymentStrictSendNoTrust: -6,
      pathPaymentStrictSendNotAuthorized: -7,
      pathPaymentStrictSendLineFull: -8,
      pathPaymentStrictSendNoIssuer: -9,
      pathPaymentStrictSendTooFewOffers: -10,
      pathPaymentStrictSendOfferCrossSelf: -11,
      pathPaymentStrictSendUnderDestmin: -12
    }),
    "pathPaymentStrictSend"
  );
  static fromValue(value) {
    return enumValue.enumFromValue(
      "PathPaymentStrictSendResultCode",
      PathPaymentStrictSendResultCode.schema,
      PathPaymentStrictSendResultCode,
      value
    );
  }
  static fromName(name) {
    return enumValue.enumFromName(
      "PathPaymentStrictSendResultCode",
      PathPaymentStrictSendResultCode,
      name
    );
  }
  static fromXdrObject(wire) {
    return PathPaymentStrictSendResultCode.fromValue(wire);
  }
}

exports.PathPaymentStrictSendResultCode = PathPaymentStrictSendResultCode;
//# sourceMappingURL=path-payment-strict-send-result-code.js.map
