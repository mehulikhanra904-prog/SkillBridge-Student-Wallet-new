import { type XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { AccountEntryExtensionV1, type AccountEntryExtensionV1Wire } from "./account-entry-extension-v1.js";
export type AccountEntryExtWire = {
    v: 0;
} | {
    v: 1;
    v1: AccountEntryExtensionV1Wire;
};
export type AccountEntryExtVariantName = "v0" | "v1";
/**
 * ```xdr
 * union switch (int v)
 *     {
 *     case 0:
 *         void;
 *     case 1:
 *         AccountEntryExtensionV1 v1;
 *     }
 * ```
 */
declare abstract class AccountEntryExtBase extends XdrValue {
    abstract readonly type: AccountEntryExtVariantName;
    constructor();
    static readonly schema: XdrType<AccountEntryExtWire>;
    static v0(): AccountEntryExtV0;
    static v1(v1: AccountEntryExtensionV1): AccountEntryExtV1;
    static fromXdrObject(wire: AccountEntryExtWire): AccountEntryExt;
    /**
     * Type guard narrowing an unknown value to a concrete AccountEntryExt variant.
     * Use this instead of `instanceof AccountEntryExt`: the exported `AccountEntryExt` value
     * is the abstract base, so `instanceof` narrows to the base (not the
     * variant union) and forces a cast. `AccountEntryExt.is(x)` narrows to the union.
     */
    static is(value: unknown): value is AccountEntryExt;
    abstract toXdrObject(): AccountEntryExtWire;
}
export declare class AccountEntryExtV0 extends AccountEntryExtBase {
    readonly type: "v0";
    get value(): null;
    toXdrObject(): Extract<AccountEntryExtWire, {
        v: 0;
    }>;
}
export declare class AccountEntryExtV1 extends AccountEntryExtBase {
    readonly type: "v1";
    readonly v1: AccountEntryExtensionV1;
    constructor(v1: AccountEntryExtensionV1);
    get value(): AccountEntryExtensionV1;
    toXdrObject(): Extract<AccountEntryExtWire, {
        v: 1;
    }>;
}
export type AccountEntryExt = AccountEntryExtV0 | AccountEntryExtV1;
export declare const AccountEntryExt: typeof AccountEntryExtBase;
export {};
