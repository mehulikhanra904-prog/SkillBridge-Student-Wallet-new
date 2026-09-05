'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var publicKey = require('./public-key.js');
var trustLineAsset = require('./trust-line-asset.js');
var trustLineEntryExt = require('./trust-line-entry-ext.js');

class TrustLineEntry extends xdrValue.XdrValue {
  accountId;
  asset;
  balance;
  limit;
  flags;
  ext;
  static schema = jsXdr.struct(
    "TrustLineEntry",
    {
      accountId: publicKey.PublicKey.schema,
      asset: trustLineAsset.TrustLineAsset.schema,
      balance: jsXdr.int64(),
      limit: jsXdr.int64(),
      flags: jsXdr.uint32(),
      ext: trustLineEntryExt.TrustLineEntryExt.schema
    }
  );
  constructor(input) {
    super();
    this.accountId = input.accountId;
    this.asset = input.asset;
    this.balance = input.balance;
    this.limit = input.limit;
    this.flags = input.flags;
    this.ext = input.ext;
  }
  toXdrObject() {
    return {
      accountId: this.accountId.toXdrObject(),
      asset: this.asset.toXdrObject(),
      balance: this.balance,
      limit: this.limit,
      flags: this.flags,
      ext: this.ext.toXdrObject()
    };
  }
  static fromXdrObject(wire) {
    return new TrustLineEntry({
      accountId: publicKey.PublicKey.fromXdrObject(wire.accountId),
      asset: trustLineAsset.TrustLineAsset.fromXdrObject(wire.asset),
      balance: wire.balance,
      limit: wire.limit,
      flags: wire.flags,
      ext: trustLineEntryExt.TrustLineEntryExt.fromXdrObject(wire.ext)
    });
  }
}

exports.TrustLineEntry = TrustLineEntry;
//# sourceMappingURL=trust-line-entry.js.map
