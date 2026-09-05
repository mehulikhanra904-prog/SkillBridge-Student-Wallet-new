'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var publicKey = require('./public-key.js');
var asset = require('./asset.js');

class ClaimOfferAtom extends xdrValue.XdrValue {
  sellerId;
  offerId;
  assetSold;
  amountSold;
  assetBought;
  amountBought;
  static schema = jsXdr.struct(
    "ClaimOfferAtom",
    {
      sellerId: publicKey.PublicKey.schema,
      offerId: jsXdr.int64(),
      assetSold: asset.Asset.schema,
      amountSold: jsXdr.int64(),
      assetBought: asset.Asset.schema,
      amountBought: jsXdr.int64()
    }
  );
  constructor(input) {
    super();
    this.sellerId = input.sellerId;
    this.offerId = input.offerId;
    this.assetSold = input.assetSold;
    this.amountSold = input.amountSold;
    this.assetBought = input.assetBought;
    this.amountBought = input.amountBought;
  }
  toXdrObject() {
    return {
      sellerId: this.sellerId.toXdrObject(),
      offerId: this.offerId,
      assetSold: this.assetSold.toXdrObject(),
      amountSold: this.amountSold,
      assetBought: this.assetBought.toXdrObject(),
      amountBought: this.amountBought
    };
  }
  static fromXdrObject(wire) {
    return new ClaimOfferAtom({
      sellerId: publicKey.PublicKey.fromXdrObject(wire.sellerId),
      offerId: wire.offerId,
      assetSold: asset.Asset.fromXdrObject(wire.assetSold),
      amountSold: wire.amountSold,
      assetBought: asset.Asset.fromXdrObject(wire.assetBought),
      amountBought: wire.amountBought
    });
  }
}

exports.ClaimOfferAtom = ClaimOfferAtom;
//# sourceMappingURL=claim-offer-atom.js.map
