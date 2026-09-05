'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var scpEnvelope = require('./scp-envelope.js');
var scpQuorumSet = require('./scp-quorum-set.js');

class PersistedScpStateV1 extends xdrValue.XdrValue {
  scpEnvelopes;
  quorumSets;
  static schema = jsXdr.struct(
    "PersistedScpStateV1",
    {
      scpEnvelopes: jsXdr.array(scpEnvelope.ScpEnvelope.schema, jsXdr.UNBOUNDED_MAX_LENGTH),
      quorumSets: jsXdr.array(scpQuorumSet.ScpQuorumSet.schema, jsXdr.UNBOUNDED_MAX_LENGTH)
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
      scpEnvelopes: wire.scpEnvelopes.map((w) => scpEnvelope.ScpEnvelope.fromXdrObject(w)),
      quorumSets: wire.quorumSets.map((w) => scpQuorumSet.ScpQuorumSet.fromXdrObject(w))
    });
  }
}

exports.PersistedScpStateV1 = PersistedScpStateV1;
//# sourceMappingURL=persisted-scp-state-v1.js.map
