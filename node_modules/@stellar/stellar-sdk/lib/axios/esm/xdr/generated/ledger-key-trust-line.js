import { struct } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { PublicKey } from './public-key.js';
import { TrustLineAsset } from './trust-line-asset.js';

class LedgerKeyTrustLine extends XdrValue {
  accountId;
  asset;
  static schema = struct(
    "LedgerKeyTrustLine",
    {
      accountId: PublicKey.schema,
      asset: TrustLineAsset.schema
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
      accountId: PublicKey.fromXdrObject(wire.accountId),
      asset: TrustLineAsset.fromXdrObject(wire.asset)
    });
  }
}

export { LedgerKeyTrustLine };
//# sourceMappingURL=ledger-key-trust-line.js.map
