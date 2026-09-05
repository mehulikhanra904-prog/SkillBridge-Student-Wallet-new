import { struct, array } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { TransactionV0 } from './transaction-v0.js';
import { DecoratedSignature } from './decorated-signature.js';

class TransactionV0Envelope extends XdrValue {
  tx;
  signatures;
  static schema = struct(
    "TransactionV0Envelope",
    {
      tx: TransactionV0.schema,
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
    return new TransactionV0Envelope({
      tx: TransactionV0.fromXdrObject(wire.tx),
      signatures: wire.signatures.map(
        (w) => DecoratedSignature.fromXdrObject(w)
      )
    });
  }
}

export { TransactionV0Envelope };
//# sourceMappingURL=transaction-v0-envelope.js.map
