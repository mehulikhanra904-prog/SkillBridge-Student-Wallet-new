'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var envelopeType = require('./envelope-type.js');
var transaction = require('./transaction.js');
var feeBumpTransaction = require('./fee-bump-transaction.js');

class TransactionSignaturePayloadTaggedTransactionBase extends xdrValue.XdrValue {
  constructor() {
    super();
    if (new.target === TransactionSignaturePayloadTaggedTransactionBase) {
      throw new TypeError(
        "new xdr.TransactionSignaturePayloadTaggedTransaction(...) is not supported: XDR unions are built from per-variant factories. Call xdr.TransactionSignaturePayloadTaggedTransaction.envelopeTypeTx(...) (or another arm factory) instead."
      );
    }
  }
  static schema = jsXdr.union("TransactionSignaturePayloadTaggedTransaction", {
    switchOn: envelopeType.EnvelopeType.schema,
    cases: [
      jsXdr.case("envelopeTypeTx", 2, jsXdr.field("tx", transaction.Transaction.schema)),
      jsXdr.case(
        "envelopeTypeTxFeeBump",
        5,
        jsXdr.field("feeBump", feeBumpTransaction.FeeBumpTransaction.schema)
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
          transaction.Transaction.fromXdrObject(wire.tx)
        );
      case 5:
        return new TransactionSignaturePayloadTaggedTransactionTxFeeBump(
          feeBumpTransaction.FeeBumpTransaction.fromXdrObject(wire.feeBump)
        );
    }
    throw new jsXdr.XdrError(
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

exports.TransactionSignaturePayloadTaggedTransaction = TransactionSignaturePayloadTaggedTransaction;
exports.TransactionSignaturePayloadTaggedTransactionTx = TransactionSignaturePayloadTaggedTransactionTx;
exports.TransactionSignaturePayloadTaggedTransactionTxFeeBump = TransactionSignaturePayloadTaggedTransactionTxFeeBump;
//# sourceMappingURL=transaction-signature-payload-tagged-transaction.js.map
