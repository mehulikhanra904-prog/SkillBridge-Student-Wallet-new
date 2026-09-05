'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var sorobanTransactionDataExt = require('./soroban-transaction-data-ext.js');
var sorobanResources = require('./soroban-resources.js');

class SorobanTransactionData extends xdrValue.XdrValue {
  ext;
  resources;
  resourceFee;
  static schema = jsXdr.struct(
    "SorobanTransactionData",
    {
      ext: sorobanTransactionDataExt.SorobanTransactionDataExt.schema,
      resources: sorobanResources.SorobanResources.schema,
      resourceFee: jsXdr.int64()
    }
  );
  constructor(input) {
    super();
    this.ext = input.ext;
    this.resources = input.resources;
    this.resourceFee = input.resourceFee;
  }
  toXdrObject() {
    return {
      ext: this.ext.toXdrObject(),
      resources: this.resources.toXdrObject(),
      resourceFee: this.resourceFee
    };
  }
  static fromXdrObject(wire) {
    return new SorobanTransactionData({
      ext: sorobanTransactionDataExt.SorobanTransactionDataExt.fromXdrObject(wire.ext),
      resources: sorobanResources.SorobanResources.fromXdrObject(wire.resources),
      resourceFee: wire.resourceFee
    });
  }
}

exports.SorobanTransactionData = SorobanTransactionData;
//# sourceMappingURL=soroban-transaction-data.js.map
