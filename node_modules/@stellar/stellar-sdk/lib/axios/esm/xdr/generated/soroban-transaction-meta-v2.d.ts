import type { XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { SorobanTransactionMetaExt, type SorobanTransactionMetaExtWire } from "./soroban-transaction-meta-ext.js";
import { ScVal, type ScValWire } from "./sc-val.js";
export interface SorobanTransactionMetaV2Wire {
    ext: SorobanTransactionMetaExtWire;
    returnValue: ScValWire | null;
}
/**
 * ```xdr
 * struct SorobanTransactionMetaV2
 * {
 *     SorobanTransactionMetaExt ext;
 *
 *     SCVal* returnValue;
 * };
 * ```
 */
export declare class SorobanTransactionMetaV2 extends XdrValue {
    readonly ext: SorobanTransactionMetaExt;
    readonly returnValue: ScVal | null;
    static readonly schema: XdrType<SorobanTransactionMetaV2Wire>;
    constructor(input: {
        ext: SorobanTransactionMetaExt;
        returnValue: ScVal | null;
    });
    toXdrObject(): SorobanTransactionMetaV2Wire;
    static fromXdrObject(wire: SorobanTransactionMetaV2Wire): SorobanTransactionMetaV2;
}
