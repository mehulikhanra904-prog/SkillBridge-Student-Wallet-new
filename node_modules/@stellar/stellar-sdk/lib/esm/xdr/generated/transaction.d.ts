import type { XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { MuxedAccount, type MuxedAccountWire } from "./muxed-account.js";
import { Preconditions, type PreconditionsWire } from "./preconditions.js";
import { Memo, type MemoWire } from "./memo.js";
import { Operation, type OperationWire } from "./operation.js";
import { TransactionExt, type TransactionExtWire } from "./transaction-ext.js";
export interface TransactionWire {
    sourceAccount: MuxedAccountWire;
    fee: number;
    seqNum: bigint;
    cond: PreconditionsWire;
    memo: MemoWire;
    operations: OperationWire[];
    ext: TransactionExtWire;
}
/**
 * ```xdr
 * struct Transaction
 * {
 *     // account used to run the transaction
 *     MuxedAccount sourceAccount;
 *
 *     // the fee the sourceAccount will pay
 *     uint32 fee;
 *
 *     // sequence number to consume in the account
 *     SequenceNumber seqNum;
 *
 *     // validity conditions
 *     Preconditions cond;
 *
 *     Memo memo;
 *
 *     Operation operations<MAX_OPS_PER_TX>;
 *
 *     union switch (int v)
 *     {
 *     case 0:
 *         void;
 *     case 1:
 *         SorobanTransactionData sorobanData;
 *     }
 *     ext;
 * };
 * ```
 */
export declare class Transaction extends XdrValue {
    readonly sourceAccount: MuxedAccount;
    readonly fee: number;
    readonly seqNum: bigint;
    readonly cond: Preconditions;
    readonly memo: Memo;
    readonly operations: Operation[];
    readonly ext: TransactionExt;
    static readonly schema: XdrType<TransactionWire>;
    constructor(input: {
        sourceAccount: MuxedAccount;
        fee: number;
        seqNum: bigint;
        cond: Preconditions;
        memo: Memo;
        operations: Operation[];
        ext: TransactionExt;
    });
    toXdrObject(): TransactionWire;
    static fromXdrObject(wire: TransactionWire): Transaction;
}
