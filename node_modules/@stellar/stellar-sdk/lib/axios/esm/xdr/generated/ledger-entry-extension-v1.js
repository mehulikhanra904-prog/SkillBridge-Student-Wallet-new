import { struct, option } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { PublicKey } from './public-key.js';
import { LedgerEntryExtensionV1Ext } from './ledger-entry-extension-v1-ext.js';

class LedgerEntryExtensionV1 extends XdrValue {
  sponsoringId;
  ext;
  static schema = struct(
    "LedgerEntryExtensionV1",
    {
      sponsoringId: option(PublicKey.schema),
      ext: LedgerEntryExtensionV1Ext.schema
    }
  );
  constructor(input) {
    super();
    this.sponsoringId = input.sponsoringId;
    this.ext = input.ext;
  }
  toXdrObject() {
    return {
      sponsoringId: this.sponsoringId === null ? null : this.sponsoringId.toXdrObject(),
      ext: this.ext.toXdrObject()
    };
  }
  static fromXdrObject(wire) {
    return new LedgerEntryExtensionV1({
      sponsoringId: wire.sponsoringId === null ? null : PublicKey.fromXdrObject(wire.sponsoringId),
      ext: LedgerEntryExtensionV1Ext.fromXdrObject(wire.ext)
    });
  }
}

export { LedgerEntryExtensionV1 };
//# sourceMappingURL=ledger-entry-extension-v1.js.map
