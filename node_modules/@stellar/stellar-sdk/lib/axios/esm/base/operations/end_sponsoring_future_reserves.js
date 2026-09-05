import { setSourceAccount } from '../util/operations.js';
import '../../xdr/index.js';
import { OperationBody } from '../../xdr/generated/operation-body.js';
import { Operation } from '../../xdr/generated/operation.js';

function endSponsoringFutureReserves(opts = {}) {
  const opAttributes = {
    sourceAccount: null,
    body: OperationBody.endSponsoringFutureReserves()
  };
  setSourceAccount(opAttributes, opts);
  return new Operation(opAttributes);
}

export { endSponsoringFutureReserves };
//# sourceMappingURL=end_sponsoring_future_reserves.js.map
