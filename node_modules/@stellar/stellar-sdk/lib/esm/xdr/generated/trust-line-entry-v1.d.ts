import type { XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { Liabilities, type LiabilitiesWire } from "./liabilities.js";
import { TrustLineEntryV1Ext, type TrustLineEntryV1ExtWire } from "./trust-line-entry-v1-ext.js";
export interface TrustLineEntryV1Wire {
    liabilities: LiabilitiesWire;
    ext: TrustLineEntryV1ExtWire;
}
/**
 * ```xdr
 * struct
 *         {
 *             Liabilities liabilities;
 *
 *             union switch (int v)
 *             {
 *             case 0:
 *                 void;
 *             case 2:
 *                 TrustLineEntryExtensionV2 v2;
 *             }
 *             ext;
 *         }
 * ```
 */
export declare class TrustLineEntryV1 extends XdrValue {
    readonly liabilities: Liabilities;
    readonly ext: TrustLineEntryV1Ext;
    static readonly schema: XdrType<TrustLineEntryV1Wire>;
    constructor(input: {
        liabilities: Liabilities;
        ext: TrustLineEntryV1Ext;
    });
    toXdrObject(): TrustLineEntryV1Wire;
    static fromXdrObject(wire: TrustLineEntryV1Wire): TrustLineEntryV1;
}
