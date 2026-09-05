import { struct, opaque } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';

class Curve25519Public extends XdrValue {
  key;
  static schema = struct(
    "Curve25519Public",
    {
      key: opaque(32)
    }
  );
  constructor(input) {
    super();
    this.key = input.key;
  }
  toXdrObject() {
    return {
      key: this.key
    };
  }
  static fromXdrObject(wire) {
    return new Curve25519Public({
      key: wire.key
    });
  }
}

export { Curve25519Public };
//# sourceMappingURL=curve25519-public.js.map
