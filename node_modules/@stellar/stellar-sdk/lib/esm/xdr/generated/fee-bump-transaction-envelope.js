import { struct, array } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { FeeBumpTransaction as FeeBumpTransaction$1 } from './fee-bump-transaction.js';
import { DecoratedSignature } from './decorated-signature.js';

class FeeBumpTransactionEnvelope extends XdrValue {
  tx;
  signatures;
  static schema = struct(
    "FeeBumpTransactionEnvelope",
    {
      tx: FeeBumpTransaction$1.schema,
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
    return new FeeBumpTransactionEnvelope({
      tx: FeeBumpTransaction$1.fromXdrObject(wire.tx),
      signatures: wire.signatures.map(
        (w) => DecoratedSignature.fromXdrObject(w)
      )
    });
  }
}

export { FeeBumpTransactionEnvelope };
//# sourceMappingURL=fee-bump-transaction-envelope.js.map
