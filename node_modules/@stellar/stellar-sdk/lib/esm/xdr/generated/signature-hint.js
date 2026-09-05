import { opaque } from '@stellar/js-xdr';
import { BytesValue } from '../values/bytes-value.js';

class SignatureHint extends BytesValue {
  static byteLength = 4;
  static encoding = "hex";
  static schema = opaque(4, "SignatureHint");
  static fromXdrObject(wire) {
    return new SignatureHint(wire);
  }
}

export { SignatureHint };
//# sourceMappingURL=signature-hint.js.map
