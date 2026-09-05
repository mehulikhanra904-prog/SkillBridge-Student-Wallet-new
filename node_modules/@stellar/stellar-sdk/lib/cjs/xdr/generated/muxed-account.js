'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var cryptoKeyType = require('./crypto-key-type.js');
var uint256Bytes = require('./uint256-bytes.js');
var muxedAccountMed25519 = require('./muxed-account-med25519.js');

class MuxedAccountBase extends xdrValue.XdrValue {
  constructor() {
    super();
    if (new.target === MuxedAccountBase) {
      throw new TypeError(
        "new xdr.MuxedAccount(...) is not supported: XDR unions are built from per-variant factories. Call xdr.MuxedAccount.keyTypeEd25519(...) (or another arm factory) instead."
      );
    }
  }
  static schema = jsXdr.union("MuxedAccount", {
    switchOn: cryptoKeyType.CryptoKeyType.schema,
    cases: [
      jsXdr.case("keyTypeEd25519", 0, jsXdr.field("ed25519", uint256Bytes.Uint256Bytes.schema)),
      jsXdr.case(
        "keyTypeMuxedEd25519",
        256,
        jsXdr.field("med25519", muxedAccountMed25519.MuxedAccountMed25519.schema)
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
          uint256Bytes.Uint256Bytes.fromXdrObject(wire.ed25519)
        );
      case 256:
        return new MuxedAccountMuxedEd25519(
          muxedAccountMed25519.MuxedAccountMed25519.fromXdrObject(wire.med25519)
        );
    }
    throw new jsXdr.XdrError(
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
    this.ed25519 = ed25519 instanceof uint256Bytes.Uint256Bytes ? ed25519 : new uint256Bytes.Uint256Bytes(ed25519);
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

exports.MuxedAccount = MuxedAccount;
exports.MuxedAccountEd25519 = MuxedAccountEd25519;
exports.MuxedAccountMuxedEd25519 = MuxedAccountMuxedEd25519;
//# sourceMappingURL=muxed-account.js.map
