import type { XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
export interface Uint256PartsWire {
    hiHi: bigint;
    hiLo: bigint;
    loHi: bigint;
    loLo: bigint;
}
/**
 * ```xdr
 * struct UInt256Parts {
 *     uint64 hi_hi;
 *     uint64 hi_lo;
 *     uint64 lo_hi;
 *     uint64 lo_lo;
 * };
 * ```
 */
export declare class Uint256Parts extends XdrValue {
    readonly hiHi: bigint;
    readonly hiLo: bigint;
    readonly loHi: bigint;
    readonly loLo: bigint;
    static readonly schema: XdrType<Uint256PartsWire>;
    constructor(input: {
        hiHi: bigint;
        hiLo: bigint;
        loHi: bigint;
        loLo: bigint;
    });
    toXdrObject(): Uint256PartsWire;
    static fromXdrObject(wire: Uint256PartsWire): Uint256Parts;
}
