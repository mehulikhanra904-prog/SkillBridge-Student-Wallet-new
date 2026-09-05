'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var envelopeType = require('./envelope-type.js');
var transactionV1Envelope = require('./transaction-v1-envelope.js');

class FeeBumpTransactionInnerTxBase extends xdrValue.XdrValue {
  constructor() {
    super();
    if (new.target === FeeBumpTransactionInnerTxBase) {
      throw new TypeError(
        "new xdr.FeeBumpTransactionInnerTx(...) is not supported: XDR unions are built from per-variant factories. Call xdr.FeeBumpTransactionInnerTx.envelopeTypeTx(...) (or another arm factory) instead."
      );
    }
  }
  static schema = jsXdr.union(
    "FeeBumpTransactionInnerTx",
    {
      switchOn: envelopeType.EnvelopeType.schema,
      cases: [
        jsXdr.case("envelopeTypeTx", 2, jsXdr.field("v1", transactionV1Envelope.TransactionV1Envelope.schema))
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
          transactionV1Envelope.TransactionV1Envelope.fromXdrObject(wire.v1)
        );
    }
    throw new jsXdr.XdrError(
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

exports.FeeBumpTransactionInnerTx = FeeBumpTransactionInnerTx;
exports.FeeBumpTransactionInnerTxTx = FeeBumpTransactionInnerTxTx;
//# sourceMappingURL=fee-bump-transaction-inner-tx.js.map
