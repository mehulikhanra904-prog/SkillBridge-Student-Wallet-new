'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var asset = require('./asset.js');
var muxedAccount = require('./muxed-account.js');

class PathPaymentStrictSendOp extends xdrValue.XdrValue {
  sendAsset;
  sendAmount;
  destination;
  destAsset;
  destMin;
  path;
  static schema = jsXdr.struct(
    "PathPaymentStrictSendOp",
    {
      sendAsset: asset.Asset.schema,
      sendAmount: jsXdr.int64(),
      destination: muxedAccount.MuxedAccount.schema,
      destAsset: asset.Asset.schema,
      destMin: jsXdr.int64(),
      path: jsXdr.array(asset.Asset.schema, 5)
    }
  );
  constructor(input) {
    super();
    this.sendAsset = input.sendAsset;
    this.sendAmount = input.sendAmount;
    this.destination = input.destination;
    this.destAsset = input.destAsset;
    this.destMin = input.destMin;
    this.path = input.path;
  }
  toXdrObject() {
    return {
      sendAsset: this.sendAsset.toXdrObject(),
      sendAmount: this.sendAmount,
      destination: this.destination.toXdrObject(),
      destAsset: this.destAsset.toXdrObject(),
      destMin: this.destMin,
      path: this.path.map((v) => v.toXdrObject())
    };
  }
  static fromXdrObject(wire) {
    return new PathPaymentStrictSendOp({
      sendAsset: asset.Asset.fromXdrObject(wire.sendAsset),
      sendAmount: wire.sendAmount,
      destination: muxedAccount.MuxedAccount.fromXdrObject(wire.destination),
      destAsset: asset.Asset.fromXdrObject(wire.destAsset),
      destMin: wire.destMin,
      path: wire.path.map((w) => asset.Asset.fromXdrObject(w))
    });
  }
}

exports.PathPaymentStrictSendOp = PathPaymentStrictSendOp;
//# sourceMappingURL=path-payment-strict-send-op.js.map
