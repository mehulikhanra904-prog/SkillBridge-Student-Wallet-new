import { struct } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { Hash } from './hash.js';

class LedgerKeyTtl extends XdrValue {
  keyHash;
  static schema = struct("LedgerKeyTtl", {
    keyHash: Hash.schema
  });
  constructor(input) {
    super();
    this.keyHash = input.keyHash instanceof Hash ? input.keyHash : new Hash(input.keyHash);
  }
  toXdrObject() {
    return {
      keyHash: this.keyHash.toXdrObject()
    };
  }
  static fromXdrObject(wire) {
    return new LedgerKeyTtl({
      keyHash: Hash.fromXdrObject(wire.keyHash)
    });
  }
}

export { LedgerKeyTtl };
//# sourceMappingURL=ledger-key-ttl.js.map
