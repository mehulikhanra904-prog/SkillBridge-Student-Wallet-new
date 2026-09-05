import { union, case as _case, field, void as _void, XdrError } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { PathPaymentStrictSendResultCode } from './path-payment-strict-send-result-code.js';
import { PathPaymentStrictSendResultSuccess } from './path-payment-strict-send-result-success.js';
import { Asset as Asset$1 } from './asset.js';

class PathPaymentStrictSendResultBase extends XdrValue {
  constructor() {
    super();
    if (new.target === PathPaymentStrictSendResultBase) {
      throw new TypeError(
        "new xdr.PathPaymentStrictSendResult(...) is not supported: XDR unions are built from per-variant factories. Call xdr.PathPaymentStrictSendResult.pathPaymentStrictSendSuccess(...) (or another arm factory) instead."
      );
    }
  }
  static schema = union(
    "PathPaymentStrictSendResult",
    {
      switchOn: PathPaymentStrictSendResultCode.schema,
      cases: [
        _case(
          "pathPaymentStrictSendSuccess",
          0,
          field("success", PathPaymentStrictSendResultSuccess.schema)
        ),
        _case("pathPaymentStrictSendMalformed", -1, _void()),
        _case("pathPaymentStrictSendUnderfunded", -2, _void()),
        _case("pathPaymentStrictSendSrcNoTrust", -3, _void()),
        _case("pathPaymentStrictSendSrcNotAuthorized", -4, _void()),
        _case("pathPaymentStrictSendNoDestination", -5, _void()),
        _case("pathPaymentStrictSendNoTrust", -6, _void()),
        _case("pathPaymentStrictSendNotAuthorized", -7, _void()),
        _case("pathPaymentStrictSendLineFull", -8, _void()),
        _case(
          "pathPaymentStrictSendNoIssuer",
          -9,
          field("noIssuer", Asset$1.schema)
        ),
        _case("pathPaymentStrictSendTooFewOffers", -10, _void()),
        _case("pathPaymentStrictSendOfferCrossSelf", -11, _void()),
        _case("pathPaymentStrictSendUnderDestmin", -12, _void())
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
          PathPaymentStrictSendResultSuccess.fromXdrObject(wire.success)
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
          Asset$1.fromXdrObject(wire.noIssuer)
        );
      case -10:
        return new PathPaymentStrictSendResultTooFewOffers();
      case -11:
        return new PathPaymentStrictSendResultOfferCrossSelf();
      case -12:
        return new PathPaymentStrictSendResultUnderDestmin();
    }
    throw new XdrError(
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

export { PathPaymentStrictSendResult, PathPaymentStrictSendResultLineFull, PathPaymentStrictSendResultMalformed, PathPaymentStrictSendResultNoDestination, PathPaymentStrictSendResultNoIssuer, PathPaymentStrictSendResultNoTrust, PathPaymentStrictSendResultNotAuthorized, PathPaymentStrictSendResultOfferCrossSelf, PathPaymentStrictSendResultSrcNoTrust, PathPaymentStrictSendResultSrcNotAuthorized, PathPaymentStrictSendResultSuccessArm, PathPaymentStrictSendResultTooFewOffers, PathPaymentStrictSendResultUnderDestmin, PathPaymentStrictSendResultUnderfunded };
//# sourceMappingURL=path-payment-strict-send-result.js.map
