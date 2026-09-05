import { union, case as _case, field, void as _void, XdrError } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { ManageOfferEffect } from './manage-offer-effect.js';
import { OfferEntry } from './offer-entry.js';

class ManageOfferSuccessResultOfferBase extends XdrValue {
  constructor() {
    super();
    if (new.target === ManageOfferSuccessResultOfferBase) {
      throw new TypeError(
        "new xdr.ManageOfferSuccessResultOffer(...) is not supported: XDR unions are built from per-variant factories. Call xdr.ManageOfferSuccessResultOffer.manageOfferCreated(...) (or another arm factory) instead."
      );
    }
  }
  static schema = union(
    "ManageOfferSuccessResultOffer",
    {
      switchOn: ManageOfferEffect.schema,
      cases: [
        _case("manageOfferCreated", 0, field("offer", OfferEntry.schema)),
        _case("manageOfferUpdated", 1, field("offer", OfferEntry.schema)),
        _case("manageOfferDeleted", 2, _void())
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
          OfferEntry.fromXdrObject(wire.offer)
        );
      case 1:
        return new ManageOfferSuccessResultOfferUpdated(
          OfferEntry.fromXdrObject(wire.offer)
        );
      case 2:
        return new ManageOfferSuccessResultOfferDeleted();
    }
    throw new XdrError(
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

export { ManageOfferSuccessResultOffer, ManageOfferSuccessResultOfferCreated, ManageOfferSuccessResultOfferDeleted, ManageOfferSuccessResultOfferUpdated };
//# sourceMappingURL=manage-offer-success-result-offer.js.map
