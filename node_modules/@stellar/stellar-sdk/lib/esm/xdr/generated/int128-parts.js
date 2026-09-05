import { struct, uint64, int64 } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';

class Int128Parts extends XdrValue {
  hi;
  lo;
  static schema = struct("Int128Parts", {
    hi: int64(),
    lo: uint64()
  });
  constructor(input) {
    super();
    this.hi = input.hi;
    this.lo = input.lo;
  }
  toXdrObject() {
    return {
      hi: this.hi,
      lo: this.lo
    };
  }
  static fromXdrObject(wire) {
    return new Int128Parts({
      hi: wire.hi,
      lo: wire.lo
    });
  }
}

export { Int128Parts };
//# sourceMappingURL=int128-parts.js.map
