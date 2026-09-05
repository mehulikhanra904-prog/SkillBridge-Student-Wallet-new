import { type XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { InnerTransactionResultPair, type InnerTransactionResultPairWire } from "./inner-transaction-result-pair.js";
import { OperationResult, type OperationResultWire } from "./operation-result.js";
export type TransactionResultResultWire = {
    code: 1;
    innerResultPair: InnerTransactionResultPairWire;
} | {
    code: -13;
    innerResultPair: InnerTransactionResultPairWire;
} | {
    code: 0;
    results: OperationResultWire[];
} | {
    code: -1;
    results: OperationResultWire[];
} | {
    code: -2;
} | {
    code: -3;
} | {
    code: -4;
} | {
    code: -5;
} | {
    code: -6;
} | {
    code: -7;
} | {
    code: -8;
} | {
    code: -9;
} | {
    code: -10;
} | {
    code: -11;
} | {
    code: -12;
} | {
    code: -14;
} | {
    code: -15;
} | {
    code: -16;
} | {
    code: -17;
} | {
    code: -18;
};
export type TransactionResultResultVariantName = "txFeeBumpInnerSuccess" | "txFeeBumpInnerFailed" | "txSuccess" | "txFailed" | "txTooEarly" | "txTooLate" | "txMissingOperation" | "txBadSeq" | "txBadAuth" | "txInsufficientBalance" | "txNoAccount" | "txInsufficientFee" | "txBadAuthExtra" | "txInternalError" | "txNotSupported" | "txBadSponsorship" | "txBadMinSeqAgeOrGap" | "txMalformed" | "txSorobanInvalid" | "txFrozenKeyAccessed";
/**
 * ```xdr
 * union switch (TransactionResultCode code)
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
 * ```
 */
declare abstract class TransactionResultResultBase extends XdrValue {
    abstract readonly type: TransactionResultResultVariantName;
    constructor();
    static readonly schema: XdrType<TransactionResultResultWire>;
    static txFeeBumpInnerSuccess(innerResultPair: InnerTransactionResultPair): TransactionResultResultTxFeeBumpInnerSuccess;
    static txFeeBumpInnerFailed(innerResultPair: InnerTransactionResultPair): TransactionResultResultTxFeeBumpInnerFailed;
    static txSuccess(results: OperationResult[]): TransactionResultResultTxSuccess;
    static txFailed(results: OperationResult[]): TransactionResultResultTxFailed;
    static txTooEarly(): TransactionResultResultTxTooEarly;
    static txTooLate(): TransactionResultResultTxTooLate;
    static txMissingOperation(): TransactionResultResultTxMissingOperation;
    static txBadSeq(): TransactionResultResultTxBadSeq;
    static txBadAuth(): TransactionResultResultTxBadAuth;
    static txInsufficientBalance(): TransactionResultResultTxInsufficientBalance;
    static txNoAccount(): TransactionResultResultTxNoAccount;
    static txInsufficientFee(): TransactionResultResultTxInsufficientFee;
    static txBadAuthExtra(): TransactionResultResultTxBadAuthExtra;
    static txInternalError(): TransactionResultResultTxInternalError;
    static txNotSupported(): TransactionResultResultTxNotSupported;
    static txBadSponsorship(): TransactionResultResultTxBadSponsorship;
    static txBadMinSeqAgeOrGap(): TransactionResultResultTxBadMinSeqAgeOrGap;
    static txMalformed(): TransactionResultResultTxMalformed;
    static txSorobanInvalid(): TransactionResultResultTxSorobanInvalid;
    static txFrozenKeyAccessed(): TransactionResultResultTxFrozenKeyAccessed;
    static fromXdrObject(wire: TransactionResultResultWire): TransactionResultResult;
    /**
     * Type guard narrowing an unknown value to a concrete TransactionResultResult variant.
     * Use this instead of `instanceof TransactionResultResult`: the exported `TransactionResultResult` value
     * is the abstract base, so `instanceof` narrows to the base (not the
     * variant union) and forces a cast. `TransactionResultResult.is(x)` narrows to the union.
     */
    static is(value: unknown): value is TransactionResultResult;
    abstract toXdrObject(): TransactionResultResultWire;
}
export declare class TransactionResultResultTxFeeBumpInnerSuccess extends TransactionResultResultBase {
    readonly type: "txFeeBumpInnerSuccess";
    readonly innerResultPair: InnerTransactionResultPair;
    constructor(innerResultPair: InnerTransactionResultPair);
    get value(): InnerTransactionResultPair;
    toXdrObject(): Extract<TransactionResultResultWire, {
        code: 1;
    }>;
}
export declare class TransactionResultResultTxFeeBumpInnerFailed extends TransactionResultResultBase {
    readonly type: "txFeeBumpInnerFailed";
    readonly innerResultPair: InnerTransactionResultPair;
    constructor(innerResultPair: InnerTransactionResultPair);
    get value(): InnerTransactionResultPair;
    toXdrObject(): Extract<TransactionResultResultWire, {
        code: -13;
    }>;
}
export declare class TransactionResultResultTxSuccess extends TransactionResultResultBase {
    readonly type: "txSuccess";
    readonly results: OperationResult[];
    constructor(results: OperationResult[]);
    get value(): OperationResult[];
    toXdrObject(): Extract<TransactionResultResultWire, {
        code: 0;
    }>;
}
export declare class TransactionResultResultTxFailed extends TransactionResultResultBase {
    readonly type: "txFailed";
    readonly results: OperationResult[];
    constructor(results: OperationResult[]);
    get value(): OperationResult[];
    toXdrObject(): Extract<TransactionResultResultWire, {
        code: -1;
    }>;
}
export declare class TransactionResultResultTxTooEarly extends TransactionResultResultBase {
    readonly type: "txTooEarly";
    get value(): null;
    toXdrObject(): Extract<TransactionResultResultWire, {
        code: -2;
    }>;
}
export declare class TransactionResultResultTxTooLate extends TransactionResultResultBase {
    readonly type: "txTooLate";
    get value(): null;
    toXdrObject(): Extract<TransactionResultResultWire, {
        code: -3;
    }>;
}
export declare class TransactionResultResultTxMissingOperation extends TransactionResultResultBase {
    readonly type: "txMissingOperation";
    get value(): null;
    toXdrObject(): Extract<TransactionResultResultWire, {
        code: -4;
    }>;
}
export declare class TransactionResultResultTxBadSeq extends TransactionResultResultBase {
    readonly type: "txBadSeq";
    get value(): null;
    toXdrObject(): Extract<TransactionResultResultWire, {
        code: -5;
    }>;
}
export declare class TransactionResultResultTxBadAuth extends TransactionResultResultBase {
    readonly type: "txBadAuth";
    get value(): null;
    toXdrObject(): Extract<TransactionResultResultWire, {
        code: -6;
    }>;
}
export declare class TransactionResultResultTxInsufficientBalance extends TransactionResultResultBase {
    readonly type: "txInsufficientBalance";
    get value(): null;
    toXdrObject(): Extract<TransactionResultResultWire, {
        code: -7;
    }>;
}
export declare class TransactionResultResultTxNoAccount extends TransactionResultResultBase {
    readonly type: "txNoAccount";
    get value(): null;
    toXdrObject(): Extract<TransactionResultResultWire, {
        code: -8;
    }>;
}
export declare class TransactionResultResultTxInsufficientFee extends TransactionResultResultBase {
    readonly type: "txInsufficientFee";
    get value(): null;
    toXdrObject(): Extract<TransactionResultResultWire, {
        code: -9;
    }>;
}
export declare class TransactionResultResultTxBadAuthExtra extends TransactionResultResultBase {
    readonly type: "txBadAuthExtra";
    get value(): null;
    toXdrObject(): Extract<TransactionResultResultWire, {
        code: -10;
    }>;
}
export declare class TransactionResultResultTxInternalError extends TransactionResultResultBase {
    readonly type: "txInternalError";
    get value(): null;
    toXdrObject(): Extract<TransactionResultResultWire, {
        code: -11;
    }>;
}
export declare class TransactionResultResultTxNotSupported extends TransactionResultResultBase {
    readonly type: "txNotSupported";
    get value(): null;
    toXdrObject(): Extract<TransactionResultResultWire, {
        code: -12;
    }>;
}
export declare class TransactionResultResultTxBadSponsorship extends TransactionResultResultBase {
    readonly type: "txBadSponsorship";
    get value(): null;
    toXdrObject(): Extract<TransactionResultResultWire, {
        code: -14;
    }>;
}
export declare class TransactionResultResultTxBadMinSeqAgeOrGap extends TransactionResultResultBase {
    readonly type: "txBadMinSeqAgeOrGap";
    get value(): null;
    toXdrObject(): Extract<TransactionResultResultWire, {
        code: -15;
    }>;
}
export declare class TransactionResultResultTxMalformed extends TransactionResultResultBase {
    readonly type: "txMalformed";
    get value(): null;
    toXdrObject(): Extract<TransactionResultResultWire, {
        code: -16;
    }>;
}
export declare class TransactionResultResultTxSorobanInvalid extends TransactionResultResultBase {
    readonly type: "txSorobanInvalid";
    get value(): null;
    toXdrObject(): Extract<TransactionResultResultWire, {
        code: -17;
    }>;
}
export declare class TransactionResultResultTxFrozenKeyAccessed extends TransactionResultResultBase {
    readonly type: "txFrozenKeyAccessed";
    get value(): null;
    toXdrObject(): Extract<TransactionResultResultWire, {
        code: -18;
    }>;
}
export type TransactionResultResult = TransactionResultResultTxFeeBumpInnerSuccess | TransactionResultResultTxFeeBumpInnerFailed | TransactionResultResultTxSuccess | TransactionResultResultTxFailed | TransactionResultResultTxTooEarly | TransactionResultResultTxTooLate | TransactionResultResultTxMissingOperation | TransactionResultResultTxBadSeq | TransactionResultResultTxBadAuth | TransactionResultResultTxInsufficientBalance | TransactionResultResultTxNoAccount | TransactionResultResultTxInsufficientFee | TransactionResultResultTxBadAuthExtra | TransactionResultResultTxInternalError | TransactionResultResultTxNotSupported | TransactionResultResultTxBadSponsorship | TransactionResultResultTxBadMinSeqAgeOrGap | TransactionResultResultTxMalformed | TransactionResultResultTxSorobanInvalid | TransactionResultResultTxFrozenKeyAccessed;
export declare const TransactionResultResult: typeof TransactionResultResultBase;
export {};
