'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var sorobanAddressCredentials = require('./soroban-address-credentials.js');
var sorobanDelegateSignature = require('./soroban-delegate-signature.js');

class SorobanAddressCredentialsWithDelegates extends xdrValue.XdrValue {
  addressCredentials;
  delegates;
  static schema = jsXdr.struct("SorobanAddressCredentialsWithDelegates", {
    addressCredentials: sorobanAddressCredentials.SorobanAddressCredentials.schema,
    delegates: jsXdr.array(sorobanDelegateSignature.SorobanDelegateSignature.schema, jsXdr.UNBOUNDED_MAX_LENGTH)
  });
  constructor(input) {
    super();
    this.addressCredentials = input.addressCredentials;
    this.delegates = input.delegates;
  }
  toXdrObject() {
    return {
      addressCredentials: this.addressCredentials.toXdrObject(),
      delegates: this.delegates.map((v) => v.toXdrObject())
    };
  }
  static fromXdrObject(wire) {
    return new SorobanAddressCredentialsWithDelegates({
      addressCredentials: sorobanAddressCredentials.SorobanAddressCredentials.fromXdrObject(
        wire.addressCredentials
      ),
      delegates: wire.delegates.map(
        (w) => sorobanDelegateSignature.SorobanDelegateSignature.fromXdrObject(w)
      )
    });
  }
}

exports.SorobanAddressCredentialsWithDelegates = SorobanAddressCredentialsWithDelegates;
//# sourceMappingURL=soroban-address-credentials-with-delegates.js.map
