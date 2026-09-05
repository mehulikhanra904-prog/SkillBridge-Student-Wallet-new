import type { XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
export interface Int256PartsWire {
    hiHi: bigint;
    hiLo: bigint;
    loHi: bigint;
    loLo: bigint;
}
/**
 * ```xdr
 * struct Int256Parts {
 *     int64 hi_hi;
 *     uint64 hi_lo;
 *     uint64 lo_hi;
 *     uint64 lo_lo;
 * };
 * ```
 */
export declare class Int256Parts extends XdrValue {
    readonly hiHi: bigint;
    readonly hiLo: bigint;
    readonly loHi: bigint;
    readonly loLo: bigint;
    static readonly schema: XdrType<Int256PartsWire>;
    constructor(input: {
        hiHi: bigint;
        hiLo: bigint;
        loHi: bigint;
        loLo: bigint;
    });
    toXdrObject(): Int256PartsWire;
    static fromXdrObject(wire: Int256PartsWire): Int256Parts;
}
