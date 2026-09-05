import { struct, opaque } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';

class Curve25519Secret extends XdrValue {
  key;
  static schema = struct(
    "Curve25519Secret",
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
    return new Curve25519Secret({
      key: wire.key
    });
  }
}

export { Curve25519Secret };
//# sourceMappingURL=curve25519-secret.js.map
