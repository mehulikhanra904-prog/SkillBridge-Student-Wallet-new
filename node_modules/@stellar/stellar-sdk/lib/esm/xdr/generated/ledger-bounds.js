import { struct, uint32 } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';

class LedgerBounds extends XdrValue {
  minLedger;
  maxLedger;
  static schema = struct("LedgerBounds", {
    minLedger: uint32(),
    maxLedger: uint32()
  });
  constructor(input) {
    super();
    this.minLedger = input.minLedger;
    this.maxLedger = input.maxLedger;
  }
  toXdrObject() {
    return {
      minLedger: this.minLedger,
      maxLedger: this.maxLedger
    };
  }
  static fromXdrObject(wire) {
    return new LedgerBounds({
      minLedger: wire.minLedger,
      maxLedger: wire.maxLedger
    });
  }
}

export { LedgerBounds };
//# sourceMappingURL=ledger-bounds.js.map
