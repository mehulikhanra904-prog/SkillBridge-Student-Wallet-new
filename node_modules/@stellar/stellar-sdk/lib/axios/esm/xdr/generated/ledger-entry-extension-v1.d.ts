import type { XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { PublicKey, type PublicKeyWire } from "./public-key.js";
import { LedgerEntryExtensionV1Ext, type LedgerEntryExtensionV1ExtWire } from "./ledger-entry-extension-v1-ext.js";
export interface LedgerEntryExtensionV1Wire {
    sponsoringId: PublicKeyWire | null;
    ext: LedgerEntryExtensionV1ExtWire;
}
/**
 * ```xdr
 * struct LedgerEntryExtensionV1
 * {
 *     SponsorshipDescriptor sponsoringID;
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
export declare class LedgerEntryExtensionV1 extends XdrValue {
    readonly sponsoringId: PublicKey | null;
    readonly ext: LedgerEntryExtensionV1Ext;
    static readonly schema: XdrType<LedgerEntryExtensionV1Wire>;
    constructor(input: {
        sponsoringId: PublicKey | null;
        ext: LedgerEntryExtensionV1Ext;
    });
    toXdrObject(): LedgerEntryExtensionV1Wire;
    static fromXdrObject(wire: LedgerEntryExtensionV1Wire): LedgerEntryExtensionV1;
}
