'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');

class ConfigSettingContractLedgerCostExtV0 extends xdrValue.XdrValue {
  txMaxFootprintEntries;
  feeWrite1Kb;
  static schema = jsXdr.struct("ConfigSettingContractLedgerCostExtV0", {
    txMaxFootprintEntries: jsXdr.uint32(),
    feeWrite1Kb: jsXdr.int64()
  });
  constructor(input) {
    super();
    this.txMaxFootprintEntries = input.txMaxFootprintEntries;
    this.feeWrite1Kb = input.feeWrite1Kb;
  }
  toXdrObject() {
    return {
      txMaxFootprintEntries: this.txMaxFootprintEntries,
      feeWrite1Kb: this.feeWrite1Kb
    };
  }
  static fromXdrObject(wire) {
    return new ConfigSettingContractLedgerCostExtV0({
      txMaxFootprintEntries: wire.txMaxFootprintEntries,
      feeWrite1Kb: wire.feeWrite1Kb
    });
  }
}

exports.ConfigSettingContractLedgerCostExtV0 = ConfigSettingContractLedgerCostExtV0;
//# sourceMappingURL=config-setting-contract-ledger-cost-ext-v0.js.map
