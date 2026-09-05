'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var transactionV0 = require('./transaction-v0.js');
var decoratedSignature = require('./decorated-signature.js');

class TransactionV0Envelope extends xdrValue.XdrValue {
  tx;
  signatures;
  static schema = jsXdr.struct(
    "TransactionV0Envelope",
    {
      tx: transactionV0.TransactionV0.schema,
      signatures: jsXdr.array(decoratedSignature.DecoratedSignature.schema, 20)
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
      tx: transactionV0.TransactionV0.fromXdrObject(wire.tx),
      signatures: wire.signatures.map(
        (w) => decoratedSignature.DecoratedSignature.fromXdrObject(w)
      )
    });
  }
}

exports.TransactionV0Envelope = TransactionV0Envelope;
//# sourceMappingURL=transaction-v0-envelope.js.map
