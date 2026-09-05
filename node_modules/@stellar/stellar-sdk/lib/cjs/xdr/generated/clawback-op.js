'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var asset = require('./asset.js');
var muxedAccount = require('./muxed-account.js');

class ClawbackOp extends xdrValue.XdrValue {
  asset;
  from;
  amount;
  static schema = jsXdr.struct("ClawbackOp", {
    asset: asset.Asset.schema,
    from: muxedAccount.MuxedAccount.schema,
    amount: jsXdr.int64()
  });
  constructor(input) {
    super();
    this.asset = input.asset;
    this.from = input.from;
    this.amount = input.amount;
  }
  toXdrObject() {
    return {
      asset: this.asset.toXdrObject(),
      from: this.from.toXdrObject(),
      amount: this.amount
    };
  }
  static fromXdrObject(wire) {
    return new ClawbackOp({
      asset: asset.Asset.fromXdrObject(wire.asset),
      from: muxedAccount.MuxedAccount.fromXdrObject(wire.from),
      amount: wire.amount
    });
  }
}

exports.ClawbackOp = ClawbackOp;
//# sourceMappingURL=clawback-op.js.map
