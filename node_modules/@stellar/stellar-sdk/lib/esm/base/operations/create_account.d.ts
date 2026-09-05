import { Operation } from "../../xdr/index.js";
import { CreateAccountOpts } from "./types.js";
/**
 * Create and fund a non-existent account.
 *
 * @param opts - Options object
 *   - `destination`: Destination account ID to create an account for.
 *   - `startingBalance`: Amount in XLM the account should be funded for. Must be greater
 *     than the {@link https://developers.stellar.org/docs/glossary/fees/ | reserve balance amount}.
 *   - `source`: The source account for the payment. Defaults to the transaction's source account.
 */
export declare function createAccount(opts: CreateAccountOpts): Operation;
