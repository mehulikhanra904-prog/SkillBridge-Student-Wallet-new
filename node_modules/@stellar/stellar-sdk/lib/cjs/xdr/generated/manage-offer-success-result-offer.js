'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var manageOfferEffect = require('./manage-offer-effect.js');
var offerEntry = require('./offer-entry.js');

class ManageOfferSuccessResultOfferBase extends xdrValue.XdrValue {
  constructor() {
    super();
    if (new.target === ManageOfferSuccessResultOfferBase) {
      throw new TypeError(
        "new xdr.ManageOfferSuccessResultOffer(...) is not supported: XDR unions are built from per-variant factories. Call xdr.ManageOfferSuccessResultOffer.manageOfferCreated(...) (or another arm factory) instead."
      );
    }
  }
  static schema = jsXdr.union(
    "ManageOfferSuccessResultOffer",
    {
      switchOn: manageOfferEffect.ManageOfferEffect.schema,
      cases: [
        jsXdr.case("manageOfferCreated", 0, jsXdr.field("offer", offerEntry.OfferEntry.schema)),
        jsXdr.case("manageOfferUpdated", 1, jsXdr.field("offer", offerEntry.OfferEntry.schema)),
        jsXdr.case("manageOfferDeleted", 2, jsXdr.void())
      ],
      switchKey: "effect"
    }
  );
  static manageOfferCreated(offer) {
    return new ManageOfferSuccessResultOfferCreated(offer);
  }
  static manageOfferUpdated(offer) {
    return new ManageOfferSuccessResultOfferUpdated(offer);
  }
  static manageOfferDeleted() {
    return new ManageOfferSuccessResultOfferDeleted();
  }
  static fromXdrObject(wire) {
    switch (wire.effect) {
      case 0:
        return new ManageOfferSuccessResultOfferCreated(
          offerEntry.OfferEntry.fromXdrObject(wire.offer)
        );
      case 1:
        return new ManageOfferSuccessResultOfferUpdated(
          offerEntry.OfferEntry.fromXdrObject(wire.offer)
        );
      case 2:
        return new ManageOfferSuccessResultOfferDeleted();
    }
    throw new jsXdr.XdrError(
      `ManageOfferSuccessResultOffer: unknown effect ${wire.effect}`
    );
  }
  /**
   * Type guard narrowing an unknown value to a concrete ManageOfferSuccessResultOffer variant.
   * Use this instead of `instanceof ManageOfferSuccessResultOffer`: the exported `ManageOfferSuccessResultOffer` value
   * is the abstract base, so `instanceof` narrows to the base (not the
   * variant union) and forces a cast. `ManageOfferSuccessResultOffer.is(x)` narrows to the union.
   */
  static is(value) {
    return value instanceof ManageOfferSuccessResultOfferBase;
  }
}
class ManageOfferSuccessResultOfferCreated extends ManageOfferSuccessResultOfferBase {
  type = "manageOfferCreated";
  offer;
  constructor(offer) {
    super();
    this.offer = offer;
  }
  get value() {
    return this.offer;
  }
  toXdrObject() {
    return { effect: 0, offer: this.offer.toXdrObject() };
  }
}
class ManageOfferSuccessResultOfferUpdated extends ManageOfferSuccessResultOfferBase {
  type = "manageOfferUpdated";
  offer;
  constructor(offer) {
    super();
    this.offer = offer;
  }
  get value() {
    return this.offer;
  }
  toXdrObject() {
    return { effect: 1, offer: this.offer.toXdrObject() };
  }
}
class ManageOfferSuccessResultOfferDeleted extends ManageOfferSuccessResultOfferBase {
  type = "manageOfferDeleted";
  get value() {
    return null;
  }
  toXdrObject() {
    return { effect: 2 };
  }
}
const ManageOfferSuccessResultOffer = ManageOfferSuccessResultOfferBase;

exports.ManageOfferSuccessResultOffer = ManageOfferSuccessResultOffer;
exports.ManageOfferSuccessResultOfferCreated = ManageOfferSuccessResultOfferCreated;
exports.ManageOfferSuccessResultOfferDeleted = ManageOfferSuccessResultOfferDeleted;
exports.ManageOfferSuccessResultOfferUpdated = ManageOfferSuccessResultOfferUpdated;
//# sourceMappingURL=manage-offer-success-result-offer.js.map
