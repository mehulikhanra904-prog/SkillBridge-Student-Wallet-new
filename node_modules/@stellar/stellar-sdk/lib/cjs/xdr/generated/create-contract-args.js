'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var contractIdPreimage = require('./contract-id-preimage.js');
var contractExecutable = require('./contract-executable.js');

class CreateContractArgs extends xdrValue.XdrValue {
  contractIdPreimage;
  executable;
  static schema = jsXdr.struct(
    "CreateContractArgs",
    {
      contractIdPreimage: contractIdPreimage.ContractIdPreimage.schema,
      executable: contractExecutable.ContractExecutable.schema
    }
  );
  constructor(input) {
    super();
    this.contractIdPreimage = input.contractIdPreimage;
    this.executable = input.executable;
  }
  toXdrObject() {
    return {
      contractIdPreimage: this.contractIdPreimage.toXdrObject(),
      executable: this.executable.toXdrObject()
    };
  }
  static fromXdrObject(wire) {
    return new CreateContractArgs({
      contractIdPreimage: contractIdPreimage.ContractIdPreimage.fromXdrObject(
        wire.contractIdPreimage
      ),
      executable: contractExecutable.ContractExecutable.fromXdrObject(wire.executable)
    });
  }
}

exports.CreateContractArgs = CreateContractArgs;
//# sourceMappingURL=create-contract-args.js.map
