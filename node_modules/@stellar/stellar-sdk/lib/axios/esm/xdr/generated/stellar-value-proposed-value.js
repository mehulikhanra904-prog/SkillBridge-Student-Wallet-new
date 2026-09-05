import { struct, uint32 } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { Hash } from './hash.js';
import { LedgerCloseValueSignature } from './ledger-close-value-signature.js';

class StellarValueProposedValue extends XdrValue {
  txSetHash;
  previousLedgerHash;
  previousLedgerVersion;
  lcValueSignature;
  static schema = struct(
    "StellarValueProposedValue",
    {
      txSetHash: Hash.schema,
      previousLedgerHash: Hash.schema,
      previousLedgerVersion: uint32(),
      lcValueSignature: LedgerCloseValueSignature.schema
    }
  );
  constructor(input) {
    super();
    this.txSetHash = input.txSetHash instanceof Hash ? input.txSetHash : new Hash(input.txSetHash);
    this.previousLedgerHash = input.previousLedgerHash instanceof Hash ? input.previousLedgerHash : new Hash(input.previousLedgerHash);
    this.previousLedgerVersion = input.previousLedgerVersion;
    this.lcValueSignature = input.lcValueSignature;
  }
  toXdrObject() {
    return {
      txSetHash: this.txSetHash.toXdrObject(),
      previousLedgerHash: this.previousLedgerHash.toXdrObject(),
      previousLedgerVersion: this.previousLedgerVersion,
      lcValueSignature: this.lcValueSignature.toXdrObject()
    };
  }
  static fromXdrObject(wire) {
    return new StellarValueProposedValue({
      txSetHash: Hash.fromXdrObject(wire.txSetHash),
      previousLedgerHash: Hash.fromXdrObject(wire.previousLedgerHash),
      previousLedgerVersion: wire.previousLedgerVersion,
      lcValueSignature: LedgerCloseValueSignature.fromXdrObject(
        wire.lcValueSignature
      )
    });
  }
}

export { StellarValueProposedValue };
//# sourceMappingURL=stellar-value-proposed-value.js.map
