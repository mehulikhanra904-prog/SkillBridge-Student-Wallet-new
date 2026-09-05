'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var asset = require('./asset.js');
var muxedAccount = require('./muxed-account.js');

class PathPaymentStrictReceiveOp extends xdrValue.XdrValue {
  sendAsset;
  sendMax;
  destination;
  destAsset;
  destAmount;
  path;
  static schema = jsXdr.struct(
    "PathPaymentStrictReceiveOp",
    {
      sendAsset: asset.Asset.schema,
      sendMax: jsXdr.int64(),
      destination: muxedAccount.MuxedAccount.schema,
      destAsset: asset.Asset.schema,
      destAmount: jsXdr.int64(),
      path: jsXdr.array(asset.Asset.schema, 5)
    }
  );
  constructor(input) {
    super();
    this.sendAsset = input.sendAsset;
    this.sendMax = input.sendMax;
    this.destination = input.destination;
    this.destAsset = input.destAsset;
    this.destAmount = input.destAmount;
    this.path = input.path;
  }
  toXdrObject() {
    return {
      sendAsset: this.sendAsset.toXdrObject(),
      sendMax: this.sendMax,
      destination: this.destination.toXdrObject(),
      destAsset: this.destAsset.toXdrObject(),
      destAmount: this.destAmount,
      path: this.path.map((v) => v.toXdrObject())
    };
  }
  static fromXdrObject(wire) {
    return new PathPaymentStrictReceiveOp({
      sendAsset: asset.Asset.fromXdrObject(wire.sendAsset),
      sendMax: wire.sendMax,
      destination: muxedAccount.MuxedAccount.fromXdrObject(wire.destination),
      destAsset: asset.Asset.fromXdrObject(wire.destAsset),
      destAmount: wire.destAmount,
      path: wire.path.map((w) => asset.Asset.fromXdrObject(w))
    });
  }
}

exports.PathPaymentStrictReceiveOp = PathPaymentStrictReceiveOp;
//# sourceMappingURL=path-payment-strict-receive-op.js.map
