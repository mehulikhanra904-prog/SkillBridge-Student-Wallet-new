import { struct } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { ClaimableBalanceId } from './claimable-balance-id.js';

class ClaimClaimableBalanceOp extends XdrValue {
  balanceId;
  static schema = struct(
    "ClaimClaimableBalanceOp",
    {
      balanceId: ClaimableBalanceId.schema
    }
  );
  constructor(input) {
    super();
    this.balanceId = input.balanceId;
  }
  toXdrObject() {
    return {
      balanceId: this.balanceId.toXdrObject()
    };
  }
  static fromXdrObject(wire) {
    return new ClaimClaimableBalanceOp({
      balanceId: ClaimableBalanceId.fromXdrObject(wire.balanceId)
    });
  }
}

export { ClaimClaimableBalanceOp };
//# sourceMappingURL=claim-claimable-balance-op.js.map
