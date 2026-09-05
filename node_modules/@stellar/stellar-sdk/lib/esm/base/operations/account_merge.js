import '../../xdr/index.js';
import { decodeAddressToMuxedAccount } from '../util/decode_encode_muxed_account.js';
import { setSourceAccount } from '../util/operations.js';
import { OperationBody } from '../../xdr/generated/operation-body.js';
import { Operation } from '../../xdr/generated/operation.js';

function accountMerge(opts) {
  let body;
  try {
    body = OperationBody.accountMerge(
      decodeAddressToMuxedAccount(opts.destination)
    );
  } catch {
    throw new Error("destination is invalid");
  }
  const opAttributes = {
    sourceAccount: null,
    body
  };
  setSourceAccount(opAttributes, opts);
  return new Operation(opAttributes);
}

export { accountMerge };
//# sourceMappingURL=account_merge.js.map
