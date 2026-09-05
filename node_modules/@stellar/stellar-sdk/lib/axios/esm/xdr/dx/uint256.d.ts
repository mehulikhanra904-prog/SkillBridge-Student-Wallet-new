import { BigIntValue } from "../values/bigint-value.js";
import { type Uint256PartsWire } from "../generated/uint256-parts.js";
export declare class Uint256 extends BigIntValue {
    static readonly signed = false;
    static readonly bits: 256;
    static readonly MIN_VALUE: bigint;
    static readonly MAX_VALUE: bigint;
    static readonly schema: import("@stellar/js-xdr").XdrType<Uint256PartsWire>;
    toXdrObject(): Uint256PartsWire;
    toParts(): Uint256PartsWire;
    static fromXdrObject(wire: Uint256PartsWire): Uint256;
}
