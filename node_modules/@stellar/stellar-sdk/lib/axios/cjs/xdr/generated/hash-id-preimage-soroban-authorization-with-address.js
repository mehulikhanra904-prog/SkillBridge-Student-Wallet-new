'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var hash = require('./hash.js');
var scAddress = require('./sc-address.js');
var sorobanAuthorizedInvocation = require('./soroban-authorized-invocation.js');

class HashIdPreimageSorobanAuthorizationWithAddress extends xdrValue.XdrValue {
  networkId;
  nonce;
  signatureExpirationLedger;
  address;
  invocation;
  static schema = jsXdr.struct("HashIdPreimageSorobanAuthorizationWithAddress", {
    networkId: hash.Hash.schema,
    nonce: jsXdr.int64(),
    signatureExpirationLedger: jsXdr.uint32(),
    address: scAddress.ScAddress.schema,
    invocation: sorobanAuthorizedInvocation.SorobanAuthorizedInvocation.schema
  });
  constructor(input) {
    super();
    this.networkId = input.networkId instanceof hash.Hash ? input.networkId : new hash.Hash(input.networkId);
    this.nonce = input.nonce;
    this.signatureExpirationLedger = input.signatureExpirationLedger;
    this.address = input.address;
    this.invocation = input.invocation;
  }
  toXdrObject() {
    return {
      networkId: this.networkId.toXdrObject(),
      nonce: this.nonce,
      signatureExpirationLedger: this.signatureExpirationLedger,
      address: this.address.toXdrObject(),
      invocation: this.invocation.toXdrObject()
    };
  }
  static fromXdrObject(wire) {
    return new HashIdPreimageSorobanAuthorizationWithAddress({
      networkId: hash.Hash.fromXdrObject(wire.networkId),
      nonce: wire.nonce,
      signatureExpirationLedger: wire.signatureExpirationLedger,
      address: scAddress.ScAddress.fromXdrObject(wire.address),
      invocation: sorobanAuthorizedInvocation.SorobanAuthorizedInvocation.fromXdrObject(wire.invocation)
    });
  }
}

exports.HashIdPreimageSorobanAuthorizationWithAddress = HashIdPreimageSorobanAuthorizationWithAddress;
//# sourceMappingURL=hash-id-preimage-soroban-authorization-with-address.js.map
