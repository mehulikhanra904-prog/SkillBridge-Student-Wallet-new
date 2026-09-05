import { struct, int64 } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { Asset as Asset$1 } from './asset.js';
import { MuxedAccount } from './muxed-account.js';

class ClawbackOp extends XdrValue {
  asset;
  from;
  amount;
  static schema = struct("ClawbackOp", {
    asset: Asset$1.schema,
    from: MuxedAccount.schema,
    amount: int64()
  });
  constructor(input) {
    super();
    this.asset = input.asset;
    this.from = input.from;
    this.amount = input.amount;
  }
  toXdrObject() {
    return {
      asset: this.asset.toXdrObject(),
      from: this.from.toXdrObject(),
      amount: this.amount
    };
  }
  static fromXdrObject(wire) {
    return new ClawbackOp({
      asset: Asset$1.fromXdrObject(wire.asset),
      from: MuxedAccount.fromXdrObject(wire.from),
      amount: wire.amount
    });
  }
}

export { ClawbackOp };
//# sourceMappingURL=clawback-op.js.map
