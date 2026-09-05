import { union, case as _case, field, XdrError } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { EnvelopeType } from './envelope-type.js';
import { TransactionV1Envelope } from './transaction-v1-envelope.js';

class FeeBumpTransactionInnerTxBase extends XdrValue {
  constructor() {
    super();
    if (new.target === FeeBumpTransactionInnerTxBase) {
      throw new TypeError(
        "new xdr.FeeBumpTransactionInnerTx(...) is not supported: XDR unions are built from per-variant factories. Call xdr.FeeBumpTransactionInnerTx.envelopeTypeTx(...) (or another arm factory) instead."
      );
    }
  }
  static schema = union(
    "FeeBumpTransactionInnerTx",
    {
      switchOn: EnvelopeType.schema,
      cases: [
        _case("envelopeTypeTx", 2, field("v1", TransactionV1Envelope.schema))
      ]
    }
  );
  static envelopeTypeTx(v1) {
    return new FeeBumpTransactionInnerTxTx(v1);
  }
  static fromXdrObject(wire) {
    switch (wire.type) {
      case 2:
        return new FeeBumpTransactionInnerTxTx(
          TransactionV1Envelope.fromXdrObject(wire.v1)
        );
    }
    throw new XdrError(
      `FeeBumpTransactionInnerTx: unknown type ${wire.type}`
    );
  }
  /**
   * Type guard narrowing an unknown value to a concrete FeeBumpTransactionInnerTx variant.
   * Use this instead of `instanceof FeeBumpTransactionInnerTx`: the exported `FeeBumpTransactionInnerTx` value
   * is the abstract base, so `instanceof` narrows to the base (not the
   * variant union) and forces a cast. `FeeBumpTransactionInnerTx.is(x)` narrows to the union.
   */
  static is(value) {
    return value instanceof FeeBumpTransactionInnerTxBase;
  }
}
class FeeBumpTransactionInnerTxTx extends FeeBumpTransactionInnerTxBase {
  type = "envelopeTypeTx";
  v1;
  constructor(v1) {
    super();
    this.v1 = v1;
  }
  get value() {
    return this.v1;
  }
  toXdrObject() {
    return { type: 2, v1: this.v1.toXdrObject() };
  }
}
const FeeBumpTransactionInnerTx = FeeBumpTransactionInnerTxBase;

export { FeeBumpTransactionInnerTx, FeeBumpTransactionInnerTxTx };
//# sourceMappingURL=fee-bump-transaction-inner-tx.js.map
