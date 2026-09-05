import { struct, int64 } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { ExtensionPoint } from './extension-point.js';

class ContractCostParamEntry extends XdrValue {
  ext;
  constTerm;
  linearTerm;
  static schema = struct(
    "ContractCostParamEntry",
    {
      ext: ExtensionPoint.schema,
      constTerm: int64(),
      linearTerm: int64()
    }
  );
  constructor(input) {
    super();
    this.ext = input.ext;
    this.constTerm = input.constTerm;
    this.linearTerm = input.linearTerm;
  }
  toXdrObject() {
    return {
      ext: this.ext.toXdrObject(),
      constTerm: this.constTerm,
      linearTerm: this.linearTerm
    };
  }
  static fromXdrObject(wire) {
    return new ContractCostParamEntry({
      ext: ExtensionPoint.fromXdrObject(wire.ext),
      constTerm: wire.constTerm,
      linearTerm: wire.linearTerm
    });
  }
}

export { ContractCostParamEntry };
//# sourceMappingURL=contract-cost-param-entry.js.map
