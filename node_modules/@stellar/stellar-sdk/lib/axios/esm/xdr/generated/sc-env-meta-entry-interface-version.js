import { struct, uint32 } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';

class ScEnvMetaEntryInterfaceVersion extends XdrValue {
  protocol;
  preRelease;
  static schema = struct(
    "ScEnvMetaEntryInterfaceVersion",
    {
      protocol: uint32(),
      preRelease: uint32()
    }
  );
  constructor(input) {
    super();
    this.protocol = input.protocol;
    this.preRelease = input.preRelease;
  }
  toXdrObject() {
    return {
      protocol: this.protocol,
      preRelease: this.preRelease
    };
  }
  static fromXdrObject(wire) {
    return new ScEnvMetaEntryInterfaceVersion({
      protocol: wire.protocol,
      preRelease: wire.preRelease
    });
  }
}

export { ScEnvMetaEntryInterfaceVersion };
//# sourceMappingURL=sc-env-meta-entry-interface-version.js.map
