import { varOpaque } from '@stellar/js-xdr';
import { BytesValue } from '../values/bytes-value.js';

class EncryptedBody extends BytesValue {
  static encoding = "hex";
  static schema = varOpaque(64e3, "EncryptedBody");
  static fromXdrObject(wire) {
    return new EncryptedBody(wire);
  }
}

export { EncryptedBody };
//# sourceMappingURL=encrypted-body.js.map
