import { struct, UNBOUNDED_MAX_LENGTH } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { xdrString, XdrString } from '../values/xdr-string.js';
import { ScAddress } from './sc-address.js';

class ContractExecutableExternalRef extends XdrValue {
  executableOwner;
  tag;
  static schema = struct(
    "ContractExecutableExternalRef",
    {
      executableOwner: ScAddress.schema,
      tag: xdrString(UNBOUNDED_MAX_LENGTH)
    }
  );
  constructor(input) {
    super();
    this.executableOwner = input.executableOwner;
    this.tag = input.tag instanceof XdrString ? input.tag : new XdrString(input.tag);
  }
  toXdrObject() {
    return {
      executableOwner: this.executableOwner.toXdrObject(),
      tag: this.tag
    };
  }
  static fromXdrObject(wire) {
    return new ContractExecutableExternalRef({
      executableOwner: ScAddress.fromXdrObject(wire.executableOwner),
      tag: wire.tag
    });
  }
}

export { ContractExecutableExternalRef };
//# sourceMappingURL=contract-executable-external-ref.js.map
