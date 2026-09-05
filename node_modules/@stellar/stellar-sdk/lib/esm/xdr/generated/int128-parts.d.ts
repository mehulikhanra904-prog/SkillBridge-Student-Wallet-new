import type { XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
export interface Int128PartsWire {
    hi: bigint;
    lo: bigint;
}
/**
 * ```xdr
 * struct Int128Parts {
 *     int64 hi;
 *     uint64 lo;
 * };
 * ```
 */
export declare class Int128Parts extends XdrValue {
    readonly hi: bigint;
    readonly lo: bigint;
    static readonly schema: XdrType<Int128PartsWire>;
    constructor(input: {
        hi: bigint;
        lo: bigint;
    });
    toXdrObject(): Int128PartsWire;
    static fromXdrObject(wire: Int128PartsWire): Int128Parts;
}
