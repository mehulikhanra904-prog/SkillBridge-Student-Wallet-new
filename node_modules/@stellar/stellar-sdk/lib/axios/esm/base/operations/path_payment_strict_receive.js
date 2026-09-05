import '../../xdr/index.js';
import { decodeAddressToMuxedAccount } from '../util/decode_encode_muxed_account.js';
import { isValidAmount, constructAmountRequirementsError, toXdrAmount, setSourceAccount } from '../util/operations.js';
import { PathPaymentStrictReceiveOp } from '../../xdr/generated/path-payment-strict-receive-op.js';
import { OperationBody } from '../../xdr/generated/operation-body.js';
import { Operation } from '../../xdr/generated/operation.js';

function pathPaymentStrictReceive(opts) {
  if (!opts.sendAsset) {
    throw new Error("Must specify a send asset");
  }
  if (!isValidAmount(opts.sendMax)) {
    throw new TypeError(constructAmountRequirementsError("sendMax"));
  }
  if (!opts.destAsset) {
    throw new Error("Must provide a destAsset for a payment operation");
  }
  if (!isValidAmount(opts.destAmount)) {
    throw new TypeError(constructAmountRequirementsError("destAmount"));
  }
  let destination;
  try {
    destination = decodeAddressToMuxedAccount(opts.destination);
  } catch {
    throw new Error("destination is invalid");
  }
  const path = opts.path ? opts.path : [];
  const paymentOp = new PathPaymentStrictReceiveOp({
    sendAsset: opts.sendAsset.toXdrObject(),
    sendMax: toXdrAmount(opts.sendMax),
    destination,
    destAsset: opts.destAsset.toXdrObject(),
    destAmount: toXdrAmount(opts.destAmount),
    path: path.map((x) => x.toXdrObject())
  });
  const opAttributes = {
    sourceAccount: null,
    body: OperationBody.pathPaymentStrictReceive(paymentOp)
  };
  setSourceAccount(opAttributes, opts);
  return new Operation(opAttributes);
}

export { pathPaymentStrictReceive };
//# sourceMappingURL=path_payment_strict_receive.js.map
