import { union, case as _case, void as _void, XdrError } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { ClaimClaimableBalanceResultCode } from './claim-claimable-balance-result-code.js';

class ClaimClaimableBalanceResultBase extends XdrValue {
  constructor() {
    super();
    if (new.target === ClaimClaimableBalanceResultBase) {
      throw new TypeError(
        "new xdr.ClaimClaimableBalanceResult(...) is not supported: XDR unions are built from per-variant factories. Call xdr.ClaimClaimableBalanceResult.claimClaimableBalanceSuccess() (or another arm factory) instead."
      );
    }
  }
  static schema = union(
    "ClaimClaimableBalanceResult",
    {
      switchOn: ClaimClaimableBalanceResultCode.schema,
      cases: [
        _case("claimClaimableBalanceSuccess", 0, _void()),
        _case("claimClaimableBalanceDoesNotExist", -1, _void()),
        _case("claimClaimableBalanceCannotClaim", -2, _void()),
        _case("claimClaimableBalanceLineFull", -3, _void()),
        _case("claimClaimableBalanceNoTrust", -4, _void()),
        _case("claimClaimableBalanceNotAuthorized", -5, _void()),
        _case("claimClaimableBalanceTrustlineFrozen", -6, _void())
      ],
      switchKey: "code"
    }
  );
  static claimClaimableBalanceSuccess() {
    return new ClaimClaimableBalanceResultSuccess();
  }
  static claimClaimableBalanceDoesNotExist() {
    return new ClaimClaimableBalanceResultDoesNotExist();
  }
  static claimClaimableBalanceCannotClaim() {
    return new ClaimClaimableBalanceResultCannotClaim();
  }
  static claimClaimableBalanceLineFull() {
    return new ClaimClaimableBalanceResultLineFull();
  }
  static claimClaimableBalanceNoTrust() {
    return new ClaimClaimableBalanceResultNoTrust();
  }
  static claimClaimableBalanceNotAuthorized() {
    return new ClaimClaimableBalanceResultNotAuthorized();
  }
  static claimClaimableBalanceTrustlineFrozen() {
    return new ClaimClaimableBalanceResultTrustlineFrozen();
  }
  static fromXdrObject(wire) {
    switch (wire.code) {
      case 0:
        return new ClaimClaimableBalanceResultSuccess();
      case -1:
        return new ClaimClaimableBalanceResultDoesNotExist();
      case -2:
        return new ClaimClaimableBalanceResultCannotClaim();
      case -3:
        return new ClaimClaimableBalanceResultLineFull();
      case -4:
        return new ClaimClaimableBalanceResultNoTrust();
      case -5:
        return new ClaimClaimableBalanceResultNotAuthorized();
      case -6:
        return new ClaimClaimableBalanceResultTrustlineFrozen();
    }
    throw new XdrError(
      `ClaimClaimableBalanceResult: unknown code ${wire.code}`
    );
  }
  /**
   * Type guard narrowing an unknown value to a concrete ClaimClaimableBalanceResult variant.
   * Use this instead of `instanceof ClaimClaimableBalanceResult`: the exported `ClaimClaimableBalanceResult` value
   * is the abstract base, so `instanceof` narrows to the base (not the
   * variant union) and forces a cast. `ClaimClaimableBalanceResult.is(x)` narrows to the union.
   */
  static is(value) {
    return value instanceof ClaimClaimableBalanceResultBase;
  }
}
class ClaimClaimableBalanceResultSuccess extends ClaimClaimableBalanceResultBase {
  type = "claimClaimableBalanceSuccess";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: 0 };
  }
}
class ClaimClaimableBalanceResultDoesNotExist extends ClaimClaimableBalanceResultBase {
  type = "claimClaimableBalanceDoesNotExist";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -1 };
  }
}
class ClaimClaimableBalanceResultCannotClaim extends ClaimClaimableBalanceResultBase {
  type = "claimClaimableBalanceCannotClaim";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -2 };
  }
}
class ClaimClaimableBalanceResultLineFull extends ClaimClaimableBalanceResultBase {
  type = "claimClaimableBalanceLineFull";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -3 };
  }
}
class ClaimClaimableBalanceResultNoTrust extends ClaimClaimableBalanceResultBase {
  type = "claimClaimableBalanceNoTrust";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -4 };
  }
}
class ClaimClaimableBalanceResultNotAuthorized extends ClaimClaimableBalanceResultBase {
  type = "claimClaimableBalanceNotAuthorized";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -5 };
  }
}
class ClaimClaimableBalanceResultTrustlineFrozen extends ClaimClaimableBalanceResultBase {
  type = "claimClaimableBalanceTrustlineFrozen";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -6 };
  }
}
const ClaimClaimableBalanceResult = ClaimClaimableBalanceResultBase;

export { ClaimClaimableBalanceResult, ClaimClaimableBalanceResultCannotClaim, ClaimClaimableBalanceResultDoesNotExist, ClaimClaimableBalanceResultLineFull, ClaimClaimableBalanceResultNoTrust, ClaimClaimableBalanceResultNotAuthorized, ClaimClaimableBalanceResultSuccess, ClaimClaimableBalanceResultTrustlineFrozen };
//# sourceMappingURL=claim-claimable-balance-result.js.map
