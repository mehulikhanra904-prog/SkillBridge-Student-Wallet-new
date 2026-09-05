import { struct } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { ContractId } from './contract-id.js';
import { Hash } from './hash.js';

class ConfigUpgradeSetKey extends XdrValue {
  contractId;
  contentHash;
  static schema = struct(
    "ConfigUpgradeSetKey",
    {
      contractId: ContractId.schema,
      contentHash: Hash.schema
    }
  );
  constructor(input) {
    super();
    this.contractId = input.contractId;
    this.contentHash = input.contentHash instanceof Hash ? input.contentHash : new Hash(input.contentHash);
  }
  toXdrObject() {
    return {
      contractId: this.contractId.toXdrObject(),
      contentHash: this.contentHash.toXdrObject()
    };
  }
  static fromXdrObject(wire) {
    return new ConfigUpgradeSetKey({
      contractId: ContractId.fromXdrObject(wire.contractId),
      contentHash: Hash.fromXdrObject(wire.contentHash)
    });
  }
}

export { ConfigUpgradeSetKey };
//# sourceMappingURL=config-upgrade-set-key.js.map
