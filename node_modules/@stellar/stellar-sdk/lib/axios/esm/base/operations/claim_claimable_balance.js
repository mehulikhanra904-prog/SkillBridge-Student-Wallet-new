import { setSourceAccount } from '../util/operations.js';
import '../../xdr/index.js';
import { ClaimableBalanceId } from '../../xdr/generated/claimable-balance-id.js';
import { ClaimClaimableBalanceOp } from '../../xdr/generated/claim-claimable-balance-op.js';
import { OperationBody } from '../../xdr/generated/operation-body.js';
import { Operation } from '../../xdr/generated/operation.js';

function claimClaimableBalance(opts = {}) {
  validateClaimableBalanceId(opts.balanceId);
  const balanceId = ClaimableBalanceId.fromXdr(
    opts.balanceId,
    "hex"
  );
  const claimClaimableBalanceOp = new ClaimClaimableBalanceOp({
    balanceId
  });
  const opAttributes = {
    sourceAccount: null,
    body: OperationBody.claimClaimableBalance(claimClaimableBalanceOp)
  };
  setSourceAccount(opAttributes, opts);
  return new Operation(opAttributes);
}
function validateClaimableBalanceId(balanceId) {
  if (typeof balanceId !== "string" || balanceId.length !== 8 + 64) {
    throw new Error("must provide a valid claimable balance id");
  }
}

export { claimClaimableBalance, validateClaimableBalanceId };
//# sourceMappingURL=claim_claimable_balance.js.map
