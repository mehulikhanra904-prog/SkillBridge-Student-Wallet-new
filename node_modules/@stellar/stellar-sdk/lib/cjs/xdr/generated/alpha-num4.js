'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var assetCode4 = require('./asset-code4.js');
var publicKey = require('./public-key.js');

class AlphaNum4 extends xdrValue.XdrValue {
  assetCode;
  issuer;
  static schema = jsXdr.struct("AlphaNum4", {
    assetCode: assetCode4.AssetCode4.schema,
    issuer: publicKey.PublicKey.schema
  });
  constructor(input) {
    super();
    this.assetCode = input.assetCode instanceof assetCode4.AssetCode4 ? input.assetCode : new assetCode4.AssetCode4(input.assetCode);
    this.issuer = input.issuer;
  }
  toXdrObject() {
    return {
      assetCode: this.assetCode.toXdrObject(),
      issuer: this.issuer.toXdrObject()
    };
  }
  static fromXdrObject(wire) {
    return new AlphaNum4({
      assetCode: assetCode4.AssetCode4.fromXdrObject(wire.assetCode),
      issuer: publicKey.PublicKey.fromXdrObject(wire.issuer)
    });
  }
}

exports.AlphaNum4 = AlphaNum4;
//# sourceMappingURL=alpha-num4.js.map
