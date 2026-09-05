import { Int64 } from '../../xdr/index.js';
import { Asset } from '../asset.js';
import { LiquidityPoolAsset } from '../liquidity_pool_asset.js';
import { isValidAmount, constructAmountRequirementsError, toXdrAmount, setSourceAccount } from '../util/operations.js';
import { ChangeTrustOp } from '../../xdr/generated/change-trust-op.js';
import { OperationBody } from '../../xdr/generated/operation-body.js';
import { Operation } from '../../xdr/generated/operation.js';

const MAX_INT64 = "9223372036854775807";
function changeTrust(opts) {
  const asset = opts.asset ?? opts.line;
  let line;
  if (asset instanceof Asset) {
    line = asset.toChangeTrustXdrObject();
  } else if (asset instanceof LiquidityPoolAsset) {
    line = asset.toXdrObject();
  } else {
    throw new TypeError("asset must be Asset or LiquidityPoolAsset");
  }
  if (opts.limit !== void 0 && !isValidAmount(opts.limit, true)) {
    throw new TypeError(constructAmountRequirementsError("limit"));
  }
  const limit = opts.limit ? toXdrAmount(opts.limit) : Int64.fromString(MAX_INT64);
  const changeTrustOp = new ChangeTrustOp({ line, limit });
  const opAttributes = {
    sourceAccount: null,
    body: OperationBody.changeTrust(changeTrustOp)
  };
  setSourceAccount(opAttributes, opts);
  return new Operation(opAttributes);
}

export { changeTrust };
//# sourceMappingURL=change_trust.js.map
