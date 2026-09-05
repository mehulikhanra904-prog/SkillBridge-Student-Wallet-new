'use strict';

require('../../xdr/index.js');
var decode_encode_muxed_account = require('../util/decode_encode_muxed_account.js');
var operations = require('../util/operations.js');
var operationBody = require('../../xdr/generated/operation-body.js');
var operation = require('../../xdr/generated/operation.js');

function accountMerge(opts) {
  let body;
  try {
    body = operationBody.OperationBody.accountMerge(
      decode_encode_muxed_account.decodeAddressToMuxedAccount(opts.destination)
    );
  } catch {
    throw new Error("destination is invalid");
  }
  const opAttributes = {
    sourceAccount: null,
    body
  };
  operations.setSourceAccount(opAttributes, opts);
  return new operation.Operation(opAttributes);
}

exports.accountMerge = accountMerge;
//# sourceMappingURL=account_merge.js.map
