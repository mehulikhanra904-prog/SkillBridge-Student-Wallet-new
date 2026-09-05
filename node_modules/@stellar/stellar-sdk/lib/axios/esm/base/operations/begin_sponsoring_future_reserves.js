import '../../xdr/index.js';
import { StrKey } from '../strkey.js';
import { Keypair } from '../keypair.js';
import { setSourceAccount } from '../util/operations.js';
import { BeginSponsoringFutureReservesOp } from '../../xdr/generated/begin-sponsoring-future-reserves-op.js';
import { OperationBody } from '../../xdr/generated/operation-body.js';
import { Operation } from '../../xdr/generated/operation.js';

function beginSponsoringFutureReserves(opts) {
  if (!StrKey.isValidEd25519PublicKey(opts.sponsoredId)) {
    throw new Error("sponsoredId is invalid");
  }
  const op = new BeginSponsoringFutureReservesOp({
    sponsoredId: Keypair.fromPublicKey(opts.sponsoredId).xdrAccountId()
  });
  const opAttributes = {
    sourceAccount: null,
    body: OperationBody.beginSponsoringFutureReserves(op)
  };
  setSourceAccount(opAttributes, opts);
  return new Operation(opAttributes);
}

export { beginSponsoringFutureReserves };
//# sourceMappingURL=begin_sponsoring_future_reserves.js.map
