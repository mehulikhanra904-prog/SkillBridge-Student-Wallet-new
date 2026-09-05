import { type XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { TransactionSetV1, type TransactionSetV1Wire } from "./transaction-set-v1.js";
export type GeneralizedTransactionSetWire = {
    v: 1;
    v1TxSet: TransactionSetV1Wire;
};
export type GeneralizedTransactionSetVariantName = "v1TxSet";
/**
 * ```xdr
 * union GeneralizedTransactionSet switch (int v)
 * {
 * // We consider the legacy TransactionSet to be v0.
 * case 1:
 *     TransactionSetV1 v1TxSet;
 * };
 * ```
 */
declare abstract class GeneralizedTransactionSetBase extends XdrValue {
    abstract readonly type: GeneralizedTransactionSetVariantName;
    constructor();
    static readonly schema: XdrType<GeneralizedTransactionSetWire>;
    static v1TxSet(v1TxSet: TransactionSetV1): GeneralizedTransactionSetV1TxSet;
    static fromXdrObject(wire: GeneralizedTransactionSetWire): GeneralizedTransactionSet;
    /**
     * Type guard narrowing an unknown value to a concrete GeneralizedTransactionSet variant.
     * Use this instead of `instanceof GeneralizedTransactionSet`: the exported `GeneralizedTransactionSet` value
     * is the abstract base, so `instanceof` narrows to the base (not the
     * variant union) and forces a cast. `GeneralizedTransactionSet.is(x)` narrows to the union.
     */
    static is(value: unknown): value is GeneralizedTransactionSet;
    abstract toXdrObject(): GeneralizedTransactionSetWire;
}
export declare class GeneralizedTransactionSetV1TxSet extends GeneralizedTransactionSetBase {
    readonly type: "v1TxSet";
    readonly v1TxSet: TransactionSetV1;
    constructor(v1TxSet: TransactionSetV1);
    get value(): TransactionSetV1;
    toXdrObject(): Extract<GeneralizedTransactionSetWire, {
        v: 1;
    }>;
}
export type GeneralizedTransactionSet = GeneralizedTransactionSetV1TxSet;
export declare const GeneralizedTransactionSet: typeof GeneralizedTransactionSetBase;
export {};
