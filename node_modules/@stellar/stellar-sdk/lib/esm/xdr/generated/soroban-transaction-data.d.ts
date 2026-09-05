import type { XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { SorobanTransactionDataExt, type SorobanTransactionDataExtWire } from "./soroban-transaction-data-ext.js";
import { SorobanResources, type SorobanResourcesWire } from "./soroban-resources.js";
export interface SorobanTransactionDataWire {
    ext: SorobanTransactionDataExtWire;
    resources: SorobanResourcesWire;
    resourceFee: bigint;
}
/**
 * ```xdr
 * struct SorobanTransactionData
 * {
 *     union switch (int v)
 *     {
 *     case 0:
 *         void;
 *     case 1:
 *         SorobanResourcesExtV0 resourceExt;
 *     } ext;
 *     SorobanResources resources;
 *     // Amount of the transaction `fee` allocated to the Soroban resource fees.
 *     // The fraction of `resourceFee` corresponding to `resources` specified
 *     // above is *not* refundable (i.e. fees for instructions, ledger I/O), as
 *     // well as fees for the transaction size.
 *     // The remaining part of the fee is refundable and the charged value is
 *     // based on the actual consumption of refundable resources (events, ledger
 *     // rent bumps).
 *     // The `inclusionFee` used for prioritization of the transaction is defined
 *     // as `tx.fee - resourceFee`.
 *     int64 resourceFee;
 * };
 * ```
 */
export declare class SorobanTransactionData extends XdrValue {
    readonly ext: SorobanTransactionDataExt;
    readonly resources: SorobanResources;
    readonly resourceFee: bigint;
    static readonly schema: XdrType<SorobanTransactionDataWire>;
    constructor(input: {
        ext: SorobanTransactionDataExt;
        resources: SorobanResources;
        resourceFee: bigint;
    });
    toXdrObject(): SorobanTransactionDataWire;
    static fromXdrObject(wire: SorobanTransactionDataWire): SorobanTransactionData;
}
