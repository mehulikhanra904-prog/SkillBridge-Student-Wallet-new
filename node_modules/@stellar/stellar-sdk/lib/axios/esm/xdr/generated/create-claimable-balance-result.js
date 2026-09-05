import { union, case as _case, field, void as _void, XdrError } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { CreateClaimableBalanceResultCode } from './create-claimable-balance-result-code.js';
import { ClaimableBalanceId } from './claimable-balance-id.js';

class CreateClaimableBalanceResultBase extends XdrValue {
  constructor() {
    super();
    if (new.target === CreateClaimableBalanceResultBase) {
      throw new TypeError(
        "new xdr.CreateClaimableBalanceResult(...) is not supported: XDR unions are built from per-variant factories. Call xdr.CreateClaimableBalanceResult.createClaimableBalanceSuccess(...) (or another arm factory) instead."
      );
    }
  }
  static schema = union(
    "CreateClaimableBalanceResult",
    {
      switchOn: CreateClaimableBalanceResultCode.schema,
      cases: [
        _case(
          "createClaimableBalanceSuccess",
          0,
          field("balanceId", ClaimableBalanceId.schema)
        ),
        _case("createClaimableBalanceMalformed", -1, _void()),
        _case("createClaimableBalanceLowReserve", -2, _void()),
        _case("createClaimableBalanceNoTrust", -3, _void()),
        _case("createClaimableBalanceNotAuthorized", -4, _void()),
        _case("createClaimableBalanceUnderfunded", -5, _void())
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
          ClaimableBalanceId.fromXdrObject(wire.balanceId)
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
    throw new XdrError(
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

export { CreateClaimableBalanceResult, CreateClaimableBalanceResultLowReserve, CreateClaimableBalanceResultMalformed, CreateClaimableBalanceResultNoTrust, CreateClaimableBalanceResultNotAuthorized, CreateClaimableBalanceResultSuccess, CreateClaimableBalanceResultUnderfunded };
//# sourceMappingURL=create-claimable-balance-result.js.map
