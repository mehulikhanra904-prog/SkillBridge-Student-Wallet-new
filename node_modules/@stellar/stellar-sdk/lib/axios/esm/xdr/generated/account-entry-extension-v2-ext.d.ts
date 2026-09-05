import { type XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { AccountEntryExtensionV3, type AccountEntryExtensionV3Wire } from "./account-entry-extension-v3.js";
export type AccountEntryExtensionV2ExtWire = {
    v: 0;
} | {
    v: 3;
    v3: AccountEntryExtensionV3Wire;
};
export type AccountEntryExtensionV2ExtVariantName = "v0" | "v3";
/**
 * ```xdr
 * union switch (int v)
 *     {
 *     case 0:
 *         void;
 *     case 3:
 *         AccountEntryExtensionV3 v3;
 *     }
 * ```
 */
declare abstract class AccountEntryExtensionV2ExtBase extends XdrValue {
    abstract readonly type: AccountEntryExtensionV2ExtVariantName;
    constructor();
    static readonly schema: XdrType<AccountEntryExtensionV2ExtWire>;
    static v0(): AccountEntryExtensionV2ExtV0;
    static v3(v3: AccountEntryExtensionV3): AccountEntryExtensionV2ExtV3;
    static fromXdrObject(wire: AccountEntryExtensionV2ExtWire): AccountEntryExtensionV2Ext;
    /**
     * Type guard narrowing an unknown value to a concrete AccountEntryExtensionV2Ext variant.
     * Use this instead of `instanceof AccountEntryExtensionV2Ext`: the exported `AccountEntryExtensionV2Ext` value
     * is the abstract base, so `instanceof` narrows to the base (not the
     * variant union) and forces a cast. `AccountEntryExtensionV2Ext.is(x)` narrows to the union.
     */
    static is(value: unknown): value is AccountEntryExtensionV2Ext;
    abstract toXdrObject(): AccountEntryExtensionV2ExtWire;
}
export declare class AccountEntryExtensionV2ExtV0 extends AccountEntryExtensionV2ExtBase {
    readonly type: "v0";
    get value(): null;
    toXdrObject(): Extract<AccountEntryExtensionV2ExtWire, {
        v: 0;
    }>;
}
export declare class AccountEntryExtensionV2ExtV3 extends AccountEntryExtensionV2ExtBase {
    readonly type: "v3";
    readonly v3: AccountEntryExtensionV3;
    constructor(v3: AccountEntryExtensionV3);
    get value(): AccountEntryExtensionV3;
    toXdrObject(): Extract<AccountEntryExtensionV2ExtWire, {
        v: 3;
    }>;
}
export type AccountEntryExtensionV2Ext = AccountEntryExtensionV2ExtV0 | AccountEntryExtensionV2ExtV3;
export declare const AccountEntryExtensionV2Ext: typeof AccountEntryExtensionV2ExtBase;
export {};
