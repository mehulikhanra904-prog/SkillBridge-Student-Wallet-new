'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var publicKey = require('./public-key.js');
var claimPredicate = require('./claim-predicate.js');

class ClaimantV0 extends xdrValue.XdrValue {
  destination;
  predicate;
  static schema = jsXdr.struct("ClaimantV0", {
    destination: publicKey.PublicKey.schema,
    predicate: claimPredicate.ClaimPredicate.schema
  });
  constructor(input) {
    super();
    this.destination = input.destination;
    this.predicate = input.predicate;
  }
  toXdrObject() {
    return {
      destination: this.destination.toXdrObject(),
      predicate: this.predicate.toXdrObject()
    };
  }
  static fromXdrObject(wire) {
    return new ClaimantV0({
      destination: publicKey.PublicKey.fromXdrObject(wire.destination),
      predicate: claimPredicate.ClaimPredicate.fromXdrObject(wire.predicate)
    });
  }
}

exports.ClaimantV0 = ClaimantV0;
//# sourceMappingURL=claimant-v0.js.map
