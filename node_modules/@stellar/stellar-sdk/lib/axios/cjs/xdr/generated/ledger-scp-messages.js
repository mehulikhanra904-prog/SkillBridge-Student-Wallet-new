'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var scpEnvelope = require('./scp-envelope.js');

class LedgerScpMessages extends xdrValue.XdrValue {
  ledgerSeq;
  messages;
  static schema = jsXdr.struct(
    "LedgerScpMessages",
    {
      ledgerSeq: jsXdr.uint32(),
      messages: jsXdr.array(scpEnvelope.ScpEnvelope.schema, jsXdr.UNBOUNDED_MAX_LENGTH)
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
      messages: wire.messages.map((w) => scpEnvelope.ScpEnvelope.fromXdrObject(w))
    });
  }
}

exports.LedgerScpMessages = LedgerScpMessages;
//# sourceMappingURL=ledger-scp-messages.js.map
