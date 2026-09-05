import { type XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
export type InnerTransactionResultExtWire = {
    v: 0;
};
export type InnerTransactionResultExtVariantName = "v0";
/**
 * ```xdr
 * union switch (int v)
 *     {
 *     case 0:
 *         void;
 *     }
 * ```
 */
declare abstract class InnerTransactionResultExtBase extends XdrValue {
    abstract readonly type: InnerTransactionResultExtVariantName;
    constructor();
    static readonly schema: XdrType<InnerTransactionResultExtWire>;
    static v0(): InnerTransactionResultExtV0;
    static fromXdrObject(wire: InnerTransactionResultExtWire): InnerTransactionResultExt;
    /**
     * Type guard narrowing an unknown value to a concrete InnerTransactionResultExt variant.
     * Use this instead of `instanceof InnerTransactionResultExt`: the exported `InnerTransactionResultExt` value
     * is the abstract base, so `instanceof` narrows to the base (not the
     * variant union) and forces a cast. `InnerTransactionResultExt.is(x)` narrows to the union.
     */
    static is(value: unknown): value is InnerTransactionResultExt;
    abstract toXdrObject(): InnerTransactionResultExtWire;
}
export declare class InnerTransactionResultExtV0 extends InnerTransactionResultExtBase {
    readonly type: "v0";
    get value(): null;
    toXdrObject(): Extract<InnerTransactionResultExtWire, {
        v: 0;
    }>;
}
export type InnerTransactionResultExt = InnerTransactionResultExtV0;
export declare const InnerTransactionResultExt: typeof InnerTransactionResultExtBase;
export {};
