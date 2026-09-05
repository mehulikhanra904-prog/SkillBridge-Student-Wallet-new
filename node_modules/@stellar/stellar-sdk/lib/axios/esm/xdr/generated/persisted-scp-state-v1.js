import { struct, array, UNBOUNDED_MAX_LENGTH } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { ScpEnvelope } from './scp-envelope.js';
import { ScpQuorumSet } from './scp-quorum-set.js';

class PersistedScpStateV1 extends XdrValue {
  scpEnvelopes;
  quorumSets;
  static schema = struct(
    "PersistedScpStateV1",
    {
      scpEnvelopes: array(ScpEnvelope.schema, UNBOUNDED_MAX_LENGTH),
      quorumSets: array(ScpQuorumSet.schema, UNBOUNDED_MAX_LENGTH)
    }
  );
  constructor(input) {
    super();
    this.scpEnvelopes = input.scpEnvelopes;
    this.quorumSets = input.quorumSets;
  }
  toXdrObject() {
    return {
      scpEnvelopes: this.scpEnvelopes.map((v) => v.toXdrObject()),
      quorumSets: this.quorumSets.map((v) => v.toXdrObject())
    };
  }
  static fromXdrObject(wire) {
    return new PersistedScpStateV1({
      scpEnvelopes: wire.scpEnvelopes.map((w) => ScpEnvelope.fromXdrObject(w)),
      quorumSets: wire.quorumSets.map((w) => ScpQuorumSet.fromXdrObject(w))
    });
  }
}

export { PersistedScpStateV1 };
//# sourceMappingURL=persisted-scp-state-v1.js.map
