import { struct } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { ConfigSettingId } from './config-setting-id.js';

class LedgerKeyConfigSetting extends XdrValue {
  configSettingId;
  static schema = struct(
    "LedgerKeyConfigSetting",
    {
      configSettingId: ConfigSettingId.schema
    }
  );
  constructor(input) {
    super();
    this.configSettingId = input.configSettingId;
  }
  toXdrObject() {
    return {
      configSettingId: this.configSettingId.toXdrObject()
    };
  }
  static fromXdrObject(wire) {
    return new LedgerKeyConfigSetting({
      configSettingId: ConfigSettingId.fromXdrObject(wire.configSettingId)
    });
  }
}

export { LedgerKeyConfigSetting };
//# sourceMappingURL=ledger-key-config-setting.js.map
