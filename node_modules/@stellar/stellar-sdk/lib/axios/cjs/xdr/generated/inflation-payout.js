'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var publicKey = require('./public-key.js');

class InflationPayout extends xdrValue.XdrValue {
  destination;
  amount;
  static schema = jsXdr.struct(
    "InflationPayout",
    {
      destination: publicKey.PublicKey.schema,
      amount: jsXdr.int64()
    }
  );
  constructor(input) {
    super();
    this.destination = input.destination;
    this.amount = input.amount;
  }
  toXdrObject() {
    return {
      destination: this.destination.toXdrObject(),
      amount: this.amount
    };
  }
  static fromXdrObject(wire) {
    return new InflationPayout({
      destination: publicKey.PublicKey.fromXdrObject(wire.destination),
      amount: wire.amount
    });
  }
}

exports.InflationPayout = InflationPayout;
//# sourceMappingURL=inflation-payout.js.map
