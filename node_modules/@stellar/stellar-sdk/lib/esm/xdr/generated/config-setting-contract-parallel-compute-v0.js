import { struct, uint32 } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';

class ConfigSettingContractParallelComputeV0 extends XdrValue {
  ledgerMaxDependentTxClusters;
  static schema = struct("ConfigSettingContractParallelComputeV0", {
    ledgerMaxDependentTxClusters: uint32()
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

export { ConfigSettingContractParallelComputeV0 };
//# sourceMappingURL=config-setting-contract-parallel-compute-v0.js.map
