'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var contractId = require('./contract-id.js');
var hash = require('./hash.js');

class ConfigUpgradeSetKey extends xdrValue.XdrValue {
  contractId;
  contentHash;
  static schema = jsXdr.struct(
    "ConfigUpgradeSetKey",
    {
      contractId: contractId.ContractId.schema,
      contentHash: hash.Hash.schema
    }
  );
  constructor(input) {
    super();
    this.contractId = input.contractId;
    this.contentHash = input.contentHash instanceof hash.Hash ? input.contentHash : new hash.Hash(input.contentHash);
  }
  toXdrObject() {
    return {
      contractId: this.contractId.toXdrObject(),
      contentHash: this.contentHash.toXdrObject()
    };
  }
  static fromXdrObject(wire) {
    return new ConfigUpgradeSetKey({
      contractId: contractId.ContractId.fromXdrObject(wire.contractId),
      contentHash: hash.Hash.fromXdrObject(wire.contentHash)
    });
  }
}

exports.ConfigUpgradeSetKey = ConfigUpgradeSetKey;
//# sourceMappingURL=config-upgrade-set-key.js.map
