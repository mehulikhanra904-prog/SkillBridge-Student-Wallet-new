import { struct, int64 } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { PublicKey } from './public-key.js';

class LedgerKeyOffer extends XdrValue {
  sellerId;
  offerId;
  static schema = struct(
    "LedgerKeyOffer",
    {
      sellerId: PublicKey.schema,
      offerId: int64()
    }
  );
  constructor(input) {
    super();
    this.sellerId = input.sellerId;
    this.offerId = input.offerId;
  }
  toXdrObject() {
    return {
      sellerId: this.sellerId.toXdrObject(),
      offerId: this.offerId
    };
  }
  static fromXdrObject(wire) {
    return new LedgerKeyOffer({
      sellerId: PublicKey.fromXdrObject(wire.sellerId),
      offerId: wire.offerId
    });
  }
}

export { LedgerKeyOffer };
//# sourceMappingURL=ledger-key-offer.js.map
