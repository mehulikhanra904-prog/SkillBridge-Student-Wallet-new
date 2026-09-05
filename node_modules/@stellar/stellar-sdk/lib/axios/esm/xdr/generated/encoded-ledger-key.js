import { varOpaque, UNBOUNDED_MAX_LENGTH } from '@stellar/js-xdr';
import { BytesValue } from '../values/bytes-value.js';

class EncodedLedgerKey extends BytesValue {
  static encoding = "hex";
  static schema = varOpaque(UNBOUNDED_MAX_LENGTH, "EncodedLedgerKey");
  static fromXdrObject(wire) {
    return new EncodedLedgerKey(wire);
  }
}

export { EncodedLedgerKey };
//# sourceMappingURL=encoded-ledger-key.js.map
