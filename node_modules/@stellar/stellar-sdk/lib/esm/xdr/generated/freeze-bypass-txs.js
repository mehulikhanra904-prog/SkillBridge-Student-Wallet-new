import { struct, array, UNBOUNDED_MAX_LENGTH } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { Hash } from './hash.js';

class FreezeBypassTxs extends XdrValue {
  txHashes;
  static schema = struct(
    "FreezeBypassTxs",
    {
      txHashes: array(Hash.schema, UNBOUNDED_MAX_LENGTH)
    }
  );
  constructor(input) {
    super();
    this.txHashes = input.txHashes.map(
      (v) => v instanceof Hash ? v : new Hash(v)
    );
  }
  toXdrObject() {
    return {
      txHashes: this.txHashes.map((v) => v.toXdrObject())
    };
  }
  static fromXdrObject(wire) {
    return new FreezeBypassTxs({
      txHashes: wire.txHashes.map((w) => Hash.fromXdrObject(w))
    });
  }
}

export { FreezeBypassTxs };
//# sourceMappingURL=freeze-bypass-txs.js.map
