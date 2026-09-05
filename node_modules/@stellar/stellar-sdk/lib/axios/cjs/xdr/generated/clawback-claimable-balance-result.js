'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var clawbackClaimableBalanceResultCode = require('./clawback-claimable-balance-result-code.js');

class ClawbackClaimableBalanceResultBase extends xdrValue.XdrValue {
  constructor() {
    super();
    if (new.target === ClawbackClaimableBalanceResultBase) {
      throw new TypeError(
        "new xdr.ClawbackClaimableBalanceResult(...) is not supported: XDR unions are built from per-variant factories. Call xdr.ClawbackClaimableBalanceResult.clawbackClaimableBalanceSuccess() (or another arm factory) instead."
      );
    }
  }
  static schema = jsXdr.union(
    "ClawbackClaimableBalanceResult",
    {
      switchOn: clawbackClaimableBalanceResultCode.ClawbackClaimableBalanceResultCode.schema,
      cases: [
        jsXdr.case("clawbackClaimableBalanceSuccess", 0, jsXdr.void()),
        jsXdr.case("clawbackClaimableBalanceDoesNotExist", -1, jsXdr.void()),
        jsXdr.case("clawbackClaimableBalanceNotIssuer", -2, jsXdr.void()),
        jsXdr.case("clawbackClaimableBalanceNotClawbackEnabled", -3, jsXdr.void())
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
    throw new jsXdr.XdrError(
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

exports.ClawbackClaimableBalanceResult = ClawbackClaimableBalanceResult;
exports.ClawbackClaimableBalanceResultDoesNotExist = ClawbackClaimableBalanceResultDoesNotExist;
exports.ClawbackClaimableBalanceResultNotClawbackEnabled = ClawbackClaimableBalanceResultNotClawbackEnabled;
exports.ClawbackClaimableBalanceResultNotIssuer = ClawbackClaimableBalanceResultNotIssuer;
exports.ClawbackClaimableBalanceResultSuccess = ClawbackClaimableBalanceResultSuccess;
//# sourceMappingURL=clawback-claimable-balance-result.js.map
