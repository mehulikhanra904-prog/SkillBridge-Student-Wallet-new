import type { XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { PublicKey, type PublicKeyWire } from "./public-key.js";
import { AccountEntryExtensionV2Ext, type AccountEntryExtensionV2ExtWire } from "./account-entry-extension-v2-ext.js";
export interface AccountEntryExtensionV2Wire {
    numSponsored: number;
    numSponsoring: number;
    signerSponsoringIDs: (PublicKeyWire | null)[];
    ext: AccountEntryExtensionV2ExtWire;
}
/**
 * ```xdr
 * struct AccountEntryExtensionV2
 * {
 *     uint32 numSponsored;
 *     uint32 numSponsoring;
 *     SponsorshipDescriptor signerSponsoringIDs<MAX_SIGNERS>;
 *
 *     union switch (int v)
 *     {
 *     case 0:
 *         void;
 *     case 3:
 *         AccountEntryExtensionV3 v3;
 *     }
 *     ext;
 * };
 * ```
 */
export declare class AccountEntryExtensionV2 extends XdrValue {
    readonly numSponsored: number;
    readonly numSponsoring: number;
    readonly signerSponsoringIDs: (PublicKey | null)[];
    readonly ext: AccountEntryExtensionV2Ext;
    static readonly schema: XdrType<AccountEntryExtensionV2Wire>;
    constructor(input: {
        numSponsored: number;
        numSponsoring: number;
        signerSponsoringIDs: (PublicKey | null)[];
        ext: AccountEntryExtensionV2Ext;
    });
    toXdrObject(): AccountEntryExtensionV2Wire;
    static fromXdrObject(wire: AccountEntryExtensionV2Wire): AccountEntryExtensionV2;
}
