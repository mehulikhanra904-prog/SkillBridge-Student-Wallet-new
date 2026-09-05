'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var paymentResultCode = require('./payment-result-code.js');

class PaymentResultBase extends xdrValue.XdrValue {
  constructor() {
    super();
    if (new.target === PaymentResultBase) {
      throw new TypeError(
        "new xdr.PaymentResult(...) is not supported: XDR unions are built from per-variant factories. Call xdr.PaymentResult.paymentSuccess() (or another arm factory) instead."
      );
    }
  }
  static schema = jsXdr.union("PaymentResult", {
    switchOn: paymentResultCode.PaymentResultCode.schema,
    cases: [
      jsXdr.case("paymentSuccess", 0, jsXdr.void()),
      jsXdr.case("paymentMalformed", -1, jsXdr.void()),
      jsXdr.case("paymentUnderfunded", -2, jsXdr.void()),
      jsXdr.case("paymentSrcNoTrust", -3, jsXdr.void()),
      jsXdr.case("paymentSrcNotAuthorized", -4, jsXdr.void()),
      jsXdr.case("paymentNoDestination", -5, jsXdr.void()),
      jsXdr.case("paymentNoTrust", -6, jsXdr.void()),
      jsXdr.case("paymentNotAuthorized", -7, jsXdr.void()),
      jsXdr.case("paymentLineFull", -8, jsXdr.void()),
      jsXdr.case("paymentNoIssuer", -9, jsXdr.void())
    ],
    switchKey: "code"
  });
  static paymentSuccess() {
    return new PaymentResultSuccess();
  }
  static paymentMalformed() {
    return new PaymentResultMalformed();
  }
  static paymentUnderfunded() {
    return new PaymentResultUnderfunded();
  }
  static paymentSrcNoTrust() {
    return new PaymentResultSrcNoTrust();
  }
  static paymentSrcNotAuthorized() {
    return new PaymentResultSrcNotAuthorized();
  }
  static paymentNoDestination() {
    return new PaymentResultNoDestination();
  }
  static paymentNoTrust() {
    return new PaymentResultNoTrust();
  }
  static paymentNotAuthorized() {
    return new PaymentResultNotAuthorized();
  }
  static paymentLineFull() {
    return new PaymentResultLineFull();
  }
  static paymentNoIssuer() {
    return new PaymentResultNoIssuer();
  }
  static fromXdrObject(wire) {
    switch (wire.code) {
      case 0:
        return new PaymentResultSuccess();
      case -1:
        return new PaymentResultMalformed();
      case -2:
        return new PaymentResultUnderfunded();
      case -3:
        return new PaymentResultSrcNoTrust();
      case -4:
        return new PaymentResultSrcNotAuthorized();
      case -5:
        return new PaymentResultNoDestination();
      case -6:
        return new PaymentResultNoTrust();
      case -7:
        return new PaymentResultNotAuthorized();
      case -8:
        return new PaymentResultLineFull();
      case -9:
        return new PaymentResultNoIssuer();
    }
    throw new jsXdr.XdrError(
      `PaymentResult: unknown code ${wire.code}`
    );
  }
  /**
   * Type guard narrowing an unknown value to a concrete PaymentResult variant.
   * Use this instead of `instanceof PaymentResult`: the exported `PaymentResult` value
   * is the abstract base, so `instanceof` narrows to the base (not the
   * variant union) and forces a cast. `PaymentResult.is(x)` narrows to the union.
   */
  static is(value) {
    return value instanceof PaymentResultBase;
  }
}
class PaymentResultSuccess extends PaymentResultBase {
  type = "paymentSuccess";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: 0 };
  }
}
class PaymentResultMalformed extends PaymentResultBase {
  type = "paymentMalformed";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -1 };
  }
}
class PaymentResultUnderfunded extends PaymentResultBase {
  type = "paymentUnderfunded";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -2 };
  }
}
class PaymentResultSrcNoTrust extends PaymentResultBase {
  type = "paymentSrcNoTrust";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -3 };
  }
}
class PaymentResultSrcNotAuthorized extends PaymentResultBase {
  type = "paymentSrcNotAuthorized";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -4 };
  }
}
class PaymentResultNoDestination extends PaymentResultBase {
  type = "paymentNoDestination";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -5 };
  }
}
class PaymentResultNoTrust extends PaymentResultBase {
  type = "paymentNoTrust";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -6 };
  }
}
class PaymentResultNotAuthorized extends PaymentResultBase {
  type = "paymentNotAuthorized";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -7 };
  }
}
class PaymentResultLineFull extends PaymentResultBase {
  type = "paymentLineFull";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -8 };
  }
}
class PaymentResultNoIssuer extends PaymentResultBase {
  type = "paymentNoIssuer";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -9 };
  }
}
const PaymentResult = PaymentResultBase;

exports.PaymentResult = PaymentResult;
exports.PaymentResultLineFull = PaymentResultLineFull;
exports.PaymentResultMalformed = PaymentResultMalformed;
exports.PaymentResultNoDestination = PaymentResultNoDestination;
exports.PaymentResultNoIssuer = PaymentResultNoIssuer;
exports.PaymentResultNoTrust = PaymentResultNoTrust;
exports.PaymentResultNotAuthorized = PaymentResultNotAuthorized;
exports.PaymentResultSrcNoTrust = PaymentResultSrcNoTrust;
exports.PaymentResultSrcNotAuthorized = PaymentResultSrcNotAuthorized;
exports.PaymentResultSuccess = PaymentResultSuccess;
exports.PaymentResultUnderfunded = PaymentResultUnderfunded;
//# sourceMappingURL=payment-result.js.map
