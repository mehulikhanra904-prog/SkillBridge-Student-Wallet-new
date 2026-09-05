'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var configSettingEntry = require('./config-setting-entry.js');

class ConfigUpgradeSet extends xdrValue.XdrValue {
  updatedEntry;
  static schema = jsXdr.struct(
    "ConfigUpgradeSet",
    {
      updatedEntry: jsXdr.array(configSettingEntry.ConfigSettingEntry.schema, jsXdr.UNBOUNDED_MAX_LENGTH)
    }
  );
  constructor(input) {
    super();
    this.updatedEntry = input.updatedEntry;
  }
  toXdrObject() {
    return {
      updatedEntry: this.updatedEntry.map((v) => v.toXdrObject())
    };
  }
  static fromXdrObject(wire) {
    return new ConfigUpgradeSet({
      updatedEntry: wire.updatedEntry.map(
        (w) => configSettingEntry.ConfigSettingEntry.fromXdrObject(w)
      )
    });
  }
}

exports.ConfigUpgradeSet = ConfigUpgradeSet;
//# sourceMappingURL=config-upgrade-set.js.map
