'use strict';

require('../../xdr/index.js');
var decode_encode_muxed_account = require('../util/decode_encode_muxed_account.js');
var operations = require('../util/operations.js');
var pathPaymentStrictSendOp = require('../../xdr/generated/path-payment-strict-send-op.js');
var operationBody = require('../../xdr/generated/operation-body.js');
var operation = require('../../xdr/generated/operation.js');

function pathPaymentStrictSend(opts) {
  if (!opts.sendAsset) {
    throw new Error("Must specify a send asset");
  }
  if (!operations.isValidAmount(opts.sendAmount)) {
    throw new TypeError(operations.constructAmountRequirementsError("sendAmount"));
  }
  if (!opts.destAsset) {
    throw new Error("Must provide a destAsset for a payment operation");
  }
  if (!operations.isValidAmount(opts.destMin)) {
    throw new TypeError(operations.constructAmountRequirementsError("destMin"));
  }
  const sendAsset = opts.sendAsset.toXdrObject();
  const sendAmount = operations.toXdrAmount(opts.sendAmount);
  let destination;
  try {
    destination = decode_encode_muxed_account.decodeAddressToMuxedAccount(opts.destination);
  } catch {
    throw new Error("destination is invalid");
  }
  const destAsset = opts.destAsset.toXdrObject();
  const destMin = operations.toXdrAmount(opts.destMin);
  const path = (opts.path ?? []).map((x) => x.toXdrObject());
  const payment = new pathPaymentStrictSendOp.PathPaymentStrictSendOp({
    sendAsset,
    sendAmount,
    destination,
    destAsset,
    destMin,
    path
  });
  const opAttributes = {
    sourceAccount: null,
    body: operationBody.OperationBody.pathPaymentStrictSend(payment)
  };
  operations.setSourceAccount(opAttributes, opts);
  return new operation.Operation(opAttributes);
}

exports.pathPaymentStrictSend = pathPaymentStrictSend;
//# sourceMappingURL=path_payment_strict_send.js.map
