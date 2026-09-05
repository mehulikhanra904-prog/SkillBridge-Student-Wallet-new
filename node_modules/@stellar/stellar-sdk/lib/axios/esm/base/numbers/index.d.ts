import { ScVal } from "../../xdr/index.js";
import { XdrLargeInt, type ScIntType } from "./xdr_large_int.js";
export { Uint128, Int128, Uint256, Int256 } from "../../xdr/index.js";
export { ScInt } from "./sc_int.js";
export { XdrLargeInt };
export type { ScIntType };
/**
 * Transforms an opaque {@link xdr.ScVal} into a native bigint, if possible.
 *
 * If you then want to use this in the abstractions provided by this module,
 * you can pass it to the constructor of {@link XdrLargeInt}.
 *
 * @example
 * ```ts
 * let scv = contract.call("add", x, y); // assume it returns an xdr.ScVal
 * let bigi = scValToBigInt(scv);
 *
 * new ScInt(bigi);               // if you don't care about types, and
 * new XdrLargeInt('i128', bigi); // if you do
 * ```
 *
 * @param scv - the XDR smart contract value to convert
 *
 * @throws a `TypeError` if the `scv` input value doesn't represent an integer
 */
export declare function scValToBigInt(scv: ScVal): bigint;
