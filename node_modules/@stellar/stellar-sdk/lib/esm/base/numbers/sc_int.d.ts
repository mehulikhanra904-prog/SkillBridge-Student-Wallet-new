import { XdrLargeInt, type ScIntType } from "./xdr_large_int.js";
/**
 * Provides an easier way to manipulate large numbers for Stellar operations.
 *
 * You can instantiate this "**s**mart **c**ontract integer" value either from
 * bigints, strings, or numbers (whole numbers, or this will throw).
 *
 * If you need to create a native BigInt from a list of integer "parts" (for
 * example, you have a series of encoded 32-bit integers that represent a larger
 * value), you can use the lower level abstraction {@link XdrLargeInt}. For
 * example, you could do `new XdrLargeInt('u128', bytes...).toBigInt()`.
 *
 * @example
 * ```ts
 * import { xdr, ScInt, scValToBigInt } from "@stellar/stellar-sdk";
 *
 * // You have an ScVal from a contract and want to parse it into JS native.
 * const value = xdr.ScVal.fromXdr(someXdr, "base64");
 * const bigi = scValToBigInt(value); // grab it as a BigInt
 * let sci = new ScInt(bigi);
 *
 * sci.toNumber(); // gives native JS type (w/ size check)
 * sci.toBigInt(); // gives the native BigInt value
 * sci.toU64();    // gives ScValType-specific XDR constructs (with size checks)
 *
 * // You have a large value and want to shove it into a contract.
 * sci = new ScInt(0xdeadcafebabedeadn);
 * sci.toBigInt() // returns 16045704242794520237n
 * sci.toNumber() // throws: not in range for Number
 *
 * // Pass any to e.g. a Contract.call(), conversion happens automatically
 * // regardless of the initial type.
 * const scValU128 = sci.toU128();
 * const scValI256 = sci.toI256();
 * const scValU64  = sci.toU64();
 *
 * // Lots of ways to initialize:
 * new ScInt("123456789123456789")
 * new ScInt(123456789123456789n);
 * new ScInt(1n << 140n);
 * new ScInt(-42);
 * new ScInt(scValToBigInt(scValU128)); // from above
 *
 * // If you know the type ahead of time you can specify it directly, rather
 * // than letting it be interpreted from the value you pass in:
 * const i = new ScInt(123456789n, { type: "u256" });
 *
 * // `.value` is the underlying bigint, and each `to*()` hands back a ready
 * // `xdr.ScVal` — there is nothing further to wrap:
 * i.value;                // 123456789n
 * const scv = i.toU256(); // xdr.ScVal, ScValType = U256
 *
 * // The declared type pins the width: a `u256` cannot be re-encoded narrower,
 * // even when the value itself would fit.
 * i.toI64(); // throws RangeError: cannot encode u256 as 64 bits
 * ```
 *
 * @throws a `TypeError` if the `value` is invalid (e.g. floating point), too
 *    large (i.e. exceeds a 256-bit value), doesn't fit in the `opts.type`,
 *    the signedness of `opts.type` doesn't match the input `value`, or a
 *    string `value` can't be parsed as a big integer
 */
export declare class ScInt extends XdrLargeInt {
    /**
     * @param value - a single, integer-like value which will
     *    be interpreted in the smallest appropriate XDR type supported by Stellar
     *    (64, 128, or 256 bit integer values). signed values are supported, though
     *    they are sanity-checked against `opts.type`. if you need 32-bit values,
     *    you can construct them directly without needing this wrapper, e.g.
     *    `xdr.ScVal.scvU32(1234)`.
     * @param opts - an optional object controlling optional parameters
     *   - `type`: specify a type ('i64', 'u64', 'i128', 'u128', 'i256',
     *     or 'u256') to override the default type selection. If not specified, the
     *     smallest type that fits the value is used.
     */
    constructor(value: bigint | number | string, opts?: {
        type?: ScIntType;
        [key: string]: unknown;
    });
}
