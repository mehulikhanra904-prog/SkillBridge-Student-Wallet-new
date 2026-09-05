import { union, case as _case, field, XdrError } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { SignerKeyType } from './signer-key-type.js';
import { Uint256Bytes } from './uint256-bytes.js';
import { SignerKeyEd25519SignedPayload } from './signer-key-ed25519-signed-payload.js';

class SignerKeyBase extends XdrValue {
  constructor() {
    super();
    if (new.target === SignerKeyBase) {
      throw new TypeError(
        "new xdr.SignerKey(...) is not supported: XDR unions are built from per-variant factories. Call xdr.SignerKey.signerKeyTypeEd25519(...) (or another arm factory) instead."
      );
    }
  }
  static schema = union("SignerKey", {
    switchOn: SignerKeyType.schema,
    cases: [
      _case("signerKeyTypeEd25519", 0, field("ed25519", Uint256Bytes.schema)),
      _case(
        "signerKeyTypePreAuthTx",
        1,
        field("preAuthTx", Uint256Bytes.schema)
      ),
      _case("signerKeyTypeHashX", 2, field("hashX", Uint256Bytes.schema)),
      _case(
        "signerKeyTypeEd25519SignedPayload",
        3,
        field("ed25519SignedPayload", SignerKeyEd25519SignedPayload.schema)
      )
    ]
  });
  static signerKeyTypeEd25519(ed25519) {
    return new SignerKeyEd25519(ed25519);
  }
  static signerKeyTypePreAuthTx(preAuthTx) {
    return new SignerKeyPreAuthTx(preAuthTx);
  }
  static signerKeyTypeHashX(hashX) {
    return new SignerKeyHashX(hashX);
  }
  static signerKeyTypeEd25519SignedPayload(ed25519SignedPayload) {
    return new SignerKeyEd25519SignedPayloadArm(ed25519SignedPayload);
  }
  static fromXdrObject(wire) {
    switch (wire.type) {
      case 0:
        return new SignerKeyEd25519(Uint256Bytes.fromXdrObject(wire.ed25519));
      case 1:
        return new SignerKeyPreAuthTx(
          Uint256Bytes.fromXdrObject(wire.preAuthTx)
        );
      case 2:
        return new SignerKeyHashX(Uint256Bytes.fromXdrObject(wire.hashX));
      case 3:
        return new SignerKeyEd25519SignedPayloadArm(
          SignerKeyEd25519SignedPayload.fromXdrObject(
            wire.ed25519SignedPayload
          )
        );
    }
    throw new XdrError(
      `SignerKey: unknown type ${wire.type}`
    );
  }
  /**
   * Type guard narrowing an unknown value to a concrete SignerKey variant.
   * Use this instead of `instanceof SignerKey`: the exported `SignerKey` value
   * is the abstract base, so `instanceof` narrows to the base (not the
   * variant union) and forces a cast. `SignerKey.is(x)` narrows to the union.
   */
  static is(value) {
    return value instanceof SignerKeyBase;
  }
}
class SignerKeyEd25519 extends SignerKeyBase {
  type = "signerKeyTypeEd25519";
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
class SignerKeyPreAuthTx extends SignerKeyBase {
  type = "signerKeyTypePreAuthTx";
  preAuthTx;
  constructor(preAuthTx) {
    super();
    this.preAuthTx = preAuthTx instanceof Uint256Bytes ? preAuthTx : new Uint256Bytes(preAuthTx);
  }
  get value() {
    return this.preAuthTx;
  }
  toXdrObject() {
    return { type: 1, preAuthTx: this.preAuthTx.toXdrObject() };
  }
}
class SignerKeyHashX extends SignerKeyBase {
  type = "signerKeyTypeHashX";
  hashX;
  constructor(hashX) {
    super();
    this.hashX = hashX instanceof Uint256Bytes ? hashX : new Uint256Bytes(hashX);
  }
  get value() {
    return this.hashX;
  }
  toXdrObject() {
    return { type: 2, hashX: this.hashX.toXdrObject() };
  }
}
class SignerKeyEd25519SignedPayloadArm extends SignerKeyBase {
  type = "signerKeyTypeEd25519SignedPayload";
  ed25519SignedPayload;
  constructor(ed25519SignedPayload) {
    super();
    this.ed25519SignedPayload = ed25519SignedPayload;
  }
  get value() {
    return this.ed25519SignedPayload;
  }
  toXdrObject() {
    return {
      type: 3,
      ed25519SignedPayload: this.ed25519SignedPayload.toXdrObject()
    };
  }
}
const SignerKey$1 = SignerKeyBase;

export { SignerKey$1 as SignerKey, SignerKeyEd25519, SignerKeyEd25519SignedPayloadArm, SignerKeyHashX, SignerKeyPreAuthTx };
//# sourceMappingURL=signer-key.js.map
