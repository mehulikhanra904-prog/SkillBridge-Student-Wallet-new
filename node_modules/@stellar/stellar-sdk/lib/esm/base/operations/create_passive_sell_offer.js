import { isValidAmount, constructAmountRequirementsError, toXdrAmount, toXdrPrice, setSourceAccount } from '../util/operations.js';
import '../../xdr/index.js';
import { CreatePassiveSellOfferOp } from '../../xdr/generated/create-passive-sell-offer-op.js';
import { OperationBody } from '../../xdr/generated/operation-body.js';
import { Operation } from '../../xdr/generated/operation.js';

function createPassiveSellOffer(opts) {
  const selling = opts.selling.toXdrObject();
  const buying = opts.buying.toXdrObject();
  if (!isValidAmount(opts.amount)) {
    throw new TypeError(constructAmountRequirementsError("amount"));
  }
  const amount = toXdrAmount(opts.amount);
  if (opts.price === void 0) {
    throw new TypeError("price argument is required");
  }
  const price = toXdrPrice(opts.price);
  const createPassiveSellOfferOp = new CreatePassiveSellOfferOp({
    selling,
    buying,
    amount,
    price
  });
  const opAttributes = {
    sourceAccount: null,
    body: OperationBody.createPassiveSellOffer(createPassiveSellOfferOp)
  };
  setSourceAccount(opAttributes, opts);
  return new Operation(opAttributes);
}

export { createPassiveSellOffer };
//# sourceMappingURL=create_passive_sell_offer.js.map
