import { struct, opaque } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';

class HmacSha256Mac extends XdrValue {
  mac;
  static schema = struct("HmacSha256Mac", {
    mac: opaque(32)
  });
  constructor(input) {
    super();
    this.mac = input.mac;
  }
  toXdrObject() {
    return {
      mac: this.mac
    };
  }
  static fromXdrObject(wire) {
    return new HmacSha256Mac({
      mac: wire.mac
    });
  }
}

export { HmacSha256Mac };
//# sourceMappingURL=hmac-sha256-mac.js.map
