'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');

class ConfigSettingContractEventsV0 extends xdrValue.XdrValue {
  txMaxContractEventsSizeBytes;
  feeContractEvents1Kb;
  static schema = jsXdr.struct(
    "ConfigSettingContractEventsV0",
    {
      txMaxContractEventsSizeBytes: jsXdr.uint32(),
      feeContractEvents1Kb: jsXdr.int64()
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

exports.ConfigSettingContractEventsV0 = ConfigSettingContractEventsV0;
//# sourceMappingURL=config-setting-contract-events-v0.js.map
