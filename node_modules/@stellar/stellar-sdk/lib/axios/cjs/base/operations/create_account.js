'use strict';

require('../../xdr/index.js');
var keypair = require('../keypair.js');
var strkey = require('../strkey.js');
var operations = require('../util/operations.js');
var createAccountOp = require('../../xdr/generated/create-account-op.js');
var operationBody = require('../../xdr/generated/operation-body.js');
var operation = require('../../xdr/generated/operation.js');

function createAccount(opts) {
  if (!strkey.StrKey.isValidEd25519PublicKey(opts.destination)) {
    throw new Error("destination is invalid");
  }
  if (!operations.isValidAmount(opts.startingBalance, true)) {
    throw new TypeError(operations.constructAmountRequirementsError("startingBalance"));
  }
  const createAccountOp$1 = new createAccountOp.CreateAccountOp({
    destination: keypair.Keypair.fromPublicKey(opts.destination).xdrAccountId(),
    startingBalance: operations.toXdrAmount(opts.startingBalance)
  });
  const opAttributes = {
    sourceAccount: null,
    body: operationBody.OperationBody.createAccount(createAccountOp$1)
  };
  operations.setSourceAccount(opAttributes, opts);
  return new operation.Operation(opAttributes);
}

exports.createAccount = createAccount;
//# sourceMappingURL=create_account.js.map
