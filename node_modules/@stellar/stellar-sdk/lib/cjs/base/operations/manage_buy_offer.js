'use strict';

var operations = require('../util/operations.js');
var index = require('../../xdr/index.js');
var manageBuyOfferOp = require('../../xdr/generated/manage-buy-offer-op.js');
var operationBody = require('../../xdr/generated/operation-body.js');
var operation = require('../../xdr/generated/operation.js');

function manageBuyOffer(opts) {
  const selling = opts.selling.toXdrObject();
  const buying = opts.buying.toXdrObject();
  if (!operations.isValidAmount(opts.buyAmount, true)) {
    throw new TypeError(operations.constructAmountRequirementsError("buyAmount"));
  }
  const buyAmount = operations.toXdrAmount(opts.buyAmount);
  if (opts.price === void 0) {
    throw new TypeError("price argument is required");
  }
  const price = operations.toXdrPrice(opts.price);
  const offerIdStr = opts.offerId !== void 0 ? opts.offerId.toString() : "0";
  const offerId = index.Int64.fromString(offerIdStr);
  const manageBuyOfferOp$1 = new manageBuyOfferOp.ManageBuyOfferOp({
    selling,
    buying,
    buyAmount,
    price,
    offerId
  });
  const opAttributes = {
    sourceAccount: null,
    body: operationBody.OperationBody.manageBuyOffer(manageBuyOfferOp$1)
  };
  operations.setSourceAccount(opAttributes, opts);
  return new operation.Operation(opAttributes);
}

exports.manageBuyOffer = manageBuyOffer;
//# sourceMappingURL=manage_buy_offer.js.map
