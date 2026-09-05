import '../../xdr/index.js';
import { Keypair } from '../keypair.js';
import { StrKey } from '../strkey.js';
import { isValidAmount, constructAmountRequirementsError, toXdrAmount, setSourceAccount } from '../util/operations.js';
import { CreateAccountOp } from '../../xdr/generated/create-account-op.js';
import { OperationBody } from '../../xdr/generated/operation-body.js';
import { Operation } from '../../xdr/generated/operation.js';

function createAccount(opts) {
  if (!StrKey.isValidEd25519PublicKey(opts.destination)) {
    throw new Error("destination is invalid");
  }
  if (!isValidAmount(opts.startingBalance, true)) {
    throw new TypeError(constructAmountRequirementsError("startingBalance"));
  }
  const createAccountOp = new CreateAccountOp({
    destination: Keypair.fromPublicKey(opts.destination).xdrAccountId(),
    startingBalance: toXdrAmount(opts.startingBalance)
  });
  const opAttributes = {
    sourceAccount: null,
    body: OperationBody.createAccount(createAccountOp)
  };
  setSourceAccount(opAttributes, opts);
  return new Operation(opAttributes);
}

export { createAccount };
//# sourceMappingURL=create_account.js.map
