'use strict';

require('../../xdr/index.js');
var decode_encode_muxed_account = require('../util/decode_encode_muxed_account.js');
var operations = require('../util/operations.js');
var clawbackOp = require('../../xdr/generated/clawback-op.js');
var operationBody = require('../../xdr/generated/operation-body.js');
var operation = require('../../xdr/generated/operation.js');

function clawback(opts) {
  if (!operations.isValidAmount(opts.amount)) {
    throw new TypeError(operations.constructAmountRequirementsError("amount"));
  }
  let from;
  try {
    from = decode_encode_muxed_account.decodeAddressToMuxedAccount(opts.from);
  } catch {
    throw new Error("from address is invalid");
  }
  const clawbackOp$1 = new clawbackOp.ClawbackOp({
    amount: operations.toXdrAmount(opts.amount),
    asset: opts.asset.toXdrObject(),
    from
  });
  const opAttributes = {
    sourceAccount: null,
    body: operationBody.OperationBody.clawback(clawbackOp$1)
  };
  operations.setSourceAccount(opAttributes, opts);
  return new operation.Operation(opAttributes);
}

exports.clawback = clawback;
//# sourceMappingURL=clawback.js.map
