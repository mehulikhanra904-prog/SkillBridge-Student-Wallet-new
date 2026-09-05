import { struct, int64 } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { Uint256Bytes } from './uint256-bytes.js';
import { Asset as Asset$1 } from './asset.js';

class ClaimOfferAtomV0 extends XdrValue {
  sellerEd25519;
  offerId;
  assetSold;
  amountSold;
  assetBought;
  amountBought;
  static schema = struct(
    "ClaimOfferAtomV0",
    {
      sellerEd25519: Uint256Bytes.schema,
      offerId: int64(),
      assetSold: Asset$1.schema,
      amountSold: int64(),
      assetBought: Asset$1.schema,
      amountBought: int64()
    }
  );
  constructor(input) {
    super();
    this.sellerEd25519 = input.sellerEd25519 instanceof Uint256Bytes ? input.sellerEd25519 : new Uint256Bytes(input.sellerEd25519);
    this.offerId = input.offerId;
    this.assetSold = input.assetSold;
    this.amountSold = input.amountSold;
    this.assetBought = input.assetBought;
    this.amountBought = input.amountBought;
  }
  toXdrObject() {
    return {
      sellerEd25519: this.sellerEd25519.toXdrObject(),
      offerId: this.offerId,
      assetSold: this.assetSold.toXdrObject(),
      amountSold: this.amountSold,
      assetBought: this.assetBought.toXdrObject(),
      amountBought: this.amountBought
    };
  }
  static fromXdrObject(wire) {
    return new ClaimOfferAtomV0({
      sellerEd25519: Uint256Bytes.fromXdrObject(wire.sellerEd25519),
      offerId: wire.offerId,
      assetSold: Asset$1.fromXdrObject(wire.assetSold),
      amountSold: wire.amountSold,
      assetBought: Asset$1.fromXdrObject(wire.assetBought),
      amountBought: wire.amountBought
    });
  }
}

export { ClaimOfferAtomV0 };
//# sourceMappingURL=claim-offer-atom-v0.js.map
