'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var publicKey = require('./public-key.js');

class CreateAccountOp extends xdrValue.XdrValue {
  destination;
  startingBalance;
  static schema = jsXdr.struct(
    "CreateAccountOp",
    {
      destination: publicKey.PublicKey.schema,
      startingBalance: jsXdr.int64()
    }
  );
  constructor(input) {
    super();
    this.destination = input.destination;
    this.startingBalance = input.startingBalance;
  }
  toXdrObject() {
    return {
      destination: this.destination.toXdrObject(),
      startingBalance: this.startingBalance
    };
  }
  static fromXdrObject(wire) {
    return new CreateAccountOp({
      destination: publicKey.PublicKey.fromXdrObject(wire.destination),
      startingBalance: wire.startingBalance
    });
  }
}

exports.CreateAccountOp = CreateAccountOp;
//# sourceMappingURL=create-account-op.js.map
