import { struct } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { ExtensionPoint } from './extension-point.js';
import { ScAddress } from './sc-address.js';
import { ScVal } from './sc-val.js';
import { ContractDataDurability } from './contract-data-durability.js';

class ContractDataEntry extends XdrValue {
  ext;
  contract;
  key;
  durability;
  val;
  static schema = struct(
    "ContractDataEntry",
    {
      ext: ExtensionPoint.schema,
      contract: ScAddress.schema,
      key: ScVal.schema,
      durability: ContractDataDurability.schema,
      val: ScVal.schema
    }
  );
  constructor(input) {
    super();
    this.ext = input.ext;
    this.contract = input.contract;
    this.key = input.key;
    this.durability = input.durability;
    this.val = input.val;
  }
  toXdrObject() {
    return {
      ext: this.ext.toXdrObject(),
      contract: this.contract.toXdrObject(),
      key: this.key.toXdrObject(),
      durability: this.durability.toXdrObject(),
      val: this.val.toXdrObject()
    };
  }
  static fromXdrObject(wire) {
    return new ContractDataEntry({
      ext: ExtensionPoint.fromXdrObject(wire.ext),
      contract: ScAddress.fromXdrObject(wire.contract),
      key: ScVal.fromXdrObject(wire.key),
      durability: ContractDataDurability.fromXdrObject(wire.durability),
      val: ScVal.fromXdrObject(wire.val)
    });
  }
}

export { ContractDataEntry };
//# sourceMappingURL=contract-data-entry.js.map
