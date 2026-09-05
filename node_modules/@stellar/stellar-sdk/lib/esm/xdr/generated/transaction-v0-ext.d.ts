import { type XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
export type TransactionV0ExtWire = {
    v: 0;
};
export type TransactionV0ExtVariantName = "v0";
/**
 * ```xdr
 * union switch (int v)
 *     {
 *     case 0:
 *         void;
 *     }
 * ```
 */
declare abstract class TransactionV0ExtBase extends XdrValue {
    abstract readonly type: TransactionV0ExtVariantName;
    constructor();
    static readonly schema: XdrType<TransactionV0ExtWire>;
    static v0(): TransactionV0ExtV0;
    static fromXdrObject(wire: TransactionV0ExtWire): TransactionV0Ext;
    /**
     * Type guard narrowing an unknown value to a concrete TransactionV0Ext variant.
     * Use this instead of `instanceof TransactionV0Ext`: the exported `TransactionV0Ext` value
     * is the abstract base, so `instanceof` narrows to the base (not the
     * variant union) and forces a cast. `TransactionV0Ext.is(x)` narrows to the union.
     */
    static is(value: unknown): value is TransactionV0Ext;
    abstract toXdrObject(): TransactionV0ExtWire;
}
export declare class TransactionV0ExtV0 extends TransactionV0ExtBase {
    readonly type: "v0";
    get value(): null;
    toXdrObject(): Extract<TransactionV0ExtWire, {
        v: 0;
    }>;
}
export type TransactionV0Ext = TransactionV0ExtV0;
export declare const TransactionV0Ext: typeof TransactionV0ExtBase;
export {};
