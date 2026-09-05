import { type XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { ClaimableBalanceEntryExtensionV1, type ClaimableBalanceEntryExtensionV1Wire } from "./claimable-balance-entry-extension-v1.js";
export type ClaimableBalanceEntryExtWire = {
    v: 0;
} | {
    v: 1;
    v1: ClaimableBalanceEntryExtensionV1Wire;
};
export type ClaimableBalanceEntryExtVariantName = "v0" | "v1";
/**
 * ```xdr
 * union switch (int v)
 *     {
 *     case 0:
 *         void;
 *     case 1:
 *         ClaimableBalanceEntryExtensionV1 v1;
 *     }
 * ```
 */
declare abstract class ClaimableBalanceEntryExtBase extends XdrValue {
    abstract readonly type: ClaimableBalanceEntryExtVariantName;
    constructor();
    static readonly schema: XdrType<ClaimableBalanceEntryExtWire>;
    static v0(): ClaimableBalanceEntryExtV0;
    static v1(v1: ClaimableBalanceEntryExtensionV1): ClaimableBalanceEntryExtV1;
    static fromXdrObject(wire: ClaimableBalanceEntryExtWire): ClaimableBalanceEntryExt;
    /**
     * Type guard narrowing an unknown value to a concrete ClaimableBalanceEntryExt variant.
     * Use this instead of `instanceof ClaimableBalanceEntryExt`: the exported `ClaimableBalanceEntryExt` value
     * is the abstract base, so `instanceof` narrows to the base (not the
     * variant union) and forces a cast. `ClaimableBalanceEntryExt.is(x)` narrows to the union.
     */
    static is(value: unknown): value is ClaimableBalanceEntryExt;
    abstract toXdrObject(): ClaimableBalanceEntryExtWire;
}
export declare class ClaimableBalanceEntryExtV0 extends ClaimableBalanceEntryExtBase {
    readonly type: "v0";
    get value(): null;
    toXdrObject(): Extract<ClaimableBalanceEntryExtWire, {
        v: 0;
    }>;
}
export declare class ClaimableBalanceEntryExtV1 extends ClaimableBalanceEntryExtBase {
    readonly type: "v1";
    readonly v1: ClaimableBalanceEntryExtensionV1;
    constructor(v1: ClaimableBalanceEntryExtensionV1);
    get value(): ClaimableBalanceEntryExtensionV1;
    toXdrObject(): Extract<ClaimableBalanceEntryExtWire, {
        v: 1;
    }>;
}
export type ClaimableBalanceEntryExt = ClaimableBalanceEntryExtV0 | ClaimableBalanceEntryExtV1;
export declare const ClaimableBalanceEntryExt: typeof ClaimableBalanceEntryExtBase;
export {};
