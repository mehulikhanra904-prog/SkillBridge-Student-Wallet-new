'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var uint256Bytes = require('./uint256-bytes.js');
var asset = require('./asset.js');

class ClaimOfferAtomV0 extends xdrValue.XdrValue {
  sellerEd25519;
  offerId;
  assetSold;
  amountSold;
  assetBought;
  amountBought;
  static schema = jsXdr.struct(
    "ClaimOfferAtomV0",
    {
      sellerEd25519: uint256Bytes.Uint256Bytes.schema,
      offerId: jsXdr.int64(),
      assetSold: asset.Asset.schema,
      amountSold: jsXdr.int64(),
      assetBought: asset.Asset.schema,
      amountBought: jsXdr.int64()
    }
  );
  constructor(input) {
    super();
    this.sellerEd25519 = input.sellerEd25519 instanceof uint256Bytes.Uint256Bytes ? input.sellerEd25519 : new uint256Bytes.Uint256Bytes(input.sellerEd25519);
    this.offerId = input.offerId;
    this.assetSold = input.assetSold;
    this.amountSold = input.amountSold;
    this.assetBought = input.assetBought;
    this.amountBought = input.amountBought;
  }
  toXdrObject() {
    return {
      sellerEd25519: this.sellerEd25519.toXdrObject(),
      offerId: this.offerId,
      assetSold: this.assetSold.toXdrObject(),
      amountSold: this.amountSold,
      assetBought: this.assetBought.toXdrObject(),
      amountBought: this.amountBought
    };
  }
  static fromXdrObject(wire) {
    return new ClaimOfferAtomV0({
      sellerEd25519: uint256Bytes.Uint256Bytes.fromXdrObject(wire.sellerEd25519),
      offerId: wire.offerId,
      assetSold: asset.Asset.fromXdrObject(wire.assetSold),
      amountSold: wire.amountSold,
      assetBought: asset.Asset.fromXdrObject(wire.assetBought),
      amountBought: wire.amountBought
    });
  }
}

exports.ClaimOfferAtomV0 = ClaimOfferAtomV0;
//# sourceMappingURL=claim-offer-atom-v0.js.map
