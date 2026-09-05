'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var hash = require('./hash.js');
var transactionSignaturePayloadTaggedTransaction = require('./transaction-signature-payload-tagged-transaction.js');

class TransactionSignaturePayload extends xdrValue.XdrValue {
  networkId;
  taggedTransaction;
  static schema = jsXdr.struct(
    "TransactionSignaturePayload",
    {
      networkId: hash.Hash.schema,
      taggedTransaction: transactionSignaturePayloadTaggedTransaction.TransactionSignaturePayloadTaggedTransaction.schema
    }
  );
  constructor(input) {
    super();
    this.networkId = input.networkId instanceof hash.Hash ? input.networkId : new hash.Hash(input.networkId);
    this.taggedTransaction = input.taggedTransaction;
  }
  toXdrObject() {
    return {
      networkId: this.networkId.toXdrObject(),
      taggedTransaction: this.taggedTransaction.toXdrObject()
    };
  }
  static fromXdrObject(wire) {
    return new TransactionSignaturePayload({
      networkId: hash.Hash.fromXdrObject(wire.networkId),
      taggedTransaction: transactionSignaturePayloadTaggedTransaction.TransactionSignaturePayloadTaggedTransaction.fromXdrObject(
        wire.taggedTransaction
      )
    });
  }
}

exports.TransactionSignaturePayload = TransactionSignaturePayload;
//# sourceMappingURL=transaction-signature-payload.js.map
