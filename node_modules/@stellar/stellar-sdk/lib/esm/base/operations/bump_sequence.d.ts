import { Operation } from "../../xdr/index.js";
import { BumpSequenceOpts } from "./types.js";
/**
 * This operation bumps sequence number.
 * @param opts - Options object
 *   - `bumpTo`: Sequence number to bump to.
 *   - `source`: The optional source account.
 */
export declare function bumpSequence(opts: BumpSequenceOpts): Operation;
