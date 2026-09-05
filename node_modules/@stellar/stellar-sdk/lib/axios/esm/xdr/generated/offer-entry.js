import { struct, uint32, int64 } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { PublicKey } from './public-key.js';
import { Asset as Asset$1 } from './asset.js';
import { Price } from './price.js';
import { OfferEntryExt } from './offer-entry-ext.js';

class OfferEntry extends XdrValue {
  sellerId;
  offerId;
  selling;
  buying;
  amount;
  price;
  flags;
  ext;
  static schema = struct("OfferEntry", {
    sellerId: PublicKey.schema,
    offerId: int64(),
    selling: Asset$1.schema,
    buying: Asset$1.schema,
    amount: int64(),
    price: Price.schema,
    flags: uint32(),
    ext: OfferEntryExt.schema
  });
  constructor(input) {
    super();
    this.sellerId = input.sellerId;
    this.offerId = input.offerId;
    this.selling = input.selling;
    this.buying = input.buying;
    this.amount = input.amount;
    this.price = input.price;
    this.flags = input.flags;
    this.ext = input.ext;
  }
  toXdrObject() {
    return {
      sellerId: this.sellerId.toXdrObject(),
      offerId: this.offerId,
      selling: this.selling.toXdrObject(),
      buying: this.buying.toXdrObject(),
      amount: this.amount,
      price: this.price.toXdrObject(),
      flags: this.flags,
      ext: this.ext.toXdrObject()
    };
  }
  static fromXdrObject(wire) {
    return new OfferEntry({
      sellerId: PublicKey.fromXdrObject(wire.sellerId),
      offerId: wire.offerId,
      selling: Asset$1.fromXdrObject(wire.selling),
      buying: Asset$1.fromXdrObject(wire.buying),
      amount: wire.amount,
      price: Price.fromXdrObject(wire.price),
      flags: wire.flags,
      ext: OfferEntryExt.fromXdrObject(wire.ext)
    });
  }
}

export { OfferEntry };
//# sourceMappingURL=offer-entry.js.map
