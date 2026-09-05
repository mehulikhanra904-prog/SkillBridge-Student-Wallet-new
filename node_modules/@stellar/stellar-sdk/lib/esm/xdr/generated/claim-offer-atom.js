import { struct, int64 } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { PublicKey } from './public-key.js';
import { Asset as Asset$1 } from './asset.js';

class ClaimOfferAtom extends XdrValue {
  sellerId;
  offerId;
  assetSold;
  amountSold;
  assetBought;
  amountBought;
  static schema = struct(
    "ClaimOfferAtom",
    {
      sellerId: PublicKey.schema,
      offerId: int64(),
      assetSold: Asset$1.schema,
      amountSold: int64(),
      assetBought: Asset$1.schema,
      amountBought: int64()
    }
  );
  constructor(input) {
    super();
    this.sellerId = input.sellerId;
    this.offerId = input.offerId;
    this.assetSold = input.assetSold;
    this.amountSold = input.amountSold;
    this.assetBought = input.assetBought;
    this.amountBought = input.amountBought;
  }
  toXdrObject() {
    return {
      sellerId: this.sellerId.toXdrObject(),
      offerId: this.offerId,
      assetSold: this.assetSold.toXdrObject(),
      amountSold: this.amountSold,
      assetBought: this.assetBought.toXdrObject(),
      amountBought: this.amountBought
    };
  }
  static fromXdrObject(wire) {
    return new ClaimOfferAtom({
      sellerId: PublicKey.fromXdrObject(wire.sellerId),
      offerId: wire.offerId,
      assetSold: Asset$1.fromXdrObject(wire.assetSold),
      amountSold: wire.amountSold,
      assetBought: Asset$1.fromXdrObject(wire.assetBought),
      amountBought: wire.amountBought
    });
  }
}

export { ClaimOfferAtom };
//# sourceMappingURL=claim-offer-atom.js.map
