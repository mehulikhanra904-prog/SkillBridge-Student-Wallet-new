'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var claimableBalanceId = require('./claimable-balance-id.js');
var claimant = require('./claimant.js');
var asset = require('./asset.js');
var claimableBalanceEntryExt = require('./claimable-balance-entry-ext.js');

class ClaimableBalanceEntry extends xdrValue.XdrValue {
  balanceId;
  claimants;
  asset;
  amount;
  ext;
  static schema = jsXdr.struct(
    "ClaimableBalanceEntry",
    {
      balanceId: claimableBalanceId.ClaimableBalanceId.schema,
      claimants: jsXdr.array(claimant.Claimant.schema, 10),
      asset: asset.Asset.schema,
      amount: jsXdr.int64(),
      ext: claimableBalanceEntryExt.ClaimableBalanceEntryExt.schema
    }
  );
  constructor(input) {
    super();
    this.balanceId = input.balanceId;
    this.claimants = input.claimants;
    this.asset = input.asset;
    this.amount = input.amount;
    this.ext = input.ext;
  }
  toXdrObject() {
    return {
      balanceId: this.balanceId.toXdrObject(),
      claimants: this.claimants.map((v) => v.toXdrObject()),
      asset: this.asset.toXdrObject(),
      amount: this.amount,
      ext: this.ext.toXdrObject()
    };
  }
  static fromXdrObject(wire) {
    return new ClaimableBalanceEntry({
      balanceId: claimableBalanceId.ClaimableBalanceId.fromXdrObject(wire.balanceId),
      claimants: wire.claimants.map((w) => claimant.Claimant.fromXdrObject(w)),
      asset: asset.Asset.fromXdrObject(wire.asset),
      amount: wire.amount,
      ext: claimableBalanceEntryExt.ClaimableBalanceEntryExt.fromXdrObject(wire.ext)
    });
  }
}

exports.ClaimableBalanceEntry = ClaimableBalanceEntry;
//# sourceMappingURL=claimable-balance-entry.js.map
