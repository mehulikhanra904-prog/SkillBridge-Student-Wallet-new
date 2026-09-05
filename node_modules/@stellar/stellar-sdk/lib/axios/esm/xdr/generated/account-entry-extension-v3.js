import { struct, uint64, uint32 } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { ExtensionPoint } from './extension-point.js';

class AccountEntryExtensionV3 extends XdrValue {
  ext;
  seqLedger;
  seqTime;
  static schema = struct(
    "AccountEntryExtensionV3",
    {
      ext: ExtensionPoint.schema,
      seqLedger: uint32(),
      seqTime: uint64()
    }
  );
  constructor(input) {
    super();
    this.ext = input.ext;
    this.seqLedger = input.seqLedger;
    this.seqTime = input.seqTime;
  }
  toXdrObject() {
    return {
      ext: this.ext.toXdrObject(),
      seqLedger: this.seqLedger,
      seqTime: this.seqTime
    };
  }
  static fromXdrObject(wire) {
    return new AccountEntryExtensionV3({
      ext: ExtensionPoint.fromXdrObject(wire.ext),
      seqLedger: wire.seqLedger,
      seqTime: wire.seqTime
    });
  }
}

export { AccountEntryExtensionV3 };
//# sourceMappingURL=account-entry-extension-v3.js.map
