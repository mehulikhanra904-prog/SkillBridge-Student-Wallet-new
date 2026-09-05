import { struct, int64 } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';

class ConfigSettingContractHistoricalDataV0 extends XdrValue {
  feeHistorical1Kb;
  static schema = struct("ConfigSettingContractHistoricalDataV0", {
    feeHistorical1Kb: int64()
  });
  constructor(input) {
    super();
    this.feeHistorical1Kb = input.feeHistorical1Kb;
  }
  toXdrObject() {
    return {
      feeHistorical1Kb: this.feeHistorical1Kb
    };
  }
  static fromXdrObject(wire) {
    return new ConfigSettingContractHistoricalDataV0({
      feeHistorical1Kb: wire.feeHistorical1Kb
    });
  }
}

export { ConfigSettingContractHistoricalDataV0 };
//# sourceMappingURL=config-setting-contract-historical-data-v0.js.map
