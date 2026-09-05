import { struct, int64, uint32 } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';

class ConfigSettingContractLedgerCostExtV0 extends XdrValue {
  txMaxFootprintEntries;
  feeWrite1Kb;
  static schema = struct("ConfigSettingContractLedgerCostExtV0", {
    txMaxFootprintEntries: uint32(),
    feeWrite1Kb: int64()
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

export { ConfigSettingContractLedgerCostExtV0 };
//# sourceMappingURL=config-setting-contract-ledger-cost-ext-v0.js.map
