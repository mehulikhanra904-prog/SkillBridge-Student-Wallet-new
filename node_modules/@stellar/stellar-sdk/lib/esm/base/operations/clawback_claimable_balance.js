import { setSourceAccount } from '../util/operations.js';
import '../../xdr/index.js';
import { validateClaimableBalanceId } from './claim_claimable_balance.js';
import { ClawbackClaimableBalanceOp } from '../../xdr/generated/clawback-claimable-balance-op.js';
import { ClaimableBalanceId } from '../../xdr/generated/claimable-balance-id.js';
import { OperationBody } from '../../xdr/generated/operation-body.js';
import { Operation } from '../../xdr/generated/operation.js';

function clawbackClaimableBalance(opts = {}) {
  validateClaimableBalanceId(opts.balanceId);
  const balanceId = ClaimableBalanceId.fromXdr(
    opts.balanceId,
    "hex"
  );
  const opAttributes = {
    sourceAccount: null,
    body: OperationBody.clawbackClaimableBalance(
      new ClawbackClaimableBalanceOp({ balanceId })
    )
  };
  setSourceAccount(opAttributes, opts);
  return new Operation(opAttributes);
}

export { clawbackClaimableBalance };
//# sourceMappingURL=clawback_claimable_balance.js.map
