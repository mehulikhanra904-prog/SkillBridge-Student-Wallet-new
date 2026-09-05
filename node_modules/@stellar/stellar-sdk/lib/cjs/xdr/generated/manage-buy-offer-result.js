'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var manageBuyOfferResultCode = require('./manage-buy-offer-result-code.js');
var manageOfferSuccessResult = require('./manage-offer-success-result.js');

class ManageBuyOfferResultBase extends xdrValue.XdrValue {
  constructor() {
    super();
    if (new.target === ManageBuyOfferResultBase) {
      throw new TypeError(
        "new xdr.ManageBuyOfferResult(...) is not supported: XDR unions are built from per-variant factories. Call xdr.ManageBuyOfferResult.manageBuyOfferSuccess(...) (or another arm factory) instead."
      );
    }
  }
  static schema = jsXdr.union(
    "ManageBuyOfferResult",
    {
      switchOn: manageBuyOfferResultCode.ManageBuyOfferResultCode.schema,
      cases: [
        jsXdr.case(
          "manageBuyOfferSuccess",
          0,
          jsXdr.field("success", manageOfferSuccessResult.ManageOfferSuccessResult.schema)
        ),
        jsXdr.case("manageBuyOfferMalformed", -1, jsXdr.void()),
        jsXdr.case("manageBuyOfferSellNoTrust", -2, jsXdr.void()),
        jsXdr.case("manageBuyOfferBuyNoTrust", -3, jsXdr.void()),
        jsXdr.case("manageBuyOfferSellNotAuthorized", -4, jsXdr.void()),
        jsXdr.case("manageBuyOfferBuyNotAuthorized", -5, jsXdr.void()),
        jsXdr.case("manageBuyOfferLineFull", -6, jsXdr.void()),
        jsXdr.case("manageBuyOfferUnderfunded", -7, jsXdr.void()),
        jsXdr.case("manageBuyOfferCrossSelf", -8, jsXdr.void()),
        jsXdr.case("manageBuyOfferSellNoIssuer", -9, jsXdr.void()),
        jsXdr.case("manageBuyOfferBuyNoIssuer", -10, jsXdr.void()),
        jsXdr.case("manageBuyOfferNotFound", -11, jsXdr.void()),
        jsXdr.case("manageBuyOfferLowReserve", -12, jsXdr.void())
      ],
      switchKey: "code"
    }
  );
  static manageBuyOfferSuccess(success) {
    return new ManageBuyOfferResultSuccess(success);
  }
  static manageBuyOfferMalformed() {
    return new ManageBuyOfferResultMalformed();
  }
  static manageBuyOfferSellNoTrust() {
    return new ManageBuyOfferResultSellNoTrust();
  }
  static manageBuyOfferBuyNoTrust() {
    return new ManageBuyOfferResultBuyNoTrust();
  }
  static manageBuyOfferSellNotAuthorized() {
    return new ManageBuyOfferResultSellNotAuthorized();
  }
  static manageBuyOfferBuyNotAuthorized() {
    return new ManageBuyOfferResultBuyNotAuthorized();
  }
  static manageBuyOfferLineFull() {
    return new ManageBuyOfferResultLineFull();
  }
  static manageBuyOfferUnderfunded() {
    return new ManageBuyOfferResultUnderfunded();
  }
  static manageBuyOfferCrossSelf() {
    return new ManageBuyOfferResultCrossSelf();
  }
  static manageBuyOfferSellNoIssuer() {
    return new ManageBuyOfferResultSellNoIssuer();
  }
  static manageBuyOfferBuyNoIssuer() {
    return new ManageBuyOfferResultBuyNoIssuer();
  }
  static manageBuyOfferNotFound() {
    return new ManageBuyOfferResultNotFound();
  }
  static manageBuyOfferLowReserve() {
    return new ManageBuyOfferResultLowReserve();
  }
  static fromXdrObject(wire) {
    switch (wire.code) {
      case 0:
        return new ManageBuyOfferResultSuccess(
          manageOfferSuccessResult.ManageOfferSuccessResult.fromXdrObject(wire.success)
        );
      case -1:
        return new ManageBuyOfferResultMalformed();
      case -2:
        return new ManageBuyOfferResultSellNoTrust();
      case -3:
        return new ManageBuyOfferResultBuyNoTrust();
      case -4:
        return new ManageBuyOfferResultSellNotAuthorized();
      case -5:
        return new ManageBuyOfferResultBuyNotAuthorized();
      case -6:
        return new ManageBuyOfferResultLineFull();
      case -7:
        return new ManageBuyOfferResultUnderfunded();
      case -8:
        return new ManageBuyOfferResultCrossSelf();
      case -9:
        return new ManageBuyOfferResultSellNoIssuer();
      case -10:
        return new ManageBuyOfferResultBuyNoIssuer();
      case -11:
        return new ManageBuyOfferResultNotFound();
      case -12:
        return new ManageBuyOfferResultLowReserve();
    }
    throw new jsXdr.XdrError(
      `ManageBuyOfferResult: unknown code ${wire.code}`
    );
  }
  /**
   * Type guard narrowing an unknown value to a concrete ManageBuyOfferResult variant.
   * Use this instead of `instanceof ManageBuyOfferResult`: the exported `ManageBuyOfferResult` value
   * is the abstract base, so `instanceof` narrows to the base (not the
   * variant union) and forces a cast. `ManageBuyOfferResult.is(x)` narrows to the union.
   */
  static is(value) {
    return value instanceof ManageBuyOfferResultBase;
  }
}
class ManageBuyOfferResultSuccess extends ManageBuyOfferResultBase {
  type = "manageBuyOfferSuccess";
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
class ManageBuyOfferResultMalformed extends ManageBuyOfferResultBase {
  type = "manageBuyOfferMalformed";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -1 };
  }
}
class ManageBuyOfferResultSellNoTrust extends ManageBuyOfferResultBase {
  type = "manageBuyOfferSellNoTrust";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -2 };
  }
}
class ManageBuyOfferResultBuyNoTrust extends ManageBuyOfferResultBase {
  type = "manageBuyOfferBuyNoTrust";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -3 };
  }
}
class ManageBuyOfferResultSellNotAuthorized extends ManageBuyOfferResultBase {
  type = "manageBuyOfferSellNotAuthorized";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -4 };
  }
}
class ManageBuyOfferResultBuyNotAuthorized extends ManageBuyOfferResultBase {
  type = "manageBuyOfferBuyNotAuthorized";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -5 };
  }
}
class ManageBuyOfferResultLineFull extends ManageBuyOfferResultBase {
  type = "manageBuyOfferLineFull";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -6 };
  }
}
class ManageBuyOfferResultUnderfunded extends ManageBuyOfferResultBase {
  type = "manageBuyOfferUnderfunded";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -7 };
  }
}
class ManageBuyOfferResultCrossSelf extends ManageBuyOfferResultBase {
  type = "manageBuyOfferCrossSelf";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -8 };
  }
}
class ManageBuyOfferResultSellNoIssuer extends ManageBuyOfferResultBase {
  type = "manageBuyOfferSellNoIssuer";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -9 };
  }
}
class ManageBuyOfferResultBuyNoIssuer extends ManageBuyOfferResultBase {
  type = "manageBuyOfferBuyNoIssuer";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -10 };
  }
}
class ManageBuyOfferResultNotFound extends ManageBuyOfferResultBase {
  type = "manageBuyOfferNotFound";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -11 };
  }
}
class ManageBuyOfferResultLowReserve extends ManageBuyOfferResultBase {
  type = "manageBuyOfferLowReserve";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -12 };
  }
}
const ManageBuyOfferResult = ManageBuyOfferResultBase;

exports.ManageBuyOfferResult = ManageBuyOfferResult;
exports.ManageBuyOfferResultBuyNoIssuer = ManageBuyOfferResultBuyNoIssuer;
exports.ManageBuyOfferResultBuyNoTrust = ManageBuyOfferResultBuyNoTrust;
exports.ManageBuyOfferResultBuyNotAuthorized = ManageBuyOfferResultBuyNotAuthorized;
exports.ManageBuyOfferResultCrossSelf = ManageBuyOfferResultCrossSelf;
exports.ManageBuyOfferResultLineFull = ManageBuyOfferResultLineFull;
exports.ManageBuyOfferResultLowReserve = ManageBuyOfferResultLowReserve;
exports.ManageBuyOfferResultMalformed = ManageBuyOfferResultMalformed;
exports.ManageBuyOfferResultNotFound = ManageBuyOfferResultNotFound;
exports.ManageBuyOfferResultSellNoIssuer = ManageBuyOfferResultSellNoIssuer;
exports.ManageBuyOfferResultSellNoTrust = ManageBuyOfferResultSellNoTrust;
exports.ManageBuyOfferResultSellNotAuthorized = ManageBuyOfferResultSellNotAuthorized;
exports.ManageBuyOfferResultSuccess = ManageBuyOfferResultSuccess;
exports.ManageBuyOfferResultUnderfunded = ManageBuyOfferResultUnderfunded;
//# sourceMappingURL=manage-buy-offer-result.js.map
