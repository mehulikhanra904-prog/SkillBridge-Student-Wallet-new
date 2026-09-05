'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var asset = require('./asset.js');
var claimant = require('./claimant.js');

class CreateClaimableBalanceOp extends xdrValue.XdrValue {
  asset;
  amount;
  claimants;
  static schema = jsXdr.struct(
    "CreateClaimableBalanceOp",
    {
      asset: asset.Asset.schema,
      amount: jsXdr.int64(),
      claimants: jsXdr.array(claimant.Claimant.schema, 10)
    }
  );
  constructor(input) {
    super();
    this.asset = input.asset;
    this.amount = input.amount;
    this.claimants = input.claimants;
  }
  toXdrObject() {
    return {
      asset: this.asset.toXdrObject(),
      amount: this.amount,
      claimants: this.claimants.map((v) => v.toXdrObject())
    };
  }
  static fromXdrObject(wire) {
    return new CreateClaimableBalanceOp({
      asset: asset.Asset.fromXdrObject(wire.asset),
      amount: wire.amount,
      claimants: wire.claimants.map((w) => claimant.Claimant.fromXdrObject(w))
    });
  }
}

exports.CreateClaimableBalanceOp = CreateClaimableBalanceOp;
//# sourceMappingURL=create-claimable-balance-op.js.map
