import { struct, int32 } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { TrustLineEntryExtensionV2Ext } from './trust-line-entry-extension-v2-ext.js';

class TrustLineEntryExtensionV2 extends XdrValue {
  liquidityPoolUseCount;
  ext;
  static schema = struct(
    "TrustLineEntryExtensionV2",
    {
      liquidityPoolUseCount: int32(),
      ext: TrustLineEntryExtensionV2Ext.schema
    }
  );
  constructor(input) {
    super();
    this.liquidityPoolUseCount = input.liquidityPoolUseCount;
    this.ext = input.ext;
  }
  toXdrObject() {
    return {
      liquidityPoolUseCount: this.liquidityPoolUseCount,
      ext: this.ext.toXdrObject()
    };
  }
  static fromXdrObject(wire) {
    return new TrustLineEntryExtensionV2({
      liquidityPoolUseCount: wire.liquidityPoolUseCount,
      ext: TrustLineEntryExtensionV2Ext.fromXdrObject(wire.ext)
    });
  }
}

export { TrustLineEntryExtensionV2 };
//# sourceMappingURL=trust-line-entry-extension-v2.js.map
