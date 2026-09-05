import { struct, array } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { Transaction as Transaction$1 } from './transaction.js';
import { DecoratedSignature } from './decorated-signature.js';

class TransactionV1Envelope extends XdrValue {
  tx;
  signatures;
  static schema = struct(
    "TransactionV1Envelope",
    {
      tx: Transaction$1.schema,
      signatures: array(DecoratedSignature.schema, 20)
    }
  );
  constructor(input) {
    super();
    this.tx = input.tx;
    this.signatures = input.signatures;
  }
  toXdrObject() {
    return {
      tx: this.tx.toXdrObject(),
      signatures: this.signatures.map((v) => v.toXdrObject())
    };
  }
  static fromXdrObject(wire) {
    return new TransactionV1Envelope({
      tx: Transaction$1.fromXdrObject(wire.tx),
      signatures: wire.signatures.map(
        (w) => DecoratedSignature.fromXdrObject(w)
      )
    });
  }
}

export { TransactionV1Envelope };
//# sourceMappingURL=transaction-v1-envelope.js.map
