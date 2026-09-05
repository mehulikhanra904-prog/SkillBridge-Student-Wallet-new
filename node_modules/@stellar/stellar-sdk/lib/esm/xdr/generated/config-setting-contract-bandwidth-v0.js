import { struct, int64, uint32 } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';

class ConfigSettingContractBandwidthV0 extends XdrValue {
  ledgerMaxTxsSizeBytes;
  txMaxSizeBytes;
  feeTxSize1Kb;
  static schema = struct("ConfigSettingContractBandwidthV0", {
    ledgerMaxTxsSizeBytes: uint32(),
    txMaxSizeBytes: uint32(),
    feeTxSize1Kb: int64()
  });
  constructor(input) {
    super();
    this.ledgerMaxTxsSizeBytes = input.ledgerMaxTxsSizeBytes;
    this.txMaxSizeBytes = input.txMaxSizeBytes;
    this.feeTxSize1Kb = input.feeTxSize1Kb;
  }
  toXdrObject() {
    return {
      ledgerMaxTxsSizeBytes: this.ledgerMaxTxsSizeBytes,
      txMaxSizeBytes: this.txMaxSizeBytes,
      feeTxSize1Kb: this.feeTxSize1Kb
    };
  }
  static fromXdrObject(wire) {
    return new ConfigSettingContractBandwidthV0({
      ledgerMaxTxsSizeBytes: wire.ledgerMaxTxsSizeBytes,
      txMaxSizeBytes: wire.txMaxSizeBytes,
      feeTxSize1Kb: wire.feeTxSize1Kb
    });
  }
}

export { ConfigSettingContractBandwidthV0 };
//# sourceMappingURL=config-setting-contract-bandwidth-v0.js.map
