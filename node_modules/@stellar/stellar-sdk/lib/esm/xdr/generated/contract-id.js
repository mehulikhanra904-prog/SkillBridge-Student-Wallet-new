import { opaque } from '@stellar/js-xdr';
import { BytesValue } from '../values/bytes-value.js';

class ContractId extends BytesValue {
  static byteLength = 32;
  static encoding = "hex";
  static schema = opaque(32, "ContractId");
  static fromXdrObject(wire) {
    return new ContractId(wire);
  }
}

export { ContractId };
//# sourceMappingURL=contract-id.js.map
