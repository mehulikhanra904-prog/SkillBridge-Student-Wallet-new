import { struct, uint32 } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { LedgerEntryData } from './ledger-entry-data.js';
import { LedgerEntryExt } from './ledger-entry-ext.js';

class LedgerEntry extends XdrValue {
  lastModifiedLedgerSeq;
  data;
  ext;
  static schema = struct("LedgerEntry", {
    lastModifiedLedgerSeq: uint32(),
    data: LedgerEntryData.schema,
    ext: LedgerEntryExt.schema
  });
  constructor(input) {
    super();
    this.lastModifiedLedgerSeq = input.lastModifiedLedgerSeq;
    this.data = input.data;
    this.ext = input.ext;
  }
  toXdrObject() {
    return {
      lastModifiedLedgerSeq: this.lastModifiedLedgerSeq,
      data: this.data.toXdrObject(),
      ext: this.ext.toXdrObject()
    };
  }
  static fromXdrObject(wire) {
    return new LedgerEntry({
      lastModifiedLedgerSeq: wire.lastModifiedLedgerSeq,
      data: LedgerEntryData.fromXdrObject(wire.data),
      ext: LedgerEntryExt.fromXdrObject(wire.ext)
    });
  }
}

export { LedgerEntry };
//# sourceMappingURL=ledger-entry.js.map
