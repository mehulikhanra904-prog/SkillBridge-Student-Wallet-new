'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var envelopeType = require('./envelope-type.js');
var transactionV0Envelope = require('./transaction-v0-envelope.js');
var transactionV1Envelope = require('./transaction-v1-envelope.js');
var feeBumpTransactionEnvelope = require('./fee-bump-transaction-envelope.js');

class TransactionEnvelopeBase extends xdrValue.XdrValue {
  constructor() {
    super();
    if (new.target === TransactionEnvelopeBase) {
      throw new TypeError(
        "new xdr.TransactionEnvelope(...) is not supported: XDR unions are built from per-variant factories. Call xdr.TransactionEnvelope.envelopeTypeTxV0(...) (or another arm factory) instead."
      );
    }
  }
  static schema = jsXdr.union(
    "TransactionEnvelope",
    {
      switchOn: envelopeType.EnvelopeType.schema,
      cases: [
        jsXdr.case("envelopeTypeTxV0", 0, jsXdr.field("v0", transactionV0Envelope.TransactionV0Envelope.schema)),
        jsXdr.case("envelopeTypeTx", 2, jsXdr.field("v1", transactionV1Envelope.TransactionV1Envelope.schema)),
        jsXdr.case(
          "envelopeTypeTxFeeBump",
          5,
          jsXdr.field("feeBump", feeBumpTransactionEnvelope.FeeBumpTransactionEnvelope.schema)
        )
      ]
    }
  );
  static envelopeTypeTxV0(v0) {
    return new TransactionEnvelopeTxV0(v0);
  }
  static envelopeTypeTx(v1) {
    return new TransactionEnvelopeTx(v1);
  }
  static envelopeTypeTxFeeBump(feeBump) {
    return new TransactionEnvelopeTxFeeBump(feeBump);
  }
  static fromXdrObject(wire) {
    switch (wire.type) {
      case 0:
        return new TransactionEnvelopeTxV0(
          transactionV0Envelope.TransactionV0Envelope.fromXdrObject(wire.v0)
        );
      case 2:
        return new TransactionEnvelopeTx(
          transactionV1Envelope.TransactionV1Envelope.fromXdrObject(wire.v1)
        );
      case 5:
        return new TransactionEnvelopeTxFeeBump(
          feeBumpTransactionEnvelope.FeeBumpTransactionEnvelope.fromXdrObject(wire.feeBump)
        );
    }
    throw new jsXdr.XdrError(
      `TransactionEnvelope: unknown type ${wire.type}`
    );
  }
  /**
   * Type guard narrowing an unknown value to a concrete TransactionEnvelope variant.
   * Use this instead of `instanceof TransactionEnvelope`: the exported `TransactionEnvelope` value
   * is the abstract base, so `instanceof` narrows to the base (not the
   * variant union) and forces a cast. `TransactionEnvelope.is(x)` narrows to the union.
   */
  static is(value) {
    return value instanceof TransactionEnvelopeBase;
  }
}
class TransactionEnvelopeTxV0 extends TransactionEnvelopeBase {
  type = "envelopeTypeTxV0";
  v0;
  constructor(v0) {
    super();
    this.v0 = v0;
  }
  get value() {
    return this.v0;
  }
  toXdrObject() {
    return { type: 0, v0: this.v0.toXdrObject() };
  }
}
class TransactionEnvelopeTx extends TransactionEnvelopeBase {
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
class TransactionEnvelopeTxFeeBump extends TransactionEnvelopeBase {
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
const TransactionEnvelope = TransactionEnvelopeBase;

exports.TransactionEnvelope = TransactionEnvelope;
exports.TransactionEnvelopeTx = TransactionEnvelopeTx;
exports.TransactionEnvelopeTxFeeBump = TransactionEnvelopeTxFeeBump;
exports.TransactionEnvelopeTxV0 = TransactionEnvelopeTxV0;
//# sourceMappingURL=transaction-envelope.js.map
