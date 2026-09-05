'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var transactionResultPair = require('./transaction-result-pair.js');

class TransactionResultSet extends xdrValue.XdrValue {
  results;
  static schema = jsXdr.struct(
    "TransactionResultSet",
    {
      results: jsXdr.array(transactionResultPair.TransactionResultPair.schema, jsXdr.UNBOUNDED_MAX_LENGTH)
    }
  );
  constructor(input) {
    super();
    this.results = input.results;
  }
  toXdrObject() {
    return {
      results: this.results.map((v) => v.toXdrObject())
    };
  }
  static fromXdrObject(wire) {
    return new TransactionResultSet({
      results: wire.results.map((w) => transactionResultPair.TransactionResultPair.fromXdrObject(w))
    });
  }
}

exports.TransactionResultSet = TransactionResultSet;
//# sourceMappingURL=transaction-result-set.js.map
