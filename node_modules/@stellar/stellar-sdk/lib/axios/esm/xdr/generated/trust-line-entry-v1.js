import { struct } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { Liabilities } from './liabilities.js';
import { TrustLineEntryV1Ext } from './trust-line-entry-v1-ext.js';

class TrustLineEntryV1 extends XdrValue {
  liabilities;
  ext;
  static schema = struct(
    "TrustLineEntryV1",
    {
      liabilities: Liabilities.schema,
      ext: TrustLineEntryV1Ext.schema
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
    return new TrustLineEntryV1({
      liabilities: Liabilities.fromXdrObject(wire.liabilities),
      ext: TrustLineEntryV1Ext.fromXdrObject(wire.ext)
    });
  }
}

export { TrustLineEntryV1 };
//# sourceMappingURL=trust-line-entry-v1.js.map
