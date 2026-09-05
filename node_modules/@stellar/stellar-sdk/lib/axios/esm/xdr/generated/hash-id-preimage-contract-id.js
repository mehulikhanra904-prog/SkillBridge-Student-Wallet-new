import { struct } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { Hash } from './hash.js';
import { ContractIdPreimage } from './contract-id-preimage.js';

class HashIdPreimageContractId extends XdrValue {
  networkId;
  contractIdPreimage;
  static schema = struct(
    "HashIdPreimageContractId",
    {
      networkId: Hash.schema,
      contractIdPreimage: ContractIdPreimage.schema
    }
  );
  constructor(input) {
    super();
    this.networkId = input.networkId instanceof Hash ? input.networkId : new Hash(input.networkId);
    this.contractIdPreimage = input.contractIdPreimage;
  }
  toXdrObject() {
    return {
      networkId: this.networkId.toXdrObject(),
      contractIdPreimage: this.contractIdPreimage.toXdrObject()
    };
  }
  static fromXdrObject(wire) {
    return new HashIdPreimageContractId({
      networkId: Hash.fromXdrObject(wire.networkId),
      contractIdPreimage: ContractIdPreimage.fromXdrObject(
        wire.contractIdPreimage
      )
    });
  }
}

export { HashIdPreimageContractId };
//# sourceMappingURL=hash-id-preimage-contract-id.js.map
