import { struct, array, UNBOUNDED_MAX_LENGTH, uint32 } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { ScpEnvelope } from './scp-envelope.js';

class LedgerScpMessages extends XdrValue {
  ledgerSeq;
  messages;
  static schema = struct(
    "LedgerScpMessages",
    {
      ledgerSeq: uint32(),
      messages: array(ScpEnvelope.schema, UNBOUNDED_MAX_LENGTH)
    }
  );
  constructor(input) {
    super();
    this.ledgerSeq = input.ledgerSeq;
    this.messages = input.messages;
  }
  toXdrObject() {
    return {
      ledgerSeq: this.ledgerSeq,
      messages: this.messages.map((v) => v.toXdrObject())
    };
  }
  static fromXdrObject(wire) {
    return new LedgerScpMessages({
      ledgerSeq: wire.ledgerSeq,
      messages: wire.messages.map((w) => ScpEnvelope.fromXdrObject(w))
    });
  }
}

export { LedgerScpMessages };
//# sourceMappingURL=ledger-scp-messages.js.map
