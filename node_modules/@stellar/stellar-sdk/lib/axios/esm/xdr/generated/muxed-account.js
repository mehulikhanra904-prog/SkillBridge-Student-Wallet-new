import { union, case as _case, field, XdrError } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { CryptoKeyType } from './crypto-key-type.js';
import { Uint256Bytes } from './uint256-bytes.js';
import { MuxedAccountMed25519 } from './muxed-account-med25519.js';

class MuxedAccountBase extends XdrValue {
  constructor() {
    super();
    if (new.target === MuxedAccountBase) {
      throw new TypeError(
        "new xdr.MuxedAccount(...) is not supported: XDR unions are built from per-variant factories. Call xdr.MuxedAccount.keyTypeEd25519(...) (or another arm factory) instead."
      );
    }
  }
  static schema = union("MuxedAccount", {
    switchOn: CryptoKeyType.schema,
    cases: [
      _case("keyTypeEd25519", 0, field("ed25519", Uint256Bytes.schema)),
      _case(
        "keyTypeMuxedEd25519",
        256,
        field("med25519", MuxedAccountMed25519.schema)
      )
    ]
  });
  static keyTypeEd25519(ed25519) {
    return new MuxedAccountEd25519(ed25519);
  }
  static keyTypeMuxedEd25519(med25519) {
    return new MuxedAccountMuxedEd25519(med25519);
  }
  static fromXdrObject(wire) {
    switch (wire.type) {
      case 0:
        return new MuxedAccountEd25519(
          Uint256Bytes.fromXdrObject(wire.ed25519)
        );
      case 256:
        return new MuxedAccountMuxedEd25519(
          MuxedAccountMed25519.fromXdrObject(wire.med25519)
        );
    }
    throw new XdrError(
      `MuxedAccount: unknown type ${wire.type}`
    );
  }
  /**
   * Type guard narrowing an unknown value to a concrete MuxedAccount variant.
   * Use this instead of `instanceof MuxedAccount`: the exported `MuxedAccount` value
   * is the abstract base, so `instanceof` narrows to the base (not the
   * variant union) and forces a cast. `MuxedAccount.is(x)` narrows to the union.
   */
  static is(value) {
    return value instanceof MuxedAccountBase;
  }
}
class MuxedAccountEd25519 extends MuxedAccountBase {
  type = "keyTypeEd25519";
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
class MuxedAccountMuxedEd25519 extends MuxedAccountBase {
  type = "keyTypeMuxedEd25519";
  med25519;
  constructor(med25519) {
    super();
    this.med25519 = med25519;
  }
  get value() {
    return this.med25519;
  }
  toXdrObject() {
    return { type: 256, med25519: this.med25519.toXdrObject() };
  }
}
const MuxedAccount = MuxedAccountBase;

export { MuxedAccount, MuxedAccountEd25519, MuxedAccountMuxedEd25519 };
//# sourceMappingURL=muxed-account.js.map
