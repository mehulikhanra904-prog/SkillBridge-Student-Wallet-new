import { struct, uint32 } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { StoredTransactionSet } from './stored-transaction-set.js';
import { StellarValue } from './stellar-value.js';

class StoredDebugTransactionSet extends XdrValue {
  txSet;
  ledgerSeq;
  scpValue;
  static schema = struct(
    "StoredDebugTransactionSet",
    {
      txSet: StoredTransactionSet.schema,
      ledgerSeq: uint32(),
      scpValue: StellarValue.schema
    }
  );
  constructor(input) {
    super();
    this.txSet = input.txSet;
    this.ledgerSeq = input.ledgerSeq;
    this.scpValue = input.scpValue;
  }
  toXdrObject() {
    return {
      txSet: this.txSet.toXdrObject(),
      ledgerSeq: this.ledgerSeq,
      scpValue: this.scpValue.toXdrObject()
    };
  }
  static fromXdrObject(wire) {
    return new StoredDebugTransactionSet({
      txSet: StoredTransactionSet.fromXdrObject(wire.txSet),
      ledgerSeq: wire.ledgerSeq,
      scpValue: StellarValue.fromXdrObject(wire.scpValue)
    });
  }
}

export { StoredDebugTransactionSet };
//# sourceMappingURL=stored-debug-transaction-set.js.map
