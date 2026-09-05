import { struct, uint64, int64 } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';

class Int256Parts extends XdrValue {
  hiHi;
  hiLo;
  loHi;
  loLo;
  static schema = struct("Int256Parts", {
    hiHi: int64(),
    hiLo: uint64(),
    loHi: uint64(),
    loLo: uint64()
  });
  constructor(input) {
    super();
    this.hiHi = input.hiHi;
    this.hiLo = input.hiLo;
    this.loHi = input.loHi;
    this.loLo = input.loLo;
  }
  toXdrObject() {
    return {
      hiHi: this.hiHi,
      hiLo: this.hiLo,
      loHi: this.loHi,
      loLo: this.loLo
    };
  }
  static fromXdrObject(wire) {
    return new Int256Parts({
      hiHi: wire.hiHi,
      hiLo: wire.hiLo,
      loHi: wire.loHi,
      loLo: wire.loLo
    });
  }
}

export { Int256Parts };
//# sourceMappingURL=int256-parts.js.map
