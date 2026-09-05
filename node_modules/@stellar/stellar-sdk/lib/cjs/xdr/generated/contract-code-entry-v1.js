'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var extensionPoint = require('./extension-point.js');
var contractCodeCostInputs = require('./contract-code-cost-inputs.js');

class ContractCodeEntryV1 extends xdrValue.XdrValue {
  ext;
  costInputs;
  static schema = jsXdr.struct(
    "ContractCodeEntryV1",
    {
      ext: extensionPoint.ExtensionPoint.schema,
      costInputs: contractCodeCostInputs.ContractCodeCostInputs.schema
    }
  );
  constructor(input) {
    super();
    this.ext = input.ext;
    this.costInputs = input.costInputs;
  }
  toXdrObject() {
    return {
      ext: this.ext.toXdrObject(),
      costInputs: this.costInputs.toXdrObject()
    };
  }
  static fromXdrObject(wire) {
    return new ContractCodeEntryV1({
      ext: extensionPoint.ExtensionPoint.fromXdrObject(wire.ext),
      costInputs: contractCodeCostInputs.ContractCodeCostInputs.fromXdrObject(wire.costInputs)
    });
  }
}

exports.ContractCodeEntryV1 = ContractCodeEntryV1;
//# sourceMappingURL=contract-code-entry-v1.js.map
