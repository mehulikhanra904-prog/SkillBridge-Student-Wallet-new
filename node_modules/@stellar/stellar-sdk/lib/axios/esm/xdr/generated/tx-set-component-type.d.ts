import { EnumValue } from "../values/enum-value.js";
export type TxSetComponentTypeWire = number;
export type TxSetComponentTypeName = "txsetCompTxsMaybeDiscountedFee";
/**
 * ```xdr
 * enum TxSetComponentType
 * {
 *   // txs with effective fee <= bid derived from a base fee (if any).
 *   // If base fee is not specified, no discount is applied.
 *   TXSET_COMP_TXS_MAYBE_DISCOUNTED_FEE = 0
 * };
 * ```
 */
export declare class TxSetComponentType extends EnumValue<TxSetComponentTypeName> {
    static readonly txsetCompTxsMaybeDiscountedFee: TxSetComponentType;
    static readonly schema: import("@stellar/js-xdr").EnumSchema<"TxSetComponentType", {
        readonly txsetCompTxsMaybeDiscountedFee: 0;
    }>;
    static fromValue(value: number): TxSetComponentType;
    static fromName(name: TxSetComponentTypeName): TxSetComponentType;
    static fromXdrObject(wire: number): TxSetComponentType;
}
