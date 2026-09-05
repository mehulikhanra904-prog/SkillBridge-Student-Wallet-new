import { type XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { AccountEntryExtensionV2, type AccountEntryExtensionV2Wire } from "./account-entry-extension-v2.js";
export type AccountEntryExtensionV1ExtWire = {
    v: 0;
} | {
    v: 2;
    v2: AccountEntryExtensionV2Wire;
};
export type AccountEntryExtensionV1ExtVariantName = "v0" | "v2";
/**
 * ```xdr
 * union switch (int v)
 *     {
 *     case 0:
 *         void;
 *     case 2:
 *         AccountEntryExtensionV2 v2;
 *     }
 * ```
 */
declare abstract class AccountEntryExtensionV1ExtBase extends XdrValue {
    abstract readonly type: AccountEntryExtensionV1ExtVariantName;
    constructor();
    static readonly schema: XdrType<AccountEntryExtensionV1ExtWire>;
    static v0(): AccountEntryExtensionV1ExtV0;
    static v2(v2: AccountEntryExtensionV2): AccountEntryExtensionV1ExtV2;
    static fromXdrObject(wire: AccountEntryExtensionV1ExtWire): AccountEntryExtensionV1Ext;
    /**
     * Type guard narrowing an unknown value to a concrete AccountEntryExtensionV1Ext variant.
     * Use this instead of `instanceof AccountEntryExtensionV1Ext`: the exported `AccountEntryExtensionV1Ext` value
     * is the abstract base, so `instanceof` narrows to the base (not the
     * variant union) and forces a cast. `AccountEntryExtensionV1Ext.is(x)` narrows to the union.
     */
    static is(value: unknown): value is AccountEntryExtensionV1Ext;
    abstract toXdrObject(): AccountEntryExtensionV1ExtWire;
}
export declare class AccountEntryExtensionV1ExtV0 extends AccountEntryExtensionV1ExtBase {
    readonly type: "v0";
    get value(): null;
    toXdrObject(): Extract<AccountEntryExtensionV1ExtWire, {
        v: 0;
    }>;
}
export declare class AccountEntryExtensionV1ExtV2 extends AccountEntryExtensionV1ExtBase {
    readonly type: "v2";
    readonly v2: AccountEntryExtensionV2;
    constructor(v2: AccountEntryExtensionV2);
    get value(): AccountEntryExtensionV2;
    toXdrObject(): Extract<AccountEntryExtensionV1ExtWire, {
        v: 2;
    }>;
}
export type AccountEntryExtensionV1Ext = AccountEntryExtensionV1ExtV0 | AccountEntryExtensionV1ExtV2;
export declare const AccountEntryExtensionV1Ext: typeof AccountEntryExtensionV1ExtBase;
export {};
