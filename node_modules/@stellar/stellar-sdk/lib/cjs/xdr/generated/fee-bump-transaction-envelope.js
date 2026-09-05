'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var feeBumpTransaction = require('./fee-bump-transaction.js');
var decoratedSignature = require('./decorated-signature.js');

class FeeBumpTransactionEnvelope extends xdrValue.XdrValue {
  tx;
  signatures;
  static schema = jsXdr.struct(
    "FeeBumpTransactionEnvelope",
    {
      tx: feeBumpTransaction.FeeBumpTransaction.schema,
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
    return new FeeBumpTransactionEnvelope({
      tx: feeBumpTransaction.FeeBumpTransaction.fromXdrObject(wire.tx),
      signatures: wire.signatures.map(
        (w) => decoratedSignature.DecoratedSignature.fromXdrObject(w)
      )
    });
  }
}

exports.FeeBumpTransactionEnvelope = FeeBumpTransactionEnvelope;
//# sourceMappingURL=fee-bump-transaction-envelope.js.map
