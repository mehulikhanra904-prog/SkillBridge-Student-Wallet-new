'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var extensionPoint = require('./extension-point.js');
var scAddress = require('./sc-address.js');
var scVal = require('./sc-val.js');
var contractDataDurability = require('./contract-data-durability.js');

class ContractDataEntry extends xdrValue.XdrValue {
  ext;
  contract;
  key;
  durability;
  val;
  static schema = jsXdr.struct(
    "ContractDataEntry",
    {
      ext: extensionPoint.ExtensionPoint.schema,
      contract: scAddress.ScAddress.schema,
      key: scVal.ScVal.schema,
      durability: contractDataDurability.ContractDataDurability.schema,
      val: scVal.ScVal.schema
    }
  );
  constructor(input) {
    super();
    this.ext = input.ext;
    this.contract = input.contract;
    this.key = input.key;
    this.durability = input.durability;
    this.val = input.val;
  }
  toXdrObject() {
    return {
      ext: this.ext.toXdrObject(),
      contract: this.contract.toXdrObject(),
      key: this.key.toXdrObject(),
      durability: this.durability.toXdrObject(),
      val: this.val.toXdrObject()
    };
  }
  static fromXdrObject(wire) {
    return new ContractDataEntry({
      ext: extensionPoint.ExtensionPoint.fromXdrObject(wire.ext),
      contract: scAddress.ScAddress.fromXdrObject(wire.contract),
      key: scVal.ScVal.fromXdrObject(wire.key),
      durability: contractDataDurability.ContractDataDurability.fromXdrObject(wire.durability),
      val: scVal.ScVal.fromXdrObject(wire.val)
    });
  }
}

exports.ContractDataEntry = ContractDataEntry;
//# sourceMappingURL=contract-data-entry.js.map
