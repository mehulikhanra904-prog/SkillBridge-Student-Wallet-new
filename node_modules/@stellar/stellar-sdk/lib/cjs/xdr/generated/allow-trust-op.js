'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var publicKey = require('./public-key.js');
var assetCode = require('./asset-code.js');

class AllowTrustOp extends xdrValue.XdrValue {
  trustor;
  asset;
  authorize;
  static schema = jsXdr.struct("AllowTrustOp", {
    trustor: publicKey.PublicKey.schema,
    asset: assetCode.AssetCode.schema,
    authorize: jsXdr.uint32()
  });
  constructor(input) {
    super();
    this.trustor = input.trustor;
    this.asset = input.asset;
    this.authorize = input.authorize;
  }
  toXdrObject() {
    return {
      trustor: this.trustor.toXdrObject(),
      asset: this.asset.toXdrObject(),
      authorize: this.authorize
    };
  }
  static fromXdrObject(wire) {
    return new AllowTrustOp({
      trustor: publicKey.PublicKey.fromXdrObject(wire.trustor),
      asset: assetCode.AssetCode.fromXdrObject(wire.asset),
      authorize: wire.authorize
    });
  }
}

exports.AllowTrustOp = AllowTrustOp;
//# sourceMappingURL=allow-trust-op.js.map
