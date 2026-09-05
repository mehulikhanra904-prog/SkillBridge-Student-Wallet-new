import { union, case as _case, void as _void, XdrError } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { ClawbackClaimableBalanceResultCode } from './clawback-claimable-balance-result-code.js';

class ClawbackClaimableBalanceResultBase extends XdrValue {
  constructor() {
    super();
    if (new.target === ClawbackClaimableBalanceResultBase) {
      throw new TypeError(
        "new xdr.ClawbackClaimableBalanceResult(...) is not supported: XDR unions are built from per-variant factories. Call xdr.ClawbackClaimableBalanceResult.clawbackClaimableBalanceSuccess() (or another arm factory) instead."
      );
    }
  }
  static schema = union(
    "ClawbackClaimableBalanceResult",
    {
      switchOn: ClawbackClaimableBalanceResultCode.schema,
      cases: [
        _case("clawbackClaimableBalanceSuccess", 0, _void()),
        _case("clawbackClaimableBalanceDoesNotExist", -1, _void()),
        _case("clawbackClaimableBalanceNotIssuer", -2, _void()),
        _case("clawbackClaimableBalanceNotClawbackEnabled", -3, _void())
      ],
      switchKey: "code"
    }
  );
  static clawbackClaimableBalanceSuccess() {
    return new ClawbackClaimableBalanceResultSuccess();
  }
  static clawbackClaimableBalanceDoesNotExist() {
    return new ClawbackClaimableBalanceResultDoesNotExist();
  }
  static clawbackClaimableBalanceNotIssuer() {
    return new ClawbackClaimableBalanceResultNotIssuer();
  }
  static clawbackClaimableBalanceNotClawbackEnabled() {
    return new ClawbackClaimableBalanceResultNotClawbackEnabled();
  }
  static fromXdrObject(wire) {
    switch (wire.code) {
      case 0:
        return new ClawbackClaimableBalanceResultSuccess();
      case -1:
        return new ClawbackClaimableBalanceResultDoesNotExist();
      case -2:
        return new ClawbackClaimableBalanceResultNotIssuer();
      case -3:
        return new ClawbackClaimableBalanceResultNotClawbackEnabled();
    }
    throw new XdrError(
      `ClawbackClaimableBalanceResult: unknown code ${wire.code}`
    );
  }
  /**
   * Type guard narrowing an unknown value to a concrete ClawbackClaimableBalanceResult variant.
   * Use this instead of `instanceof ClawbackClaimableBalanceResult`: the exported `ClawbackClaimableBalanceResult` value
   * is the abstract base, so `instanceof` narrows to the base (not the
   * variant union) and forces a cast. `ClawbackClaimableBalanceResult.is(x)` narrows to the union.
   */
  static is(value) {
    return value instanceof ClawbackClaimableBalanceResultBase;
  }
}
class ClawbackClaimableBalanceResultSuccess extends ClawbackClaimableBalanceResultBase {
  type = "clawbackClaimableBalanceSuccess";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: 0 };
  }
}
class ClawbackClaimableBalanceResultDoesNotExist extends ClawbackClaimableBalanceResultBase {
  type = "clawbackClaimableBalanceDoesNotExist";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -1 };
  }
}
class ClawbackClaimableBalanceResultNotIssuer extends ClawbackClaimableBalanceResultBase {
  type = "clawbackClaimableBalanceNotIssuer";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -2 };
  }
}
class ClawbackClaimableBalanceResultNotClawbackEnabled extends ClawbackClaimableBalanceResultBase {
  type = "clawbackClaimableBalanceNotClawbackEnabled";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -3 };
  }
}
const ClawbackClaimableBalanceResult = ClawbackClaimableBalanceResultBase;

export { ClawbackClaimableBalanceResult, ClawbackClaimableBalanceResultDoesNotExist, ClawbackClaimableBalanceResultNotClawbackEnabled, ClawbackClaimableBalanceResultNotIssuer, ClawbackClaimableBalanceResultSuccess };
//# sourceMappingURL=clawback-claimable-balance-result.js.map
