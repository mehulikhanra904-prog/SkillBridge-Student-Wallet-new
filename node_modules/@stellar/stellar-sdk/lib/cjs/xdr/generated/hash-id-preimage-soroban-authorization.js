'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var hash = require('./hash.js');
var sorobanAuthorizedInvocation = require('./soroban-authorized-invocation.js');

class HashIdPreimageSorobanAuthorization extends xdrValue.XdrValue {
  networkId;
  nonce;
  signatureExpirationLedger;
  invocation;
  static schema = jsXdr.struct("HashIdPreimageSorobanAuthorization", {
    networkId: hash.Hash.schema,
    nonce: jsXdr.int64(),
    signatureExpirationLedger: jsXdr.uint32(),
    invocation: sorobanAuthorizedInvocation.SorobanAuthorizedInvocation.schema
  });
  constructor(input) {
    super();
    this.networkId = input.networkId instanceof hash.Hash ? input.networkId : new hash.Hash(input.networkId);
    this.nonce = input.nonce;
    this.signatureExpirationLedger = input.signatureExpirationLedger;
    this.invocation = input.invocation;
  }
  toXdrObject() {
    return {
      networkId: this.networkId.toXdrObject(),
      nonce: this.nonce,
      signatureExpirationLedger: this.signatureExpirationLedger,
      invocation: this.invocation.toXdrObject()
    };
  }
  static fromXdrObject(wire) {
    return new HashIdPreimageSorobanAuthorization({
      networkId: hash.Hash.fromXdrObject(wire.networkId),
      nonce: wire.nonce,
      signatureExpirationLedger: wire.signatureExpirationLedger,
      invocation: sorobanAuthorizedInvocation.SorobanAuthorizedInvocation.fromXdrObject(wire.invocation)
    });
  }
}

exports.HashIdPreimageSorobanAuthorization = HashIdPreimageSorobanAuthorization;
//# sourceMappingURL=hash-id-preimage-soroban-authorization.js.map
