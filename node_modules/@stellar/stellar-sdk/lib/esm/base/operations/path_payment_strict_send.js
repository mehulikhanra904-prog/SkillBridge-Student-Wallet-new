import '../../xdr/index.js';
import { decodeAddressToMuxedAccount } from '../util/decode_encode_muxed_account.js';
import { isValidAmount, constructAmountRequirementsError, toXdrAmount, setSourceAccount } from '../util/operations.js';
import { PathPaymentStrictSendOp } from '../../xdr/generated/path-payment-strict-send-op.js';
import { OperationBody } from '../../xdr/generated/operation-body.js';
import { Operation } from '../../xdr/generated/operation.js';

function pathPaymentStrictSend(opts) {
  if (!opts.sendAsset) {
    throw new Error("Must specify a send asset");
  }
  if (!isValidAmount(opts.sendAmount)) {
    throw new TypeError(constructAmountRequirementsError("sendAmount"));
  }
  if (!opts.destAsset) {
    throw new Error("Must provide a destAsset for a payment operation");
  }
  if (!isValidAmount(opts.destMin)) {
    throw new TypeError(constructAmountRequirementsError("destMin"));
  }
  const sendAsset = opts.sendAsset.toXdrObject();
  const sendAmount = toXdrAmount(opts.sendAmount);
  let destination;
  try {
    destination = decodeAddressToMuxedAccount(opts.destination);
  } catch {
    throw new Error("destination is invalid");
  }
  const destAsset = opts.destAsset.toXdrObject();
  const destMin = toXdrAmount(opts.destMin);
  const path = (opts.path ?? []).map((x) => x.toXdrObject());
  const payment = new PathPaymentStrictSendOp({
    sendAsset,
    sendAmount,
    destination,
    destAsset,
    destMin,
    path
  });
  const opAttributes = {
    sourceAccount: null,
    body: OperationBody.pathPaymentStrictSend(payment)
  };
  setSourceAccount(opAttributes, opts);
  return new Operation(opAttributes);
}

export { pathPaymentStrictSend };
//# sourceMappingURL=path_payment_strict_send.js.map
