import { type XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
export type TransactionHistoryResultEntryExtWire = {
    v: 0;
};
export type TransactionHistoryResultEntryExtVariantName = "v0";
/**
 * ```xdr
 * union switch (int v)
 *     {
 *     case 0:
 *         void;
 *     }
 * ```
 */
declare abstract class TransactionHistoryResultEntryExtBase extends XdrValue {
    abstract readonly type: TransactionHistoryResultEntryExtVariantName;
    constructor();
    static readonly schema: XdrType<TransactionHistoryResultEntryExtWire>;
    static v0(): TransactionHistoryResultEntryExtV0;
    static fromXdrObject(wire: TransactionHistoryResultEntryExtWire): TransactionHistoryResultEntryExt;
    /**
     * Type guard narrowing an unknown value to a concrete TransactionHistoryResultEntryExt variant.
     * Use this instead of `instanceof TransactionHistoryResultEntryExt`: the exported `TransactionHistoryResultEntryExt` value
     * is the abstract base, so `instanceof` narrows to the base (not the
     * variant union) and forces a cast. `TransactionHistoryResultEntryExt.is(x)` narrows to the union.
     */
    static is(value: unknown): value is TransactionHistoryResultEntryExt;
    abstract toXdrObject(): TransactionHistoryResultEntryExtWire;
}
export declare class TransactionHistoryResultEntryExtV0 extends TransactionHistoryResultEntryExtBase {
    readonly type: "v0";
    get value(): null;
    toXdrObject(): Extract<TransactionHistoryResultEntryExtWire, {
        v: 0;
    }>;
}
export type TransactionHistoryResultEntryExt = TransactionHistoryResultEntryExtV0;
export declare const TransactionHistoryResultEntryExt: typeof TransactionHistoryResultEntryExtBase;
export {};
