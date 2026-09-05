import { union, case as _case, field, XdrError } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { ClaimableBalanceIdType } from './claimable-balance-id-type.js';
import { Hash } from './hash.js';

class ClaimableBalanceIdBase extends XdrValue {
  constructor() {
    super();
    if (new.target === ClaimableBalanceIdBase) {
      throw new TypeError(
        "new xdr.ClaimableBalanceId(...) is not supported: XDR unions are built from per-variant factories. Call xdr.ClaimableBalanceId.claimableBalanceIdTypeV0(...) (or another arm factory) instead."
      );
    }
  }
  static schema = union(
    "ClaimableBalanceId",
    {
      switchOn: ClaimableBalanceIdType.schema,
      cases: [_case("claimableBalanceIdTypeV0", 0, field("v0", Hash.schema))]
    }
  );
  static claimableBalanceIdTypeV0(v0) {
    return new ClaimableBalanceIdV0(v0);
  }
  static fromXdrObject(wire) {
    switch (wire.type) {
      case 0:
        return new ClaimableBalanceIdV0(Hash.fromXdrObject(wire.v0));
    }
    throw new XdrError(
      `ClaimableBalanceId: unknown type ${wire.type}`
    );
  }
  /**
   * Type guard narrowing an unknown value to a concrete ClaimableBalanceId variant.
   * Use this instead of `instanceof ClaimableBalanceId`: the exported `ClaimableBalanceId` value
   * is the abstract base, so `instanceof` narrows to the base (not the
   * variant union) and forces a cast. `ClaimableBalanceId.is(x)` narrows to the union.
   */
  static is(value) {
    return value instanceof ClaimableBalanceIdBase;
  }
}
class ClaimableBalanceIdV0 extends ClaimableBalanceIdBase {
  type = "claimableBalanceIdTypeV0";
  v0;
  constructor(v0) {
    super();
    this.v0 = v0 instanceof Hash ? v0 : new Hash(v0);
  }
  get value() {
    return this.v0;
  }
  toXdrObject() {
    return { type: 0, v0: this.v0.toXdrObject() };
  }
}
const ClaimableBalanceId = ClaimableBalanceIdBase;

export { ClaimableBalanceId, ClaimableBalanceIdV0 };
//# sourceMappingURL=claimable-balance-id.js.map
