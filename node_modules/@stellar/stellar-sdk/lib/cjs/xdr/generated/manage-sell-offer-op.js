'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var asset = require('./asset.js');
var price = require('./price.js');

class ManageSellOfferOp extends xdrValue.XdrValue {
  selling;
  buying;
  amount;
  price;
  offerId;
  static schema = jsXdr.struct(
    "ManageSellOfferOp",
    {
      selling: asset.Asset.schema,
      buying: asset.Asset.schema,
      amount: jsXdr.int64(),
      price: price.Price.schema,
      offerId: jsXdr.int64()
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
      selling: asset.Asset.fromXdrObject(wire.selling),
      buying: asset.Asset.fromXdrObject(wire.buying),
      amount: wire.amount,
      price: price.Price.fromXdrObject(wire.price),
      offerId: wire.offerId
    });
  }
}

exports.ManageSellOfferOp = ManageSellOfferOp;
//# sourceMappingURL=manage-sell-offer-op.js.map
