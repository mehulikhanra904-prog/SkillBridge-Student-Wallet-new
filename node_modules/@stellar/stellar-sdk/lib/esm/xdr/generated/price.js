import { struct, int32 } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';

class Price extends XdrValue {
  n;
  d;
  static schema = struct("Price", {
    n: int32(),
    d: int32()
  });
  constructor(input) {
    super();
    this.n = input.n;
    this.d = input.d;
  }
  toXdrObject() {
    return {
      n: this.n,
      d: this.d
    };
  }
  static fromXdrObject(wire) {
    return new Price({
      n: wire.n,
      d: wire.d
    });
  }
}

export { Price };
//# sourceMappingURL=price.js.map
