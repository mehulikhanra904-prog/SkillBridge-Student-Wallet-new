import { struct, varOpaque } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { Uint256Bytes } from './uint256-bytes.js';

class SignerKeyEd25519SignedPayload extends XdrValue {
  ed25519;
  payload;
  static schema = struct(
    "SignerKeyEd25519SignedPayload",
    {
      ed25519: Uint256Bytes.schema,
      payload: varOpaque(64)
    }
  );
  constructor(input) {
    super();
    this.ed25519 = input.ed25519 instanceof Uint256Bytes ? input.ed25519 : new Uint256Bytes(input.ed25519);
    this.payload = input.payload;
  }
  toXdrObject() {
    return {
      ed25519: this.ed25519.toXdrObject(),
      payload: this.payload
    };
  }
  static fromXdrObject(wire) {
    return new SignerKeyEd25519SignedPayload({
      ed25519: Uint256Bytes.fromXdrObject(wire.ed25519),
      payload: wire.payload
    });
  }
}

export { SignerKeyEd25519SignedPayload };
//# sourceMappingURL=signer-key-ed25519-signed-payload.js.map
