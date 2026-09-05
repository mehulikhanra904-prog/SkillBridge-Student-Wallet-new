import { struct, int64 } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { PublicKey } from './public-key.js';

class CreateAccountOp extends XdrValue {
  destination;
  startingBalance;
  static schema = struct(
    "CreateAccountOp",
    {
      destination: PublicKey.schema,
      startingBalance: int64()
    }
  );
  constructor(input) {
    super();
    this.destination = input.destination;
    this.startingBalance = input.startingBalance;
  }
  toXdrObject() {
    return {
      destination: this.destination.toXdrObject(),
      startingBalance: this.startingBalance
    };
  }
  static fromXdrObject(wire) {
    return new CreateAccountOp({
      destination: PublicKey.fromXdrObject(wire.destination),
      startingBalance: wire.startingBalance
    });
  }
}

export { CreateAccountOp };
//# sourceMappingURL=create-account-op.js.map
