'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var hash = require('./hash.js');
var contractIdPreimage = require('./contract-id-preimage.js');

class HashIdPreimageContractId extends xdrValue.XdrValue {
  networkId;
  contractIdPreimage;
  static schema = jsXdr.struct(
    "HashIdPreimageContractId",
    {
      networkId: hash.Hash.schema,
      contractIdPreimage: contractIdPreimage.ContractIdPreimage.schema
    }
  );
  constructor(input) {
    super();
    this.networkId = input.networkId instanceof hash.Hash ? input.networkId : new hash.Hash(input.networkId);
    this.contractIdPreimage = input.contractIdPreimage;
  }
  toXdrObject() {
    return {
      networkId: this.networkId.toXdrObject(),
      contractIdPreimage: this.contractIdPreimage.toXdrObject()
    };
  }
  static fromXdrObject(wire) {
    return new HashIdPreimageContractId({
      networkId: hash.Hash.fromXdrObject(wire.networkId),
      contractIdPreimage: contractIdPreimage.ContractIdPreimage.fromXdrObject(
        wire.contractIdPreimage
      )
    });
  }
}

exports.HashIdPreimageContractId = HashIdPreimageContractId;
//# sourceMappingURL=hash-id-preimage-contract-id.js.map
