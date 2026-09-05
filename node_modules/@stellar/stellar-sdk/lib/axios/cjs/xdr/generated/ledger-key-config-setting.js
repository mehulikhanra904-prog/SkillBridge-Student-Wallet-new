'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var configSettingId = require('./config-setting-id.js');

class LedgerKeyConfigSetting extends xdrValue.XdrValue {
  configSettingId;
  static schema = jsXdr.struct(
    "LedgerKeyConfigSetting",
    {
      configSettingId: configSettingId.ConfigSettingId.schema
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
      configSettingId: configSettingId.ConfigSettingId.fromXdrObject(wire.configSettingId)
    });
  }
}

exports.LedgerKeyConfigSetting = LedgerKeyConfigSetting;
//# sourceMappingURL=ledger-key-config-setting.js.map
