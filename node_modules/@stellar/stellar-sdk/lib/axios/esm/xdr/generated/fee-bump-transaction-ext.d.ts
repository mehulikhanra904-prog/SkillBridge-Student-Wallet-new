import { type XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
export type FeeBumpTransactionExtWire = {
    v: 0;
};
export type FeeBumpTransactionExtVariantName = "v0";
/**
 * ```xdr
 * union switch (int v)
 *     {
 *     case 0:
 *         void;
 *     }
 * ```
 */
declare abstract class FeeBumpTransactionExtBase extends XdrValue {
    abstract readonly type: FeeBumpTransactionExtVariantName;
    constructor();
    static readonly schema: XdrType<FeeBumpTransactionExtWire>;
    static v0(): FeeBumpTransactionExtV0;
    static fromXdrObject(wire: FeeBumpTransactionExtWire): FeeBumpTransactionExt;
    /**
     * Type guard narrowing an unknown value to a concrete FeeBumpTransactionExt variant.
     * Use this instead of `instanceof FeeBumpTransactionExt`: the exported `FeeBumpTransactionExt` value
     * is the abstract base, so `instanceof` narrows to the base (not the
     * variant union) and forces a cast. `FeeBumpTransactionExt.is(x)` narrows to the union.
     */
    static is(value: unknown): value is FeeBumpTransactionExt;
    abstract toXdrObject(): FeeBumpTransactionExtWire;
}
export declare class FeeBumpTransactionExtV0 extends FeeBumpTransactionExtBase {
    readonly type: "v0";
    get value(): null;
    toXdrObject(): Extract<FeeBumpTransactionExtWire, {
        v: 0;
    }>;
}
export type FeeBumpTransactionExt = FeeBumpTransactionExtV0;
export declare const FeeBumpTransactionExt: typeof FeeBumpTransactionExtBase;
export {};
