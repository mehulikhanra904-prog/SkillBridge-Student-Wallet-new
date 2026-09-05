import { struct, uint64 } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { Uint256Bytes } from './uint256-bytes.js';

class MuxedEd25519Account extends XdrValue {
  id;
  ed25519;
  static schema = struct(
    "MuxedEd25519Account",
    {
      id: uint64(),
      ed25519: Uint256Bytes.schema
    }
  );
  constructor(input) {
    super();
    this.id = input.id;
    this.ed25519 = input.ed25519 instanceof Uint256Bytes ? input.ed25519 : new Uint256Bytes(input.ed25519);
  }
  toXdrObject() {
    return {
      id: this.id,
      ed25519: this.ed25519.toXdrObject()
    };
  }
  static fromXdrObject(wire) {
    return new MuxedEd25519Account({
      id: wire.id,
      ed25519: Uint256Bytes.fromXdrObject(wire.ed25519)
    });
  }
}

export { MuxedEd25519Account };
//# sourceMappingURL=muxed-ed25519-account.js.map
