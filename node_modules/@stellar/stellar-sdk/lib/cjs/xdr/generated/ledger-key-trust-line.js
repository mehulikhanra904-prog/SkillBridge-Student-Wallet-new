'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var publicKey = require('./public-key.js');
var trustLineAsset = require('./trust-line-asset.js');

class LedgerKeyTrustLine extends xdrValue.XdrValue {
  accountId;
  asset;
  static schema = jsXdr.struct(
    "LedgerKeyTrustLine",
    {
      accountId: publicKey.PublicKey.schema,
      asset: trustLineAsset.TrustLineAsset.schema
    }
  );
  constructor(input) {
    super();
    this.accountId = input.accountId;
    this.asset = input.asset;
  }
  toXdrObject() {
    return {
      accountId: this.accountId.toXdrObject(),
      asset: this.asset.toXdrObject()
    };
  }
  static fromXdrObject(wire) {
    return new LedgerKeyTrustLine({
      accountId: publicKey.PublicKey.fromXdrObject(wire.accountId),
      asset: trustLineAsset.TrustLineAsset.fromXdrObject(wire.asset)
    });
  }
}

exports.LedgerKeyTrustLine = LedgerKeyTrustLine;
//# sourceMappingURL=ledger-key-trust-line.js.map
