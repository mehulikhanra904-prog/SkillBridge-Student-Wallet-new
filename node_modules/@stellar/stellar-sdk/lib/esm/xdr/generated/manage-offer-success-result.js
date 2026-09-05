import { struct, array, UNBOUNDED_MAX_LENGTH } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { ClaimAtom } from './claim-atom.js';
import { ManageOfferSuccessResultOffer } from './manage-offer-success-result-offer.js';

class ManageOfferSuccessResult extends XdrValue {
  offersClaimed;
  offer;
  static schema = struct(
    "ManageOfferSuccessResult",
    {
      offersClaimed: array(ClaimAtom.schema, UNBOUNDED_MAX_LENGTH),
      offer: ManageOfferSuccessResultOffer.schema
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
      offersClaimed: wire.offersClaimed.map((w) => ClaimAtom.fromXdrObject(w)),
      offer: ManageOfferSuccessResultOffer.fromXdrObject(wire.offer)
    });
  }
}

export { ManageOfferSuccessResult };
//# sourceMappingURL=manage-offer-success-result.js.map
