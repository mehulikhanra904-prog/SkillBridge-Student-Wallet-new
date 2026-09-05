'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var transaction = require('./transaction.js');
var decoratedSignature = require('./decorated-signature.js');

class TransactionV1Envelope extends xdrValue.XdrValue {
  tx;
  signatures;
  static schema = jsXdr.struct(
    "TransactionV1Envelope",
    {
      tx: transaction.Transaction.schema,
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
    return new TransactionV1Envelope({
      tx: transaction.Transaction.fromXdrObject(wire.tx),
      signatures: wire.signatures.map(
        (w) => decoratedSignature.DecoratedSignature.fromXdrObject(w)
      )
    });
  }
}

exports.TransactionV1Envelope = TransactionV1Envelope;
//# sourceMappingURL=transaction-v1-envelope.js.map
