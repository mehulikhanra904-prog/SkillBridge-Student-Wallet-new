import { struct, uint32, int64 } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';

class ConfigSettingContractComputeV0 extends XdrValue {
  ledgerMaxInstructions;
  txMaxInstructions;
  feeRatePerInstructionsIncrement;
  txMemoryLimit;
  static schema = struct(
    "ConfigSettingContractComputeV0",
    {
      ledgerMaxInstructions: int64(),
      txMaxInstructions: int64(),
      feeRatePerInstructionsIncrement: int64(),
      txMemoryLimit: uint32()
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

export { ConfigSettingContractComputeV0 };
//# sourceMappingURL=config-setting-contract-compute-v0.js.map
