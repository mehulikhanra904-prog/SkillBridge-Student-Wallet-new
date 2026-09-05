'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var transactionResultResult = require('./transaction-result-result.js');
var transactionResultExt = require('./transaction-result-ext.js');

class TransactionResult extends xdrValue.XdrValue {
  feeCharged;
  result;
  ext;
  static schema = jsXdr.struct(
    "TransactionResult",
    {
      feeCharged: jsXdr.int64(),
      result: transactionResultResult.TransactionResultResult.schema,
      ext: transactionResultExt.TransactionResultExt.schema
    }
  );
  constructor(input) {
    super();
    this.feeCharged = input.feeCharged;
    this.result = input.result;
    this.ext = input.ext;
  }
  toXdrObject() {
    return {
      feeCharged: this.feeCharged,
      result: this.result.toXdrObject(),
      ext: this.ext.toXdrObject()
    };
  }
  static fromXdrObject(wire) {
    return new TransactionResult({
      feeCharged: wire.feeCharged,
      result: transactionResultResult.TransactionResultResult.fromXdrObject(wire.result),
      ext: transactionResultExt.TransactionResultExt.fromXdrObject(wire.ext)
    });
  }
}

exports.TransactionResult = TransactionResult;
//# sourceMappingURL=transaction-result.js.map
