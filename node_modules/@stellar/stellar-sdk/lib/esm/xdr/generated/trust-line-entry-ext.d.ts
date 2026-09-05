import { type XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { TrustLineEntryV1, type TrustLineEntryV1Wire } from "./trust-line-entry-v1.js";
export type TrustLineEntryExtWire = {
    v: 0;
} | {
    v: 1;
    v1: TrustLineEntryV1Wire;
};
export type TrustLineEntryExtVariantName = "v0" | "v1";
/**
 * ```xdr
 * union switch (int v)
 *     {
 *     case 0:
 *         void;
 *     case 1:
 *         struct
 *         {
 *             Liabilities liabilities;
 *
 *             union switch (int v)
 *             {
 *             case 0:
 *                 void;
 *             case 2:
 *                 TrustLineEntryExtensionV2 v2;
 *             }
 *             ext;
 *         } v1;
 *     }
 * ```
 */
declare abstract class TrustLineEntryExtBase extends XdrValue {
    abstract readonly type: TrustLineEntryExtVariantName;
    constructor();
    static readonly schema: XdrType<TrustLineEntryExtWire>;
    static v0(): TrustLineEntryExtV0;
    static v1(v1: TrustLineEntryV1): TrustLineEntryExtV1;
    static fromXdrObject(wire: TrustLineEntryExtWire): TrustLineEntryExt;
    /**
     * Type guard narrowing an unknown value to a concrete TrustLineEntryExt variant.
     * Use this instead of `instanceof TrustLineEntryExt`: the exported `TrustLineEntryExt` value
     * is the abstract base, so `instanceof` narrows to the base (not the
     * variant union) and forces a cast. `TrustLineEntryExt.is(x)` narrows to the union.
     */
    static is(value: unknown): value is TrustLineEntryExt;
    abstract toXdrObject(): TrustLineEntryExtWire;
}
export declare class TrustLineEntryExtV0 extends TrustLineEntryExtBase {
    readonly type: "v0";
    get value(): null;
    toXdrObject(): Extract<TrustLineEntryExtWire, {
        v: 0;
    }>;
}
export declare class TrustLineEntryExtV1 extends TrustLineEntryExtBase {
    readonly type: "v1";
    readonly v1: TrustLineEntryV1;
    constructor(v1: TrustLineEntryV1);
    get value(): TrustLineEntryV1;
    toXdrObject(): Extract<TrustLineEntryExtWire, {
        v: 1;
    }>;
}
export type TrustLineEntryExt = TrustLineEntryExtV0 | TrustLineEntryExtV1;
export declare const TrustLineEntryExt: typeof TrustLineEntryExtBase;
export {};
