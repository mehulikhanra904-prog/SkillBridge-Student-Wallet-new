import { struct } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { PublicKey } from './public-key.js';

class BeginSponsoringFutureReservesOp extends XdrValue {
  sponsoredId;
  static schema = struct(
    "BeginSponsoringFutureReservesOp",
    {
      sponsoredId: PublicKey.schema
    }
  );
  constructor(input) {
    super();
    this.sponsoredId = input.sponsoredId;
  }
  toXdrObject() {
    return {
      sponsoredId: this.sponsoredId.toXdrObject()
    };
  }
  static fromXdrObject(wire) {
    return new BeginSponsoringFutureReservesOp({
      sponsoredId: PublicKey.fromXdrObject(wire.sponsoredId)
    });
  }
}

export { BeginSponsoringFutureReservesOp };
//# sourceMappingURL=begin-sponsoring-future-reserves-op.js.map
