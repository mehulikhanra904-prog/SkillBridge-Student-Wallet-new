'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');

class ConfigSettingContractParallelComputeV0 extends xdrValue.XdrValue {
  ledgerMaxDependentTxClusters;
  static schema = jsXdr.struct("ConfigSettingContractParallelComputeV0", {
    ledgerMaxDependentTxClusters: jsXdr.uint32()
  });
  constructor(input) {
    super();
    this.ledgerMaxDependentTxClusters = input.ledgerMaxDependentTxClusters;
  }
  toXdrObject() {
    return {
      ledgerMaxDependentTxClusters: this.ledgerMaxDependentTxClusters
    };
  }
  static fromXdrObject(wire) {
    return new ConfigSettingContractParallelComputeV0({
      ledgerMaxDependentTxClusters: wire.ledgerMaxDependentTxClusters
    });
  }
}

exports.ConfigSettingContractParallelComputeV0 = ConfigSettingContractParallelComputeV0;
//# sourceMappingURL=config-setting-contract-parallel-compute-v0.js.map
