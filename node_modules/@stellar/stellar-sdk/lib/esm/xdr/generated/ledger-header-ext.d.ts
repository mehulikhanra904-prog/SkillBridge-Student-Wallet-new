import { type XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { LedgerHeaderExtensionV1, type LedgerHeaderExtensionV1Wire } from "./ledger-header-extension-v1.js";
export type LedgerHeaderExtWire = {
    v: 0;
} | {
    v: 1;
    v1: LedgerHeaderExtensionV1Wire;
};
export type LedgerHeaderExtVariantName = "v0" | "v1";
/**
 * ```xdr
 * union switch (int v)
 *     {
 *     case 0:
 *         void;
 *     case 1:
 *         LedgerHeaderExtensionV1 v1;
 *     }
 * ```
 */
declare abstract class LedgerHeaderExtBase extends XdrValue {
    abstract readonly type: LedgerHeaderExtVariantName;
    constructor();
    static readonly schema: XdrType<LedgerHeaderExtWire>;
    static v0(): LedgerHeaderExtV0;
    static v1(v1: LedgerHeaderExtensionV1): LedgerHeaderExtV1;
    static fromXdrObject(wire: LedgerHeaderExtWire): LedgerHeaderExt;
    /**
     * Type guard narrowing an unknown value to a concrete LedgerHeaderExt variant.
     * Use this instead of `instanceof LedgerHeaderExt`: the exported `LedgerHeaderExt` value
     * is the abstract base, so `instanceof` narrows to the base (not the
     * variant union) and forces a cast. `LedgerHeaderExt.is(x)` narrows to the union.
     */
    static is(value: unknown): value is LedgerHeaderExt;
    abstract toXdrObject(): LedgerHeaderExtWire;
}
export declare class LedgerHeaderExtV0 extends LedgerHeaderExtBase {
    readonly type: "v0";
    get value(): null;
    toXdrObject(): Extract<LedgerHeaderExtWire, {
        v: 0;
    }>;
}
export declare class LedgerHeaderExtV1 extends LedgerHeaderExtBase {
    readonly type: "v1";
    readonly v1: LedgerHeaderExtensionV1;
    constructor(v1: LedgerHeaderExtensionV1);
    get value(): LedgerHeaderExtensionV1;
    toXdrObject(): Extract<LedgerHeaderExtWire, {
        v: 1;
    }>;
}
export type LedgerHeaderExt = LedgerHeaderExtV0 | LedgerHeaderExtV1;
export declare const LedgerHeaderExt: typeof LedgerHeaderExtBase;
export {};
