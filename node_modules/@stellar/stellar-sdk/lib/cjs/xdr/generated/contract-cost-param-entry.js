'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var extensionPoint = require('./extension-point.js');

class ContractCostParamEntry extends xdrValue.XdrValue {
  ext;
  constTerm;
  linearTerm;
  static schema = jsXdr.struct(
    "ContractCostParamEntry",
    {
      ext: extensionPoint.ExtensionPoint.schema,
      constTerm: jsXdr.int64(),
      linearTerm: jsXdr.int64()
    }
  );
  constructor(input) {
    super();
    this.ext = input.ext;
    this.constTerm = input.constTerm;
    this.linearTerm = input.linearTerm;
  }
  toXdrObject() {
    return {
      ext: this.ext.toXdrObject(),
      constTerm: this.constTerm,
      linearTerm: this.linearTerm
    };
  }
  static fromXdrObject(wire) {
    return new ContractCostParamEntry({
      ext: extensionPoint.ExtensionPoint.fromXdrObject(wire.ext),
      constTerm: wire.constTerm,
      linearTerm: wire.linearTerm
    });
  }
}

exports.ContractCostParamEntry = ContractCostParamEntry;
//# sourceMappingURL=contract-cost-param-entry.js.map
