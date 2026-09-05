import { struct, array, UNBOUNDED_MAX_LENGTH } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { Hash } from './hash.js';
import { TransactionPhase } from './transaction-phase.js';

class TransactionSetV1 extends XdrValue {
  previousLedgerHash;
  phases;
  static schema = struct(
    "TransactionSetV1",
    {
      previousLedgerHash: Hash.schema,
      phases: array(TransactionPhase.schema, UNBOUNDED_MAX_LENGTH)
    }
  );
  constructor(input) {
    super();
    this.previousLedgerHash = input.previousLedgerHash instanceof Hash ? input.previousLedgerHash : new Hash(input.previousLedgerHash);
    this.phases = input.phases;
  }
  toXdrObject() {
    return {
      previousLedgerHash: this.previousLedgerHash.toXdrObject(),
      phases: this.phases.map((v) => v.toXdrObject())
    };
  }
  static fromXdrObject(wire) {
    return new TransactionSetV1({
      previousLedgerHash: Hash.fromXdrObject(wire.previousLedgerHash),
      phases: wire.phases.map((w) => TransactionPhase.fromXdrObject(w))
    });
  }
}

export { TransactionSetV1 };
//# sourceMappingURL=transaction-set-v1.js.map
