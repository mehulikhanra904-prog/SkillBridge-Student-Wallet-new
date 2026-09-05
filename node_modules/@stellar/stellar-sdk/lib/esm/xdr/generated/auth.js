import { struct, int32 } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';

class Auth extends XdrValue {
  flags;
  static schema = struct("Auth", {
    flags: int32()
  });
  constructor(input) {
    super();
    this.flags = input.flags;
  }
  toXdrObject() {
    return {
      flags: this.flags
    };
  }
  static fromXdrObject(wire) {
    return new Auth({
      flags: wire.flags
    });
  }
}

export { Auth };
//# sourceMappingURL=auth.js.map
