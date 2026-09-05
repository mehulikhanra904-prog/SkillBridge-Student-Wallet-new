import { struct, array, int64 } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { Asset as Asset$1 } from './asset.js';
import { Claimant as Claimant$1 } from './claimant.js';

class CreateClaimableBalanceOp extends XdrValue {
  asset;
  amount;
  claimants;
  static schema = struct(
    "CreateClaimableBalanceOp",
    {
      asset: Asset$1.schema,
      amount: int64(),
      claimants: array(Claimant$1.schema, 10)
    }
  );
  constructor(input) {
    super();
    this.asset = input.asset;
    this.amount = input.amount;
    this.claimants = input.claimants;
  }
  toXdrObject() {
    return {
      asset: this.asset.toXdrObject(),
      amount: this.amount,
      claimants: this.claimants.map((v) => v.toXdrObject())
    };
  }
  static fromXdrObject(wire) {
    return new CreateClaimableBalanceOp({
      asset: Asset$1.fromXdrObject(wire.asset),
      amount: wire.amount,
      claimants: wire.claimants.map((w) => Claimant$1.fromXdrObject(w))
    });
  }
}

export { CreateClaimableBalanceOp };
//# sourceMappingURL=create-claimable-balance-op.js.map
