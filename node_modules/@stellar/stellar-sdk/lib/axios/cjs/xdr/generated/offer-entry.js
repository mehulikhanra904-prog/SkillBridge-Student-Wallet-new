'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var publicKey = require('./public-key.js');
var asset = require('./asset.js');
var price = require('./price.js');
var offerEntryExt = require('./offer-entry-ext.js');

class OfferEntry extends xdrValue.XdrValue {
  sellerId;
  offerId;
  selling;
  buying;
  amount;
  price;
  flags;
  ext;
  static schema = jsXdr.struct("OfferEntry", {
    sellerId: publicKey.PublicKey.schema,
    offerId: jsXdr.int64(),
    selling: asset.Asset.schema,
    buying: asset.Asset.schema,
    amount: jsXdr.int64(),
    price: price.Price.schema,
    flags: jsXdr.uint32(),
    ext: offerEntryExt.OfferEntryExt.schema
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
      sellerId: publicKey.PublicKey.fromXdrObject(wire.sellerId),
      offerId: wire.offerId,
      selling: asset.Asset.fromXdrObject(wire.selling),
      buying: asset.Asset.fromXdrObject(wire.buying),
      amount: wire.amount,
      price: price.Price.fromXdrObject(wire.price),
      flags: wire.flags,
      ext: offerEntryExt.OfferEntryExt.fromXdrObject(wire.ext)
    });
  }
}

exports.OfferEntry = OfferEntry;
//# sourceMappingURL=offer-entry.js.map
