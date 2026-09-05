'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var ledgerCloseMeta = require('./ledger-close-meta.js');

class LedgerCloseMetaBatch extends xdrValue.XdrValue {
  startSequence;
  endSequence;
  ledgerCloseMetas;
  static schema = jsXdr.struct(
    "LedgerCloseMetaBatch",
    {
      startSequence: jsXdr.uint32(),
      endSequence: jsXdr.uint32(),
      ledgerCloseMetas: jsXdr.array(ledgerCloseMeta.LedgerCloseMeta.schema, jsXdr.UNBOUNDED_MAX_LENGTH)
    }
  );
  constructor(input) {
    super();
    this.startSequence = input.startSequence;
    this.endSequence = input.endSequence;
    this.ledgerCloseMetas = input.ledgerCloseMetas;
  }
  toXdrObject() {
    return {
      startSequence: this.startSequence,
      endSequence: this.endSequence,
      ledgerCloseMetas: this.ledgerCloseMetas.map((v) => v.toXdrObject())
    };
  }
  static fromXdrObject(wire) {
    return new LedgerCloseMetaBatch({
      startSequence: wire.startSequence,
      endSequence: wire.endSequence,
      ledgerCloseMetas: wire.ledgerCloseMetas.map(
        (w) => ledgerCloseMeta.LedgerCloseMeta.fromXdrObject(w)
      )
    });
  }
}

exports.LedgerCloseMetaBatch = LedgerCloseMetaBatch;
//# sourceMappingURL=ledger-close-meta-batch.js.map
