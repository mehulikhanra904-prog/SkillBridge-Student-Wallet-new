import { opaque } from '@stellar/js-xdr';
import { BytesValue } from '../values/bytes-value.js';

class PoolId extends BytesValue {
  static byteLength = 32;
  static encoding = "hex";
  static schema = opaque(32, "PoolId");
  static fromXdrObject(wire) {
    return new PoolId(wire);
  }
}

export { PoolId };
//# sourceMappingURL=pool-id.js.map
