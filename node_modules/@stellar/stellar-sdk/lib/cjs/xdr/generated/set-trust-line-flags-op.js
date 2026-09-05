'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var publicKey = require('./public-key.js');
var asset = require('./asset.js');

class SetTrustLineFlagsOp extends xdrValue.XdrValue {
  trustor;
  asset;
  clearFlags;
  setFlags;
  static schema = jsXdr.struct(
    "SetTrustLineFlagsOp",
    {
      trustor: publicKey.PublicKey.schema,
      asset: asset.Asset.schema,
      clearFlags: jsXdr.uint32(),
      setFlags: jsXdr.uint32()
    }
  );
  constructor(input) {
    super();
    this.trustor = input.trustor;
    this.asset = input.asset;
    this.clearFlags = input.clearFlags;
    this.setFlags = input.setFlags;
  }
  toXdrObject() {
    return {
      trustor: this.trustor.toXdrObject(),
      asset: this.asset.toXdrObject(),
      clearFlags: this.clearFlags,
      setFlags: this.setFlags
    };
  }
  static fromXdrObject(wire) {
    return new SetTrustLineFlagsOp({
      trustor: publicKey.PublicKey.fromXdrObject(wire.trustor),
      asset: asset.Asset.fromXdrObject(wire.asset),
      clearFlags: wire.clearFlags,
      setFlags: wire.setFlags
    });
  }
}

exports.SetTrustLineFlagsOp = SetTrustLineFlagsOp;
//# sourceMappingURL=set-trust-line-flags-op.js.map
