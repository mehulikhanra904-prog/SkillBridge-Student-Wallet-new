import { setSourceAccount } from '../util/operations.js';
import '../../xdr/index.js';
import { ExtendFootprintTtlOp } from '../../xdr/generated/extend-footprint-ttl-op.js';
import { ExtensionPoint } from '../../xdr/generated/extension-point.js';
import { OperationBody } from '../../xdr/generated/operation-body.js';
import { Operation } from '../../xdr/generated/operation.js';

function extendFootprintTtl(opts) {
  if ((opts.extendTo ?? -1) <= 0) {
    throw new RangeError("extendTo has to be positive");
  }
  const extendFootprintOp = new ExtendFootprintTtlOp({
    ext: ExtensionPoint.v0(),
    extendTo: opts.extendTo
  });
  const opAttributes = {
    sourceAccount: null,
    body: OperationBody.extendFootprintTtl(extendFootprintOp)
  };
  setSourceAccount(opAttributes, opts);
  return new Operation(opAttributes);
}

export { extendFootprintTtl };
//# sourceMappingURL=extend_footprint_ttl.js.map
