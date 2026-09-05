import { struct, int64 } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';

class ScNonceKey extends XdrValue {
  nonce;
  static schema = struct("ScNonceKey", {
    nonce: int64()
  });
  constructor(input) {
    super();
    this.nonce = input.nonce;
  }
  toXdrObject() {
    return {
      nonce: this.nonce
    };
  }
  static fromXdrObject(wire) {
    return new ScNonceKey({
      nonce: wire.nonce
    });
  }
}

export { ScNonceKey };
//# sourceMappingURL=sc-nonce-key.js.map
