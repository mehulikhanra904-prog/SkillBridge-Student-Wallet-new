import { union, case as _case, field, XdrError } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { EnvelopeType } from './envelope-type.js';
import { Transaction as Transaction$1 } from './transaction.js';
import { FeeBumpTransaction as FeeBumpTransaction$1 } from './fee-bump-transaction.js';

class TransactionSignaturePayloadTaggedTransactionBase extends XdrValue {
  constructor() {
    super();
    if (new.target === TransactionSignaturePayloadTaggedTransactionBase) {
      throw new TypeError(
        "new xdr.TransactionSignaturePayloadTaggedTransaction(...) is not supported: XDR unions are built from per-variant factories. Call xdr.TransactionSignaturePayloadTaggedTransaction.envelopeTypeTx(...) (or another arm factory) instead."
      );
    }
  }
  static schema = union("TransactionSignaturePayloadTaggedTransaction", {
    switchOn: EnvelopeType.schema,
    cases: [
      _case("envelopeTypeTx", 2, field("tx", Transaction$1.schema)),
      _case(
        "envelopeTypeTxFeeBump",
        5,
        field("feeBump", FeeBumpTransaction$1.schema)
      )
    ]
  });
  static envelopeTypeTx(tx) {
    return new TransactionSignaturePayloadTaggedTransactionTx(tx);
  }
  static envelopeTypeTxFeeBump(feeBump) {
    return new TransactionSignaturePayloadTaggedTransactionTxFeeBump(feeBump);
  }
  static fromXdrObject(wire) {
    switch (wire.type) {
      case 2:
        return new TransactionSignaturePayloadTaggedTransactionTx(
          Transaction$1.fromXdrObject(wire.tx)
        );
      case 5:
        return new TransactionSignaturePayloadTaggedTransactionTxFeeBump(
          FeeBumpTransaction$1.fromXdrObject(wire.feeBump)
        );
    }
    throw new XdrError(
      `TransactionSignaturePayloadTaggedTransaction: unknown type ${wire.type}`
    );
  }
  /**
   * Type guard narrowing an unknown value to a concrete TransactionSignaturePayloadTaggedTransaction variant.
   * Use this instead of `instanceof TransactionSignaturePayloadTaggedTransaction`: the exported `TransactionSignaturePayloadTaggedTransaction` value
   * is the abstract base, so `instanceof` narrows to the base (not the
   * variant union) and forces a cast. `TransactionSignaturePayloadTaggedTransaction.is(x)` narrows to the union.
   */
  static is(value) {
    return value instanceof TransactionSignaturePayloadTaggedTransactionBase;
  }
}
class TransactionSignaturePayloadTaggedTransactionTx extends TransactionSignaturePayloadTaggedTransactionBase {
  type = "envelopeTypeTx";
  tx;
  constructor(tx) {
    super();
    this.tx = tx;
  }
  get value() {
    return this.tx;
  }
  toXdrObject() {
    return { type: 2, tx: this.tx.toXdrObject() };
  }
}
class TransactionSignaturePayloadTaggedTransactionTxFeeBump extends TransactionSignaturePayloadTaggedTransactionBase {
  type = "envelopeTypeTxFeeBump";
  feeBump;
  constructor(feeBump) {
    super();
    this.feeBump = feeBump;
  }
  get value() {
    return this.feeBump;
  }
  toXdrObject() {
    return { type: 5, feeBump: this.feeBump.toXdrObject() };
  }
}
const TransactionSignaturePayloadTaggedTransaction = TransactionSignaturePayloadTaggedTransactionBase;

export { TransactionSignaturePayloadTaggedTransaction, TransactionSignaturePayloadTaggedTransactionTx, TransactionSignaturePayloadTaggedTransactionTxFeeBump };
//# sourceMappingURL=transaction-signature-payload-tagged-transaction.js.map
