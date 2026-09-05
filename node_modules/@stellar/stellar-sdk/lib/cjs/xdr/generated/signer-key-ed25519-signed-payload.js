'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var uint256Bytes = require('./uint256-bytes.js');

class SignerKeyEd25519SignedPayload extends xdrValue.XdrValue {
  ed25519;
  payload;
  static schema = jsXdr.struct(
    "SignerKeyEd25519SignedPayload",
    {
      ed25519: uint256Bytes.Uint256Bytes.schema,
      payload: jsXdr.varOpaque(64)
    }
  );
  constructor(input) {
    super();
    this.ed25519 = input.ed25519 instanceof uint256Bytes.Uint256Bytes ? input.ed25519 : new uint256Bytes.Uint256Bytes(input.ed25519);
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
      ed25519: uint256Bytes.Uint256Bytes.fromXdrObject(wire.ed25519),
      payload: wire.payload
    });
  }
}

exports.SignerKeyEd25519SignedPayload = SignerKeyEd25519SignedPayload;
//# sourceMappingURL=signer-key-ed25519-signed-payload.js.map
