import { struct } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { Liabilities } from './liabilities.js';
import { AccountEntryExtensionV1Ext } from './account-entry-extension-v1-ext.js';

class AccountEntryExtensionV1 extends XdrValue {
  liabilities;
  ext;
  static schema = struct(
    "AccountEntryExtensionV1",
    {
      liabilities: Liabilities.schema,
      ext: AccountEntryExtensionV1Ext.schema
    }
  );
  constructor(input) {
    super();
    this.liabilities = input.liabilities;
    this.ext = input.ext;
  }
  toXdrObject() {
    return {
      liabilities: this.liabilities.toXdrObject(),
      ext: this.ext.toXdrObject()
    };
  }
  static fromXdrObject(wire) {
    return new AccountEntryExtensionV1({
      liabilities: Liabilities.fromXdrObject(wire.liabilities),
      ext: AccountEntryExtensionV1Ext.fromXdrObject(wire.ext)
    });
  }
}

export { AccountEntryExtensionV1 };
//# sourceMappingURL=account-entry-extension-v1.js.map
