import { type XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { LedgerCloseMetaExtV1, type LedgerCloseMetaExtV1Wire } from "./ledger-close-meta-ext-v1.js";
export type LedgerCloseMetaExtWire = {
    v: 0;
} | {
    v: 1;
    v1: LedgerCloseMetaExtV1Wire;
};
export type LedgerCloseMetaExtVariantName = "v0" | "v1";
/**
 * ```xdr
 * union LedgerCloseMetaExt switch (int v)
 * {
 * case 0:
 *     void;
 * case 1:
 *     LedgerCloseMetaExtV1 v1;
 * };
 * ```
 */
declare abstract class LedgerCloseMetaExtBase extends XdrValue {
    abstract readonly type: LedgerCloseMetaExtVariantName;
    constructor();
    static readonly schema: XdrType<LedgerCloseMetaExtWire>;
    static v0(): LedgerCloseMetaExtV0;
    static v1(v1: LedgerCloseMetaExtV1): LedgerCloseMetaExtV1Arm;
    static fromXdrObject(wire: LedgerCloseMetaExtWire): LedgerCloseMetaExt;
    /**
     * Type guard narrowing an unknown value to a concrete LedgerCloseMetaExt variant.
     * Use this instead of `instanceof LedgerCloseMetaExt`: the exported `LedgerCloseMetaExt` value
     * is the abstract base, so `instanceof` narrows to the base (not the
     * variant union) and forces a cast. `LedgerCloseMetaExt.is(x)` narrows to the union.
     */
    static is(value: unknown): value is LedgerCloseMetaExt;
    abstract toXdrObject(): LedgerCloseMetaExtWire;
}
export declare class LedgerCloseMetaExtV0 extends LedgerCloseMetaExtBase {
    readonly type: "v0";
    get value(): null;
    toXdrObject(): Extract<LedgerCloseMetaExtWire, {
        v: 0;
    }>;
}
export declare class LedgerCloseMetaExtV1Arm extends LedgerCloseMetaExtBase {
    readonly type: "v1";
    readonly v1: LedgerCloseMetaExtV1;
    constructor(v1: LedgerCloseMetaExtV1);
    get value(): LedgerCloseMetaExtV1;
    toXdrObject(): Extract<LedgerCloseMetaExtWire, {
        v: 1;
    }>;
}
export type LedgerCloseMetaExt = LedgerCloseMetaExtV0 | LedgerCloseMetaExtV1Arm;
export declare const LedgerCloseMetaExt: typeof LedgerCloseMetaExtBase;
export {};
