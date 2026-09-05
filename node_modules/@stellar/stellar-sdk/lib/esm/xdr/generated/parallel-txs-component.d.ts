import { type XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { TransactionEnvelope, type TransactionEnvelopeWire } from "./transaction-envelope.js";
export interface ParallelTxsComponentWire {
    baseFee: bigint | null;
    executionStages: TransactionEnvelopeWire[][][];
}
/**
 * ```xdr
 * struct ParallelTxsComponent
 * {
 *   int64* baseFee;
 *   // A sequence of stages that *may* have arbitrary data dependencies between
 *   // each other, i.e. in a general case the stage execution order may not be
 *   // arbitrarily shuffled without affecting the end result.
 *   ParallelTxExecutionStage executionStages<>;
 * };
 * ```
 */
export declare class ParallelTxsComponent extends XdrValue {
    readonly baseFee: bigint | null;
    readonly executionStages: TransactionEnvelope[][][];
    static readonly schema: XdrType<ParallelTxsComponentWire>;
    constructor(input: {
        baseFee: bigint | null;
        executionStages: TransactionEnvelope[][][];
    });
    toXdrObject(): ParallelTxsComponentWire;
    static fromXdrObject(wire: ParallelTxsComponentWire): ParallelTxsComponent;
}
