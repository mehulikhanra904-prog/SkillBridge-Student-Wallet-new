import { type XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { SorobanTransactionMetaExtV1, type SorobanTransactionMetaExtV1Wire } from "./soroban-transaction-meta-ext-v1.js";
export type SorobanTransactionMetaExtWire = {
    v: 0;
} | {
    v: 1;
    v1: SorobanTransactionMetaExtV1Wire;
};
export type SorobanTransactionMetaExtVariantName = "v0" | "v1";
/**
 * ```xdr
 * union SorobanTransactionMetaExt switch (int v)
 * {
 * case 0:
 *     void;
 * case 1:
 *     SorobanTransactionMetaExtV1 v1;
 * };
 * ```
 */
declare abstract class SorobanTransactionMetaExtBase extends XdrValue {
    abstract readonly type: SorobanTransactionMetaExtVariantName;
    constructor();
    static readonly schema: XdrType<SorobanTransactionMetaExtWire>;
    static v0(): SorobanTransactionMetaExtV0;
    static v1(v1: SorobanTransactionMetaExtV1): SorobanTransactionMetaExtV1Arm;
    static fromXdrObject(wire: SorobanTransactionMetaExtWire): SorobanTransactionMetaExt;
    /**
     * Type guard narrowing an unknown value to a concrete SorobanTransactionMetaExt variant.
     * Use this instead of `instanceof SorobanTransactionMetaExt`: the exported `SorobanTransactionMetaExt` value
     * is the abstract base, so `instanceof` narrows to the base (not the
     * variant union) and forces a cast. `SorobanTransactionMetaExt.is(x)` narrows to the union.
     */
    static is(value: unknown): value is SorobanTransactionMetaExt;
    abstract toXdrObject(): SorobanTransactionMetaExtWire;
}
export declare class SorobanTransactionMetaExtV0 extends SorobanTransactionMetaExtBase {
    readonly type: "v0";
    get value(): null;
    toXdrObject(): Extract<SorobanTransactionMetaExtWire, {
        v: 0;
    }>;
}
export declare class SorobanTransactionMetaExtV1Arm extends SorobanTransactionMetaExtBase {
    readonly type: "v1";
    readonly v1: SorobanTransactionMetaExtV1;
    constructor(v1: SorobanTransactionMetaExtV1);
    get value(): SorobanTransactionMetaExtV1;
    toXdrObject(): Extract<SorobanTransactionMetaExtWire, {
        v: 1;
    }>;
}
export type SorobanTransactionMetaExt = SorobanTransactionMetaExtV0 | SorobanTransactionMetaExtV1Arm;
export declare const SorobanTransactionMetaExt: typeof SorobanTransactionMetaExtBase;
export {};
