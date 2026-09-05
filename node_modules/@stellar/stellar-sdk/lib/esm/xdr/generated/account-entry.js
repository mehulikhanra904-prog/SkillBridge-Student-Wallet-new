import { struct, array, uint32, option, int64 } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { xdrString, XdrString } from '../values/xdr-string.js';
import { PublicKey } from './public-key.js';
import { Thresholds } from './thresholds.js';
import { Signer } from './signer.js';
import { AccountEntryExt } from './account-entry-ext.js';

class AccountEntry extends XdrValue {
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
  static schema = struct("AccountEntry", {
    accountId: PublicKey.schema,
    balance: int64(),
    seqNum: int64(),
    numSubEntries: uint32(),
    inflationDest: option(PublicKey.schema),
    flags: uint32(),
    homeDomain: xdrString(32),
    thresholds: Thresholds.schema,
    signers: array(Signer.schema, 20),
    ext: AccountEntryExt.schema
  });
  constructor(input) {
    super();
    this.accountId = input.accountId;
    this.balance = input.balance;
    this.seqNum = input.seqNum;
    this.numSubEntries = input.numSubEntries;
    this.inflationDest = input.inflationDest;
    this.flags = input.flags;
    this.homeDomain = input.homeDomain instanceof XdrString ? input.homeDomain : new XdrString(input.homeDomain);
    this.thresholds = input.thresholds instanceof Thresholds ? input.thresholds : new Thresholds(input.thresholds);
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
      accountId: PublicKey.fromXdrObject(wire.accountId),
      balance: wire.balance,
      seqNum: wire.seqNum,
      numSubEntries: wire.numSubEntries,
      inflationDest: wire.inflationDest === null ? null : PublicKey.fromXdrObject(wire.inflationDest),
      flags: wire.flags,
      homeDomain: wire.homeDomain,
      thresholds: Thresholds.fromXdrObject(wire.thresholds),
      signers: wire.signers.map((w) => Signer.fromXdrObject(w)),
      ext: AccountEntryExt.fromXdrObject(wire.ext)
    });
  }
}

export { AccountEntry };
//# sourceMappingURL=account-entry.js.map
