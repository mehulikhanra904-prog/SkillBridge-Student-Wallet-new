import type { XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { ClaimableBalanceEntryExtensionV1Ext, type ClaimableBalanceEntryExtensionV1ExtWire } from "./claimable-balance-entry-extension-v1-ext.js";
export interface ClaimableBalanceEntryExtensionV1Wire {
    ext: ClaimableBalanceEntryExtensionV1ExtWire;
    flags: number;
}
/**
 * ```xdr
 * struct ClaimableBalanceEntryExtensionV1
 * {
 *     union switch (int v)
 *     {
 *     case 0:
 *         void;
 *     }
 *     ext;
 *
 *     uint32 flags; // see ClaimableBalanceFlags
 * };
 * ```
 */
export declare class ClaimableBalanceEntryExtensionV1 extends XdrValue {
    readonly ext: ClaimableBalanceEntryExtensionV1Ext;
    readonly flags: number;
    static readonly schema: XdrType<ClaimableBalanceEntryExtensionV1Wire>;
    constructor(input: {
        ext: ClaimableBalanceEntryExtensionV1Ext;
        flags: number;
    });
    toXdrObject(): ClaimableBalanceEntryExtensionV1Wire;
    static fromXdrObject(wire: ClaimableBalanceEntryExtensionV1Wire): ClaimableBalanceEntryExtensionV1;
}
