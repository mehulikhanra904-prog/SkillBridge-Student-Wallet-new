import { type XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
export type TransactionResultExtWire = {
    v: 0;
};
export type TransactionResultExtVariantName = "v0";
/**
 * ```xdr
 * union switch (int v)
 *     {
 *     case 0:
 *         void;
 *     }
 * ```
 */
declare abstract class TransactionResultExtBase extends XdrValue {
    abstract readonly type: TransactionResultExtVariantName;
    constructor();
    static readonly schema: XdrType<TransactionResultExtWire>;
    static v0(): TransactionResultExtV0;
    static fromXdrObject(wire: TransactionResultExtWire): TransactionResultExt;
    /**
     * Type guard narrowing an unknown value to a concrete TransactionResultExt variant.
     * Use this instead of `instanceof TransactionResultExt`: the exported `TransactionResultExt` value
     * is the abstract base, so `instanceof` narrows to the base (not the
     * variant union) and forces a cast. `TransactionResultExt.is(x)` narrows to the union.
     */
    static is(value: unknown): value is TransactionResultExt;
    abstract toXdrObject(): TransactionResultExtWire;
}
export declare class TransactionResultExtV0 extends TransactionResultExtBase {
    readonly type: "v0";
    get value(): null;
    toXdrObject(): Extract<TransactionResultExtWire, {
        v: 0;
    }>;
}
export type TransactionResultExt = TransactionResultExtV0;
export declare const TransactionResultExt: typeof TransactionResultExtBase;
export {};
