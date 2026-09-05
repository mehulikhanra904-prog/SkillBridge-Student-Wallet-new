import { struct, int64 } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { MuxedAccount } from './muxed-account.js';
import { Asset as Asset$1 } from './asset.js';

class PaymentOp extends XdrValue {
  destination;
  asset;
  amount;
  static schema = struct("PaymentOp", {
    destination: MuxedAccount.schema,
    asset: Asset$1.schema,
    amount: int64()
  });
  constructor(input) {
    super();
    this.destination = input.destination;
    this.asset = input.asset;
    this.amount = input.amount;
  }
  toXdrObject() {
    return {
      destination: this.destination.toXdrObject(),
      asset: this.asset.toXdrObject(),
      amount: this.amount
    };
  }
  static fromXdrObject(wire) {
    return new PaymentOp({
      destination: MuxedAccount.fromXdrObject(wire.destination),
      asset: Asset$1.fromXdrObject(wire.asset),
      amount: wire.amount
    });
  }
}

export { PaymentOp };
//# sourceMappingURL=payment-op.js.map
