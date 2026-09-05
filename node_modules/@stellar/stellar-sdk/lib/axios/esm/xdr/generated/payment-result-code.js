import { enumType } from '@stellar/js-xdr';
import { EnumValue, withMemberPrefix, enumFromValue, enumFromName } from '../values/enum-value.js';

class PaymentResultCode extends EnumValue {
  static paymentSuccess = new PaymentResultCode("paymentSuccess", 0);
  static paymentMalformed = new PaymentResultCode(
    "paymentMalformed",
    -1
  );
  static paymentUnderfunded = new PaymentResultCode(
    "paymentUnderfunded",
    -2
  );
  static paymentSrcNoTrust = new PaymentResultCode(
    "paymentSrcNoTrust",
    -3
  );
  static paymentSrcNotAuthorized = new PaymentResultCode(
    "paymentSrcNotAuthorized",
    -4
  );
  static paymentNoDestination = new PaymentResultCode(
    "paymentNoDestination",
    -5
  );
  static paymentNoTrust = new PaymentResultCode("paymentNoTrust", -6);
  static paymentNotAuthorized = new PaymentResultCode(
    "paymentNotAuthorized",
    -7
  );
  static paymentLineFull = new PaymentResultCode(
    "paymentLineFull",
    -8
  );
  static paymentNoIssuer = new PaymentResultCode(
    "paymentNoIssuer",
    -9
  );
  static schema = withMemberPrefix(
    enumType("PaymentResultCode", {
      paymentSuccess: 0,
      paymentMalformed: -1,
      paymentUnderfunded: -2,
      paymentSrcNoTrust: -3,
      paymentSrcNotAuthorized: -4,
      paymentNoDestination: -5,
      paymentNoTrust: -6,
      paymentNotAuthorized: -7,
      paymentLineFull: -8,
      paymentNoIssuer: -9
    }),
    "payment"
  );
  static fromValue(value) {
    return enumFromValue(
      "PaymentResultCode",
      PaymentResultCode.schema,
      PaymentResultCode,
      value
    );
  }
  static fromName(name) {
    return enumFromName("PaymentResultCode", PaymentResultCode, name);
  }
  static fromXdrObject(wire) {
    return PaymentResultCode.fromValue(wire);
  }
}

export { PaymentResultCode };
//# sourceMappingURL=payment-result-code.js.map
