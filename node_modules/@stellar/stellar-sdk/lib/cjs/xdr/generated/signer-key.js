'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var signerKeyType = require('./signer-key-type.js');
var uint256Bytes = require('./uint256-bytes.js');
var signerKeyEd25519SignedPayload = require('./signer-key-ed25519-signed-payload.js');

class SignerKeyBase extends xdrValue.XdrValue {
  constructor() {
    super();
    if (new.target === SignerKeyBase) {
      throw new TypeError(
        "new xdr.SignerKey(...) is not supported: XDR unions are built from per-variant factories. Call xdr.SignerKey.signerKeyTypeEd25519(...) (or another arm factory) instead."
      );
    }
  }
  static schema = jsXdr.union("SignerKey", {
    switchOn: signerKeyType.SignerKeyType.schema,
    cases: [
      jsXdr.case("signerKeyTypeEd25519", 0, jsXdr.field("ed25519", uint256Bytes.Uint256Bytes.schema)),
      jsXdr.case(
        "signerKeyTypePreAuthTx",
        1,
        jsXdr.field("preAuthTx", uint256Bytes.Uint256Bytes.schema)
      ),
      jsXdr.case("signerKeyTypeHashX", 2, jsXdr.field("hashX", uint256Bytes.Uint256Bytes.schema)),
      jsXdr.case(
        "signerKeyTypeEd25519SignedPayload",
        3,
        jsXdr.field("ed25519SignedPayload", signerKeyEd25519SignedPayload.SignerKeyEd25519SignedPayload.schema)
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
        return new SignerKeyEd25519(uint256Bytes.Uint256Bytes.fromXdrObject(wire.ed25519));
      case 1:
        return new SignerKeyPreAuthTx(
          uint256Bytes.Uint256Bytes.fromXdrObject(wire.preAuthTx)
        );
      case 2:
        return new SignerKeyHashX(uint256Bytes.Uint256Bytes.fromXdrObject(wire.hashX));
      case 3:
        return new SignerKeyEd25519SignedPayloadArm(
          signerKeyEd25519SignedPayload.SignerKeyEd25519SignedPayload.fromXdrObject(
            wire.ed25519SignedPayload
          )
        );
    }
    throw new jsXdr.XdrError(
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
    this.ed25519 = ed25519 instanceof uint256Bytes.Uint256Bytes ? ed25519 : new uint256Bytes.Uint256Bytes(ed25519);
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
    this.preAuthTx = preAuthTx instanceof uint256Bytes.Uint256Bytes ? preAuthTx : new uint256Bytes.Uint256Bytes(preAuthTx);
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
    this.hashX = hashX instanceof uint256Bytes.Uint256Bytes ? hashX : new uint256Bytes.Uint256Bytes(hashX);
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

exports.SignerKey = SignerKey$1;
exports.SignerKeyEd25519 = SignerKeyEd25519;
exports.SignerKeyEd25519SignedPayloadArm = SignerKeyEd25519SignedPayloadArm;
exports.SignerKeyHashX = SignerKeyHashX;
exports.SignerKeyPreAuthTx = SignerKeyPreAuthTx;
//# sourceMappingURL=signer-key.js.map
