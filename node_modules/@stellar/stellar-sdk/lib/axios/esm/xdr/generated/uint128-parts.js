import { struct, uint64 } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';

class Uint128Parts extends XdrValue {
  hi;
  lo;
  static schema = struct("Uint128Parts", {
    hi: uint64(),
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
    return new Uint128Parts({
      hi: wire.hi,
      lo: wire.lo
    });
  }
}

export { Uint128Parts };
//# sourceMappingURL=uint128-parts.js.map
