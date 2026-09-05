'use strict';

var operations = require('../util/operations.js');
require('../../xdr/index.js');
var claimableBalanceId = require('../../xdr/generated/claimable-balance-id.js');
var claimClaimableBalanceOp = require('../../xdr/generated/claim-claimable-balance-op.js');
var operationBody = require('../../xdr/generated/operation-body.js');
var operation = require('../../xdr/generated/operation.js');

function claimClaimableBalance(opts = {}) {
  validateClaimableBalanceId(opts.balanceId);
  const balanceId = claimableBalanceId.ClaimableBalanceId.fromXdr(
    opts.balanceId,
    "hex"
  );
  const claimClaimableBalanceOp$1 = new claimClaimableBalanceOp.ClaimClaimableBalanceOp({
    balanceId
  });
  const opAttributes = {
    sourceAccount: null,
    body: operationBody.OperationBody.claimClaimableBalance(claimClaimableBalanceOp$1)
  };
  operations.setSourceAccount(opAttributes, opts);
  return new operation.Operation(opAttributes);
}
function validateClaimableBalanceId(balanceId) {
  if (typeof balanceId !== "string" || balanceId.length !== 8 + 64) {
    throw new Error("must provide a valid claimable balance id");
  }
}

exports.claimClaimableBalance = claimClaimableBalance;
exports.validateClaimableBalanceId = validateClaimableBalanceId;
//# sourceMappingURL=claim_claimable_balance.js.map
