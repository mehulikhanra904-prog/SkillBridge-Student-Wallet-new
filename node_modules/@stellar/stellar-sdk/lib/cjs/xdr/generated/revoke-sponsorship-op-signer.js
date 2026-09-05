'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var publicKey = require('./public-key.js');
var signerKey = require('./signer-key.js');

class RevokeSponsorshipOpSigner extends xdrValue.XdrValue {
  accountId;
  signerKey;
  static schema = jsXdr.struct(
    "RevokeSponsorshipOpSigner",
    {
      accountId: publicKey.PublicKey.schema,
      signerKey: signerKey.SignerKey.schema
    }
  );
  constructor(input) {
    super();
    this.accountId = input.accountId;
    this.signerKey = input.signerKey;
  }
  toXdrObject() {
    return {
      accountId: this.accountId.toXdrObject(),
      signerKey: this.signerKey.toXdrObject()
    };
  }
  static fromXdrObject(wire) {
    return new RevokeSponsorshipOpSigner({
      accountId: publicKey.PublicKey.fromXdrObject(wire.accountId),
      signerKey: signerKey.SignerKey.fromXdrObject(wire.signerKey)
    });
  }
}

exports.RevokeSponsorshipOpSigner = RevokeSponsorshipOpSigner;
//# sourceMappingURL=revoke-sponsorship-op-signer.js.map
