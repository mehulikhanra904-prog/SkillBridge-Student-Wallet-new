import { BigIntValue } from "../values/bigint-value.js";
import { type Int128PartsWire } from "../generated/int128-parts.js";
export declare class Int128 extends BigIntValue {
    static readonly signed = true;
    static readonly bits: 128;
    static readonly MIN_VALUE: bigint;
    static readonly MAX_VALUE: bigint;
    static readonly schema: import("@stellar/js-xdr").XdrType<Int128PartsWire>;
    toXdrObject(): Int128PartsWire;
    toParts(): Int128PartsWire;
    static fromXdrObject(wire: Int128PartsWire): Int128;
}
