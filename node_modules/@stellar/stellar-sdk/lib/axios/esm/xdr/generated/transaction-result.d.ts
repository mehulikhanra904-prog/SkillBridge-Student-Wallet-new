import type { XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { TransactionResultResult, type TransactionResultResultWire } from "./transaction-result-result.js";
import { TransactionResultExt, type TransactionResultExtWire } from "./transaction-result-ext.js";
export interface TransactionResultWire {
    feeCharged: bigint;
    result: TransactionResultResultWire;
    ext: TransactionResultExtWire;
}
/**
 * ```xdr
 * struct TransactionResult
 * {
 *     int64 feeCharged; // actual fee charged for the transaction
 *
 *     union switch (TransactionResultCode code)
 *     {
 *     case txFEE_BUMP_INNER_SUCCESS:
 *     case txFEE_BUMP_INNER_FAILED:
 *         InnerTransactionResultPair innerResultPair;
 *     case txSUCCESS:
 *     case txFAILED:
 *         OperationResult results<>;
 *     case txTOO_EARLY:
 *     case txTOO_LATE:
 *     case txMISSING_OPERATION:
 *     case txBAD_SEQ:
 *     case txBAD_AUTH:
 *     case txINSUFFICIENT_BALANCE:
 *     case txNO_ACCOUNT:
 *     case txINSUFFICIENT_FEE:
 *     case txBAD_AUTH_EXTRA:
 *     case txINTERNAL_ERROR:
 *     case txNOT_SUPPORTED:
 *     // case txFEE_BUMP_INNER_FAILED: handled above
 *     case txBAD_SPONSORSHIP:
 *     case txBAD_MIN_SEQ_AGE_OR_GAP:
 *     case txMALFORMED:
 *     case txSOROBAN_INVALID:
 *     case txFROZEN_KEY_ACCESSED:
 *         void;
 *     }
 *     result;
 *
 *     // reserved for future use
 *     union switch (int v)
 *     {
 *     case 0:
 *         void;
 *     }
 *     ext;
 * };
 * ```
 */
export declare class TransactionResult extends XdrValue {
    readonly feeCharged: bigint;
    readonly result: TransactionResultResult;
    readonly ext: TransactionResultExt;
    static readonly schema: XdrType<TransactionResultWire>;
    constructor(input: {
        feeCharged: bigint;
        result: TransactionResultResult;
        ext: TransactionResultExt;
    });
    toXdrObject(): TransactionResultWire;
    static fromXdrObject(wire: TransactionResultWire): TransactionResult;
}
