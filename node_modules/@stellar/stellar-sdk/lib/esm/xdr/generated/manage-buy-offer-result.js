import { union, case as _case, field, void as _void, XdrError } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { ManageBuyOfferResultCode } from './manage-buy-offer-result-code.js';
import { ManageOfferSuccessResult } from './manage-offer-success-result.js';

class ManageBuyOfferResultBase extends XdrValue {
  constructor() {
    super();
    if (new.target === ManageBuyOfferResultBase) {
      throw new TypeError(
        "new xdr.ManageBuyOfferResult(...) is not supported: XDR unions are built from per-variant factories. Call xdr.ManageBuyOfferResult.manageBuyOfferSuccess(...) (or another arm factory) instead."
      );
    }
  }
  static schema = union(
    "ManageBuyOfferResult",
    {
      switchOn: ManageBuyOfferResultCode.schema,
      cases: [
        _case(
          "manageBuyOfferSuccess",
          0,
          field("success", ManageOfferSuccessResult.schema)
        ),
        _case("manageBuyOfferMalformed", -1, _void()),
        _case("manageBuyOfferSellNoTrust", -2, _void()),
        _case("manageBuyOfferBuyNoTrust", -3, _void()),
        _case("manageBuyOfferSellNotAuthorized", -4, _void()),
        _case("manageBuyOfferBuyNotAuthorized", -5, _void()),
        _case("manageBuyOfferLineFull", -6, _void()),
        _case("manageBuyOfferUnderfunded", -7, _void()),
        _case("manageBuyOfferCrossSelf", -8, _void()),
        _case("manageBuyOfferSellNoIssuer", -9, _void()),
        _case("manageBuyOfferBuyNoIssuer", -10, _void()),
        _case("manageBuyOfferNotFound", -11, _void()),
        _case("manageBuyOfferLowReserve", -12, _void())
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
          ManageOfferSuccessResult.fromXdrObject(wire.success)
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
    throw new XdrError(
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

export { ManageBuyOfferResult, ManageBuyOfferResultBuyNoIssuer, ManageBuyOfferResultBuyNoTrust, ManageBuyOfferResultBuyNotAuthorized, ManageBuyOfferResultCrossSelf, ManageBuyOfferResultLineFull, ManageBuyOfferResultLowReserve, ManageBuyOfferResultMalformed, ManageBuyOfferResultNotFound, ManageBuyOfferResultSellNoIssuer, ManageBuyOfferResultSellNoTrust, ManageBuyOfferResultSellNotAuthorized, ManageBuyOfferResultSuccess, ManageBuyOfferResultUnderfunded };
//# sourceMappingURL=manage-buy-offer-result.js.map
