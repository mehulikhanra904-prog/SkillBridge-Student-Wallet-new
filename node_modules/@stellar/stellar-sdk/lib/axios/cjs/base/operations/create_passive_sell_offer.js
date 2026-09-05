'use strict';

var operations = require('../util/operations.js');
require('../../xdr/index.js');
var createPassiveSellOfferOp = require('../../xdr/generated/create-passive-sell-offer-op.js');
var operationBody = require('../../xdr/generated/operation-body.js');
var operation = require('../../xdr/generated/operation.js');

function createPassiveSellOffer(opts) {
  const selling = opts.selling.toXdrObject();
  const buying = opts.buying.toXdrObject();
  if (!operations.isValidAmount(opts.amount)) {
    throw new TypeError(operations.constructAmountRequirementsError("amount"));
  }
  const amount = operations.toXdrAmount(opts.amount);
  if (opts.price === void 0) {
    throw new TypeError("price argument is required");
  }
  const price = operations.toXdrPrice(opts.price);
  const createPassiveSellOfferOp$1 = new createPassiveSellOfferOp.CreatePassiveSellOfferOp({
    selling,
    buying,
    amount,
    price
  });
  const opAttributes = {
    sourceAccount: null,
    body: operationBody.OperationBody.createPassiveSellOffer(createPassiveSellOfferOp$1)
  };
  operations.setSourceAccount(opAttributes, opts);
  return new operation.Operation(opAttributes);
}

exports.createPassiveSellOffer = createPassiveSellOffer;
//# sourceMappingURL=create_passive_sell_offer.js.map
