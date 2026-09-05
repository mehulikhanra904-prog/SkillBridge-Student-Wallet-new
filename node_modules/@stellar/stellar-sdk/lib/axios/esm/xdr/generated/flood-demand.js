import { struct, array } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { Hash } from './hash.js';

class FloodDemand extends XdrValue {
  txHashes;
  static schema = struct("FloodDemand", {
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
    return new FloodDemand({
      txHashes: wire.txHashes.map((w) => Hash.fromXdrObject(w))
    });
  }
}

export { FloodDemand };
//# sourceMappingURL=flood-demand.js.map
