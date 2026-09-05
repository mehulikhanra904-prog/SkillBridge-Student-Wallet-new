import type { XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
export interface LiabilitiesWire {
    buying: bigint;
    selling: bigint;
}
/**
 * ```xdr
 * struct Liabilities
 * {
 *     int64 buying;
 *     int64 selling;
 * };
 * ```
 */
export declare class Liabilities extends XdrValue {
    readonly buying: bigint;
    readonly selling: bigint;
    static readonly schema: XdrType<LiabilitiesWire>;
    constructor(input: {
        buying: bigint;
        selling: bigint;
    });
    toXdrObject(): LiabilitiesWire;
    static fromXdrObject(wire: LiabilitiesWire): Liabilities;
}
