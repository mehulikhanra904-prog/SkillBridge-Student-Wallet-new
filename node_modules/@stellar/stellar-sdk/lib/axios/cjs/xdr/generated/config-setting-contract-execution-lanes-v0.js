'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');

class ConfigSettingContractExecutionLanesV0 extends xdrValue.XdrValue {
  ledgerMaxTxCount;
  static schema = jsXdr.struct("ConfigSettingContractExecutionLanesV0", {
    ledgerMaxTxCount: jsXdr.uint32()
  });
  constructor(input) {
    super();
    this.ledgerMaxTxCount = input.ledgerMaxTxCount;
  }
  toXdrObject() {
    return {
      ledgerMaxTxCount: this.ledgerMaxTxCount
    };
  }
  static fromXdrObject(wire) {
    return new ConfigSettingContractExecutionLanesV0({
      ledgerMaxTxCount: wire.ledgerMaxTxCount
    });
  }
}

exports.ConfigSettingContractExecutionLanesV0 = ConfigSettingContractExecutionLanesV0;
//# sourceMappingURL=config-setting-contract-execution-lanes-v0.js.map
