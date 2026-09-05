import { type XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { TransactionSet, type TransactionSetWire } from "./transaction-set.js";
import { GeneralizedTransactionSet, type GeneralizedTransactionSetWire } from "./generalized-transaction-set.js";
export type StoredTransactionSetWire = {
    v: 0;
    txSet: TransactionSetWire;
} | {
    v: 1;
    generalizedTxSet: GeneralizedTransactionSetWire;
};
export type StoredTransactionSetVariantName = "txSet" | "generalizedTxSet";
/**
 * ```xdr
 * union StoredTransactionSet switch (int v)
 * {
 * case 0:
 * 	TransactionSet txSet;
 * case 1:
 * 	GeneralizedTransactionSet generalizedTxSet;
 * };
 * ```
 */
declare abstract class StoredTransactionSetBase extends XdrValue {
    abstract readonly type: StoredTransactionSetVariantName;
    constructor();
    static readonly schema: XdrType<StoredTransactionSetWire>;
    static txSet(txSet: TransactionSet): StoredTransactionSetTxSet;
    static generalizedTxSet(generalizedTxSet: GeneralizedTransactionSet): StoredTransactionSetGeneralizedTxSet;
    static fromXdrObject(wire: StoredTransactionSetWire): StoredTransactionSet;
    /**
     * Type guard narrowing an unknown value to a concrete StoredTransactionSet variant.
     * Use this instead of `instanceof StoredTransactionSet`: the exported `StoredTransactionSet` value
     * is the abstract base, so `instanceof` narrows to the base (not the
     * variant union) and forces a cast. `StoredTransactionSet.is(x)` narrows to the union.
     */
    static is(value: unknown): value is StoredTransactionSet;
    abstract toXdrObject(): StoredTransactionSetWire;
}
export declare class StoredTransactionSetTxSet extends StoredTransactionSetBase {
    readonly type: "txSet";
    readonly txSet: TransactionSet;
    constructor(txSet: TransactionSet);
    get value(): TransactionSet;
    toXdrObject(): Extract<StoredTransactionSetWire, {
        v: 0;
    }>;
}
export declare class StoredTransactionSetGeneralizedTxSet extends StoredTransactionSetBase {
    readonly type: "generalizedTxSet";
    readonly generalizedTxSet: GeneralizedTransactionSet;
    constructor(generalizedTxSet: GeneralizedTransactionSet);
    get value(): GeneralizedTransactionSet;
    toXdrObject(): Extract<StoredTransactionSetWire, {
        v: 1;
    }>;
}
export type StoredTransactionSet = StoredTransactionSetTxSet | StoredTransactionSetGeneralizedTxSet;
export declare const StoredTransactionSet: typeof StoredTransactionSetBase;
export {};
