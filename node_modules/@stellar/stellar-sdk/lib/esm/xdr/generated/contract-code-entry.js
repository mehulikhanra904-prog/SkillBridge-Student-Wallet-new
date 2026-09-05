import { struct, varOpaque, UNBOUNDED_MAX_LENGTH } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { ContractCodeEntryExt } from './contract-code-entry-ext.js';
import { Hash } from './hash.js';

class ContractCodeEntry extends XdrValue {
  ext;
  hash;
  code;
  static schema = struct(
    "ContractCodeEntry",
    {
      ext: ContractCodeEntryExt.schema,
      hash: Hash.schema,
      code: varOpaque(UNBOUNDED_MAX_LENGTH)
    }
  );
  constructor(input) {
    super();
    this.ext = input.ext;
    this.hash = input.hash instanceof Hash ? input.hash : new Hash(input.hash);
    this.code = input.code;
  }
  toXdrObject() {
    return {
      ext: this.ext.toXdrObject(),
      hash: this.hash.toXdrObject(),
      code: this.code
    };
  }
  static fromXdrObject(wire) {
    return new ContractCodeEntry({
      ext: ContractCodeEntryExt.fromXdrObject(wire.ext),
      hash: Hash.fromXdrObject(wire.hash),
      code: wire.code
    });
  }
}

export { ContractCodeEntry };
//# sourceMappingURL=contract-code-entry.js.map
