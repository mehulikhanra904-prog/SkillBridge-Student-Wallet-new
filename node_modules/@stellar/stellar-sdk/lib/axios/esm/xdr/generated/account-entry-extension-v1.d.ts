import type { XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { Liabilities, type LiabilitiesWire } from "./liabilities.js";
import { AccountEntryExtensionV1Ext, type AccountEntryExtensionV1ExtWire } from "./account-entry-extension-v1-ext.js";
export interface AccountEntryExtensionV1Wire {
    liabilities: LiabilitiesWire;
    ext: AccountEntryExtensionV1ExtWire;
}
/**
 * ```xdr
 * struct AccountEntryExtensionV1
 * {
 *     Liabilities liabilities;
 *
 *     union switch (int v)
 *     {
 *     case 0:
 *         void;
 *     case 2:
 *         AccountEntryExtensionV2 v2;
 *     }
 *     ext;
 * };
 * ```
 */
export declare class AccountEntryExtensionV1 extends XdrValue {
    readonly liabilities: Liabilities;
    readonly ext: AccountEntryExtensionV1Ext;
    static readonly schema: XdrType<AccountEntryExtensionV1Wire>;
    constructor(input: {
        liabilities: Liabilities;
        ext: AccountEntryExtensionV1Ext;
    });
    toXdrObject(): AccountEntryExtensionV1Wire;
    static fromXdrObject(wire: AccountEntryExtensionV1Wire): AccountEntryExtensionV1;
}
