'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');

class ConfigSettingScpTiming extends xdrValue.XdrValue {
  ledgerTargetCloseTimeMilliseconds;
  nominationTimeoutInitialMilliseconds;
  nominationTimeoutIncrementMilliseconds;
  ballotTimeoutInitialMilliseconds;
  ballotTimeoutIncrementMilliseconds;
  static schema = jsXdr.struct(
    "ConfigSettingScpTiming",
    {
      ledgerTargetCloseTimeMilliseconds: jsXdr.uint32(),
      nominationTimeoutInitialMilliseconds: jsXdr.uint32(),
      nominationTimeoutIncrementMilliseconds: jsXdr.uint32(),
      ballotTimeoutInitialMilliseconds: jsXdr.uint32(),
      ballotTimeoutIncrementMilliseconds: jsXdr.uint32()
    }
  );
  constructor(input) {
    super();
    this.ledgerTargetCloseTimeMilliseconds = input.ledgerTargetCloseTimeMilliseconds;
    this.nominationTimeoutInitialMilliseconds = input.nominationTimeoutInitialMilliseconds;
    this.nominationTimeoutIncrementMilliseconds = input.nominationTimeoutIncrementMilliseconds;
    this.ballotTimeoutInitialMilliseconds = input.ballotTimeoutInitialMilliseconds;
    this.ballotTimeoutIncrementMilliseconds = input.ballotTimeoutIncrementMilliseconds;
  }
  toXdrObject() {
    return {
      ledgerTargetCloseTimeMilliseconds: this.ledgerTargetCloseTimeMilliseconds,
      nominationTimeoutInitialMilliseconds: this.nominationTimeoutInitialMilliseconds,
      nominationTimeoutIncrementMilliseconds: this.nominationTimeoutIncrementMilliseconds,
      ballotTimeoutInitialMilliseconds: this.ballotTimeoutInitialMilliseconds,
      ballotTimeoutIncrementMilliseconds: this.ballotTimeoutIncrementMilliseconds
    };
  }
  static fromXdrObject(wire) {
    return new ConfigSettingScpTiming({
      ledgerTargetCloseTimeMilliseconds: wire.ledgerTargetCloseTimeMilliseconds,
      nominationTimeoutInitialMilliseconds: wire.nominationTimeoutInitialMilliseconds,
      nominationTimeoutIncrementMilliseconds: wire.nominationTimeoutIncrementMilliseconds,
      ballotTimeoutInitialMilliseconds: wire.ballotTimeoutInitialMilliseconds,
      ballotTimeoutIncrementMilliseconds: wire.ballotTimeoutIncrementMilliseconds
    });
  }
}

exports.ConfigSettingScpTiming = ConfigSettingScpTiming;
//# sourceMappingURL=config-setting-scp-timing.js.map
