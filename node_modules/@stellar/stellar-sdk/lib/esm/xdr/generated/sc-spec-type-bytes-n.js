import { struct, uint32 } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';

class ScSpecTypeBytesN extends XdrValue {
  n;
  static schema = struct(
    "ScSpecTypeBytesN",
    {
      n: uint32()
    }
  );
  constructor(input) {
    super();
    this.n = input.n;
  }
  toXdrObject() {
    return {
      n: this.n
    };
  }
  static fromXdrObject(wire) {
    return new ScSpecTypeBytesN({
      n: wire.n
    });
  }
}

export { ScSpecTypeBytesN };
//# sourceMappingURL=sc-spec-type-bytes-n.js.map
