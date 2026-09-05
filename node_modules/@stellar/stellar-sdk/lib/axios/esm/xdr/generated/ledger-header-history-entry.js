import { struct } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { Hash } from './hash.js';
import { LedgerHeader } from './ledger-header.js';
import { LedgerHeaderHistoryEntryExt } from './ledger-header-history-entry-ext.js';

class LedgerHeaderHistoryEntry extends XdrValue {
  hash;
  header;
  ext;
  static schema = struct(
    "LedgerHeaderHistoryEntry",
    {
      hash: Hash.schema,
      header: LedgerHeader.schema,
      ext: LedgerHeaderHistoryEntryExt.schema
    }
  );
  constructor(input) {
    super();
    this.hash = input.hash instanceof Hash ? input.hash : new Hash(input.hash);
    this.header = input.header;
    this.ext = input.ext;
  }
  toXdrObject() {
    return {
      hash: this.hash.toXdrObject(),
      header: this.header.toXdrObject(),
      ext: this.ext.toXdrObject()
    };
  }
  static fromXdrObject(wire) {
    return new LedgerHeaderHistoryEntry({
      hash: Hash.fromXdrObject(wire.hash),
      header: LedgerHeader.fromXdrObject(wire.header),
      ext: LedgerHeaderHistoryEntryExt.fromXdrObject(wire.ext)
    });
  }
}

export { LedgerHeaderHistoryEntry };
//# sourceMappingURL=ledger-header-history-entry.js.map
