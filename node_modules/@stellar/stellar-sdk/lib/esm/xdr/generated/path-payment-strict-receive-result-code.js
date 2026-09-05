import { enumType } from '@stellar/js-xdr';
import { EnumValue, withMemberPrefix, enumFromValue, enumFromName } from '../values/enum-value.js';

class PathPaymentStrictReceiveResultCode extends EnumValue {
  static pathPaymentStrictReceiveSuccess = new PathPaymentStrictReceiveResultCode(
    "pathPaymentStrictReceiveSuccess",
    0
  );
  static pathPaymentStrictReceiveMalformed = new PathPaymentStrictReceiveResultCode(
    "pathPaymentStrictReceiveMalformed",
    -1
  );
  static pathPaymentStrictReceiveUnderfunded = new PathPaymentStrictReceiveResultCode(
    "pathPaymentStrictReceiveUnderfunded",
    -2
  );
  static pathPaymentStrictReceiveSrcNoTrust = new PathPaymentStrictReceiveResultCode(
    "pathPaymentStrictReceiveSrcNoTrust",
    -3
  );
  static pathPaymentStrictReceiveSrcNotAuthorized = new PathPaymentStrictReceiveResultCode(
    "pathPaymentStrictReceiveSrcNotAuthorized",
    -4
  );
  static pathPaymentStrictReceiveNoDestination = new PathPaymentStrictReceiveResultCode(
    "pathPaymentStrictReceiveNoDestination",
    -5
  );
  static pathPaymentStrictReceiveNoTrust = new PathPaymentStrictReceiveResultCode(
    "pathPaymentStrictReceiveNoTrust",
    -6
  );
  static pathPaymentStrictReceiveNotAuthorized = new PathPaymentStrictReceiveResultCode(
    "pathPaymentStrictReceiveNotAuthorized",
    -7
  );
  static pathPaymentStrictReceiveLineFull = new PathPaymentStrictReceiveResultCode(
    "pathPaymentStrictReceiveLineFull",
    -8
  );
  static pathPaymentStrictReceiveNoIssuer = new PathPaymentStrictReceiveResultCode(
    "pathPaymentStrictReceiveNoIssuer",
    -9
  );
  static pathPaymentStrictReceiveTooFewOffers = new PathPaymentStrictReceiveResultCode(
    "pathPaymentStrictReceiveTooFewOffers",
    -10
  );
  static pathPaymentStrictReceiveOfferCrossSelf = new PathPaymentStrictReceiveResultCode(
    "pathPaymentStrictReceiveOfferCrossSelf",
    -11
  );
  static pathPaymentStrictReceiveOverSendmax = new PathPaymentStrictReceiveResultCode(
    "pathPaymentStrictReceiveOverSendmax",
    -12
  );
  static schema = withMemberPrefix(
    enumType("PathPaymentStrictReceiveResultCode", {
      pathPaymentStrictReceiveSuccess: 0,
      pathPaymentStrictReceiveMalformed: -1,
      pathPaymentStrictReceiveUnderfunded: -2,
      pathPaymentStrictReceiveSrcNoTrust: -3,
      pathPaymentStrictReceiveSrcNotAuthorized: -4,
      pathPaymentStrictReceiveNoDestination: -5,
      pathPaymentStrictReceiveNoTrust: -6,
      pathPaymentStrictReceiveNotAuthorized: -7,
      pathPaymentStrictReceiveLineFull: -8,
      pathPaymentStrictReceiveNoIssuer: -9,
      pathPaymentStrictReceiveTooFewOffers: -10,
      pathPaymentStrictReceiveOfferCrossSelf: -11,
      pathPaymentStrictReceiveOverSendmax: -12
    }),
    "pathPaymentStrictReceive"
  );
  static fromValue(value) {
    return enumFromValue(
      "PathPaymentStrictReceiveResultCode",
      PathPaymentStrictReceiveResultCode.schema,
      PathPaymentStrictReceiveResultCode,
      value
    );
  }
  static fromName(name) {
    return enumFromName(
      "PathPaymentStrictReceiveResultCode",
      PathPaymentStrictReceiveResultCode,
      name
    );
  }
  static fromXdrObject(wire) {
    return PathPaymentStrictReceiveResultCode.fromValue(wire);
  }
}

export { PathPaymentStrictReceiveResultCode };
//# sourceMappingURL=path-payment-strict-receive-result-code.js.map
