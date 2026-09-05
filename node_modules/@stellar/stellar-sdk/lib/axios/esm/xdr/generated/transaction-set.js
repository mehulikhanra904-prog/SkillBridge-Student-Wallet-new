import { struct, array, UNBOUNDED_MAX_LENGTH } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { Hash } from './hash.js';
import { TransactionEnvelope } from './transaction-envelope.js';

class TransactionSet extends XdrValue {
  previousLedgerHash;
  txs;
  static schema = struct(
    "TransactionSet",
    {
      previousLedgerHash: Hash.schema,
      txs: array(TransactionEnvelope.schema, UNBOUNDED_MAX_LENGTH)
    }
  );
  constructor(input) {
    super();
    this.previousLedgerHash = input.previousLedgerHash instanceof Hash ? input.previousLedgerHash : new Hash(input.previousLedgerHash);
    this.txs = input.txs;
  }
  toXdrObject() {
    return {
      previousLedgerHash: this.previousLedgerHash.toXdrObject(),
      txs: this.txs.map((v) => v.toXdrObject())
    };
  }
  static fromXdrObject(wire) {
    return new TransactionSet({
      previousLedgerHash: Hash.fromXdrObject(wire.previousLedgerHash),
      txs: wire.txs.map((w) => TransactionEnvelope.fromXdrObject(w))
    });
  }
}

export { TransactionSet };
//# sourceMappingURL=transaction-set.js.map
