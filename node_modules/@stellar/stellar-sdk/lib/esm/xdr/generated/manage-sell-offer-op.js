import { struct, int64 } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { Asset as Asset$1 } from './asset.js';
import { Price } from './price.js';

class ManageSellOfferOp extends XdrValue {
  selling;
  buying;
  amount;
  price;
  offerId;
  static schema = struct(
    "ManageSellOfferOp",
    {
      selling: Asset$1.schema,
      buying: Asset$1.schema,
      amount: int64(),
      price: Price.schema,
      offerId: int64()
    }
  );
  constructor(input) {
    super();
    this.selling = input.selling;
    this.buying = input.buying;
    this.amount = input.amount;
    this.price = input.price;
    this.offerId = input.offerId;
  }
  toXdrObject() {
    return {
      selling: this.selling.toXdrObject(),
      buying: this.buying.toXdrObject(),
      amount: this.amount,
      price: this.price.toXdrObject(),
      offerId: this.offerId
    };
  }
  static fromXdrObject(wire) {
    return new ManageSellOfferOp({
      selling: Asset$1.fromXdrObject(wire.selling),
      buying: Asset$1.fromXdrObject(wire.buying),
      amount: wire.amount,
      price: Price.fromXdrObject(wire.price),
      offerId: wire.offerId
    });
  }
}

export { ManageSellOfferOp };
//# sourceMappingURL=manage-sell-offer-op.js.map
