'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var innerTransactionResultResult = require('./inner-transaction-result-result.js');
var innerTransactionResultExt = require('./inner-transaction-result-ext.js');

class InnerTransactionResult extends xdrValue.XdrValue {
  feeCharged;
  result;
  ext;
  static schema = jsXdr.struct(
    "InnerTransactionResult",
    {
      feeCharged: jsXdr.int64(),
      result: innerTransactionResultResult.InnerTransactionResultResult.schema,
      ext: innerTransactionResultExt.InnerTransactionResultExt.schema
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
    return new InnerTransactionResult({
      feeCharged: wire.feeCharged,
      result: innerTransactionResultResult.InnerTransactionResultResult.fromXdrObject(wire.result),
      ext: innerTransactionResultExt.InnerTransactionResultExt.fromXdrObject(wire.ext)
    });
  }
}

exports.InnerTransactionResult = InnerTransactionResult;
//# sourceMappingURL=inner-transaction-result.js.map
