import { BigIntValue } from "../values/bigint-value.js";
import { type Uint128PartsWire } from "../generated/uint128-parts.js";
export declare class Uint128 extends BigIntValue {
    static readonly signed = false;
    static readonly bits: 128;
    static readonly MIN_VALUE: bigint;
    static readonly MAX_VALUE: bigint;
    static readonly schema: import("@stellar/js-xdr").XdrType<Uint128PartsWire>;
    toXdrObject(): Uint128PartsWire;
    toParts(): Uint128PartsWire;
    static fromXdrObject(wire: Uint128PartsWire): Uint128;
}
