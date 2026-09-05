'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var uint256Bytes = require('./uint256-bytes.js');

class MuxedAccountMed25519 extends xdrValue.XdrValue {
  id;
  ed25519;
  static schema = jsXdr.struct(
    "MuxedAccountMed25519",
    {
      id: jsXdr.uint64(),
      ed25519: uint256Bytes.Uint256Bytes.schema
    }
  );
  constructor(input) {
    super();
    this.id = input.id;
    this.ed25519 = input.ed25519 instanceof uint256Bytes.Uint256Bytes ? input.ed25519 : new uint256Bytes.Uint256Bytes(input.ed25519);
  }
  toXdrObject() {
    return {
      id: this.id,
      ed25519: this.ed25519.toXdrObject()
    };
  }
  static fromXdrObject(wire) {
    return new MuxedAccountMed25519({
      id: wire.id,
      ed25519: uint256Bytes.Uint256Bytes.fromXdrObject(wire.ed25519)
    });
  }
}

exports.MuxedAccountMed25519 = MuxedAccountMed25519;
//# sourceMappingURL=muxed-account-med25519.js.map
