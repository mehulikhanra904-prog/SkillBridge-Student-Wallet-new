'use strict';

var operations = require('../util/operations.js');
var index = require('../../xdr/index.js');
var manageSellOfferOp = require('../../xdr/generated/manage-sell-offer-op.js');
var operationBody = require('../../xdr/generated/operation-body.js');
var operation = require('../../xdr/generated/operation.js');

function manageSellOffer(opts) {
  const selling = opts.selling.toXdrObject();
  const buying = opts.buying.toXdrObject();
  if (!operations.isValidAmount(opts.amount, true)) {
    throw new TypeError(operations.constructAmountRequirementsError("amount"));
  }
  const amount = operations.toXdrAmount(opts.amount);
  if (opts.price === void 0) {
    throw new TypeError("price argument is required");
  }
  const price = operations.toXdrPrice(opts.price);
  const offerIdStr = opts.offerId !== void 0 ? opts.offerId.toString() : "0";
  const offerId = index.Int64.fromString(offerIdStr);
  const manageSellOfferOp$1 = new manageSellOfferOp.ManageSellOfferOp({
    selling,
    buying,
    amount,
    price,
    offerId
  });
  const opAttributes = {
    sourceAccount: null,
    body: operationBody.OperationBody.manageSellOffer(manageSellOfferOp$1)
  };
  operations.setSourceAccount(opAttributes, opts);
  return new operation.Operation(opAttributes);
}

exports.manageSellOffer = manageSellOffer;
//# sourceMappingURL=manage_sell_offer.js.map
