'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var contractIdPreimage = require('./contract-id-preimage.js');
var contractExecutable = require('./contract-executable.js');
var scVal = require('./sc-val.js');

class CreateContractArgsV2 extends xdrValue.XdrValue {
  contractIdPreimage;
  executable;
  constructorArgs;
  static schema = jsXdr.struct(
    "CreateContractArgsV2",
    {
      contractIdPreimage: contractIdPreimage.ContractIdPreimage.schema,
      executable: contractExecutable.ContractExecutable.schema,
      constructorArgs: jsXdr.array(scVal.ScVal.schema, jsXdr.UNBOUNDED_MAX_LENGTH)
    }
  );
  constructor(input) {
    super();
    this.contractIdPreimage = input.contractIdPreimage;
    this.executable = input.executable;
    this.constructorArgs = input.constructorArgs;
  }
  toXdrObject() {
    return {
      contractIdPreimage: this.contractIdPreimage.toXdrObject(),
      executable: this.executable.toXdrObject(),
      constructorArgs: this.constructorArgs.map((v) => v.toXdrObject())
    };
  }
  static fromXdrObject(wire) {
    return new CreateContractArgsV2({
      contractIdPreimage: contractIdPreimage.ContractIdPreimage.fromXdrObject(
        wire.contractIdPreimage
      ),
      executable: contractExecutable.ContractExecutable.fromXdrObject(wire.executable),
      constructorArgs: wire.constructorArgs.map((w) => scVal.ScVal.fromXdrObject(w))
    });
  }
}

exports.CreateContractArgsV2 = CreateContractArgsV2;
//# sourceMappingURL=create-contract-args-v2.js.map
