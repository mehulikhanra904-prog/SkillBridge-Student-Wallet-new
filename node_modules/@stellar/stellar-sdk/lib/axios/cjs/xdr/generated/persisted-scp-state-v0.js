'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var scpEnvelope = require('./scp-envelope.js');
var scpQuorumSet = require('./scp-quorum-set.js');
var storedTransactionSet = require('./stored-transaction-set.js');

class PersistedScpStateV0 extends xdrValue.XdrValue {
  scpEnvelopes;
  quorumSets;
  txSets;
  static schema = jsXdr.struct(
    "PersistedScpStateV0",
    {
      scpEnvelopes: jsXdr.array(scpEnvelope.ScpEnvelope.schema, jsXdr.UNBOUNDED_MAX_LENGTH),
      quorumSets: jsXdr.array(scpQuorumSet.ScpQuorumSet.schema, jsXdr.UNBOUNDED_MAX_LENGTH),
      txSets: jsXdr.array(storedTransactionSet.StoredTransactionSet.schema, jsXdr.UNBOUNDED_MAX_LENGTH)
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
      scpEnvelopes: wire.scpEnvelopes.map((w) => scpEnvelope.ScpEnvelope.fromXdrObject(w)),
      quorumSets: wire.quorumSets.map((w) => scpQuorumSet.ScpQuorumSet.fromXdrObject(w)),
      txSets: wire.txSets.map((w) => storedTransactionSet.StoredTransactionSet.fromXdrObject(w))
    });
  }
}

exports.PersistedScpStateV0 = PersistedScpStateV0;
//# sourceMappingURL=persisted-scp-state-v0.js.map
