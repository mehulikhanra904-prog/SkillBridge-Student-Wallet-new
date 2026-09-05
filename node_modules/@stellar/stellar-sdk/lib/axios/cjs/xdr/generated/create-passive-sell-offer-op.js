'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var asset = require('./asset.js');
var price = require('./price.js');

class CreatePassiveSellOfferOp extends xdrValue.XdrValue {
  selling;
  buying;
  amount;
  price;
  static schema = jsXdr.struct(
    "CreatePassiveSellOfferOp",
    {
      selling: asset.Asset.schema,
      buying: asset.Asset.schema,
      amount: jsXdr.int64(),
      price: price.Price.schema
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
      selling: asset.Asset.fromXdrObject(wire.selling),
      buying: asset.Asset.fromXdrObject(wire.buying),
      amount: wire.amount,
      price: price.Price.fromXdrObject(wire.price)
    });
  }
}

exports.CreatePassiveSellOfferOp = CreatePassiveSellOfferOp;
//# sourceMappingURL=create-passive-sell-offer-op.js.map
