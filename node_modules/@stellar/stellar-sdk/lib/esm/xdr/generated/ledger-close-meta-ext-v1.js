import { struct, int64 } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { ExtensionPoint } from './extension-point.js';

class LedgerCloseMetaExtV1 extends XdrValue {
  ext;
  sorobanFeeWrite1Kb;
  static schema = struct(
    "LedgerCloseMetaExtV1",
    {
      ext: ExtensionPoint.schema,
      sorobanFeeWrite1Kb: int64()
    }
  );
  constructor(input) {
    super();
    this.ext = input.ext;
    this.sorobanFeeWrite1Kb = input.sorobanFeeWrite1Kb;
  }
  toXdrObject() {
    return {
      ext: this.ext.toXdrObject(),
      sorobanFeeWrite1Kb: this.sorobanFeeWrite1Kb
    };
  }
  static fromXdrObject(wire) {
    return new LedgerCloseMetaExtV1({
      ext: ExtensionPoint.fromXdrObject(wire.ext),
      sorobanFeeWrite1Kb: wire.sorobanFeeWrite1Kb
    });
  }
}

export { LedgerCloseMetaExtV1 };
//# sourceMappingURL=ledger-close-meta-ext-v1.js.map
