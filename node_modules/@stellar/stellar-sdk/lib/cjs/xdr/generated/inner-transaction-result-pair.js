'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var hash = require('./hash.js');
var innerTransactionResult = require('./inner-transaction-result.js');

class InnerTransactionResultPair extends xdrValue.XdrValue {
  transactionHash;
  result;
  static schema = jsXdr.struct(
    "InnerTransactionResultPair",
    {
      transactionHash: hash.Hash.schema,
      result: innerTransactionResult.InnerTransactionResult.schema
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
    return new InnerTransactionResultPair({
      transactionHash: hash.Hash.fromXdrObject(wire.transactionHash),
      result: innerTransactionResult.InnerTransactionResult.fromXdrObject(wire.result)
    });
  }
}

exports.InnerTransactionResultPair = InnerTransactionResultPair;
//# sourceMappingURL=inner-transaction-result-pair.js.map
