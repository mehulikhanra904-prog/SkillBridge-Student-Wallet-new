import { type XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { TxSetComponent, type TxSetComponentWire } from "./tx-set-component.js";
import { ParallelTxsComponent, type ParallelTxsComponentWire } from "./parallel-txs-component.js";
export type TransactionPhaseWire = {
    v: 0;
    v0Components: TxSetComponentWire[];
} | {
    v: 1;
    parallelTxsComponent: ParallelTxsComponentWire;
};
export type TransactionPhaseVariantName = "v0Components" | "parallelTxsComponent";
/**
 * ```xdr
 * union TransactionPhase switch (int v)
 * {
 * case 0:
 *     TxSetComponent v0Components<>;
 * case 1:
 *     ParallelTxsComponent parallelTxsComponent;
 * };
 * ```
 */
declare abstract class TransactionPhaseBase extends XdrValue {
    abstract readonly type: TransactionPhaseVariantName;
    constructor();
    static readonly schema: XdrType<TransactionPhaseWire>;
    static v0Components(v0Components: TxSetComponent[]): TransactionPhaseV0Components;
    static parallelTxsComponent(parallelTxsComponent: ParallelTxsComponent): TransactionPhaseParallelTxsComponent;
    static fromXdrObject(wire: TransactionPhaseWire): TransactionPhase;
    /**
     * Type guard narrowing an unknown value to a concrete TransactionPhase variant.
     * Use this instead of `instanceof TransactionPhase`: the exported `TransactionPhase` value
     * is the abstract base, so `instanceof` narrows to the base (not the
     * variant union) and forces a cast. `TransactionPhase.is(x)` narrows to the union.
     */
    static is(value: unknown): value is TransactionPhase;
    abstract toXdrObject(): TransactionPhaseWire;
}
export declare class TransactionPhaseV0Components extends TransactionPhaseBase {
    readonly type: "v0Components";
    readonly v0Components: TxSetComponent[];
    constructor(v0Components: TxSetComponent[]);
    get value(): TxSetComponent[];
    toXdrObject(): Extract<TransactionPhaseWire, {
        v: 0;
    }>;
}
export declare class TransactionPhaseParallelTxsComponent extends TransactionPhaseBase {
    readonly type: "parallelTxsComponent";
    readonly parallelTxsComponent: ParallelTxsComponent;
    constructor(parallelTxsComponent: ParallelTxsComponent);
    get value(): ParallelTxsComponent;
    toXdrObject(): Extract<TransactionPhaseWire, {
        v: 1;
    }>;
}
export type TransactionPhase = TransactionPhaseV0Components | TransactionPhaseParallelTxsComponent;
export declare const TransactionPhase: typeof TransactionPhaseBase;
export {};
