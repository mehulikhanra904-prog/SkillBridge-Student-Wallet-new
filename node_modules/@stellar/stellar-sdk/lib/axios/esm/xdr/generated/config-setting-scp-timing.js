import { struct, uint32 } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';

class ConfigSettingScpTiming extends XdrValue {
  ledgerTargetCloseTimeMilliseconds;
  nominationTimeoutInitialMilliseconds;
  nominationTimeoutIncrementMilliseconds;
  ballotTimeoutInitialMilliseconds;
  ballotTimeoutIncrementMilliseconds;
  static schema = struct(
    "ConfigSettingScpTiming",
    {
      ledgerTargetCloseTimeMilliseconds: uint32(),
      nominationTimeoutInitialMilliseconds: uint32(),
      nominationTimeoutIncrementMilliseconds: uint32(),
      ballotTimeoutInitialMilliseconds: uint32(),
      ballotTimeoutIncrementMilliseconds: uint32()
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

export { ConfigSettingScpTiming };
//# sourceMappingURL=config-setting-scp-timing.js.map
