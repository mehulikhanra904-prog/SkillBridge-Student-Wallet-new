'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var scpQuorumSet = require('./scp-quorum-set.js');
var ledgerScpMessages = require('./ledger-scp-messages.js');

class ScpHistoryEntryV0 extends xdrValue.XdrValue {
  quorumSets;
  ledgerMessages;
  static schema = jsXdr.struct(
    "ScpHistoryEntryV0",
    {
      quorumSets: jsXdr.array(scpQuorumSet.ScpQuorumSet.schema, jsXdr.UNBOUNDED_MAX_LENGTH),
      ledgerMessages: ledgerScpMessages.LedgerScpMessages.schema
    }
  );
  constructor(input) {
    super();
    this.quorumSets = input.quorumSets;
    this.ledgerMessages = input.ledgerMessages;
  }
  toXdrObject() {
    return {
      quorumSets: this.quorumSets.map((v) => v.toXdrObject()),
      ledgerMessages: this.ledgerMessages.toXdrObject()
    };
  }
  static fromXdrObject(wire) {
    return new ScpHistoryEntryV0({
      quorumSets: wire.quorumSets.map((w) => scpQuorumSet.ScpQuorumSet.fromXdrObject(w)),
      ledgerMessages: ledgerScpMessages.LedgerScpMessages.fromXdrObject(wire.ledgerMessages)
    });
  }
}

exports.ScpHistoryEntryV0 = ScpHistoryEntryV0;
//# sourceMappingURL=scp-history-entry-v0.js.map
