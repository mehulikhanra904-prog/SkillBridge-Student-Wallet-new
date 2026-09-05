import { type XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { SorobanResourcesExtV0, type SorobanResourcesExtV0Wire } from "./soroban-resources-ext-v0.js";
export type SorobanTransactionDataExtWire = {
    v: 0;
} | {
    v: 1;
    resourceExt: SorobanResourcesExtV0Wire;
};
export type SorobanTransactionDataExtVariantName = "v0" | "resourceExt";
/**
 * ```xdr
 * union switch (int v)
 *     {
 *     case 0:
 *         void;
 *     case 1:
 *         SorobanResourcesExtV0 resourceExt;
 *     }
 * ```
 */
declare abstract class SorobanTransactionDataExtBase extends XdrValue {
    abstract readonly type: SorobanTransactionDataExtVariantName;
    constructor();
    static readonly schema: XdrType<SorobanTransactionDataExtWire>;
    static v0(): SorobanTransactionDataExtV0;
    static resourceExt(resourceExt: SorobanResourcesExtV0): SorobanTransactionDataExtResourceExt;
    static fromXdrObject(wire: SorobanTransactionDataExtWire): SorobanTransactionDataExt;
    /**
     * Type guard narrowing an unknown value to a concrete SorobanTransactionDataExt variant.
     * Use this instead of `instanceof SorobanTransactionDataExt`: the exported `SorobanTransactionDataExt` value
     * is the abstract base, so `instanceof` narrows to the base (not the
     * variant union) and forces a cast. `SorobanTransactionDataExt.is(x)` narrows to the union.
     */
    static is(value: unknown): value is SorobanTransactionDataExt;
    abstract toXdrObject(): SorobanTransactionDataExtWire;
}
export declare class SorobanTransactionDataExtV0 extends SorobanTransactionDataExtBase {
    readonly type: "v0";
    get value(): null;
    toXdrObject(): Extract<SorobanTransactionDataExtWire, {
        v: 0;
    }>;
}
export declare class SorobanTransactionDataExtResourceExt extends SorobanTransactionDataExtBase {
    readonly type: "resourceExt";
    readonly resourceExt: SorobanResourcesExtV0;
    constructor(resourceExt: SorobanResourcesExtV0);
    get value(): SorobanResourcesExtV0;
    toXdrObject(): Extract<SorobanTransactionDataExtWire, {
        v: 1;
    }>;
}
export type SorobanTransactionDataExt = SorobanTransactionDataExtV0 | SorobanTransactionDataExtResourceExt;
export declare const SorobanTransactionDataExt: typeof SorobanTransactionDataExtBase;
export {};
