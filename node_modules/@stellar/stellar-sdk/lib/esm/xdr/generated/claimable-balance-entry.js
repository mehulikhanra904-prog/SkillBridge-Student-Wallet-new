import { struct, int64, array } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { ClaimableBalanceId } from './claimable-balance-id.js';
import { Claimant as Claimant$1 } from './claimant.js';
import { Asset as Asset$1 } from './asset.js';
import { ClaimableBalanceEntryExt } from './claimable-balance-entry-ext.js';

class ClaimableBalanceEntry extends XdrValue {
  balanceId;
  claimants;
  asset;
  amount;
  ext;
  static schema = struct(
    "ClaimableBalanceEntry",
    {
      balanceId: ClaimableBalanceId.schema,
      claimants: array(Claimant$1.schema, 10),
      asset: Asset$1.schema,
      amount: int64(),
      ext: ClaimableBalanceEntryExt.schema
    }
  );
  constructor(input) {
    super();
    this.balanceId = input.balanceId;
    this.claimants = input.claimants;
    this.asset = input.asset;
    this.amount = input.amount;
    this.ext = input.ext;
  }
  toXdrObject() {
    return {
      balanceId: this.balanceId.toXdrObject(),
      claimants: this.claimants.map((v) => v.toXdrObject()),
      asset: this.asset.toXdrObject(),
      amount: this.amount,
      ext: this.ext.toXdrObject()
    };
  }
  static fromXdrObject(wire) {
    return new ClaimableBalanceEntry({
      balanceId: ClaimableBalanceId.fromXdrObject(wire.balanceId),
      claimants: wire.claimants.map((w) => Claimant$1.fromXdrObject(w)),
      asset: Asset$1.fromXdrObject(wire.asset),
      amount: wire.amount,
      ext: ClaimableBalanceEntryExt.fromXdrObject(wire.ext)
    });
  }
}

export { ClaimableBalanceEntry };
//# sourceMappingURL=claimable-balance-entry.js.map
