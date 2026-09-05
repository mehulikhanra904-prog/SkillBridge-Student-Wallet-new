'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var publicKey = require('./public-key.js');
var asset = require('./asset.js');

class SimplePaymentResult extends xdrValue.XdrValue {
  destination;
  asset;
  amount;
  static schema = jsXdr.struct(
    "SimplePaymentResult",
    {
      destination: publicKey.PublicKey.schema,
      asset: asset.Asset.schema,
      amount: jsXdr.int64()
    }
  );
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
    return new SimplePaymentResult({
      destination: publicKey.PublicKey.fromXdrObject(wire.destination),
      asset: asset.Asset.fromXdrObject(wire.asset),
      amount: wire.amount
    });
  }
}

exports.SimplePaymentResult = SimplePaymentResult;
//# sourceMappingURL=simple-payment-result.js.map
