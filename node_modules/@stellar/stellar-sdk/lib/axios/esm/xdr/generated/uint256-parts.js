import { struct, uint64 } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';

class Uint256Parts extends XdrValue {
  hiHi;
  hiLo;
  loHi;
  loLo;
  static schema = struct("Uint256Parts", {
    hiHi: uint64(),
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
    return new Uint256Parts({
      hiHi: wire.hiHi,
      hiLo: wire.hiLo,
      loHi: wire.loHi,
      loLo: wire.loLo
    });
  }
}

export { Uint256Parts };
//# sourceMappingURL=uint256-parts.js.map
