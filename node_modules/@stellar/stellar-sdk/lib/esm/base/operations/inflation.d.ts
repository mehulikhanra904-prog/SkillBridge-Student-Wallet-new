import { Operation } from "../../xdr/index.js";
import { InflationOpts } from "./types.js";
/**
 * This operation generates the inflation.
 * @param opts - Options object
 *   - `source`: The optional source account.
 */
export declare function inflation(opts?: InflationOpts): Operation;
