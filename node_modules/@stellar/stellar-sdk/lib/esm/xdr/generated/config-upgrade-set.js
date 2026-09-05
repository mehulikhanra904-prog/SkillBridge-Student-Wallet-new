import { struct, array, UNBOUNDED_MAX_LENGTH } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { ConfigSettingEntry } from './config-setting-entry.js';

class ConfigUpgradeSet extends XdrValue {
  updatedEntry;
  static schema = struct(
    "ConfigUpgradeSet",
    {
      updatedEntry: array(ConfigSettingEntry.schema, UNBOUNDED_MAX_LENGTH)
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
        (w) => ConfigSettingEntry.fromXdrObject(w)
      )
    });
  }
}

export { ConfigUpgradeSet };
//# sourceMappingURL=config-upgrade-set.js.map
