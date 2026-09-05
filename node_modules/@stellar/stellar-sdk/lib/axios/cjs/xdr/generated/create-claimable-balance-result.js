'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var createClaimableBalanceResultCode = require('./create-claimable-balance-result-code.js');
var claimableBalanceId = require('./claimable-balance-id.js');

class CreateClaimableBalanceResultBase extends xdrValue.XdrValue {
  constructor() {
    super();
    if (new.target === CreateClaimableBalanceResultBase) {
      throw new TypeError(
        "new xdr.CreateClaimableBalanceResult(...) is not supported: XDR unions are built from per-variant factories. Call xdr.CreateClaimableBalanceResult.createClaimableBalanceSuccess(...) (or another arm factory) instead."
      );
    }
  }
  static schema = jsXdr.union(
    "CreateClaimableBalanceResult",
    {
      switchOn: createClaimableBalanceResultCode.CreateClaimableBalanceResultCode.schema,
      cases: [
        jsXdr.case(
          "createClaimableBalanceSuccess",
          0,
          jsXdr.field("balanceId", claimableBalanceId.ClaimableBalanceId.schema)
        ),
        jsXdr.case("createClaimableBalanceMalformed", -1, jsXdr.void()),
        jsXdr.case("createClaimableBalanceLowReserve", -2, jsXdr.void()),
        jsXdr.case("createClaimableBalanceNoTrust", -3, jsXdr.void()),
        jsXdr.case("createClaimableBalanceNotAuthorized", -4, jsXdr.void()),
        jsXdr.case("createClaimableBalanceUnderfunded", -5, jsXdr.void())
      ],
      switchKey: "code"
    }
  );
  static createClaimableBalanceSuccess(balanceId) {
    return new CreateClaimableBalanceResultSuccess(balanceId);
  }
  static createClaimableBalanceMalformed() {
    return new CreateClaimableBalanceResultMalformed();
  }
  static createClaimableBalanceLowReserve() {
    return new CreateClaimableBalanceResultLowReserve();
  }
  static createClaimableBalanceNoTrust() {
    return new CreateClaimableBalanceResultNoTrust();
  }
  static createClaimableBalanceNotAuthorized() {
    return new CreateClaimableBalanceResultNotAuthorized();
  }
  static createClaimableBalanceUnderfunded() {
    return new CreateClaimableBalanceResultUnderfunded();
  }
  static fromXdrObject(wire) {
    switch (wire.code) {
      case 0:
        return new CreateClaimableBalanceResultSuccess(
          claimableBalanceId.ClaimableBalanceId.fromXdrObject(wire.balanceId)
        );
      case -1:
        return new CreateClaimableBalanceResultMalformed();
      case -2:
        return new CreateClaimableBalanceResultLowReserve();
      case -3:
        return new CreateClaimableBalanceResultNoTrust();
      case -4:
        return new CreateClaimableBalanceResultNotAuthorized();
      case -5:
        return new CreateClaimableBalanceResultUnderfunded();
    }
    throw new jsXdr.XdrError(
      `CreateClaimableBalanceResult: unknown code ${wire.code}`
    );
  }
  /**
   * Type guard narrowing an unknown value to a concrete CreateClaimableBalanceResult variant.
   * Use this instead of `instanceof CreateClaimableBalanceResult`: the exported `CreateClaimableBalanceResult` value
   * is the abstract base, so `instanceof` narrows to the base (not the
   * variant union) and forces a cast. `CreateClaimableBalanceResult.is(x)` narrows to the union.
   */
  static is(value) {
    return value instanceof CreateClaimableBalanceResultBase;
  }
}
class CreateClaimableBalanceResultSuccess extends CreateClaimableBalanceResultBase {
  type = "createClaimableBalanceSuccess";
  balanceId;
  constructor(balanceId) {
    super();
    this.balanceId = balanceId;
  }
  get value() {
    return this.balanceId;
  }
  toXdrObject() {
    return { code: 0, balanceId: this.balanceId.toXdrObject() };
  }
}
class CreateClaimableBalanceResultMalformed extends CreateClaimableBalanceResultBase {
  type = "createClaimableBalanceMalformed";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -1 };
  }
}
class CreateClaimableBalanceResultLowReserve extends CreateClaimableBalanceResultBase {
  type = "createClaimableBalanceLowReserve";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -2 };
  }
}
class CreateClaimableBalanceResultNoTrust extends CreateClaimableBalanceResultBase {
  type = "createClaimableBalanceNoTrust";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -3 };
  }
}
class CreateClaimableBalanceResultNotAuthorized extends CreateClaimableBalanceResultBase {
  type = "createClaimableBalanceNotAuthorized";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -4 };
  }
}
class CreateClaimableBalanceResultUnderfunded extends CreateClaimableBalanceResultBase {
  type = "createClaimableBalanceUnderfunded";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -5 };
  }
}
const CreateClaimableBalanceResult = CreateClaimableBalanceResultBase;

exports.CreateClaimableBalanceResult = CreateClaimableBalanceResult;
exports.CreateClaimableBalanceResultLowReserve = CreateClaimableBalanceResultLowReserve;
exports.CreateClaimableBalanceResultMalformed = CreateClaimableBalanceResultMalformed;
exports.CreateClaimableBalanceResultNoTrust = CreateClaimableBalanceResultNoTrust;
exports.CreateClaimableBalanceResultNotAuthorized = CreateClaimableBalanceResultNotAuthorized;
exports.CreateClaimableBalanceResultSuccess = CreateClaimableBalanceResultSuccess;
exports.CreateClaimableBalanceResultUnderfunded = CreateClaimableBalanceResultUnderfunded;
//# sourceMappingURL=create-claimable-balance-result.js.map
