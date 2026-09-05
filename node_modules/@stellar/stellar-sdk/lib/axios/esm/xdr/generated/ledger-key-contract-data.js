import { struct } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { ScAddress } from './sc-address.js';
import { ScVal } from './sc-val.js';
import { ContractDataDurability } from './contract-data-durability.js';

class LedgerKeyContractData extends XdrValue {
  contract;
  key;
  durability;
  static schema = struct(
    "LedgerKeyContractData",
    {
      contract: ScAddress.schema,
      key: ScVal.schema,
      durability: ContractDataDurability.schema
    }
  );
  constructor(input) {
    super();
    this.contract = input.contract;
    this.key = input.key;
    this.durability = input.durability;
  }
  toXdrObject() {
    return {
      contract: this.contract.toXdrObject(),
      key: this.key.toXdrObject(),
      durability: this.durability.toXdrObject()
    };
  }
  static fromXdrObject(wire) {
    return new LedgerKeyContractData({
      contract: ScAddress.fromXdrObject(wire.contract),
      key: ScVal.fromXdrObject(wire.key),
      durability: ContractDataDurability.fromXdrObject(wire.durability)
    });
  }
}

export { LedgerKeyContractData };
//# sourceMappingURL=ledger-key-contract-data.js.map
