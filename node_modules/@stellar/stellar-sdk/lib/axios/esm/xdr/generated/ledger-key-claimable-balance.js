import { struct } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { ClaimableBalanceId } from './claimable-balance-id.js';

class LedgerKeyClaimableBalance extends XdrValue {
  balanceId;
  static schema = struct(
    "LedgerKeyClaimableBalance",
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
    return new LedgerKeyClaimableBalance({
      balanceId: ClaimableBalanceId.fromXdrObject(wire.balanceId)
    });
  }
}

export { LedgerKeyClaimableBalance };
//# sourceMappingURL=ledger-key-claimable-balance.js.map
