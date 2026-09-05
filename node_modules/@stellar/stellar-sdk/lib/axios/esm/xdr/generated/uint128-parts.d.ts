import type { XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
export interface Uint128PartsWire {
    hi: bigint;
    lo: bigint;
}
/**
 * ```xdr
 * struct UInt128Parts {
 *     uint64 hi;
 *     uint64 lo;
 * };
 * ```
 */
export declare class Uint128Parts extends XdrValue {
    readonly hi: bigint;
    readonly lo: bigint;
    static readonly schema: XdrType<Uint128PartsWire>;
    constructor(input: {
        hi: bigint;
        lo: bigint;
    });
    toXdrObject(): Uint128PartsWire;
    static fromXdrObject(wire: Uint128PartsWire): Uint128Parts;
}
