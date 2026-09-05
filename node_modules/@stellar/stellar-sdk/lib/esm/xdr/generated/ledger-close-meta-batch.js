import { struct, array, UNBOUNDED_MAX_LENGTH, uint32 } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { LedgerCloseMeta } from './ledger-close-meta.js';

class LedgerCloseMetaBatch extends XdrValue {
  startSequence;
  endSequence;
  ledgerCloseMetas;
  static schema = struct(
    "LedgerCloseMetaBatch",
    {
      startSequence: uint32(),
      endSequence: uint32(),
      ledgerCloseMetas: array(LedgerCloseMeta.schema, UNBOUNDED_MAX_LENGTH)
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
        (w) => LedgerCloseMeta.fromXdrObject(w)
      )
    });
  }
}

export { LedgerCloseMetaBatch };
//# sourceMappingURL=ledger-close-meta-batch.js.map
