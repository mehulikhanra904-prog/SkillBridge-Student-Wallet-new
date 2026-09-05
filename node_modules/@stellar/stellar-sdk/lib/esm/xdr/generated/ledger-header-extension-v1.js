import { struct, uint32 } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { LedgerHeaderExtensionV1Ext } from './ledger-header-extension-v1-ext.js';

class LedgerHeaderExtensionV1 extends XdrValue {
  flags;
  ext;
  static schema = struct(
    "LedgerHeaderExtensionV1",
    {
      flags: uint32(),
      ext: LedgerHeaderExtensionV1Ext.schema
    }
  );
  constructor(input) {
    super();
    this.flags = input.flags;
    this.ext = input.ext;
  }
  toXdrObject() {
    return {
      flags: this.flags,
      ext: this.ext.toXdrObject()
    };
  }
  static fromXdrObject(wire) {
    return new LedgerHeaderExtensionV1({
      flags: wire.flags,
      ext: LedgerHeaderExtensionV1Ext.fromXdrObject(wire.ext)
    });
  }
}

export { LedgerHeaderExtensionV1 };
//# sourceMappingURL=ledger-header-extension-v1.js.map
