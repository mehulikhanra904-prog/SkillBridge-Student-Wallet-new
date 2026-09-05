'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var scAddress = require('./sc-address.js');
var scVal = require('./sc-val.js');

class SorobanDelegateSignature extends xdrValue.XdrValue {
  address;
  signature;
  nestedDelegates;
  static schema = jsXdr.struct(
    "SorobanDelegateSignature",
    {
      address: scAddress.ScAddress.schema,
      signature: scVal.ScVal.schema,
      nestedDelegates: jsXdr.array(
        jsXdr.lazy(() => SorobanDelegateSignature.schema),
        jsXdr.UNBOUNDED_MAX_LENGTH
      )
    }
  );
  constructor(input) {
    super();
    this.address = input.address;
    this.signature = input.signature;
    this.nestedDelegates = input.nestedDelegates;
  }
  toXdrObject() {
    return {
      address: this.address.toXdrObject(),
      signature: this.signature.toXdrObject(),
      nestedDelegates: this.nestedDelegates.map((v) => v.toXdrObject())
    };
  }
  static fromXdrObject(wire) {
    return new SorobanDelegateSignature({
      address: scAddress.ScAddress.fromXdrObject(wire.address),
      signature: scVal.ScVal.fromXdrObject(wire.signature),
      nestedDelegates: wire.nestedDelegates.map(
        (w) => SorobanDelegateSignature.fromXdrObject(w)
      )
    });
  }
}

exports.SorobanDelegateSignature = SorobanDelegateSignature;
//# sourceMappingURL=soroban-delegate-signature.js.map
