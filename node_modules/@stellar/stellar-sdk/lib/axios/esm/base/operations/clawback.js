import '../../xdr/index.js';
import { decodeAddressToMuxedAccount } from '../util/decode_encode_muxed_account.js';
import { isValidAmount, constructAmountRequirementsError, toXdrAmount, setSourceAccount } from '../util/operations.js';
import { ClawbackOp } from '../../xdr/generated/clawback-op.js';
import { OperationBody } from '../../xdr/generated/operation-body.js';
import { Operation } from '../../xdr/generated/operation.js';

function clawback(opts) {
  if (!isValidAmount(opts.amount)) {
    throw new TypeError(constructAmountRequirementsError("amount"));
  }
  let from;
  try {
    from = decodeAddressToMuxedAccount(opts.from);
  } catch {
    throw new Error("from address is invalid");
  }
  const clawbackOp = new ClawbackOp({
    amount: toXdrAmount(opts.amount),
    asset: opts.asset.toXdrObject(),
    from
  });
  const opAttributes = {
    sourceAccount: null,
    body: OperationBody.clawback(clawbackOp)
  };
  setSourceAccount(opAttributes, opts);
  return new Operation(opAttributes);
}

export { clawback };
//# sourceMappingURL=clawback.js.map
