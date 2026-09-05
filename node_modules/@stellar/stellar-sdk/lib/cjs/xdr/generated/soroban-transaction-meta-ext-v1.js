'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var extensionPoint = require('./extension-point.js');

class SorobanTransactionMetaExtV1 extends xdrValue.XdrValue {
  ext;
  totalNonRefundableResourceFeeCharged;
  totalRefundableResourceFeeCharged;
  rentFeeCharged;
  static schema = jsXdr.struct(
    "SorobanTransactionMetaExtV1",
    {
      ext: extensionPoint.ExtensionPoint.schema,
      totalNonRefundableResourceFeeCharged: jsXdr.int64(),
      totalRefundableResourceFeeCharged: jsXdr.int64(),
      rentFeeCharged: jsXdr.int64()
    }
  );
  constructor(input) {
    super();
    this.ext = input.ext;
    this.totalNonRefundableResourceFeeCharged = input.totalNonRefundableResourceFeeCharged;
    this.totalRefundableResourceFeeCharged = input.totalRefundableResourceFeeCharged;
    this.rentFeeCharged = input.rentFeeCharged;
  }
  toXdrObject() {
    return {
      ext: this.ext.toXdrObject(),
      totalNonRefundableResourceFeeCharged: this.totalNonRefundableResourceFeeCharged,
      totalRefundableResourceFeeCharged: this.totalRefundableResourceFeeCharged,
      rentFeeCharged: this.rentFeeCharged
    };
  }
  static fromXdrObject(wire) {
    return new SorobanTransactionMetaExtV1({
      ext: extensionPoint.ExtensionPoint.fromXdrObject(wire.ext),
      totalNonRefundableResourceFeeCharged: wire.totalNonRefundableResourceFeeCharged,
      totalRefundableResourceFeeCharged: wire.totalRefundableResourceFeeCharged,
      rentFeeCharged: wire.rentFeeCharged
    });
  }
}

exports.SorobanTransactionMetaExtV1 = SorobanTransactionMetaExtV1;
//# sourceMappingURL=soroban-transaction-meta-ext-v1.js.map
