import { struct, int64 } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';

class BumpSequenceOp extends XdrValue {
  bumpTo;
  static schema = struct(
    "BumpSequenceOp",
    {
      bumpTo: int64()
    }
  );
  constructor(input) {
    super();
    this.bumpTo = input.bumpTo;
  }
  toXdrObject() {
    return {
      bumpTo: this.bumpTo
    };
  }
  static fromXdrObject(wire) {
    return new BumpSequenceOp({
      bumpTo: wire.bumpTo
    });
  }
}

export { BumpSequenceOp };
//# sourceMappingURL=bump-sequence-op.js.map
