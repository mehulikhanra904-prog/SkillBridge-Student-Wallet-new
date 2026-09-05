import { EnumValue } from "../values/enum-value.js";
export type TransactionEventStageWire = number;
export type TransactionEventStageName = "transactionEventStageBeforeAllTxs" | "transactionEventStageAfterTx" | "transactionEventStageAfterAllTxs";
/**
 * ```xdr
 * enum TransactionEventStage {
 *     // The event has happened before any one of the transactions has its
 *     // operations applied.
 *     TRANSACTION_EVENT_STAGE_BEFORE_ALL_TXS = 0,
 *     // The event has happened immediately after operations of the transaction
 *     // have been applied.
 *     TRANSACTION_EVENT_STAGE_AFTER_TX = 1,
 *     // The event has happened after every transaction had its operations
 *     // applied.
 *     TRANSACTION_EVENT_STAGE_AFTER_ALL_TXS = 2
 * };
 * ```
 */
export declare class TransactionEventStage extends EnumValue<TransactionEventStageName> {
    static readonly transactionEventStageBeforeAllTxs: TransactionEventStage;
    static readonly transactionEventStageAfterTx: TransactionEventStage;
    static readonly transactionEventStageAfterAllTxs: TransactionEventStage;
    static readonly schema: import("@stellar/js-xdr").XdrType<import("@stellar/js-xdr").EnumMember<{
        readonly transactionEventStageBeforeAllTxs: 0;
        readonly transactionEventStageAfterTx: 1;
        readonly transactionEventStageAfterAllTxs: 2;
    }>> & {
        readonly kind: "enum";
        readonly name: "TransactionEventStage";
        readonly nameByValue: ReadonlyMap<number, "transactionEventStageBeforeAllTxs" | "transactionEventStageAfterTx" | "transactionEventStageAfterAllTxs">;
    } & {
        readonly transactionEventStageBeforeAllTxs: 0;
        readonly transactionEventStageAfterTx: 1;
        readonly transactionEventStageAfterAllTxs: 2;
    } & import("../values/enum-value.js").PrefixedEnumSchema;
    static fromValue(value: number): TransactionEventStage;
    static fromName(name: TransactionEventStageName): TransactionEventStage;
    static fromXdrObject(wire: number): TransactionEventStage;
}
