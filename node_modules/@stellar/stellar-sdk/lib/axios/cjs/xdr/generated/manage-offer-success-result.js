'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var claimAtom = require('./claim-atom.js');
var manageOfferSuccessResultOffer = require('./manage-offer-success-result-offer.js');

class ManageOfferSuccessResult extends xdrValue.XdrValue {
  offersClaimed;
  offer;
  static schema = jsXdr.struct(
    "ManageOfferSuccessResult",
    {
      offersClaimed: jsXdr.array(claimAtom.ClaimAtom.schema, jsXdr.UNBOUNDED_MAX_LENGTH),
      offer: manageOfferSuccessResultOffer.ManageOfferSuccessResultOffer.schema
    }
  );
  constructor(input) {
    super();
    this.offersClaimed = input.offersClaimed;
    this.offer = input.offer;
  }
  toXdrObject() {
    return {
      offersClaimed: this.offersClaimed.map((v) => v.toXdrObject()),
      offer: this.offer.toXdrObject()
    };
  }
  static fromXdrObject(wire) {
    return new ManageOfferSuccessResult({
      offersClaimed: wire.offersClaimed.map((w) => claimAtom.ClaimAtom.fromXdrObject(w)),
      offer: manageOfferSuccessResultOffer.ManageOfferSuccessResultOffer.fromXdrObject(wire.offer)
    });
  }
}

exports.ManageOfferSuccessResult = ManageOfferSuccessResult;
//# sourceMappingURL=manage-offer-success-result.js.map
