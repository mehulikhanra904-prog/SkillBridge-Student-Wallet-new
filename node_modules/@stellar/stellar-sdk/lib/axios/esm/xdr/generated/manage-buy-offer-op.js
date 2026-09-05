import { struct, int64 } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { Asset as Asset$1 } from './asset.js';
import { Price } from './price.js';

class ManageBuyOfferOp extends XdrValue {
  selling;
  buying;
  buyAmount;
  price;
  offerId;
  static schema = struct(
    "ManageBuyOfferOp",
    {
      selling: Asset$1.schema,
      buying: Asset$1.schema,
      buyAmount: int64(),
      price: Price.schema,
      offerId: int64()
    }
  );
  constructor(input) {
    super();
    this.selling = input.selling;
    this.buying = input.buying;
    this.buyAmount = input.buyAmount;
    this.price = input.price;
    this.offerId = input.offerId;
  }
  toXdrObject() {
    return {
      selling: this.selling.toXdrObject(),
      buying: this.buying.toXdrObject(),
      buyAmount: this.buyAmount,
      price: this.price.toXdrObject(),
      offerId: this.offerId
    };
  }
  static fromXdrObject(wire) {
    return new ManageBuyOfferOp({
      selling: Asset$1.fromXdrObject(wire.selling),
      buying: Asset$1.fromXdrObject(wire.buying),
      buyAmount: wire.buyAmount,
      price: Price.fromXdrObject(wire.price),
      offerId: wire.offerId
    });
  }
}

export { ManageBuyOfferOp };
//# sourceMappingURL=manage-buy-offer-op.js.map
