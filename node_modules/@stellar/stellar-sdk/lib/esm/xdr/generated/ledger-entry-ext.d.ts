import { type XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { LedgerEntryExtensionV1, type LedgerEntryExtensionV1Wire } from "./ledger-entry-extension-v1.js";
export type LedgerEntryExtWire = {
    v: 0;
} | {
    v: 1;
    v1: LedgerEntryExtensionV1Wire;
};
export type LedgerEntryExtVariantName = "v0" | "v1";
/**
 * ```xdr
 * union switch (int v)
 *     {
 *     case 0:
 *         void;
 *     case 1:
 *         LedgerEntryExtensionV1 v1;
 *     }
 * ```
 */
declare abstract class LedgerEntryExtBase extends XdrValue {
    abstract readonly type: LedgerEntryExtVariantName;
    constructor();
    static readonly schema: XdrType<LedgerEntryExtWire>;
    static v0(): LedgerEntryExtV0;
    static v1(v1: LedgerEntryExtensionV1): LedgerEntryExtV1;
    static fromXdrObject(wire: LedgerEntryExtWire): LedgerEntryExt;
    /**
     * Type guard narrowing an unknown value to a concrete LedgerEntryExt variant.
     * Use this instead of `instanceof LedgerEntryExt`: the exported `LedgerEntryExt` value
     * is the abstract base, so `instanceof` narrows to the base (not the
     * variant union) and forces a cast. `LedgerEntryExt.is(x)` narrows to the union.
     */
    static is(value: unknown): value is LedgerEntryExt;
    abstract toXdrObject(): LedgerEntryExtWire;
}
export declare class LedgerEntryExtV0 extends LedgerEntryExtBase {
    readonly type: "v0";
    get value(): null;
    toXdrObject(): Extract<LedgerEntryExtWire, {
        v: 0;
    }>;
}
export declare class LedgerEntryExtV1 extends LedgerEntryExtBase {
    readonly type: "v1";
    readonly v1: LedgerEntryExtensionV1;
    constructor(v1: LedgerEntryExtensionV1);
    get value(): LedgerEntryExtensionV1;
    toXdrObject(): Extract<LedgerEntryExtWire, {
        v: 1;
    }>;
}
export type LedgerEntryExt = LedgerEntryExtV0 | LedgerEntryExtV1;
export declare const LedgerEntryExt: typeof LedgerEntryExtBase;
export {};
