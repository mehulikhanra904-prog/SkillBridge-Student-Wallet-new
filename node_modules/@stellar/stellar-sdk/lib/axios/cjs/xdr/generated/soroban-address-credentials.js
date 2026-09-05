'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var scAddress = require('./sc-address.js');
var scVal = require('./sc-val.js');

class SorobanAddressCredentials extends xdrValue.XdrValue {
  address;
  nonce;
  signatureExpirationLedger;
  signature;
  static schema = jsXdr.struct(
    "SorobanAddressCredentials",
    {
      address: scAddress.ScAddress.schema,
      nonce: jsXdr.int64(),
      signatureExpirationLedger: jsXdr.uint32(),
      signature: scVal.ScVal.schema
    }
  );
  constructor(input) {
    super();
    this.address = input.address;
    this.nonce = input.nonce;
    this.signatureExpirationLedger = input.signatureExpirationLedger;
    this.signature = input.signature;
  }
  toXdrObject() {
    return {
      address: this.address.toXdrObject(),
      nonce: this.nonce,
      signatureExpirationLedger: this.signatureExpirationLedger,
      signature: this.signature.toXdrObject()
    };
  }
  static fromXdrObject(wire) {
    return new SorobanAddressCredentials({
      address: scAddress.ScAddress.fromXdrObject(wire.address),
      nonce: wire.nonce,
      signatureExpirationLedger: wire.signatureExpirationLedger,
      signature: scVal.ScVal.fromXdrObject(wire.signature)
    });
  }
}

exports.SorobanAddressCredentials = SorobanAddressCredentials;
//# sourceMappingURL=soroban-address-credentials.js.map
