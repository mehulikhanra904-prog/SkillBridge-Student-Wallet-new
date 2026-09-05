import type { XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { TrustLineEntryExtensionV2Ext, type TrustLineEntryExtensionV2ExtWire } from "./trust-line-entry-extension-v2-ext.js";
export interface TrustLineEntryExtensionV2Wire {
    liquidityPoolUseCount: number;
    ext: TrustLineEntryExtensionV2ExtWire;
}
/**
 * ```xdr
 * struct TrustLineEntryExtensionV2
 * {
 *     int32 liquidityPoolUseCount;
 *
 *     union switch (int v)
 *     {
 *     case 0:
 *         void;
 *     }
 *     ext;
 * };
 * ```
 */
export declare class TrustLineEntryExtensionV2 extends XdrValue {
    readonly liquidityPoolUseCount: number;
    readonly ext: TrustLineEntryExtensionV2Ext;
    static readonly schema: XdrType<TrustLineEntryExtensionV2Wire>;
    constructor(input: {
        liquidityPoolUseCount: number;
        ext: TrustLineEntryExtensionV2Ext;
    });
    toXdrObject(): TrustLineEntryExtensionV2Wire;
    static fromXdrObject(wire: TrustLineEntryExtensionV2Wire): TrustLineEntryExtensionV2;
}
