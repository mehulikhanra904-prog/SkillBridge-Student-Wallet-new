'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var publicKey = require('./public-key.js');

class BeginSponsoringFutureReservesOp extends xdrValue.XdrValue {
  sponsoredId;
  static schema = jsXdr.struct(
    "BeginSponsoringFutureReservesOp",
    {
      sponsoredId: publicKey.PublicKey.schema
    }
  );
  constructor(input) {
    super();
    this.sponsoredId = input.sponsoredId;
  }
  toXdrObject() {
    return {
      sponsoredId: this.sponsoredId.toXdrObject()
    };
  }
  static fromXdrObject(wire) {
    return new BeginSponsoringFutureReservesOp({
      sponsoredId: publicKey.PublicKey.fromXdrObject(wire.sponsoredId)
    });
  }
}

exports.BeginSponsoringFutureReservesOp = BeginSponsoringFutureReservesOp;
//# sourceMappingURL=begin-sponsoring-future-reserves-op.js.map
