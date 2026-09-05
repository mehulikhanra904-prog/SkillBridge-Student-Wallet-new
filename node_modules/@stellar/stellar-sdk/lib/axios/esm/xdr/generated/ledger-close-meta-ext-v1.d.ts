import type { XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { ExtensionPoint, type ExtensionPointWire } from "./extension-point.js";
export interface LedgerCloseMetaExtV1Wire {
    ext: ExtensionPointWire;
    sorobanFeeWrite1Kb: bigint;
}
/**
 * ```xdr
 * struct LedgerCloseMetaExtV1
 * {
 *     ExtensionPoint ext;
 *     int64 sorobanFeeWrite1KB;
 * };
 * ```
 */
export declare class LedgerCloseMetaExtV1 extends XdrValue {
    readonly ext: ExtensionPoint;
    readonly sorobanFeeWrite1Kb: bigint;
    static readonly schema: XdrType<LedgerCloseMetaExtV1Wire>;
    constructor(input: {
        ext: ExtensionPoint;
        sorobanFeeWrite1Kb: bigint;
    });
    toXdrObject(): LedgerCloseMetaExtV1Wire;
    static fromXdrObject(wire: LedgerCloseMetaExtV1Wire): LedgerCloseMetaExtV1;
}
