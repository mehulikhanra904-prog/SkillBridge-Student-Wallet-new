import { struct, array, lazy, UNBOUNDED_MAX_LENGTH, uint32 } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { PublicKey } from './public-key.js';

class ScpQuorumSet extends XdrValue {
  threshold;
  validators;
  innerSets;
  static schema = struct("ScpQuorumSet", {
    threshold: uint32(),
    validators: array(PublicKey.schema, UNBOUNDED_MAX_LENGTH),
    innerSets: array(
      lazy(() => ScpQuorumSet.schema),
      UNBOUNDED_MAX_LENGTH
    )
  });
  constructor(input) {
    super();
    this.threshold = input.threshold;
    this.validators = input.validators;
    this.innerSets = input.innerSets;
  }
  toXdrObject() {
    return {
      threshold: this.threshold,
      validators: this.validators.map((v) => v.toXdrObject()),
      innerSets: this.innerSets.map((v) => v.toXdrObject())
    };
  }
  static fromXdrObject(wire) {
    return new ScpQuorumSet({
      threshold: wire.threshold,
      validators: wire.validators.map((w) => PublicKey.fromXdrObject(w)),
      innerSets: wire.innerSets.map((w) => ScpQuorumSet.fromXdrObject(w))
    });
  }
}

export { ScpQuorumSet };
//# sourceMappingURL=scp-quorum-set.js.map
