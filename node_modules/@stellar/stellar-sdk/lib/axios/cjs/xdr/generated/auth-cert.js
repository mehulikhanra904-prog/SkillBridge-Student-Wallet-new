'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var curve25519Public = require('./curve25519-public.js');
var signature = require('./signature.js');

class AuthCert extends xdrValue.XdrValue {
  pubkey;
  expiration;
  sig;
  static schema = jsXdr.struct("AuthCert", {
    pubkey: curve25519Public.Curve25519Public.schema,
    expiration: jsXdr.uint64(),
    sig: signature.Signature.schema
  });
  constructor(input) {
    super();
    this.pubkey = input.pubkey;
    this.expiration = input.expiration;
    this.sig = input.sig instanceof signature.Signature ? input.sig : new signature.Signature(input.sig);
  }
  toXdrObject() {
    return {
      pubkey: this.pubkey.toXdrObject(),
      expiration: this.expiration,
      sig: this.sig.toXdrObject()
    };
  }
  static fromXdrObject(wire) {
    return new AuthCert({
      pubkey: curve25519Public.Curve25519Public.fromXdrObject(wire.pubkey),
      expiration: wire.expiration,
      sig: signature.Signature.fromXdrObject(wire.sig)
    });
  }
}

exports.AuthCert = AuthCert;
//# sourceMappingURL=auth-cert.js.map
