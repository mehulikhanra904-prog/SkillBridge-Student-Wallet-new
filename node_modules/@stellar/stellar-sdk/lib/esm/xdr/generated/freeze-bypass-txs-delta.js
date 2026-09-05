import { struct, array, UNBOUNDED_MAX_LENGTH } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { Hash } from './hash.js';

class FreezeBypassTxsDelta extends XdrValue {
  addTxs;
  removeTxs;
  static schema = struct(
    "FreezeBypassTxsDelta",
    {
      addTxs: array(Hash.schema, UNBOUNDED_MAX_LENGTH),
      removeTxs: array(Hash.schema, UNBOUNDED_MAX_LENGTH)
    }
  );
  constructor(input) {
    super();
    this.addTxs = input.addTxs.map(
      (v) => v instanceof Hash ? v : new Hash(v)
    );
    this.removeTxs = input.removeTxs.map(
      (v) => v instanceof Hash ? v : new Hash(v)
    );
  }
  toXdrObject() {
    return {
      addTxs: this.addTxs.map((v) => v.toXdrObject()),
      removeTxs: this.removeTxs.map((v) => v.toXdrObject())
    };
  }
  static fromXdrObject(wire) {
    return new FreezeBypassTxsDelta({
      addTxs: wire.addTxs.map((w) => Hash.fromXdrObject(w)),
      removeTxs: wire.removeTxs.map((w) => Hash.fromXdrObject(w))
    });
  }
}

export { FreezeBypassTxsDelta };
//# sourceMappingURL=freeze-bypass-txs-delta.js.map
