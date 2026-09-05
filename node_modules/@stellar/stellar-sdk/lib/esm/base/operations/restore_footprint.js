import { setSourceAccount } from '../util/operations.js';
import '../../xdr/index.js';
import { RestoreFootprintOp } from '../../xdr/generated/restore-footprint-op.js';
import { ExtensionPoint } from '../../xdr/generated/extension-point.js';
import { OperationBody } from '../../xdr/generated/operation-body.js';
import { Operation } from '../../xdr/generated/operation.js';

function restoreFootprint(opts = {}) {
  const op = new RestoreFootprintOp({
    ext: ExtensionPoint.v0()
  });
  const opAttributes = {
    sourceAccount: null,
    body: OperationBody.restoreFootprint(op)
  };
  setSourceAccount(opAttributes, opts);
  return new Operation(opAttributes);
}

export { restoreFootprint };
//# sourceMappingURL=restore_footprint.js.map
