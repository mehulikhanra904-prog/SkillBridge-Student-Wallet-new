import { struct, array } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { Hash } from './hash.js';

class FloodAdvert extends XdrValue {
  txHashes;
  static schema = struct("FloodAdvert", {
    txHashes: array(Hash.schema, 1e3)
  });
  constructor(input) {
    super();
    this.txHashes = input.txHashes;
  }
  toXdrObject() {
    return {
      txHashes: this.txHashes.map((v) => v.toXdrObject())
    };
  }
  static fromXdrObject(wire) {
    return new FloodAdvert({
      txHashes: wire.txHashes.map((w) => Hash.fromXdrObject(w))
    });
  }
}

export { FloodAdvert };
//# sourceMappingURL=flood-advert.js.map
