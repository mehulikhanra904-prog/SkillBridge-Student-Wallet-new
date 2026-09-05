import { struct, int64 } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { PoolId } from './pool-id.js';
import { Asset as Asset$1 } from './asset.js';

class ClaimLiquidityAtom extends XdrValue {
  liquidityPoolId;
  assetSold;
  amountSold;
  assetBought;
  amountBought;
  static schema = struct(
    "ClaimLiquidityAtom",
    {
      liquidityPoolId: PoolId.schema,
      assetSold: Asset$1.schema,
      amountSold: int64(),
      assetBought: Asset$1.schema,
      amountBought: int64()
    }
  );
  constructor(input) {
    super();
    this.liquidityPoolId = input.liquidityPoolId;
    this.assetSold = input.assetSold;
    this.amountSold = input.amountSold;
    this.assetBought = input.assetBought;
    this.amountBought = input.amountBought;
  }
  toXdrObject() {
    return {
      liquidityPoolId: this.liquidityPoolId.toXdrObject(),
      assetSold: this.assetSold.toXdrObject(),
      amountSold: this.amountSold,
      assetBought: this.assetBought.toXdrObject(),
      amountBought: this.amountBought
    };
  }
  static fromXdrObject(wire) {
    return new ClaimLiquidityAtom({
      liquidityPoolId: PoolId.fromXdrObject(wire.liquidityPoolId),
      assetSold: Asset$1.fromXdrObject(wire.assetSold),
      amountSold: wire.amountSold,
      assetBought: Asset$1.fromXdrObject(wire.assetBought),
      amountBought: wire.amountBought
    });
  }
}

export { ClaimLiquidityAtom };
//# sourceMappingURL=claim-liquidity-atom.js.map
