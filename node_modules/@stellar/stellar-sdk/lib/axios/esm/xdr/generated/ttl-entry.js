import { struct, uint32 } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { Hash } from './hash.js';

class TtlEntry extends XdrValue {
  keyHash;
  liveUntilLedgerSeq;
  static schema = struct("TtlEntry", {
    keyHash: Hash.schema,
    liveUntilLedgerSeq: uint32()
  });
  constructor(input) {
    super();
    this.keyHash = input.keyHash instanceof Hash ? input.keyHash : new Hash(input.keyHash);
    this.liveUntilLedgerSeq = input.liveUntilLedgerSeq;
  }
  toXdrObject() {
    return {
      keyHash: this.keyHash.toXdrObject(),
      liveUntilLedgerSeq: this.liveUntilLedgerSeq
    };
  }
  static fromXdrObject(wire) {
    return new TtlEntry({
      keyHash: Hash.fromXdrObject(wire.keyHash),
      liveUntilLedgerSeq: wire.liveUntilLedgerSeq
    });
  }
}

export { TtlEntry };
//# sourceMappingURL=ttl-entry.js.map
