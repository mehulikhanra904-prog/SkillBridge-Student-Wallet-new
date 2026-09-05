import { EnumValue } from "../values/enum-value.js";
export type TransactionResultCodeWire = number;
export type TransactionResultCodeName = "txFeeBumpInnerSuccess" | "txSuccess" | "txFailed" | "txTooEarly" | "txTooLate" | "txMissingOperation" | "txBadSeq" | "txBadAuth" | "txInsufficientBalance" | "txNoAccount" | "txInsufficientFee" | "txBadAuthExtra" | "txInternalError" | "txNotSupported" | "txFeeBumpInnerFailed" | "txBadSponsorship" | "txBadMinSeqAgeOrGap" | "txMalformed" | "txSorobanInvalid" | "txFrozenKeyAccessed";
/**
 * ```xdr
 * enum TransactionResultCode
 * {
 *     txFEE_BUMP_INNER_SUCCESS = 1, // fee bump inner transaction succeeded
 *     txSUCCESS = 0,                // all operations succeeded
 *
 *     txFAILED = -1, // one of the operations failed (none were applied)
 *
 *     txTOO_EARLY = -2,         // ledger closeTime before minTime
 *     txTOO_LATE = -3,          // ledger closeTime after maxTime
 *     txMISSING_OPERATION = -4, // no operation was specified
 *     txBAD_SEQ = -5,           // sequence number does not match source account
 *
 *     txBAD_AUTH = -6,             // too few valid signatures / wrong network
 *     txINSUFFICIENT_BALANCE = -7, // fee would bring account below reserve
 *     txNO_ACCOUNT = -8,           // source account not found
 *     txINSUFFICIENT_FEE = -9,     // fee is too small
 *     txBAD_AUTH_EXTRA = -10,      // unused signatures attached to transaction
 *     txINTERNAL_ERROR = -11,      // an unknown error occurred
 *
 *     txNOT_SUPPORTED = -12,          // transaction type not supported
 *     txFEE_BUMP_INNER_FAILED = -13,  // fee bump inner transaction failed
 *     txBAD_SPONSORSHIP = -14,        // sponsorship not confirmed
 *     txBAD_MIN_SEQ_AGE_OR_GAP = -15, // minSeqAge or minSeqLedgerGap conditions not met
 *     txMALFORMED = -16,              // precondition is invalid
 *     txSOROBAN_INVALID = -17,        // soroban-specific preconditions were not met
 *     txFROZEN_KEY_ACCESSED = -18     // a 'frozen' ledger key is accessed by any operation
 * };
 * ```
 */
export declare class TransactionResultCode extends EnumValue<TransactionResultCodeName> {
    static readonly txFeeBumpInnerSuccess: TransactionResultCode;
    static readonly txSuccess: TransactionResultCode;
    static readonly txFailed: TransactionResultCode;
    static readonly txTooEarly: TransactionResultCode;
    static readonly txTooLate: TransactionResultCode;
    static readonly txMissingOperation: TransactionResultCode;
    static readonly txBadSeq: TransactionResultCode;
    static readonly txBadAuth: TransactionResultCode;
    static readonly txInsufficientBalance: TransactionResultCode;
    static readonly txNoAccount: TransactionResultCode;
    static readonly txInsufficientFee: TransactionResultCode;
    static readonly txBadAuthExtra: TransactionResultCode;
    static readonly txInternalError: TransactionResultCode;
    static readonly txNotSupported: TransactionResultCode;
    static readonly txFeeBumpInnerFailed: TransactionResultCode;
    static readonly txBadSponsorship: TransactionResultCode;
    static readonly txBadMinSeqAgeOrGap: TransactionResultCode;
    static readonly txMalformed: TransactionResultCode;
    static readonly txSorobanInvalid: TransactionResultCode;
    static readonly txFrozenKeyAccessed: TransactionResultCode;
    static readonly schema: import("@stellar/js-xdr").EnumSchema<"TransactionResultCode", {
        readonly txFeeBumpInnerSuccess: 1;
        readonly txSuccess: 0;
        readonly txFailed: -1;
        readonly txTooEarly: -2;
        readonly txTooLate: -3;
        readonly txMissingOperation: -4;
        readonly txBadSeq: -5;
        readonly txBadAuth: -6;
        readonly txInsufficientBalance: -7;
        readonly txNoAccount: -8;
        readonly txInsufficientFee: -9;
        readonly txBadAuthExtra: -10;
        readonly txInternalError: -11;
        readonly txNotSupported: -12;
        readonly txFeeBumpInnerFailed: -13;
        readonly txBadSponsorship: -14;
        readonly txBadMinSeqAgeOrGap: -15;
        readonly txMalformed: -16;
        readonly txSorobanInvalid: -17;
        readonly txFrozenKeyAccessed: -18;
    }>;
    static fromValue(value: number): TransactionResultCode;
    static fromName(name: TransactionResultCodeName): TransactionResultCode;
    static fromXdrObject(wire: number): TransactionResultCode;
}
