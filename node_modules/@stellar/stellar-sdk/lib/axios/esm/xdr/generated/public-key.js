import { union, case as _case, field, XdrError } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { PublicKeyType } from './public-key-type.js';
import { Uint256Bytes } from './uint256-bytes.js';

class PublicKeyBase extends XdrValue {
  constructor() {
    super();
    if (new.target === PublicKeyBase) {
      throw new TypeError(
        "new xdr.PublicKey(...) is not supported: XDR unions are built from per-variant factories. Call xdr.PublicKey.publicKeyTypeEd25519(...) (or another arm factory) instead."
      );
    }
  }
  static schema = union("PublicKey", {
    switchOn: PublicKeyType.schema,
    cases: [
      _case("publicKeyTypeEd25519", 0, field("ed25519", Uint256Bytes.schema))
    ]
  });
  static publicKeyTypeEd25519(ed25519) {
    return new PublicKeyEd25519(ed25519);
  }
  static fromXdrObject(wire) {
    switch (wire.type) {
      case 0:
        return new PublicKeyEd25519(Uint256Bytes.fromXdrObject(wire.ed25519));
    }
    throw new XdrError(
      `PublicKey: unknown type ${wire.type}`
    );
  }
  /**
   * Type guard narrowing an unknown value to a concrete PublicKey variant.
   * Use this instead of `instanceof PublicKey`: the exported `PublicKey` value
   * is the abstract base, so `instanceof` narrows to the base (not the
   * variant union) and forces a cast. `PublicKey.is(x)` narrows to the union.
   */
  static is(value) {
    return value instanceof PublicKeyBase;
  }
}
class PublicKeyEd25519 extends PublicKeyBase {
  type = "publicKeyTypeEd25519";
  ed25519;
  constructor(ed25519) {
    super();
    this.ed25519 = ed25519 instanceof Uint256Bytes ? ed25519 : new Uint256Bytes(ed25519);
  }
  get value() {
    return this.ed25519;
  }
  toXdrObject() {
    return { type: 0, ed25519: this.ed25519.toXdrObject() };
  }
}
const PublicKey = PublicKeyBase;

export { PublicKey, PublicKeyEd25519 };
//# sourceMappingURL=public-key.js.map
