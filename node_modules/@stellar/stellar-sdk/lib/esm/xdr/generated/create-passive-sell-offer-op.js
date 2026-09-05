import { struct, int64 } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { Asset as Asset$1 } from './asset.js';
import { Price } from './price.js';

class CreatePassiveSellOfferOp extends XdrValue {
  selling;
  buying;
  amount;
  price;
  static schema = struct(
    "CreatePassiveSellOfferOp",
    {
      selling: Asset$1.schema,
      buying: Asset$1.schema,
      amount: int64(),
      price: Price.schema
    }
  );
  constructor(input) {
    super();
    this.selling = input.selling;
    this.buying = input.buying;
    this.amount = input.amount;
    this.price = input.price;
  }
  toXdrObject() {
    return {
      selling: this.selling.toXdrObject(),
      buying: this.buying.toXdrObject(),
      amount: this.amount,
      price: this.price.toXdrObject()
    };
  }
  static fromXdrObject(wire) {
    return new CreatePassiveSellOfferOp({
      selling: Asset$1.fromXdrObject(wire.selling),
      buying: Asset$1.fromXdrObject(wire.buying),
      amount: wire.amount,
      price: Price.fromXdrObject(wire.price)
    });
  }
}

export { CreatePassiveSellOfferOp };
//# sourceMappingURL=create-passive-sell-offer-op.js.map
