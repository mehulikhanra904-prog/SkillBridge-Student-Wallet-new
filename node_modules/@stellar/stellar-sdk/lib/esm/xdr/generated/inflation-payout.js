import { struct, int64 } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { PublicKey } from './public-key.js';

class InflationPayout extends XdrValue {
  destination;
  amount;
  static schema = struct(
    "InflationPayout",
    {
      destination: PublicKey.schema,
      amount: int64()
    }
  );
  constructor(input) {
    super();
    this.destination = input.destination;
    this.amount = input.amount;
  }
  toXdrObject() {
    return {
      destination: this.destination.toXdrObject(),
      amount: this.amount
    };
  }
  static fromXdrObject(wire) {
    return new InflationPayout({
      destination: PublicKey.fromXdrObject(wire.destination),
      amount: wire.amount
    });
  }
}

export { InflationPayout };
//# sourceMappingURL=inflation-payout.js.map
