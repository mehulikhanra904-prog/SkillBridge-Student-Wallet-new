'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');

class ConfigSettingContractBandwidthV0 extends xdrValue.XdrValue {
  ledgerMaxTxsSizeBytes;
  txMaxSizeBytes;
  feeTxSize1Kb;
  static schema = jsXdr.struct("ConfigSettingContractBandwidthV0", {
    ledgerMaxTxsSizeBytes: jsXdr.uint32(),
    txMaxSizeBytes: jsXdr.uint32(),
    feeTxSize1Kb: jsXdr.int64()
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

exports.ConfigSettingContractBandwidthV0 = ConfigSettingContractBandwidthV0;
//# sourceMappingURL=config-setting-contract-bandwidth-v0.js.map
