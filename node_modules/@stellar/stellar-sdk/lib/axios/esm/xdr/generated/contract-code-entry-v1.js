import { struct } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { ExtensionPoint } from './extension-point.js';
import { ContractCodeCostInputs } from './contract-code-cost-inputs.js';

class ContractCodeEntryV1 extends XdrValue {
  ext;
  costInputs;
  static schema = struct(
    "ContractCodeEntryV1",
    {
      ext: ExtensionPoint.schema,
      costInputs: ContractCodeCostInputs.schema
    }
  );
  constructor(input) {
    super();
    this.ext = input.ext;
    this.costInputs = input.costInputs;
  }
  toXdrObject() {
    return {
      ext: this.ext.toXdrObject(),
      costInputs: this.costInputs.toXdrObject()
    };
  }
  static fromXdrObject(wire) {
    return new ContractCodeEntryV1({
      ext: ExtensionPoint.fromXdrObject(wire.ext),
      costInputs: ContractCodeCostInputs.fromXdrObject(wire.costInputs)
    });
  }
}

export { ContractCodeEntryV1 };
//# sourceMappingURL=contract-code-entry-v1.js.map
