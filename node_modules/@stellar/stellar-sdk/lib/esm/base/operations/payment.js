import '../../xdr/index.js';
import { decodeAddressToMuxedAccount } from '../util/decode_encode_muxed_account.js';
import { isValidAmount, constructAmountRequirementsError, toXdrAmount, setSourceAccount } from '../util/operations.js';
import { PaymentOp } from '../../xdr/generated/payment-op.js';
import { OperationBody } from '../../xdr/generated/operation-body.js';
import { Operation } from '../../xdr/generated/operation.js';

function payment(opts) {
  if (!opts.asset) {
    throw new Error("Must provide an asset for a payment operation");
  }
  if (!isValidAmount(opts.amount)) {
    throw new TypeError(constructAmountRequirementsError("amount"));
  }
  let destination;
  try {
    destination = decodeAddressToMuxedAccount(opts.destination);
  } catch {
    throw new Error("destination is invalid");
  }
  const paymentOp = new PaymentOp({
    destination,
    asset: opts.asset.toXdrObject(),
    amount: toXdrAmount(opts.amount)
  });
  const opAttributes = {
    sourceAccount: null,
    body: OperationBody.payment(paymentOp)
  };
  setSourceAccount(opAttributes, opts);
  return new Operation(opAttributes);
}

export { payment };
//# sourceMappingURL=payment.js.map
