import { struct } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { PoolId } from './pool-id.js';
import { LiquidityPoolEntryBody } from './liquidity-pool-entry-body.js';

class LiquidityPoolEntry extends XdrValue {
  liquidityPoolId;
  body;
  static schema = struct(
    "LiquidityPoolEntry",
    {
      liquidityPoolId: PoolId.schema,
      body: LiquidityPoolEntryBody.schema
    }
  );
  constructor(input) {
    super();
    this.liquidityPoolId = input.liquidityPoolId;
    this.body = input.body;
  }
  toXdrObject() {
    return {
      liquidityPoolId: this.liquidityPoolId.toXdrObject(),
      body: this.body.toXdrObject()
    };
  }
  static fromXdrObject(wire) {
    return new LiquidityPoolEntry({
      liquidityPoolId: PoolId.fromXdrObject(wire.liquidityPoolId),
      body: LiquidityPoolEntryBody.fromXdrObject(wire.body)
    });
  }
}

export { LiquidityPoolEntry };
//# sourceMappingURL=liquidity-pool-entry.js.map
