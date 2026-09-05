'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var sorobanTransactionMetaExt = require('./soroban-transaction-meta-ext.js');
var scVal = require('./sc-val.js');

class SorobanTransactionMetaV2 extends xdrValue.XdrValue {
  ext;
  returnValue;
  static schema = jsXdr.struct(
    "SorobanTransactionMetaV2",
    {
      ext: sorobanTransactionMetaExt.SorobanTransactionMetaExt.schema,
      returnValue: jsXdr.option(scVal.ScVal.schema)
    }
  );
  constructor(input) {
    super();
    this.ext = input.ext;
    this.returnValue = input.returnValue;
  }
  toXdrObject() {
    return {
      ext: this.ext.toXdrObject(),
      returnValue: this.returnValue === null ? null : this.returnValue.toXdrObject()
    };
  }
  static fromXdrObject(wire) {
    return new SorobanTransactionMetaV2({
      ext: sorobanTransactionMetaExt.SorobanTransactionMetaExt.fromXdrObject(wire.ext),
      returnValue: wire.returnValue === null ? null : scVal.ScVal.fromXdrObject(wire.returnValue)
    });
  }
}

exports.SorobanTransactionMetaV2 = SorobanTransactionMetaV2;
//# sourceMappingURL=soroban-transaction-meta-v2.js.map
