import { struct, opaque } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';

class ShortHashSeed extends XdrValue {
  seed;
  static schema = struct("ShortHashSeed", {
    seed: opaque(16)
  });
  constructor(input) {
    super();
    this.seed = input.seed;
  }
  toXdrObject() {
    return {
      seed: this.seed
    };
  }
  static fromXdrObject(wire) {
    return new ShortHashSeed({
      seed: wire.seed
    });
  }
}

export { ShortHashSeed };
//# sourceMappingURL=short-hash-seed.js.map
