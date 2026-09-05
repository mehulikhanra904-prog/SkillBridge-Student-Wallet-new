import { Operation } from "../../xdr/index.js";
import { AccountMergeOpts } from "./types.js";
/**
 * Transfers native balance to destination account.
 *
 * @param opts - options object
 *   - `destination`: destination to merge the source account into
 *   - `source`: operation source account (defaults to
 *     transaction source)
 */
export declare function accountMerge(opts: AccountMergeOpts): Operation;
