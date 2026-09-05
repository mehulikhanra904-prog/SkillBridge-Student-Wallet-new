'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var scAddress = require('./sc-address.js');
var uint256Bytes = require('./uint256-bytes.js');

class ContractIdPreimageFromAddress extends xdrValue.XdrValue {
  address;
  salt;
  static schema = jsXdr.struct(
    "ContractIdPreimageFromAddress",
    {
      address: scAddress.ScAddress.schema,
      salt: uint256Bytes.Uint256Bytes.schema
    }
  );
  constructor(input) {
    super();
    this.address = input.address;
    this.salt = input.salt instanceof uint256Bytes.Uint256Bytes ? input.salt : new uint256Bytes.Uint256Bytes(input.salt);
  }
  toXdrObject() {
    return {
      address: this.address.toXdrObject(),
      salt: this.salt.toXdrObject()
    };
  }
  static fromXdrObject(wire) {
    return new ContractIdPreimageFromAddress({
      address: scAddress.ScAddress.fromXdrObject(wire.address),
      salt: uint256Bytes.Uint256Bytes.fromXdrObject(wire.salt)
    });
  }
}

exports.ContractIdPreimageFromAddress = ContractIdPreimageFromAddress;
//# sourceMappingURL=contract-id-preimage-from-address.js.map
