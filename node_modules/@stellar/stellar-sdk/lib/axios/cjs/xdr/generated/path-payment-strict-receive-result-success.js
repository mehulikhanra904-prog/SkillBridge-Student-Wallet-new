'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var claimAtom = require('./claim-atom.js');
var simplePaymentResult = require('./simple-payment-result.js');

class PathPaymentStrictReceiveResultSuccess extends xdrValue.XdrValue {
  offers;
  last;
  static schema = jsXdr.struct("PathPaymentStrictReceiveResultSuccess", {
    offers: jsXdr.array(claimAtom.ClaimAtom.schema, jsXdr.UNBOUNDED_MAX_LENGTH),
    last: simplePaymentResult.SimplePaymentResult.schema
  });
  constructor(input) {
    super();
    this.offers = input.offers;
    this.last = input.last;
  }
  toXdrObject() {
    return {
      offers: this.offers.map((v) => v.toXdrObject()),
      last: this.last.toXdrObject()
    };
  }
  static fromXdrObject(wire) {
    return new PathPaymentStrictReceiveResultSuccess({
      offers: wire.offers.map((w) => claimAtom.ClaimAtom.fromXdrObject(w)),
      last: simplePaymentResult.SimplePaymentResult.fromXdrObject(wire.last)
    });
  }
}

exports.PathPaymentStrictReceiveResultSuccess = PathPaymentStrictReceiveResultSuccess;
//# sourceMappingURL=path-payment-strict-receive-result-success.js.map
