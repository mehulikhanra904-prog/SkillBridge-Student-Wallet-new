import { struct, uint32 } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { SignerKey as SignerKey$1 } from './signer-key.js';

class Signer extends XdrValue {
  key;
  weight;
  static schema = struct("Signer", {
    key: SignerKey$1.schema,
    weight: uint32()
  });
  constructor(input) {
    super();
    this.key = input.key;
    this.weight = input.weight;
  }
  toXdrObject() {
    return {
      key: this.key.toXdrObject(),
      weight: this.weight
    };
  }
  static fromXdrObject(wire) {
    return new Signer({
      key: SignerKey$1.fromXdrObject(wire.key),
      weight: wire.weight
    });
  }
}

export { Signer };
//# sourceMappingURL=signer.js.map
