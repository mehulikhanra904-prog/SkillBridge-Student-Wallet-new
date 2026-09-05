import { struct, uint32 } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { ClaimableBalanceEntryExtensionV1Ext } from './claimable-balance-entry-extension-v1-ext.js';

class ClaimableBalanceEntryExtensionV1 extends XdrValue {
  ext;
  flags;
  static schema = struct("ClaimableBalanceEntryExtensionV1", {
    ext: ClaimableBalanceEntryExtensionV1Ext.schema,
    flags: uint32()
  });
  constructor(input) {
    super();
    this.ext = input.ext;
    this.flags = input.flags;
  }
  toXdrObject() {
    return {
      ext: this.ext.toXdrObject(),
      flags: this.flags
    };
  }
  static fromXdrObject(wire) {
    return new ClaimableBalanceEntryExtensionV1({
      ext: ClaimableBalanceEntryExtensionV1Ext.fromXdrObject(wire.ext),
      flags: wire.flags
    });
  }
}

export { ClaimableBalanceEntryExtensionV1 };
//# sourceMappingURL=claimable-balance-entry-extension-v1.js.map
