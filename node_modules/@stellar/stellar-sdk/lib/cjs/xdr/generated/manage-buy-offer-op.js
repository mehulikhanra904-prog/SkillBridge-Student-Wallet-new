'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var asset = require('./asset.js');
var price = require('./price.js');

class ManageBuyOfferOp extends xdrValue.XdrValue {
  selling;
  buying;
  buyAmount;
  price;
  offerId;
  static schema = jsXdr.struct(
    "ManageBuyOfferOp",
    {
      selling: asset.Asset.schema,
      buying: asset.Asset.schema,
      buyAmount: jsXdr.int64(),
      price: price.Price.schema,
      offerId: jsXdr.int64()
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
      selling: asset.Asset.fromXdrObject(wire.selling),
      buying: asset.Asset.fromXdrObject(wire.buying),
      buyAmount: wire.buyAmount,
      price: price.Price.fromXdrObject(wire.price),
      offerId: wire.offerId
    });
  }
}

exports.ManageBuyOfferOp = ManageBuyOfferOp;
//# sourceMappingURL=manage-buy-offer-op.js.map
