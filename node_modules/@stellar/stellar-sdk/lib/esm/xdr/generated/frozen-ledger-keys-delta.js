import { struct, array, UNBOUNDED_MAX_LENGTH } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { EncodedLedgerKey } from './encoded-ledger-key.js';

class FrozenLedgerKeysDelta extends XdrValue {
  keysToFreeze;
  keysToUnfreeze;
  static schema = struct(
    "FrozenLedgerKeysDelta",
    {
      keysToFreeze: array(EncodedLedgerKey.schema, UNBOUNDED_MAX_LENGTH),
      keysToUnfreeze: array(EncodedLedgerKey.schema, UNBOUNDED_MAX_LENGTH)
    }
  );
  constructor(input) {
    super();
    this.keysToFreeze = input.keysToFreeze.map(
      (v) => v instanceof EncodedLedgerKey ? v : new EncodedLedgerKey(v)
    );
    this.keysToUnfreeze = input.keysToUnfreeze.map(
      (v) => v instanceof EncodedLedgerKey ? v : new EncodedLedgerKey(v)
    );
  }
  toXdrObject() {
    return {
      keysToFreeze: this.keysToFreeze.map((v) => v.toXdrObject()),
      keysToUnfreeze: this.keysToUnfreeze.map((v) => v.toXdrObject())
    };
  }
  static fromXdrObject(wire) {
    return new FrozenLedgerKeysDelta({
      keysToFreeze: wire.keysToFreeze.map(
        (w) => EncodedLedgerKey.fromXdrObject(w)
      ),
      keysToUnfreeze: wire.keysToUnfreeze.map(
        (w) => EncodedLedgerKey.fromXdrObject(w)
      )
    });
  }
}

export { FrozenLedgerKeysDelta };
//# sourceMappingURL=frozen-ledger-keys-delta.js.map
