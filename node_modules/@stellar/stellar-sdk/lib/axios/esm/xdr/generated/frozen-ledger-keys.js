import { struct, array, UNBOUNDED_MAX_LENGTH } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { EncodedLedgerKey } from './encoded-ledger-key.js';

class FrozenLedgerKeys extends XdrValue {
  keys;
  static schema = struct(
    "FrozenLedgerKeys",
    {
      keys: array(EncodedLedgerKey.schema, UNBOUNDED_MAX_LENGTH)
    }
  );
  constructor(input) {
    super();
    this.keys = input.keys.map(
      (v) => v instanceof EncodedLedgerKey ? v : new EncodedLedgerKey(v)
    );
  }
  toXdrObject() {
    return {
      keys: this.keys.map((v) => v.toXdrObject())
    };
  }
  static fromXdrObject(wire) {
    return new FrozenLedgerKeys({
      keys: wire.keys.map((w) => EncodedLedgerKey.fromXdrObject(w))
    });
  }
}

export { FrozenLedgerKeys };
//# sourceMappingURL=frozen-ledger-keys.js.map
