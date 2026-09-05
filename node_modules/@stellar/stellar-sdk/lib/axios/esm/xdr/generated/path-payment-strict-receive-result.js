import { union, case as _case, field, void as _void, XdrError } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { PathPaymentStrictReceiveResultCode } from './path-payment-strict-receive-result-code.js';
import { PathPaymentStrictReceiveResultSuccess } from './path-payment-strict-receive-result-success.js';
import { Asset as Asset$1 } from './asset.js';

class PathPaymentStrictReceiveResultBase extends XdrValue {
  constructor() {
    super();
    if (new.target === PathPaymentStrictReceiveResultBase) {
      throw new TypeError(
        "new xdr.PathPaymentStrictReceiveResult(...) is not supported: XDR unions are built from per-variant factories. Call xdr.PathPaymentStrictReceiveResult.pathPaymentStrictReceiveSuccess(...) (or another arm factory) instead."
      );
    }
  }
  static schema = union(
    "PathPaymentStrictReceiveResult",
    {
      switchOn: PathPaymentStrictReceiveResultCode.schema,
      cases: [
        _case(
          "pathPaymentStrictReceiveSuccess",
          0,
          field("success", PathPaymentStrictReceiveResultSuccess.schema)
        ),
        _case("pathPaymentStrictReceiveMalformed", -1, _void()),
        _case("pathPaymentStrictReceiveUnderfunded", -2, _void()),
        _case("pathPaymentStrictReceiveSrcNoTrust", -3, _void()),
        _case("pathPaymentStrictReceiveSrcNotAuthorized", -4, _void()),
        _case("pathPaymentStrictReceiveNoDestination", -5, _void()),
        _case("pathPaymentStrictReceiveNoTrust", -6, _void()),
        _case("pathPaymentStrictReceiveNotAuthorized", -7, _void()),
        _case("pathPaymentStrictReceiveLineFull", -8, _void()),
        _case(
          "pathPaymentStrictReceiveNoIssuer",
          -9,
          field("noIssuer", Asset$1.schema)
        ),
        _case("pathPaymentStrictReceiveTooFewOffers", -10, _void()),
        _case("pathPaymentStrictReceiveOfferCrossSelf", -11, _void()),
        _case("pathPaymentStrictReceiveOverSendmax", -12, _void())
      ],
      switchKey: "code"
    }
  );
  static pathPaymentStrictReceiveSuccess(success) {
    return new PathPaymentStrictReceiveResultSuccessArm(success);
  }
  static pathPaymentStrictReceiveMalformed() {
    return new PathPaymentStrictReceiveResultMalformed();
  }
  static pathPaymentStrictReceiveUnderfunded() {
    return new PathPaymentStrictReceiveResultUnderfunded();
  }
  static pathPaymentStrictReceiveSrcNoTrust() {
    return new PathPaymentStrictReceiveResultSrcNoTrust();
  }
  static pathPaymentStrictReceiveSrcNotAuthorized() {
    return new PathPaymentStrictReceiveResultSrcNotAuthorized();
  }
  static pathPaymentStrictReceiveNoDestination() {
    return new PathPaymentStrictReceiveResultNoDestination();
  }
  static pathPaymentStrictReceiveNoTrust() {
    return new PathPaymentStrictReceiveResultNoTrust();
  }
  static pathPaymentStrictReceiveNotAuthorized() {
    return new PathPaymentStrictReceiveResultNotAuthorized();
  }
  static pathPaymentStrictReceiveLineFull() {
    return new PathPaymentStrictReceiveResultLineFull();
  }
  static pathPaymentStrictReceiveNoIssuer(noIssuer) {
    return new PathPaymentStrictReceiveResultNoIssuer(noIssuer);
  }
  static pathPaymentStrictReceiveTooFewOffers() {
    return new PathPaymentStrictReceiveResultTooFewOffers();
  }
  static pathPaymentStrictReceiveOfferCrossSelf() {
    return new PathPaymentStrictReceiveResultOfferCrossSelf();
  }
  static pathPaymentStrictReceiveOverSendmax() {
    return new PathPaymentStrictReceiveResultOverSendmax();
  }
  static fromXdrObject(wire) {
    switch (wire.code) {
      case 0:
        return new PathPaymentStrictReceiveResultSuccessArm(
          PathPaymentStrictReceiveResultSuccess.fromXdrObject(wire.success)
        );
      case -1:
        return new PathPaymentStrictReceiveResultMalformed();
      case -2:
        return new PathPaymentStrictReceiveResultUnderfunded();
      case -3:
        return new PathPaymentStrictReceiveResultSrcNoTrust();
      case -4:
        return new PathPaymentStrictReceiveResultSrcNotAuthorized();
      case -5:
        return new PathPaymentStrictReceiveResultNoDestination();
      case -6:
        return new PathPaymentStrictReceiveResultNoTrust();
      case -7:
        return new PathPaymentStrictReceiveResultNotAuthorized();
      case -8:
        return new PathPaymentStrictReceiveResultLineFull();
      case -9:
        return new PathPaymentStrictReceiveResultNoIssuer(
          Asset$1.fromXdrObject(wire.noIssuer)
        );
      case -10:
        return new PathPaymentStrictReceiveResultTooFewOffers();
      case -11:
        return new PathPaymentStrictReceiveResultOfferCrossSelf();
      case -12:
        return new PathPaymentStrictReceiveResultOverSendmax();
    }
    throw new XdrError(
      `PathPaymentStrictReceiveResult: unknown code ${wire.code}`
    );
  }
  /**
   * Type guard narrowing an unknown value to a concrete PathPaymentStrictReceiveResult variant.
   * Use this instead of `instanceof PathPaymentStrictReceiveResult`: the exported `PathPaymentStrictReceiveResult` value
   * is the abstract base, so `instanceof` narrows to the base (not the
   * variant union) and forces a cast. `PathPaymentStrictReceiveResult.is(x)` narrows to the union.
   */
  static is(value) {
    return value instanceof PathPaymentStrictReceiveResultBase;
  }
}
class PathPaymentStrictReceiveResultSuccessArm extends PathPaymentStrictReceiveResultBase {
  type = "pathPaymentStrictReceiveSuccess";
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
class PathPaymentStrictReceiveResultMalformed extends PathPaymentStrictReceiveResultBase {
  type = "pathPaymentStrictReceiveMalformed";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -1 };
  }
}
class PathPaymentStrictReceiveResultUnderfunded extends PathPaymentStrictReceiveResultBase {
  type = "pathPaymentStrictReceiveUnderfunded";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -2 };
  }
}
class PathPaymentStrictReceiveResultSrcNoTrust extends PathPaymentStrictReceiveResultBase {
  type = "pathPaymentStrictReceiveSrcNoTrust";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -3 };
  }
}
class PathPaymentStrictReceiveResultSrcNotAuthorized extends PathPaymentStrictReceiveResultBase {
  type = "pathPaymentStrictReceiveSrcNotAuthorized";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -4 };
  }
}
class PathPaymentStrictReceiveResultNoDestination extends PathPaymentStrictReceiveResultBase {
  type = "pathPaymentStrictReceiveNoDestination";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -5 };
  }
}
class PathPaymentStrictReceiveResultNoTrust extends PathPaymentStrictReceiveResultBase {
  type = "pathPaymentStrictReceiveNoTrust";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -6 };
  }
}
class PathPaymentStrictReceiveResultNotAuthorized extends PathPaymentStrictReceiveResultBase {
  type = "pathPaymentStrictReceiveNotAuthorized";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -7 };
  }
}
class PathPaymentStrictReceiveResultLineFull extends PathPaymentStrictReceiveResultBase {
  type = "pathPaymentStrictReceiveLineFull";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -8 };
  }
}
class PathPaymentStrictReceiveResultNoIssuer extends PathPaymentStrictReceiveResultBase {
  type = "pathPaymentStrictReceiveNoIssuer";
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
class PathPaymentStrictReceiveResultTooFewOffers extends PathPaymentStrictReceiveResultBase {
  type = "pathPaymentStrictReceiveTooFewOffers";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -10 };
  }
}
class PathPaymentStrictReceiveResultOfferCrossSelf extends PathPaymentStrictReceiveResultBase {
  type = "pathPaymentStrictReceiveOfferCrossSelf";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -11 };
  }
}
class PathPaymentStrictReceiveResultOverSendmax extends PathPaymentStrictReceiveResultBase {
  type = "pathPaymentStrictReceiveOverSendmax";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -12 };
  }
}
const PathPaymentStrictReceiveResult = PathPaymentStrictReceiveResultBase;

export { PathPaymentStrictReceiveResult, PathPaymentStrictReceiveResultLineFull, PathPaymentStrictReceiveResultMalformed, PathPaymentStrictReceiveResultNoDestination, PathPaymentStrictReceiveResultNoIssuer, PathPaymentStrictReceiveResultNoTrust, PathPaymentStrictReceiveResultNotAuthorized, PathPaymentStrictReceiveResultOfferCrossSelf, PathPaymentStrictReceiveResultOverSendmax, PathPaymentStrictReceiveResultSrcNoTrust, PathPaymentStrictReceiveResultSrcNotAuthorized, PathPaymentStrictReceiveResultSuccessArm, PathPaymentStrictReceiveResultTooFewOffers, PathPaymentStrictReceiveResultUnderfunded };
//# sourceMappingURL=path-payment-strict-receive-result.js.map
