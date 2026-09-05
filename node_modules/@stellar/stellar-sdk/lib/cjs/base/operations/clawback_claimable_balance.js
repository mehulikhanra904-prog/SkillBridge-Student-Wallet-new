'use strict';

var operations = require('../util/operations.js');
require('../../xdr/index.js');
var claim_claimable_balance = require('./claim_claimable_balance.js');
var clawbackClaimableBalanceOp = require('../../xdr/generated/clawback-claimable-balance-op.js');
var claimableBalanceId = require('../../xdr/generated/claimable-balance-id.js');
var operationBody = require('../../xdr/generated/operation-body.js');
var operation = require('../../xdr/generated/operation.js');

function clawbackClaimableBalance(opts = {}) {
  claim_claimable_balance.validateClaimableBalanceId(opts.balanceId);
  const balanceId = claimableBalanceId.ClaimableBalanceId.fromXdr(
    opts.balanceId,
    "hex"
  );
  const opAttributes = {
    sourceAccount: null,
    body: operationBody.OperationBody.clawbackClaimableBalance(
      new clawbackClaimableBalanceOp.ClawbackClaimableBalanceOp({ balanceId })
    )
  };
  operations.setSourceAccount(opAttributes, opts);
  return new operation.Operation(opAttributes);
}

exports.clawbackClaimableBalance = clawbackClaimableBalance;
//# sourceMappingURL=clawback_claimable_balance.js.map
