'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var xdrString = require('../values/xdr-string.js');
var publicKey = require('./public-key.js');
var thresholds = require('./thresholds.js');
var signer = require('./signer.js');
var accountEntryExt = require('./account-entry-ext.js');

class AccountEntry extends xdrValue.XdrValue {
  accountId;
  balance;
  seqNum;
  numSubEntries;
  inflationDest;
  flags;
  homeDomain;
  thresholds;
  signers;
  ext;
  static schema = jsXdr.struct("AccountEntry", {
    accountId: publicKey.PublicKey.schema,
    balance: jsXdr.int64(),
    seqNum: jsXdr.int64(),
    numSubEntries: jsXdr.uint32(),
    inflationDest: jsXdr.option(publicKey.PublicKey.schema),
    flags: jsXdr.uint32(),
    homeDomain: xdrString.xdrString(32),
    thresholds: thresholds.Thresholds.schema,
    signers: jsXdr.array(signer.Signer.schema, 20),
    ext: accountEntryExt.AccountEntryExt.schema
  });
  constructor(input) {
    super();
    this.accountId = input.accountId;
    this.balance = input.balance;
    this.seqNum = input.seqNum;
    this.numSubEntries = input.numSubEntries;
    this.inflationDest = input.inflationDest;
    this.flags = input.flags;
    this.homeDomain = input.homeDomain instanceof xdrString.XdrString ? input.homeDomain : new xdrString.XdrString(input.homeDomain);
    this.thresholds = input.thresholds instanceof thresholds.Thresholds ? input.thresholds : new thresholds.Thresholds(input.thresholds);
    this.signers = input.signers;
    this.ext = input.ext;
  }
  toXdrObject() {
    return {
      accountId: this.accountId.toXdrObject(),
      balance: this.balance,
      seqNum: this.seqNum,
      numSubEntries: this.numSubEntries,
      inflationDest: this.inflationDest === null ? null : this.inflationDest.toXdrObject(),
      flags: this.flags,
      homeDomain: this.homeDomain,
      thresholds: this.thresholds.toXdrObject(),
      signers: this.signers.map((v) => v.toXdrObject()),
      ext: this.ext.toXdrObject()
    };
  }
  static fromXdrObject(wire) {
    return new AccountEntry({
      accountId: publicKey.PublicKey.fromXdrObject(wire.accountId),
      balance: wire.balance,
      seqNum: wire.seqNum,
      numSubEntries: wire.numSubEntries,
      inflationDest: wire.inflationDest === null ? null : publicKey.PublicKey.fromXdrObject(wire.inflationDest),
      flags: wire.flags,
      homeDomain: wire.homeDomain,
      thresholds: thresholds.Thresholds.fromXdrObject(wire.thresholds),
      signers: wire.signers.map((w) => signer.Signer.fromXdrObject(w)),
      ext: accountEntryExt.AccountEntryExt.fromXdrObject(wire.ext)
    });
  }
}

exports.AccountEntry = AccountEntry;
//# sourceMappingURL=account-entry.js.map
