import { type XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { SorobanTransactionData, type SorobanTransactionDataWire } from "./soroban-transaction-data.js";
export type TransactionExtWire = {
    v: 0;
} | {
    v: 1;
    sorobanData: SorobanTransactionDataWire;
};
export type TransactionExtVariantName = "v0" | "sorobanData";
/**
 * ```xdr
 * union switch (int v)
 *     {
 *     case 0:
 *         void;
 *     case 1:
 *         SorobanTransactionData sorobanData;
 *     }
 * ```
 */
declare abstract class TransactionExtBase extends XdrValue {
    abstract readonly type: TransactionExtVariantName;
    constructor();
    static readonly schema: XdrType<TransactionExtWire>;
    static v0(): TransactionExtV0;
    static sorobanData(sorobanData: SorobanTransactionData): TransactionExtSorobanData;
    static fromXdrObject(wire: TransactionExtWire): TransactionExt;
    /**
     * Type guard narrowing an unknown value to a concrete TransactionExt variant.
     * Use this instead of `instanceof TransactionExt`: the exported `TransactionExt` value
     * is the abstract base, so `instanceof` narrows to the base (not the
     * variant union) and forces a cast. `TransactionExt.is(x)` narrows to the union.
     */
    static is(value: unknown): value is TransactionExt;
    abstract toXdrObject(): TransactionExtWire;
}
export declare class TransactionExtV0 extends TransactionExtBase {
    readonly type: "v0";
    get value(): null;
    toXdrObject(): Extract<TransactionExtWire, {
        v: 0;
    }>;
}
export declare class TransactionExtSorobanData extends TransactionExtBase {
    readonly type: "sorobanData";
    readonly sorobanData: SorobanTransactionData;
    constructor(sorobanData: SorobanTransactionData);
    get value(): SorobanTransactionData;
    toXdrObject(): Extract<TransactionExtWire, {
        v: 1;
    }>;
}
export type TransactionExt = TransactionExtV0 | TransactionExtSorobanData;
export declare const TransactionExt: typeof TransactionExtBase;
export {};
