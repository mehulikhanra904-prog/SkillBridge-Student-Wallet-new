import { struct, array, UNBOUNDED_MAX_LENGTH } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { ScpQuorumSet } from './scp-quorum-set.js';
import { LedgerScpMessages } from './ledger-scp-messages.js';

class ScpHistoryEntryV0 extends XdrValue {
  quorumSets;
  ledgerMessages;
  static schema = struct(
    "ScpHistoryEntryV0",
    {
      quorumSets: array(ScpQuorumSet.schema, UNBOUNDED_MAX_LENGTH),
      ledgerMessages: LedgerScpMessages.schema
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
      quorumSets: wire.quorumSets.map((w) => ScpQuorumSet.fromXdrObject(w)),
      ledgerMessages: LedgerScpMessages.fromXdrObject(wire.ledgerMessages)
    });
  }
}

export { ScpHistoryEntryV0 };
//# sourceMappingURL=scp-history-entry-v0.js.map
