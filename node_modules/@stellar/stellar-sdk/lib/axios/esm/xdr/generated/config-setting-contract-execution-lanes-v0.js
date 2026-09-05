import { struct, uint32 } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';

class ConfigSettingContractExecutionLanesV0 extends XdrValue {
  ledgerMaxTxCount;
  static schema = struct("ConfigSettingContractExecutionLanesV0", {
    ledgerMaxTxCount: uint32()
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

export { ConfigSettingContractExecutionLanesV0 };
//# sourceMappingURL=config-setting-contract-execution-lanes-v0.js.map
