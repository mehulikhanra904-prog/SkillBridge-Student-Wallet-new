import { struct, array, UNBOUNDED_MAX_LENGTH } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { ScpEnvelope } from './scp-envelope.js';
import { ScpQuorumSet } from './scp-quorum-set.js';
import { StoredTransactionSet } from './stored-transaction-set.js';

class PersistedScpStateV0 extends XdrValue {
  scpEnvelopes;
  quorumSets;
  txSets;
  static schema = struct(
    "PersistedScpStateV0",
    {
      scpEnvelopes: array(ScpEnvelope.schema, UNBOUNDED_MAX_LENGTH),
      quorumSets: array(ScpQuorumSet.schema, UNBOUNDED_MAX_LENGTH),
      txSets: array(StoredTransactionSet.schema, UNBOUNDED_MAX_LENGTH)
    }
  );
  constructor(input) {
    super();
    this.scpEnvelopes = input.scpEnvelopes;
    this.quorumSets = input.quorumSets;
    this.txSets = input.txSets;
  }
  toXdrObject() {
    return {
      scpEnvelopes: this.scpEnvelopes.map((v) => v.toXdrObject()),
      quorumSets: this.quorumSets.map((v) => v.toXdrObject()),
      txSets: this.txSets.map((v) => v.toXdrObject())
    };
  }
  static fromXdrObject(wire) {
    return new PersistedScpStateV0({
      scpEnvelopes: wire.scpEnvelopes.map((w) => ScpEnvelope.fromXdrObject(w)),
      quorumSets: wire.quorumSets.map((w) => ScpQuorumSet.fromXdrObject(w)),
      txSets: wire.txSets.map((w) => StoredTransactionSet.fromXdrObject(w))
    });
  }
}

export { PersistedScpStateV0 };
//# sourceMappingURL=persisted-scp-state-v0.js.map
