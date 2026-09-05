'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var muxedAccount = require('./muxed-account.js');
var feeBumpTransactionInnerTx = require('./fee-bump-transaction-inner-tx.js');
var feeBumpTransactionExt = require('./fee-bump-transaction-ext.js');

let FeeBumpTransaction$1 = class FeeBumpTransaction extends xdrValue.XdrValue {
  feeSource;
  fee;
  innerTx;
  ext;
  static schema = jsXdr.struct(
    "FeeBumpTransaction",
    {
      feeSource: muxedAccount.MuxedAccount.schema,
      fee: jsXdr.int64(),
      innerTx: feeBumpTransactionInnerTx.FeeBumpTransactionInnerTx.schema,
      ext: feeBumpTransactionExt.FeeBumpTransactionExt.schema
    }
  );
  constructor(input) {
    super();
    this.feeSource = input.feeSource;
    this.fee = input.fee;
    this.innerTx = input.innerTx;
    this.ext = input.ext;
  }
  toXdrObject() {
    return {
      feeSource: this.feeSource.toXdrObject(),
      fee: this.fee,
      innerTx: this.innerTx.toXdrObject(),
      ext: this.ext.toXdrObject()
    };
  }
  static fromXdrObject(wire) {
    return new FeeBumpTransaction({
      feeSource: muxedAccount.MuxedAccount.fromXdrObject(wire.feeSource),
      fee: wire.fee,
      innerTx: feeBumpTransactionInnerTx.FeeBumpTransactionInnerTx.fromXdrObject(wire.innerTx),
      ext: feeBumpTransactionExt.FeeBumpTransactionExt.fromXdrObject(wire.ext)
    });
  }
};

exports.FeeBumpTransaction = FeeBumpTransaction$1;
//# sourceMappingURL=fee-bump-transaction.js.map
