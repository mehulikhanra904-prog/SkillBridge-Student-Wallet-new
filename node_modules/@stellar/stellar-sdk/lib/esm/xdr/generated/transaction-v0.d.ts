import type { XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { Uint256Bytes, type Uint256BytesWire } from "./uint256-bytes.js";
import { TimeBounds, type TimeBoundsWire } from "./time-bounds.js";
import { Memo, type MemoWire } from "./memo.js";
import { Operation, type OperationWire } from "./operation.js";
import { TransactionV0Ext, type TransactionV0ExtWire } from "./transaction-v0-ext.js";
export interface TransactionV0Wire {
    sourceAccountEd25519: Uint256BytesWire;
    fee: number;
    seqNum: bigint;
    timeBounds: TimeBoundsWire | null;
    memo: MemoWire;
    operations: OperationWire[];
    ext: TransactionV0ExtWire;
}
/**
 * ```xdr
 * struct TransactionV0
 * {
 *     uint256 sourceAccountEd25519;
 *     uint32 fee;
 *     SequenceNumber seqNum;
 *     TimeBounds* timeBounds;
 *     Memo memo;
 *     Operation operations<MAX_OPS_PER_TX>;
 *     union switch (int v)
 *     {
 *     case 0:
 *         void;
 *     }
 *     ext;
 * };
 * ```
 */
export declare class TransactionV0 extends XdrValue {
    readonly sourceAccountEd25519: Uint256Bytes;
    readonly fee: number;
    readonly seqNum: bigint;
    readonly timeBounds: TimeBounds | null;
    readonly memo: Memo;
    readonly operations: Operation[];
    readonly ext: TransactionV0Ext;
    static readonly schema: XdrType<TransactionV0Wire>;
    constructor(input: {
        sourceAccountEd25519: Uint256Bytes | Uint8Array | string;
        fee: number;
        seqNum: bigint;
        timeBounds: TimeBounds | null;
        memo: Memo;
        operations: Operation[];
        ext: TransactionV0Ext;
    });
    toXdrObject(): TransactionV0Wire;
    static fromXdrObject(wire: TransactionV0Wire): TransactionV0;
}
