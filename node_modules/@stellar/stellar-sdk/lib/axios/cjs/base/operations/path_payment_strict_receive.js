'use strict';

require('../../xdr/index.js');
var decode_encode_muxed_account = require('../util/decode_encode_muxed_account.js');
var operations = require('../util/operations.js');
var pathPaymentStrictReceiveOp = require('../../xdr/generated/path-payment-strict-receive-op.js');
var operationBody = require('../../xdr/generated/operation-body.js');
var operation = require('../../xdr/generated/operation.js');

function pathPaymentStrictReceive(opts) {
  if (!opts.sendAsset) {
    throw new Error("Must specify a send asset");
  }
  if (!operations.isValidAmount(opts.sendMax)) {
    throw new TypeError(operations.constructAmountRequirementsError("sendMax"));
  }
  if (!opts.destAsset) {
    throw new Error("Must provide a destAsset for a payment operation");
  }
  if (!operations.isValidAmount(opts.destAmount)) {
    throw new TypeError(operations.constructAmountRequirementsError("destAmount"));
  }
  let destination;
  try {
    destination = decode_encode_muxed_account.decodeAddressToMuxedAccount(opts.destination);
  } catch {
    throw new Error("destination is invalid");
  }
  const path = opts.path ? opts.path : [];
  const paymentOp = new pathPaymentStrictReceiveOp.PathPaymentStrictReceiveOp({
    sendAsset: opts.sendAsset.toXdrObject(),
    sendMax: operations.toXdrAmount(opts.sendMax),
    destination,
    destAsset: opts.destAsset.toXdrObject(),
    destAmount: operations.toXdrAmount(opts.destAmount),
    path: path.map((x) => x.toXdrObject())
  });
  const opAttributes = {
    sourceAccount: null,
    body: operationBody.OperationBody.pathPaymentStrictReceive(paymentOp)
  };
  operations.setSourceAccount(opAttributes, opts);
  return new operation.Operation(opAttributes);
}

exports.pathPaymentStrictReceive = pathPaymentStrictReceive;
//# sourceMappingURL=path_payment_strict_receive.js.map
