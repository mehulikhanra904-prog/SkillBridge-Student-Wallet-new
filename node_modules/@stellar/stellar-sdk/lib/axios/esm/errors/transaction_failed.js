import '../xdr/index.js';
import '@noble/hashes/sha2.js';
import 'uint8array-extras';
import '../base/signing.js';
import '../base/keypair.js';
import '@exodus/bytes/base32.js';
import '../base/util/continued_fraction.js';
import '../base/util/bignumber.js';
import '../base/muxed_account.js';
import '@stellar/js-xdr';
import { BadResponseError } from './bad_response.js';
import { TransactionResult } from '../xdr/generated/transaction-result.js';

class TransactionFailedError extends BadResponseError {
  /**
   * Returns the transaction- and operation-level result codes reported by
   * Horizon, e.g. `{ transaction: "tx_failed", operations: ["op_underfunded"] }`.
   *
   * Horizon omits `operations` when the transaction failed a
   * transaction-level check (e.g. `tx_bad_seq`) and no operations were
   * evaluated; this accessor normalizes that to an empty array.
   *
   * @returns The `result_codes` object from the response's `extras`.
   */
  getResultCodes() {
    const { transaction, operations = [] } = this.extras().result_codes;
    return { transaction, operations };
  }
  /**
   * Decodes and returns the {@link xdr.TransactionResult} from the response's
   * `extras.result_xdr`, providing structured access to per-operation results.
   *
   * @returns The decoded transaction result, or `null` if the response did not
   *   include a `result_xdr`.
   * @throws If the server returned a `result_xdr` that is not valid base64-encoded
   *   {@link xdr.TransactionResult} XDR.
   */
  getTransactionResult() {
    const resultXdr = this.extras().result_xdr;
    if (!resultXdr) {
      return null;
    }
    return TransactionResult.fromXdr(resultXdr, "base64");
  }
  extras() {
    return this.response.data.extras;
  }
}

export { TransactionFailedError };
//# sourceMappingURL=transaction_failed.js.map
