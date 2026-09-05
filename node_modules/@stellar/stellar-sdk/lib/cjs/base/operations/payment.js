'use strict';

require('../../xdr/index.js');
var decode_encode_muxed_account = require('../util/decode_encode_muxed_account.js');
var operations = require('../util/operations.js');
var paymentOp = require('../../xdr/generated/payment-op.js');
var operationBody = require('../../xdr/generated/operation-body.js');
var operation = require('../../xdr/generated/operation.js');

function payment(opts) {
  if (!opts.asset) {
    throw new Error("Must provide an asset for a payment operation");
  }
  if (!operations.isValidAmount(opts.amount)) {
    throw new TypeError(operations.constructAmountRequirementsError("amount"));
  }
  let destination;
  try {
    destination = decode_encode_muxed_account.decodeAddressToMuxedAccount(opts.destination);
  } catch {
    throw new Error("destination is invalid");
  }
  const paymentOp$1 = new paymentOp.PaymentOp({
    destination,
    asset: opts.asset.toXdrObject(),
    amount: operations.toXdrAmount(opts.amount)
  });
  const opAttributes = {
    sourceAccount: null,
    body: operationBody.OperationBody.payment(paymentOp$1)
  };
  operations.setSourceAccount(opAttributes, opts);
  return new operation.Operation(opAttributes);
}

exports.payment = payment;
//# sourceMappingURL=payment.js.map
