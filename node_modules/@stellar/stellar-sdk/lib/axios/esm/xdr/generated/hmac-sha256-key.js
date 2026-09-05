import { struct, opaque } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';

class HmacSha256Key extends XdrValue {
  key;
  static schema = struct("HmacSha256Key", {
    key: opaque(32)
  });
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
    return new HmacSha256Key({
      key: wire.key
    });
  }
}

export { HmacSha256Key };
//# sourceMappingURL=hmac-sha256-key.js.map
