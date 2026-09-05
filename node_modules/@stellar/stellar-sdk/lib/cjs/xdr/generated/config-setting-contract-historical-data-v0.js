'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');

class ConfigSettingContractHistoricalDataV0 extends xdrValue.XdrValue {
  feeHistorical1Kb;
  static schema = jsXdr.struct("ConfigSettingContractHistoricalDataV0", {
    feeHistorical1Kb: jsXdr.int64()
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

exports.ConfigSettingContractHistoricalDataV0 = ConfigSettingContractHistoricalDataV0;
//# sourceMappingURL=config-setting-contract-historical-data-v0.js.map
