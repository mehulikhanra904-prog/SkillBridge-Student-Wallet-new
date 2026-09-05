'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var hash = require('./hash.js');
var transactionResult = require('./transaction-result.js');

class TransactionResultPair extends xdrValue.XdrValue {
  transactionHash;
  result;
  static schema = jsXdr.struct(
    "TransactionResultPair",
    {
      transactionHash: hash.Hash.schema,
      result: transactionResult.TransactionResult.schema
    }
  );
  constructor(input) {
    super();
    this.transactionHash = input.transactionHash instanceof hash.Hash ? input.transactionHash : new hash.Hash(input.transactionHash);
    this.result = input.result;
  }
  toXdrObject() {
    return {
      transactionHash: this.transactionHash.toXdrObject(),
      result: this.result.toXdrObject()
    };
  }
  static fromXdrObject(wire) {
    return new TransactionResultPair({
      transactionHash: hash.Hash.fromXdrObject(wire.transactionHash),
      result: transactionResult.TransactionResult.fromXdrObject(wire.result)
    });
  }
}

exports.TransactionResultPair = TransactionResultPair;
//# sourceMappingURL=transaction-result-pair.js.map
