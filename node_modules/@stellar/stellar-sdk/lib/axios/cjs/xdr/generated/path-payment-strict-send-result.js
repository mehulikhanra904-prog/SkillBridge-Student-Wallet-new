'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var pathPaymentStrictSendResultCode = require('./path-payment-strict-send-result-code.js');
var pathPaymentStrictSendResultSuccess = require('./path-payment-strict-send-result-success.js');
var asset = require('./asset.js');

class PathPaymentStrictSendResultBase extends xdrValue.XdrValue {
  constructor() {
    super();
    if (new.target === PathPaymentStrictSendResultBase) {
      throw new TypeError(
        "new xdr.PathPaymentStrictSendResult(...) is not supported: XDR unions are built from per-variant factories. Call xdr.PathPaymentStrictSendResult.pathPaymentStrictSendSuccess(...) (or another arm factory) instead."
      );
    }
  }
  static schema = jsXdr.union(
    "PathPaymentStrictSendResult",
    {
      switchOn: pathPaymentStrictSendResultCode.PathPaymentStrictSendResultCode.schema,
      cases: [
        jsXdr.case(
          "pathPaymentStrictSendSuccess",
          0,
          jsXdr.field("success", pathPaymentStrictSendResultSuccess.PathPaymentStrictSendResultSuccess.schema)
        ),
        jsXdr.case("pathPaymentStrictSendMalformed", -1, jsXdr.void()),
        jsXdr.case("pathPaymentStrictSendUnderfunded", -2, jsXdr.void()),
        jsXdr.case("pathPaymentStrictSendSrcNoTrust", -3, jsXdr.void()),
        jsXdr.case("pathPaymentStrictSendSrcNotAuthorized", -4, jsXdr.void()),
        jsXdr.case("pathPaymentStrictSendNoDestination", -5, jsXdr.void()),
        jsXdr.case("pathPaymentStrictSendNoTrust", -6, jsXdr.void()),
        jsXdr.case("pathPaymentStrictSendNotAuthorized", -7, jsXdr.void()),
        jsXdr.case("pathPaymentStrictSendLineFull", -8, jsXdr.void()),
        jsXdr.case(
          "pathPaymentStrictSendNoIssuer",
          -9,
          jsXdr.field("noIssuer", asset.Asset.schema)
        ),
        jsXdr.case("pathPaymentStrictSendTooFewOffers", -10, jsXdr.void()),
        jsXdr.case("pathPaymentStrictSendOfferCrossSelf", -11, jsXdr.void()),
        jsXdr.case("pathPaymentStrictSendUnderDestmin", -12, jsXdr.void())
      ],
      switchKey: "code"
    }
  );
  static pathPaymentStrictSendSuccess(success) {
    return new PathPaymentStrictSendResultSuccessArm(success);
  }
  static pathPaymentStrictSendMalformed() {
    return new PathPaymentStrictSendResultMalformed();
  }
  static pathPaymentStrictSendUnderfunded() {
    return new PathPaymentStrictSendResultUnderfunded();
  }
  static pathPaymentStrictSendSrcNoTrust() {
    return new PathPaymentStrictSendResultSrcNoTrust();
  }
  static pathPaymentStrictSendSrcNotAuthorized() {
    return new PathPaymentStrictSendResultSrcNotAuthorized();
  }
  static pathPaymentStrictSendNoDestination() {
    return new PathPaymentStrictSendResultNoDestination();
  }
  static pathPaymentStrictSendNoTrust() {
    return new PathPaymentStrictSendResultNoTrust();
  }
  static pathPaymentStrictSendNotAuthorized() {
    return new PathPaymentStrictSendResultNotAuthorized();
  }
  static pathPaymentStrictSendLineFull() {
    return new PathPaymentStrictSendResultLineFull();
  }
  static pathPaymentStrictSendNoIssuer(noIssuer) {
    return new PathPaymentStrictSendResultNoIssuer(noIssuer);
  }
  static pathPaymentStrictSendTooFewOffers() {
    return new PathPaymentStrictSendResultTooFewOffers();
  }
  static pathPaymentStrictSendOfferCrossSelf() {
    return new PathPaymentStrictSendResultOfferCrossSelf();
  }
  static pathPaymentStrictSendUnderDestmin() {
    return new PathPaymentStrictSendResultUnderDestmin();
  }
  static fromXdrObject(wire) {
    switch (wire.code) {
      case 0:
        return new PathPaymentStrictSendResultSuccessArm(
          pathPaymentStrictSendResultSuccess.PathPaymentStrictSendResultSuccess.fromXdrObject(wire.success)
        );
      case -1:
        return new PathPaymentStrictSendResultMalformed();
      case -2:
        return new PathPaymentStrictSendResultUnderfunded();
      case -3:
        return new PathPaymentStrictSendResultSrcNoTrust();
      case -4:
        return new PathPaymentStrictSendResultSrcNotAuthorized();
      case -5:
        return new PathPaymentStrictSendResultNoDestination();
      case -6:
        return new PathPaymentStrictSendResultNoTrust();
      case -7:
        return new PathPaymentStrictSendResultNotAuthorized();
      case -8:
        return new PathPaymentStrictSendResultLineFull();
      case -9:
        return new PathPaymentStrictSendResultNoIssuer(
          asset.Asset.fromXdrObject(wire.noIssuer)
        );
      case -10:
        return new PathPaymentStrictSendResultTooFewOffers();
      case -11:
        return new PathPaymentStrictSendResultOfferCrossSelf();
      case -12:
        return new PathPaymentStrictSendResultUnderDestmin();
    }
    throw new jsXdr.XdrError(
      `PathPaymentStrictSendResult: unknown code ${wire.code}`
    );
  }
  /**
   * Type guard narrowing an unknown value to a concrete PathPaymentStrictSendResult variant.
   * Use this instead of `instanceof PathPaymentStrictSendResult`: the exported `PathPaymentStrictSendResult` value
   * is the abstract base, so `instanceof` narrows to the base (not the
   * variant union) and forces a cast. `PathPaymentStrictSendResult.is(x)` narrows to the union.
   */
  static is(value) {
    return value instanceof PathPaymentStrictSendResultBase;
  }
}
class PathPaymentStrictSendResultSuccessArm extends PathPaymentStrictSendResultBase {
  type = "pathPaymentStrictSendSuccess";
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
class PathPaymentStrictSendResultMalformed extends PathPaymentStrictSendResultBase {
  type = "pathPaymentStrictSendMalformed";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -1 };
  }
}
class PathPaymentStrictSendResultUnderfunded extends PathPaymentStrictSendResultBase {
  type = "pathPaymentStrictSendUnderfunded";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -2 };
  }
}
class PathPaymentStrictSendResultSrcNoTrust extends PathPaymentStrictSendResultBase {
  type = "pathPaymentStrictSendSrcNoTrust";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -3 };
  }
}
class PathPaymentStrictSendResultSrcNotAuthorized extends PathPaymentStrictSendResultBase {
  type = "pathPaymentStrictSendSrcNotAuthorized";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -4 };
  }
}
class PathPaymentStrictSendResultNoDestination extends PathPaymentStrictSendResultBase {
  type = "pathPaymentStrictSendNoDestination";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -5 };
  }
}
class PathPaymentStrictSendResultNoTrust extends PathPaymentStrictSendResultBase {
  type = "pathPaymentStrictSendNoTrust";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -6 };
  }
}
class PathPaymentStrictSendResultNotAuthorized extends PathPaymentStrictSendResultBase {
  type = "pathPaymentStrictSendNotAuthorized";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -7 };
  }
}
class PathPaymentStrictSendResultLineFull extends PathPaymentStrictSendResultBase {
  type = "pathPaymentStrictSendLineFull";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -8 };
  }
}
class PathPaymentStrictSendResultNoIssuer extends PathPaymentStrictSendResultBase {
  type = "pathPaymentStrictSendNoIssuer";
  noIssuer;
  constructor(noIssuer) {
    super();
    this.noIssuer = noIssuer;
  }
  get value() {
    return this.noIssuer;
  }
  toXdrObject() {
    return { code: -9, noIssuer: this.noIssuer.toXdrObject() };
  }
}
class PathPaymentStrictSendResultTooFewOffers extends PathPaymentStrictSendResultBase {
  type = "pathPaymentStrictSendTooFewOffers";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -10 };
  }
}
class PathPaymentStrictSendResultOfferCrossSelf extends PathPaymentStrictSendResultBase {
  type = "pathPaymentStrictSendOfferCrossSelf";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -11 };
  }
}
class PathPaymentStrictSendResultUnderDestmin extends PathPaymentStrictSendResultBase {
  type = "pathPaymentStrictSendUnderDestmin";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -12 };
  }
}
const PathPaymentStrictSendResult = PathPaymentStrictSendResultBase;

exports.PathPaymentStrictSendResult = PathPaymentStrictSendResult;
exports.PathPaymentStrictSendResultLineFull = PathPaymentStrictSendResultLineFull;
exports.PathPaymentStrictSendResultMalformed = PathPaymentStrictSendResultMalformed;
exports.PathPaymentStrictSendResultNoDestination = PathPaymentStrictSendResultNoDestination;
exports.PathPaymentStrictSendResultNoIssuer = PathPaymentStrictSendResultNoIssuer;
exports.PathPaymentStrictSendResultNoTrust = PathPaymentStrictSendResultNoTrust;
exports.PathPaymentStrictSendResultNotAuthorized = PathPaymentStrictSendResultNotAuthorized;
exports.PathPaymentStrictSendResultOfferCrossSelf = PathPaymentStrictSendResultOfferCrossSelf;
exports.PathPaymentStrictSendResultSrcNoTrust = PathPaymentStrictSendResultSrcNoTrust;
exports.PathPaymentStrictSendResultSrcNotAuthorized = PathPaymentStrictSendResultSrcNotAuthorized;
exports.PathPaymentStrictSendResultSuccessArm = PathPaymentStrictSendResultSuccessArm;
exports.PathPaymentStrictSendResultTooFewOffers = PathPaymentStrictSendResultTooFewOffers;
exports.PathPaymentStrictSendResultUnderDestmin = PathPaymentStrictSendResultUnderDestmin;
exports.PathPaymentStrictSendResultUnderfunded = PathPaymentStrictSendResultUnderfunded;
//# sourceMappingURL=path-payment-strict-send-result.js.map
