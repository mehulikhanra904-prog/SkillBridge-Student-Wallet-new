import { struct, int64 } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { PublicKey } from './public-key.js';
import { Asset as Asset$1 } from './asset.js';

class SimplePaymentResult extends XdrValue {
  destination;
  asset;
  amount;
  static schema = struct(
    "SimplePaymentResult",
    {
      destination: PublicKey.schema,
      asset: Asset$1.schema,
      amount: int64()
    }
  );
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
    return new SimplePaymentResult({
      destination: PublicKey.fromXdrObject(wire.destination),
      asset: Asset$1.fromXdrObject(wire.asset),
      amount: wire.amount
    });
  }
}

export { SimplePaymentResult };
//# sourceMappingURL=simple-payment-result.js.map
