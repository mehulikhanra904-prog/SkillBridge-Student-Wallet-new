import type { XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { InnerTransactionResultResult, type InnerTransactionResultResultWire } from "./inner-transaction-result-result.js";
import { InnerTransactionResultExt, type InnerTransactionResultExtWire } from "./inner-transaction-result-ext.js";
export interface InnerTransactionResultWire {
    feeCharged: bigint;
    result: InnerTransactionResultResultWire;
    ext: InnerTransactionResultExtWire;
}
/**
 * ```xdr
 * struct InnerTransactionResult
 * {
 *     // Always 0. Here for binary compatibility.
 *     int64 feeCharged;
 *
 *     union switch (TransactionResultCode code)
 *     {
 *     // txFEE_BUMP_INNER_SUCCESS is not included
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
 *     // txFEE_BUMP_INNER_FAILED is not included
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
export declare class InnerTransactionResult extends XdrValue {
    readonly feeCharged: bigint;
    readonly result: InnerTransactionResultResult;
    readonly ext: InnerTransactionResultExt;
    static readonly schema: XdrType<InnerTransactionResultWire>;
    constructor(input: {
        feeCharged: bigint;
        result: InnerTransactionResultResult;
        ext: InnerTransactionResultExt;
    });
    toXdrObject(): InnerTransactionResultWire;
    static fromXdrObject(wire: InnerTransactionResultWire): InnerTransactionResult;
}
