import { struct } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { Hash } from './hash.js';

class LedgerKeyContractCode extends XdrValue {
  hash;
  static schema = struct(
    "LedgerKeyContractCode",
    {
      hash: Hash.schema
    }
  );
  constructor(input) {
    super();
    this.hash = input.hash instanceof Hash ? input.hash : new Hash(input.hash);
  }
  toXdrObject() {
    return {
      hash: this.hash.toXdrObject()
    };
  }
  static fromXdrObject(wire) {
    return new LedgerKeyContractCode({
      hash: Hash.fromXdrObject(wire.hash)
    });
  }
}

export { LedgerKeyContractCode };
//# sourceMappingURL=ledger-key-contract-code.js.map
