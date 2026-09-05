import { BigIntValue } from "../values/bigint-value.js";
import { type Int256PartsWire } from "../generated/int256-parts.js";
export declare class Int256 extends BigIntValue {
    static readonly signed = true;
    static readonly bits: 256;
    static readonly MIN_VALUE: bigint;
    static readonly MAX_VALUE: bigint;
    static readonly schema: import("@stellar/js-xdr").XdrType<Int256PartsWire>;
    toXdrObject(): Int256PartsWire;
    toParts(): Int256PartsWire;
    static fromXdrObject(wire: Int256PartsWire): Int256;
}
