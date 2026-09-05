import { setSourceAccount } from '../util/operations.js';
import '../../xdr/index.js';
import { OperationBody } from '../../xdr/generated/operation-body.js';
import { Operation } from '../../xdr/generated/operation.js';

function inflation(opts = {}) {
  const opAttributes = {
    sourceAccount: null,
    body: OperationBody.inflation()
  };
  setSourceAccount(opAttributes, opts);
  return new Operation(opAttributes);
}

export { inflation };
//# sourceMappingURL=inflation.js.map
