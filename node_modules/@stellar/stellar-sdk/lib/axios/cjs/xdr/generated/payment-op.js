'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var muxedAccount = require('./muxed-account.js');
var asset = require('./asset.js');

class PaymentOp extends xdrValue.XdrValue {
  destination;
  asset;
  amount;
  static schema = jsXdr.struct("PaymentOp", {
    destination: muxedAccount.MuxedAccount.schema,
    asset: asset.Asset.schema,
    amount: jsXdr.int64()
  });
  constructor(input) {
    super();
    this.destination = input.destination;
    this.asset = input.asset;
    this.amount = input.amount;
  }
  toXdrObject() {
    return {
      destination: this.destination.toXdrObject(),
      asset: this.asset.toXdrObject(),
      amount: this.amount
    };
  }
  static fromXdrObject(wire) {
    return new PaymentOp({
      destination: muxedAccount.MuxedAccount.fromXdrObject(wire.destination),
      asset: asset.Asset.fromXdrObject(wire.asset),
      amount: wire.amount
    });
  }
}

exports.PaymentOp = PaymentOp;
//# sourceMappingURL=payment-op.js.map
