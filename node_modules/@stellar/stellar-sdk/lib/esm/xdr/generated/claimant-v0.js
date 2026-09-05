import { struct } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { PublicKey } from './public-key.js';
import { ClaimPredicate } from './claim-predicate.js';

class ClaimantV0 extends XdrValue {
  destination;
  predicate;
  static schema = struct("ClaimantV0", {
    destination: PublicKey.schema,
    predicate: ClaimPredicate.schema
  });
  constructor(input) {
    super();
    this.destination = input.destination;
    this.predicate = input.predicate;
  }
  toXdrObject() {
    return {
      destination: this.destination.toXdrObject(),
      predicate: this.predicate.toXdrObject()
    };
  }
  static fromXdrObject(wire) {
    return new ClaimantV0({
      destination: PublicKey.fromXdrObject(wire.destination),
      predicate: ClaimPredicate.fromXdrObject(wire.predicate)
    });
  }
}

export { ClaimantV0 };
//# sourceMappingURL=claimant-v0.js.map
