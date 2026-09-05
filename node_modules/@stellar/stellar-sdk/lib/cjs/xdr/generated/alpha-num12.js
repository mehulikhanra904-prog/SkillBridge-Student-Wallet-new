'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var assetCode12 = require('./asset-code12.js');
var publicKey = require('./public-key.js');

class AlphaNum12 extends xdrValue.XdrValue {
  assetCode;
  issuer;
  static schema = jsXdr.struct("AlphaNum12", {
    assetCode: assetCode12.AssetCode12.schema,
    issuer: publicKey.PublicKey.schema
  });
  constructor(input) {
    super();
    this.assetCode = input.assetCode instanceof assetCode12.AssetCode12 ? input.assetCode : new assetCode12.AssetCode12(input.assetCode);
    this.issuer = input.issuer;
  }
  toXdrObject() {
    return {
      assetCode: this.assetCode.toXdrObject(),
      issuer: this.issuer.toXdrObject()
    };
  }
  static fromXdrObject(wire) {
    return new AlphaNum12({
      assetCode: assetCode12.AssetCode12.fromXdrObject(wire.assetCode),
      issuer: publicKey.PublicKey.fromXdrObject(wire.issuer)
    });
  }
}

exports.AlphaNum12 = AlphaNum12;
//# sourceMappingURL=alpha-num12.js.map
