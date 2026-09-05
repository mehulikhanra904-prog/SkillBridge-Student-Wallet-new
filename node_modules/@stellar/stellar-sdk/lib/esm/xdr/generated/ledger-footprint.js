import { struct, array, UNBOUNDED_MAX_LENGTH } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { LedgerKey } from './ledger-key.js';

class LedgerFootprint extends XdrValue {
  readOnly;
  readWrite;
  static schema = struct(
    "LedgerFootprint",
    {
      readOnly: array(LedgerKey.schema, UNBOUNDED_MAX_LENGTH),
      readWrite: array(LedgerKey.schema, UNBOUNDED_MAX_LENGTH)
    }
  );
  constructor(input) {
    super();
    this.readOnly = input.readOnly;
    this.readWrite = input.readWrite;
  }
  toXdrObject() {
    return {
      readOnly: this.readOnly.map((v) => v.toXdrObject()),
      readWrite: this.readWrite.map((v) => v.toXdrObject())
    };
  }
  static fromXdrObject(wire) {
    return new LedgerFootprint({
      readOnly: wire.readOnly.map((w) => LedgerKey.fromXdrObject(w)),
      readWrite: wire.readWrite.map((w) => LedgerKey.fromXdrObject(w))
    });
  }
}

export { LedgerFootprint };
//# sourceMappingURL=ledger-footprint.js.map
