'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var publicKey = require('./public-key.js');

class LedgerKeyOffer extends xdrValue.XdrValue {
  sellerId;
  offerId;
  static schema = jsXdr.struct(
    "LedgerKeyOffer",
    {
      sellerId: publicKey.PublicKey.schema,
      offerId: jsXdr.int64()
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
      sellerId: publicKey.PublicKey.fromXdrObject(wire.sellerId),
      offerId: wire.offerId
    });
  }
}

exports.LedgerKeyOffer = LedgerKeyOffer;
//# sourceMappingURL=ledger-key-offer.js.map
