import { isValidAmount, constructAmountRequirementsError, toXdrAmount, toXdrPrice, setSourceAccount } from '../util/operations.js';
import { Int64 } from '../../xdr/index.js';
import { ManageBuyOfferOp } from '../../xdr/generated/manage-buy-offer-op.js';
import { OperationBody } from '../../xdr/generated/operation-body.js';
import { Operation } from '../../xdr/generated/operation.js';

function manageBuyOffer(opts) {
  const selling = opts.selling.toXdrObject();
  const buying = opts.buying.toXdrObject();
  if (!isValidAmount(opts.buyAmount, true)) {
    throw new TypeError(constructAmountRequirementsError("buyAmount"));
  }
  const buyAmount = toXdrAmount(opts.buyAmount);
  if (opts.price === void 0) {
    throw new TypeError("price argument is required");
  }
  const price = toXdrPrice(opts.price);
  const offerIdStr = opts.offerId !== void 0 ? opts.offerId.toString() : "0";
  const offerId = Int64.fromString(offerIdStr);
  const manageBuyOfferOp = new ManageBuyOfferOp({
    selling,
    buying,
    buyAmount,
    price,
    offerId
  });
  const opAttributes = {
    sourceAccount: null,
    body: OperationBody.manageBuyOffer(manageBuyOfferOp)
  };
  setSourceAccount(opAttributes, opts);
  return new Operation(opAttributes);
}

export { manageBuyOffer };
//# sourceMappingURL=manage_buy_offer.js.map
