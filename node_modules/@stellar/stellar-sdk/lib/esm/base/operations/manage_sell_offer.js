import { isValidAmount, constructAmountRequirementsError, toXdrAmount, toXdrPrice, setSourceAccount } from '../util/operations.js';
import { Int64 } from '../../xdr/index.js';
import { ManageSellOfferOp } from '../../xdr/generated/manage-sell-offer-op.js';
import { OperationBody } from '../../xdr/generated/operation-body.js';
import { Operation } from '../../xdr/generated/operation.js';

function manageSellOffer(opts) {
  const selling = opts.selling.toXdrObject();
  const buying = opts.buying.toXdrObject();
  if (!isValidAmount(opts.amount, true)) {
    throw new TypeError(constructAmountRequirementsError("amount"));
  }
  const amount = toXdrAmount(opts.amount);
  if (opts.price === void 0) {
    throw new TypeError("price argument is required");
  }
  const price = toXdrPrice(opts.price);
  const offerIdStr = opts.offerId !== void 0 ? opts.offerId.toString() : "0";
  const offerId = Int64.fromString(offerIdStr);
  const manageSellOfferOp = new ManageSellOfferOp({
    selling,
    buying,
    amount,
    price,
    offerId
  });
  const opAttributes = {
    sourceAccount: null,
    body: OperationBody.manageSellOffer(manageSellOfferOp)
  };
  setSourceAccount(opAttributes, opts);
  return new Operation(opAttributes);
}

export { manageSellOffer };
//# sourceMappingURL=manage_sell_offer.js.map
