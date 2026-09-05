import { struct, int64, uint32 } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';

class ConfigSettingContractEventsV0 extends XdrValue {
  txMaxContractEventsSizeBytes;
  feeContractEvents1Kb;
  static schema = struct(
    "ConfigSettingContractEventsV0",
    {
      txMaxContractEventsSizeBytes: uint32(),
      feeContractEvents1Kb: int64()
    }
  );
  constructor(input) {
    super();
    this.txMaxContractEventsSizeBytes = input.txMaxContractEventsSizeBytes;
    this.feeContractEvents1Kb = input.feeContractEvents1Kb;
  }
  toXdrObject() {
    return {
      txMaxContractEventsSizeBytes: this.txMaxContractEventsSizeBytes,
      feeContractEvents1Kb: this.feeContractEvents1Kb
    };
  }
  static fromXdrObject(wire) {
    return new ConfigSettingContractEventsV0({
      txMaxContractEventsSizeBytes: wire.txMaxContractEventsSizeBytes,
      feeContractEvents1Kb: wire.feeContractEvents1Kb
    });
  }
}

export { ConfigSettingContractEventsV0 };
//# sourceMappingURL=config-setting-contract-events-v0.js.map
