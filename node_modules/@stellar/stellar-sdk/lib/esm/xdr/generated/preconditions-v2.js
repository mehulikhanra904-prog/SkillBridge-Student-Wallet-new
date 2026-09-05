import { struct, array, uint32, uint64, option, int64 } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { TimeBounds } from './time-bounds.js';
import { LedgerBounds } from './ledger-bounds.js';
import { SignerKey as SignerKey$1 } from './signer-key.js';

class PreconditionsV2 extends XdrValue {
  timeBounds;
  ledgerBounds;
  minSeqNum;
  minSeqAge;
  minSeqLedgerGap;
  extraSigners;
  static schema = struct(
    "PreconditionsV2",
    {
      timeBounds: option(TimeBounds.schema),
      ledgerBounds: option(LedgerBounds.schema),
      minSeqNum: option(int64()),
      minSeqAge: uint64(),
      minSeqLedgerGap: uint32(),
      extraSigners: array(SignerKey$1.schema, 2)
    }
  );
  constructor(input) {
    super();
    this.timeBounds = input.timeBounds;
    this.ledgerBounds = input.ledgerBounds;
    this.minSeqNum = input.minSeqNum;
    this.minSeqAge = input.minSeqAge;
    this.minSeqLedgerGap = input.minSeqLedgerGap;
    this.extraSigners = input.extraSigners;
  }
  toXdrObject() {
    return {
      timeBounds: this.timeBounds === null ? null : this.timeBounds.toXdrObject(),
      ledgerBounds: this.ledgerBounds === null ? null : this.ledgerBounds.toXdrObject(),
      minSeqNum: this.minSeqNum,
      minSeqAge: this.minSeqAge,
      minSeqLedgerGap: this.minSeqLedgerGap,
      extraSigners: this.extraSigners.map((v) => v.toXdrObject())
    };
  }
  static fromXdrObject(wire) {
    return new PreconditionsV2({
      timeBounds: wire.timeBounds === null ? null : TimeBounds.fromXdrObject(wire.timeBounds),
      ledgerBounds: wire.ledgerBounds === null ? null : LedgerBounds.fromXdrObject(wire.ledgerBounds),
      minSeqNum: wire.minSeqNum,
      minSeqAge: wire.minSeqAge,
      minSeqLedgerGap: wire.minSeqLedgerGap,
      extraSigners: wire.extraSigners.map((w) => SignerKey$1.fromXdrObject(w))
    });
  }
}

export { PreconditionsV2 };
//# sourceMappingURL=preconditions-v2.js.map
