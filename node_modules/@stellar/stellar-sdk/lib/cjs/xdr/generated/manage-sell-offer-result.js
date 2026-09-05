'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var manageSellOfferResultCode = require('./manage-sell-offer-result-code.js');
var manageOfferSuccessResult = require('./manage-offer-success-result.js');

class ManageSellOfferResultBase extends xdrValue.XdrValue {
  constructor() {
    super();
    if (new.target === ManageSellOfferResultBase) {
      throw new TypeError(
        "new xdr.ManageSellOfferResult(...) is not supported: XDR unions are built from per-variant factories. Call xdr.ManageSellOfferResult.manageSellOfferSuccess(...) (or another arm factory) instead."
      );
    }
  }
  static schema = jsXdr.union(
    "ManageSellOfferResult",
    {
      switchOn: manageSellOfferResultCode.ManageSellOfferResultCode.schema,
      cases: [
        jsXdr.case(
          "manageSellOfferSuccess",
          0,
          jsXdr.field("success", manageOfferSuccessResult.ManageOfferSuccessResult.schema)
        ),
        jsXdr.case("manageSellOfferMalformed", -1, jsXdr.void()),
        jsXdr.case("manageSellOfferSellNoTrust", -2, jsXdr.void()),
        jsXdr.case("manageSellOfferBuyNoTrust", -3, jsXdr.void()),
        jsXdr.case("manageSellOfferSellNotAuthorized", -4, jsXdr.void()),
        jsXdr.case("manageSellOfferBuyNotAuthorized", -5, jsXdr.void()),
        jsXdr.case("manageSellOfferLineFull", -6, jsXdr.void()),
        jsXdr.case("manageSellOfferUnderfunded", -7, jsXdr.void()),
        jsXdr.case("manageSellOfferCrossSelf", -8, jsXdr.void()),
        jsXdr.case("manageSellOfferSellNoIssuer", -9, jsXdr.void()),
        jsXdr.case("manageSellOfferBuyNoIssuer", -10, jsXdr.void()),
        jsXdr.case("manageSellOfferNotFound", -11, jsXdr.void()),
        jsXdr.case("manageSellOfferLowReserve", -12, jsXdr.void())
      ],
      switchKey: "code"
    }
  );
  static manageSellOfferSuccess(success) {
    return new ManageSellOfferResultSuccess(success);
  }
  static manageSellOfferMalformed() {
    return new ManageSellOfferResultMalformed();
  }
  static manageSellOfferSellNoTrust() {
    return new ManageSellOfferResultSellNoTrust();
  }
  static manageSellOfferBuyNoTrust() {
    return new ManageSellOfferResultBuyNoTrust();
  }
  static manageSellOfferSellNotAuthorized() {
    return new ManageSellOfferResultSellNotAuthorized();
  }
  static manageSellOfferBuyNotAuthorized() {
    return new ManageSellOfferResultBuyNotAuthorized();
  }
  static manageSellOfferLineFull() {
    return new ManageSellOfferResultLineFull();
  }
  static manageSellOfferUnderfunded() {
    return new ManageSellOfferResultUnderfunded();
  }
  static manageSellOfferCrossSelf() {
    return new ManageSellOfferResultCrossSelf();
  }
  static manageSellOfferSellNoIssuer() {
    return new ManageSellOfferResultSellNoIssuer();
  }
  static manageSellOfferBuyNoIssuer() {
    return new ManageSellOfferResultBuyNoIssuer();
  }
  static manageSellOfferNotFound() {
    return new ManageSellOfferResultNotFound();
  }
  static manageSellOfferLowReserve() {
    return new ManageSellOfferResultLowReserve();
  }
  static fromXdrObject(wire) {
    switch (wire.code) {
      case 0:
        return new ManageSellOfferResultSuccess(
          manageOfferSuccessResult.ManageOfferSuccessResult.fromXdrObject(wire.success)
        );
      case -1:
        return new ManageSellOfferResultMalformed();
      case -2:
        return new ManageSellOfferResultSellNoTrust();
      case -3:
        return new ManageSellOfferResultBuyNoTrust();
      case -4:
        return new ManageSellOfferResultSellNotAuthorized();
      case -5:
        return new ManageSellOfferResultBuyNotAuthorized();
      case -6:
        return new ManageSellOfferResultLineFull();
      case -7:
        return new ManageSellOfferResultUnderfunded();
      case -8:
        return new ManageSellOfferResultCrossSelf();
      case -9:
        return new ManageSellOfferResultSellNoIssuer();
      case -10:
        return new ManageSellOfferResultBuyNoIssuer();
      case -11:
        return new ManageSellOfferResultNotFound();
      case -12:
        return new ManageSellOfferResultLowReserve();
    }
    throw new jsXdr.XdrError(
      `ManageSellOfferResult: unknown code ${wire.code}`
    );
  }
  /**
   * Type guard narrowing an unknown value to a concrete ManageSellOfferResult variant.
   * Use this instead of `instanceof ManageSellOfferResult`: the exported `ManageSellOfferResult` value
   * is the abstract base, so `instanceof` narrows to the base (not the
   * variant union) and forces a cast. `ManageSellOfferResult.is(x)` narrows to the union.
   */
  static is(value) {
    return value instanceof ManageSellOfferResultBase;
  }
}
class ManageSellOfferResultSuccess extends ManageSellOfferResultBase {
  type = "manageSellOfferSuccess";
  success;
  constructor(success) {
    super();
    this.success = success;
  }
  get value() {
    return this.success;
  }
  toXdrObject() {
    return { code: 0, success: this.success.toXdrObject() };
  }
}
class ManageSellOfferResultMalformed extends ManageSellOfferResultBase {
  type = "manageSellOfferMalformed";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -1 };
  }
}
class ManageSellOfferResultSellNoTrust extends ManageSellOfferResultBase {
  type = "manageSellOfferSellNoTrust";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -2 };
  }
}
class ManageSellOfferResultBuyNoTrust extends ManageSellOfferResultBase {
  type = "manageSellOfferBuyNoTrust";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -3 };
  }
}
class ManageSellOfferResultSellNotAuthorized extends ManageSellOfferResultBase {
  type = "manageSellOfferSellNotAuthorized";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -4 };
  }
}
class ManageSellOfferResultBuyNotAuthorized extends ManageSellOfferResultBase {
  type = "manageSellOfferBuyNotAuthorized";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -5 };
  }
}
class ManageSellOfferResultLineFull extends ManageSellOfferResultBase {
  type = "manageSellOfferLineFull";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -6 };
  }
}
class ManageSellOfferResultUnderfunded extends ManageSellOfferResultBase {
  type = "manageSellOfferUnderfunded";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -7 };
  }
}
class ManageSellOfferResultCrossSelf extends ManageSellOfferResultBase {
  type = "manageSellOfferCrossSelf";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -8 };
  }
}
class ManageSellOfferResultSellNoIssuer extends ManageSellOfferResultBase {
  type = "manageSellOfferSellNoIssuer";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -9 };
  }
}
class ManageSellOfferResultBuyNoIssuer extends ManageSellOfferResultBase {
  type = "manageSellOfferBuyNoIssuer";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -10 };
  }
}
class ManageSellOfferResultNotFound extends ManageSellOfferResultBase {
  type = "manageSellOfferNotFound";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -11 };
  }
}
class ManageSellOfferResultLowReserve extends ManageSellOfferResultBase {
  type = "manageSellOfferLowReserve";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -12 };
  }
}
const ManageSellOfferResult = ManageSellOfferResultBase;

exports.ManageSellOfferResult = ManageSellOfferResult;
exports.ManageSellOfferResultBuyNoIssuer = ManageSellOfferResultBuyNoIssuer;
exports.ManageSellOfferResultBuyNoTrust = ManageSellOfferResultBuyNoTrust;
exports.ManageSellOfferResultBuyNotAuthorized = ManageSellOfferResultBuyNotAuthorized;
exports.ManageSellOfferResultCrossSelf = ManageSellOfferResultCrossSelf;
exports.ManageSellOfferResultLineFull = ManageSellOfferResultLineFull;
exports.ManageSellOfferResultLowReserve = ManageSellOfferResultLowReserve;
exports.ManageSellOfferResultMalformed = ManageSellOfferResultMalformed;
exports.ManageSellOfferResultNotFound = ManageSellOfferResultNotFound;
exports.ManageSellOfferResultSellNoIssuer = ManageSellOfferResultSellNoIssuer;
exports.ManageSellOfferResultSellNoTrust = ManageSellOfferResultSellNoTrust;
exports.ManageSellOfferResultSellNotAuthorized = ManageSellOfferResultSellNotAuthorized;
exports.ManageSellOfferResultSuccess = ManageSellOfferResultSuccess;
exports.ManageSellOfferResultUnderfunded = ManageSellOfferResultUnderfunded;
//# sourceMappingURL=manage-sell-offer-result.js.map
