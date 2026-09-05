import { struct, uint32, int64 } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { PublicKey } from './public-key.js';
import { TrustLineAsset } from './trust-line-asset.js';
import { TrustLineEntryExt } from './trust-line-entry-ext.js';

class TrustLineEntry extends XdrValue {
  accountId;
  asset;
  balance;
  limit;
  flags;
  ext;
  static schema = struct(
    "TrustLineEntry",
    {
      accountId: PublicKey.schema,
      asset: TrustLineAsset.schema,
      balance: int64(),
      limit: int64(),
      flags: uint32(),
      ext: TrustLineEntryExt.schema
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
      accountId: PublicKey.fromXdrObject(wire.accountId),
      asset: TrustLineAsset.fromXdrObject(wire.asset),
      balance: wire.balance,
      limit: wire.limit,
      flags: wire.flags,
      ext: TrustLineEntryExt.fromXdrObject(wire.ext)
    });
  }
}

export { TrustLineEntry };
//# sourceMappingURL=trust-line-entry.js.map
