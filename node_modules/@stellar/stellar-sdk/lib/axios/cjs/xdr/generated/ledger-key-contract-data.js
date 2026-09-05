'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var scAddress = require('./sc-address.js');
var scVal = require('./sc-val.js');
var contractDataDurability = require('./contract-data-durability.js');

class LedgerKeyContractData extends xdrValue.XdrValue {
  contract;
  key;
  durability;
  static schema = jsXdr.struct(
    "LedgerKeyContractData",
    {
      contract: scAddress.ScAddress.schema,
      key: scVal.ScVal.schema,
      durability: contractDataDurability.ContractDataDurability.schema
    }
  );
  constructor(input) {
    super();
    this.contract = input.contract;
    this.key = input.key;
    this.durability = input.durability;
  }
  toXdrObject() {
    return {
      contract: this.contract.toXdrObject(),
      key: this.key.toXdrObject(),
      durability: this.durability.toXdrObject()
    };
  }
  static fromXdrObject(wire) {
    return new LedgerKeyContractData({
      contract: scAddress.ScAddress.fromXdrObject(wire.contract),
      key: scVal.ScVal.fromXdrObject(wire.key),
      durability: contractDataDurability.ContractDataDurability.fromXdrObject(wire.durability)
    });
  }
}

exports.LedgerKeyContractData = LedgerKeyContractData;
//# sourceMappingURL=ledger-key-contract-data.js.map
