import { struct } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { ClaimableBalanceId } from './claimable-balance-id.js';

class ClawbackClaimableBalanceOp extends XdrValue {
  balanceId;
  static schema = struct(
    "ClawbackClaimableBalanceOp",
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
    return new ClawbackClaimableBalanceOp({
      balanceId: ClaimableBalanceId.fromXdrObject(wire.balanceId)
    });
  }
}

export { ClawbackClaimableBalanceOp };
//# sourceMappingURL=clawback-claimable-balance-op.js.map
