'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');

class ConfigSettingContractComputeV0 extends xdrValue.XdrValue {
  ledgerMaxInstructions;
  txMaxInstructions;
  feeRatePerInstructionsIncrement;
  txMemoryLimit;
  static schema = jsXdr.struct(
    "ConfigSettingContractComputeV0",
    {
      ledgerMaxInstructions: jsXdr.int64(),
      txMaxInstructions: jsXdr.int64(),
      feeRatePerInstructionsIncrement: jsXdr.int64(),
      txMemoryLimit: jsXdr.uint32()
    }
  );
  constructor(input) {
    super();
    this.ledgerMaxInstructions = input.ledgerMaxInstructions;
    this.txMaxInstructions = input.txMaxInstructions;
    this.feeRatePerInstructionsIncrement = input.feeRatePerInstructionsIncrement;
    this.txMemoryLimit = input.txMemoryLimit;
  }
  toXdrObject() {
    return {
      ledgerMaxInstructions: this.ledgerMaxInstructions,
      txMaxInstructions: this.txMaxInstructions,
      feeRatePerInstructionsIncrement: this.feeRatePerInstructionsIncrement,
      txMemoryLimit: this.txMemoryLimit
    };
  }
  static fromXdrObject(wire) {
    return new ConfigSettingContractComputeV0({
      ledgerMaxInstructions: wire.ledgerMaxInstructions,
      txMaxInstructions: wire.txMaxInstructions,
      feeRatePerInstructionsIncrement: wire.feeRatePerInstructionsIncrement,
      txMemoryLimit: wire.txMemoryLimit
    });
  }
}

exports.ConfigSettingContractComputeV0 = ConfigSettingContractComputeV0;
//# sourceMappingURL=config-setting-contract-compute-v0.js.map
