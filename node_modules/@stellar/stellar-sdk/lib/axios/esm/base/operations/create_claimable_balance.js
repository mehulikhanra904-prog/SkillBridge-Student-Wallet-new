import '../../xdr/index.js';
import { Asset } from '../asset.js';
import { isValidAmount, constructAmountRequirementsError, toXdrAmount, setSourceAccount } from '../util/operations.js';
import { CreateClaimableBalanceOp } from '../../xdr/generated/create-claimable-balance-op.js';
import { OperationBody } from '../../xdr/generated/operation-body.js';
import { Operation } from '../../xdr/generated/operation.js';

function createClaimableBalance(opts) {
  if (!(opts.asset instanceof Asset)) {
    throw new Error(
      "must provide an asset for create claimable balance operation"
    );
  }
  if (!isValidAmount(opts.amount)) {
    throw new TypeError(constructAmountRequirementsError("amount"));
  }
  if (!Array.isArray(opts.claimants) || opts.claimants.length === 0) {
    throw new Error("must provide at least one claimant");
  }
  const asset = opts.asset.toXdrObject();
  const amount = toXdrAmount(opts.amount);
  const claimants = opts.claimants.map((c) => c.toXdrObject());
  const createClaimableBalanceOp = new CreateClaimableBalanceOp({
    asset,
    amount,
    claimants
  });
  const opAttributes = {
    sourceAccount: null,
    body: OperationBody.createClaimableBalance(createClaimableBalanceOp)
  };
  setSourceAccount(opAttributes, opts);
  return new Operation(opAttributes);
}

export { createClaimableBalance };
//# sourceMappingURL=create_claimable_balance.js.map
