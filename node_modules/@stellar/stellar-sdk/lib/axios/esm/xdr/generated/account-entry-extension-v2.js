import { struct, array, option, uint32 } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { PublicKey } from './public-key.js';
import { AccountEntryExtensionV2Ext } from './account-entry-extension-v2-ext.js';

class AccountEntryExtensionV2 extends XdrValue {
  numSponsored;
  numSponsoring;
  signerSponsoringIDs;
  ext;
  static schema = struct(
    "AccountEntryExtensionV2",
    {
      numSponsored: uint32(),
      numSponsoring: uint32(),
      signerSponsoringIDs: array(option(PublicKey.schema), 20),
      ext: AccountEntryExtensionV2Ext.schema
    }
  );
  constructor(input) {
    super();
    this.numSponsored = input.numSponsored;
    this.numSponsoring = input.numSponsoring;
    this.signerSponsoringIDs = input.signerSponsoringIDs;
    this.ext = input.ext;
  }
  toXdrObject() {
    return {
      numSponsored: this.numSponsored,
      numSponsoring: this.numSponsoring,
      signerSponsoringIDs: this.signerSponsoringIDs.map(
        (v) => v === null ? null : v.toXdrObject()
      ),
      ext: this.ext.toXdrObject()
    };
  }
  static fromXdrObject(wire) {
    return new AccountEntryExtensionV2({
      numSponsored: wire.numSponsored,
      numSponsoring: wire.numSponsoring,
      signerSponsoringIDs: wire.signerSponsoringIDs.map(
        (w) => w === null ? null : PublicKey.fromXdrObject(w)
      ),
      ext: AccountEntryExtensionV2Ext.fromXdrObject(wire.ext)
    });
  }
}

export { AccountEntryExtensionV2 };
//# sourceMappingURL=account-entry-extension-v2.js.map
