import BigNumber from '../util/bignumber.js';
import { setSourceAccount } from '../util/operations.js';
import { Int64 } from '../../xdr/index.js';
import { BumpSequenceOp } from '../../xdr/generated/bump-sequence-op.js';
import { OperationBody } from '../../xdr/generated/operation-body.js';
import { Operation } from '../../xdr/generated/operation.js';

function bumpSequence(opts) {
  if (typeof opts.bumpTo !== "string") {
    throw new Error("bumpTo must be a string");
  }
  try {
    new BigNumber(opts.bumpTo);
  } catch {
    throw new Error("bumpTo must be a stringified number");
  }
  const bumpTo = Int64.fromString(opts.bumpTo);
  const bumpSequenceOp = new BumpSequenceOp({ bumpTo });
  const opAttributes = {
    sourceAccount: null,
    body: OperationBody.bumpSequence(bumpSequenceOp)
  };
  setSourceAccount(opAttributes, opts);
  return new Operation(opAttributes);
}

export { bumpSequence };
//# sourceMappingURL=bump_sequence.js.map
