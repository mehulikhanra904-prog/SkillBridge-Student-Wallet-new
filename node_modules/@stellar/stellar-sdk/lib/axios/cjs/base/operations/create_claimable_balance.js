'use strict';

require('../../xdr/index.js');
var asset = require('../asset.js');
var operations = require('../util/operations.js');
var createClaimableBalanceOp = require('../../xdr/generated/create-claimable-balance-op.js');
var operationBody = require('../../xdr/generated/operation-body.js');
var operation = require('../../xdr/generated/operation.js');

function createClaimableBalance(opts) {
  if (!(opts.asset instanceof asset.Asset)) {
    throw new Error(
      "must provide an asset for create claimable balance operation"
    );
  }
  if (!operations.isValidAmount(opts.amount)) {
    throw new TypeError(operations.constructAmountRequirementsError("amount"));
  }
  if (!Array.isArray(opts.claimants) || opts.claimants.length === 0) {
    throw new Error("must provide at least one claimant");
  }
  const asset$1 = opts.asset.toXdrObject();
  const amount = operations.toXdrAmount(opts.amount);
  const claimants = opts.claimants.map((c) => c.toXdrObject());
  const createClaimableBalanceOp$1 = new createClaimableBalanceOp.CreateClaimableBalanceOp({
    asset: asset$1,
    amount,
    claimants
  });
  const opAttributes = {
    sourceAccount: null,
    body: operationBody.OperationBody.createClaimableBalance(createClaimableBalanceOp$1)
  };
  operations.setSourceAccount(opAttributes, opts);
  return new operation.Operation(opAttributes);
}

exports.createClaimableBalance = createClaimableBalance;
//# sourceMappingURL=create_claimable_balance.js.map
