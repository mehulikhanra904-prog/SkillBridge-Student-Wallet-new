import { XdrValue, type JsonValue } from "./xdr-value.js";
export { bigIntTo128Parts, partsTo128BigInt, bigIntTo256Parts, partsTo256BigInt, type Int128Parts, type Int256Parts, } from "./bigint-parts.js";
/**
 * Base for wide-int classes (Int128 / Uint128 / Int256 / Uint256).
 * Subclasses set `static readonly signed` and `static readonly bits` and
 * implement `toParts()`/`fromParts()` for wire-shape bridging.
 */
export declare abstract class BigIntValue extends XdrValue {
    readonly value: bigint;
    constructor(value: bigint | number | string, ...legacySlices: never[]);
    toJson(): JsonValue;
}
