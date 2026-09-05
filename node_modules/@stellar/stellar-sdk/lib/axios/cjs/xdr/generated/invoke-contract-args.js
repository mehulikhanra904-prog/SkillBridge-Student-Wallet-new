'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var xdrString = require('../values/xdr-string.js');
var scAddress = require('./sc-address.js');
var scVal = require('./sc-val.js');

class InvokeContractArgs extends xdrValue.XdrValue {
  contractAddress;
  functionName;
  args;
  static schema = jsXdr.struct(
    "InvokeContractArgs",
    {
      contractAddress: scAddress.ScAddress.schema,
      functionName: xdrString.xdrString(32),
      args: jsXdr.array(scVal.ScVal.schema, jsXdr.UNBOUNDED_MAX_LENGTH)
    }
  );
  constructor(input) {
    super();
    this.contractAddress = input.contractAddress;
    this.functionName = input.functionName instanceof xdrString.XdrString ? input.functionName : new xdrString.XdrString(input.functionName);
    this.args = input.args;
  }
  toXdrObject() {
    return {
      contractAddress: this.contractAddress.toXdrObject(),
      functionName: this.functionName,
      args: this.args.map((v) => v.toXdrObject())
    };
  }
  static fromXdrObject(wire) {
    return new InvokeContractArgs({
      contractAddress: scAddress.ScAddress.fromXdrObject(wire.contractAddress),
      functionName: wire.functionName,
      args: wire.args.map((w) => scVal.ScVal.fromXdrObject(w))
    });
  }
}

exports.InvokeContractArgs = InvokeContractArgs;
//# sourceMappingURL=invoke-contract-args.js.map
