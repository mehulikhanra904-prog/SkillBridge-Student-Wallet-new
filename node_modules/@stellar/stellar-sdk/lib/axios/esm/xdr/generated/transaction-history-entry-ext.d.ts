import { type XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { GeneralizedTransactionSet, type GeneralizedTransactionSetWire } from "./generalized-transaction-set.js";
export type TransactionHistoryEntryExtWire = {
    v: 0;
} | {
    v: 1;
    generalizedTxSet: GeneralizedTransactionSetWire;
};
export type TransactionHistoryEntryExtVariantName = "v0" | "generalizedTxSet";
/**
 * ```xdr
 * union switch (int v)
 *     {
 *     case 0:
 *         void;
 *     case 1:
 *         GeneralizedTransactionSet generalizedTxSet;
 *     }
 * ```
 */
declare abstract class TransactionHistoryEntryExtBase extends XdrValue {
    abstract readonly type: TransactionHistoryEntryExtVariantName;
    constructor();
    static readonly schema: XdrType<TransactionHistoryEntryExtWire>;
    static v0(): TransactionHistoryEntryExtV0;
    static generalizedTxSet(generalizedTxSet: GeneralizedTransactionSet): TransactionHistoryEntryExtGeneralizedTxSet;
    static fromXdrObject(wire: TransactionHistoryEntryExtWire): TransactionHistoryEntryExt;
    /**
     * Type guard narrowing an unknown value to a concrete TransactionHistoryEntryExt variant.
     * Use this instead of `instanceof TransactionHistoryEntryExt`: the exported `TransactionHistoryEntryExt` value
     * is the abstract base, so `instanceof` narrows to the base (not the
     * variant union) and forces a cast. `TransactionHistoryEntryExt.is(x)` narrows to the union.
     */
    static is(value: unknown): value is TransactionHistoryEntryExt;
    abstract toXdrObject(): TransactionHistoryEntryExtWire;
}
export declare class TransactionHistoryEntryExtV0 extends TransactionHistoryEntryExtBase {
    readonly type: "v0";
    get value(): null;
    toXdrObject(): Extract<TransactionHistoryEntryExtWire, {
        v: 0;
    }>;
}
export declare class TransactionHistoryEntryExtGeneralizedTxSet extends TransactionHistoryEntryExtBase {
    readonly type: "generalizedTxSet";
    readonly generalizedTxSet: GeneralizedTransactionSet;
    constructor(generalizedTxSet: GeneralizedTransactionSet);
    get value(): GeneralizedTransactionSet;
    toXdrObject(): Extract<TransactionHistoryEntryExtWire, {
        v: 1;
    }>;
}
export type TransactionHistoryEntryExt = TransactionHistoryEntryExtV0 | TransactionHistoryEntryExtGeneralizedTxSet;
export declare const TransactionHistoryEntryExt: typeof TransactionHistoryEntryExtBase;
export {};
