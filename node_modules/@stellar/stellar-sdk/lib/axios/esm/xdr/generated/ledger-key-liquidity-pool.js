import { struct } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { PoolId } from './pool-id.js';

class LedgerKeyLiquidityPool extends XdrValue {
  liquidityPoolId;
  static schema = struct(
    "LedgerKeyLiquidityPool",
    {
      liquidityPoolId: PoolId.schema
    }
  );
  constructor(input) {
    super();
    this.liquidityPoolId = input.liquidityPoolId;
  }
  toXdrObject() {
    return {
      liquidityPoolId: this.liquidityPoolId.toXdrObject()
    };
  }
  static fromXdrObject(wire) {
    return new LedgerKeyLiquidityPool({
      liquidityPoolId: PoolId.fromXdrObject(wire.liquidityPoolId)
    });
  }
}

export { LedgerKeyLiquidityPool };
//# sourceMappingURL=ledger-key-liquidity-pool.js.map
