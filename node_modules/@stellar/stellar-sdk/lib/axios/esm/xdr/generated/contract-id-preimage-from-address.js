import { struct } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { ScAddress } from './sc-address.js';
import { Uint256Bytes } from './uint256-bytes.js';

class ContractIdPreimageFromAddress extends XdrValue {
  address;
  salt;
  static schema = struct(
    "ContractIdPreimageFromAddress",
    {
      address: ScAddress.schema,
      salt: Uint256Bytes.schema
    }
  );
  constructor(input) {
    super();
    this.address = input.address;
    this.salt = input.salt instanceof Uint256Bytes ? input.salt : new Uint256Bytes(input.salt);
  }
  toXdrObject() {
    return {
      address: this.address.toXdrObject(),
      salt: this.salt.toXdrObject()
    };
  }
  static fromXdrObject(wire) {
    return new ContractIdPreimageFromAddress({
      address: ScAddress.fromXdrObject(wire.address),
      salt: Uint256Bytes.fromXdrObject(wire.salt)
    });
  }
}

export { ContractIdPreimageFromAddress };
//# sourceMappingURL=contract-id-preimage-from-address.js.map
