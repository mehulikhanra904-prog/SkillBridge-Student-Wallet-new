import type { XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
export interface LedgerBoundsWire {
    minLedger: number;
    maxLedger: number;
}
/**
 * ```xdr
 * struct LedgerBounds
 * {
 *     uint32 minLedger;
 *     uint32 maxLedger; // 0 here means no maxLedger
 * };
 * ```
 */
export declare class LedgerBounds extends XdrValue {
    readonly minLedger: number;
    readonly maxLedger: number;
    static readonly schema: XdrType<LedgerBoundsWire>;
    constructor(input: {
        minLedger: number;
        maxLedger: number;
    });
    toXdrObject(): LedgerBoundsWire;
    static fromXdrObject(wire: LedgerBoundsWire): LedgerBounds;
}
