import { type XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
export type ClaimableBalanceEntryExtensionV1ExtWire = {
    v: 0;
};
export type ClaimableBalanceEntryExtensionV1ExtVariantName = "v0";
/**
 * ```xdr
 * union switch (int v)
 *     {
 *     case 0:
 *         void;
 *     }
 * ```
 */
declare abstract class ClaimableBalanceEntryExtensionV1ExtBase extends XdrValue {
    abstract readonly type: ClaimableBalanceEntryExtensionV1ExtVariantName;
    constructor();
    static readonly schema: XdrType<ClaimableBalanceEntryExtensionV1ExtWire>;
    static v0(): ClaimableBalanceEntryExtensionV1ExtV0;
    static fromXdrObject(wire: ClaimableBalanceEntryExtensionV1ExtWire): ClaimableBalanceEntryExtensionV1Ext;
    /**
     * Type guard narrowing an unknown value to a concrete ClaimableBalanceEntryExtensionV1Ext variant.
     * Use this instead of `instanceof ClaimableBalanceEntryExtensionV1Ext`: the exported `ClaimableBalanceEntryExtensionV1Ext` value
     * is the abstract base, so `instanceof` narrows to the base (not the
     * variant union) and forces a cast. `ClaimableBalanceEntryExtensionV1Ext.is(x)` narrows to the union.
     */
    static is(value: unknown): value is ClaimableBalanceEntryExtensionV1Ext;
    abstract toXdrObject(): ClaimableBalanceEntryExtensionV1ExtWire;
}
export declare class ClaimableBalanceEntryExtensionV1ExtV0 extends ClaimableBalanceEntryExtensionV1ExtBase {
    readonly type: "v0";
    get value(): null;
    toXdrObject(): Extract<ClaimableBalanceEntryExtensionV1ExtWire, {
        v: 0;
    }>;
}
export type ClaimableBalanceEntryExtensionV1Ext = ClaimableBalanceEntryExtensionV1ExtV0;
export declare const ClaimableBalanceEntryExtensionV1Ext: typeof ClaimableBalanceEntryExtensionV1ExtBase;
export {};
