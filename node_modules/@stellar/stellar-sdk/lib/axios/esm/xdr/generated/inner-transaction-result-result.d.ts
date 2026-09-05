import { type XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { OperationResult, type OperationResultWire } from "./operation-result.js";
export type InnerTransactionResultResultWire = {
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
export type InnerTransactionResultResultVariantName = "txSuccess" | "txFailed" | "txTooEarly" | "txTooLate" | "txMissingOperation" | "txBadSeq" | "txBadAuth" | "txInsufficientBalance" | "txNoAccount" | "txInsufficientFee" | "txBadAuthExtra" | "txInternalError" | "txNotSupported" | "txBadSponsorship" | "txBadMinSeqAgeOrGap" | "txMalformed" | "txSorobanInvalid" | "txFrozenKeyAccessed";
/**
 * ```xdr
 * union switch (TransactionResultCode code)
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
 * ```
 */
declare abstract class InnerTransactionResultResultBase extends XdrValue {
    abstract readonly type: InnerTransactionResultResultVariantName;
    constructor();
    static readonly schema: XdrType<InnerTransactionResultResultWire>;
    static txSuccess(results: OperationResult[]): InnerTransactionResultResultTxSuccess;
    static txFailed(results: OperationResult[]): InnerTransactionResultResultTxFailed;
    static txTooEarly(): InnerTransactionResultResultTxTooEarly;
    static txTooLate(): InnerTransactionResultResultTxTooLate;
    static txMissingOperation(): InnerTransactionResultResultTxMissingOperation;
    static txBadSeq(): InnerTransactionResultResultTxBadSeq;
    static txBadAuth(): InnerTransactionResultResultTxBadAuth;
    static txInsufficientBalance(): InnerTransactionResultResultTxInsufficientBalance;
    static txNoAccount(): InnerTransactionResultResultTxNoAccount;
    static txInsufficientFee(): InnerTransactionResultResultTxInsufficientFee;
    static txBadAuthExtra(): InnerTransactionResultResultTxBadAuthExtra;
    static txInternalError(): InnerTransactionResultResultTxInternalError;
    static txNotSupported(): InnerTransactionResultResultTxNotSupported;
    static txBadSponsorship(): InnerTransactionResultResultTxBadSponsorship;
    static txBadMinSeqAgeOrGap(): InnerTransactionResultResultTxBadMinSeqAgeOrGap;
    static txMalformed(): InnerTransactionResultResultTxMalformed;
    static txSorobanInvalid(): InnerTransactionResultResultTxSorobanInvalid;
    static txFrozenKeyAccessed(): InnerTransactionResultResultTxFrozenKeyAccessed;
    static fromXdrObject(wire: InnerTransactionResultResultWire): InnerTransactionResultResult;
    /**
     * Type guard narrowing an unknown value to a concrete InnerTransactionResultResult variant.
     * Use this instead of `instanceof InnerTransactionResultResult`: the exported `InnerTransactionResultResult` value
     * is the abstract base, so `instanceof` narrows to the base (not the
     * variant union) and forces a cast. `InnerTransactionResultResult.is(x)` narrows to the union.
     */
    static is(value: unknown): value is InnerTransactionResultResult;
    abstract toXdrObject(): InnerTransactionResultResultWire;
}
export declare class InnerTransactionResultResultTxSuccess extends InnerTransactionResultResultBase {
    readonly type: "txSuccess";
    readonly results: OperationResult[];
    constructor(results: OperationResult[]);
    get value(): OperationResult[];
    toXdrObject(): Extract<InnerTransactionResultResultWire, {
        code: 0;
    }>;
}
export declare class InnerTransactionResultResultTxFailed extends InnerTransactionResultResultBase {
    readonly type: "txFailed";
    readonly results: OperationResult[];
    constructor(results: OperationResult[]);
    get value(): OperationResult[];
    toXdrObject(): Extract<InnerTransactionResultResultWire, {
        code: -1;
    }>;
}
export declare class InnerTransactionResultResultTxTooEarly extends InnerTransactionResultResultBase {
    readonly type: "txTooEarly";
    get value(): null;
    toXdrObject(): Extract<InnerTransactionResultResultWire, {
        code: -2;
    }>;
}
export declare class InnerTransactionResultResultTxTooLate extends InnerTransactionResultResultBase {
    readonly type: "txTooLate";
    get value(): null;
    toXdrObject(): Extract<InnerTransactionResultResultWire, {
        code: -3;
    }>;
}
export declare class InnerTransactionResultResultTxMissingOperation extends InnerTransactionResultResultBase {
    readonly type: "txMissingOperation";
    get value(): null;
    toXdrObject(): Extract<InnerTransactionResultResultWire, {
        code: -4;
    }>;
}
export declare class InnerTransactionResultResultTxBadSeq extends InnerTransactionResultResultBase {
    readonly type: "txBadSeq";
    get value(): null;
    toXdrObject(): Extract<InnerTransactionResultResultWire, {
        code: -5;
    }>;
}
export declare class InnerTransactionResultResultTxBadAuth extends InnerTransactionResultResultBase {
    readonly type: "txBadAuth";
    get value(): null;
    toXdrObject(): Extract<InnerTransactionResultResultWire, {
        code: -6;
    }>;
}
export declare class InnerTransactionResultResultTxInsufficientBalance extends InnerTransactionResultResultBase {
    readonly type: "txInsufficientBalance";
    get value(): null;
    toXdrObject(): Extract<InnerTransactionResultResultWire, {
        code: -7;
    }>;
}
export declare class InnerTransactionResultResultTxNoAccount extends InnerTransactionResultResultBase {
    readonly type: "txNoAccount";
    get value(): null;
    toXdrObject(): Extract<InnerTransactionResultResultWire, {
        code: -8;
    }>;
}
export declare class InnerTransactionResultResultTxInsufficientFee extends InnerTransactionResultResultBase {
    readonly type: "txInsufficientFee";
    get value(): null;
    toXdrObject(): Extract<InnerTransactionResultResultWire, {
        code: -9;
    }>;
}
export declare class InnerTransactionResultResultTxBadAuthExtra extends InnerTransactionResultResultBase {
    readonly type: "txBadAuthExtra";
    get value(): null;
    toXdrObject(): Extract<InnerTransactionResultResultWire, {
        code: -10;
    }>;
}
export declare class InnerTransactionResultResultTxInternalError extends InnerTransactionResultResultBase {
    readonly type: "txInternalError";
    get value(): null;
    toXdrObject(): Extract<InnerTransactionResultResultWire, {
        code: -11;
    }>;
}
export declare class InnerTransactionResultResultTxNotSupported extends InnerTransactionResultResultBase {
    readonly type: "txNotSupported";
    get value(): null;
    toXdrObject(): Extract<InnerTransactionResultResultWire, {
        code: -12;
    }>;
}
export declare class InnerTransactionResultResultTxBadSponsorship extends InnerTransactionResultResultBase {
    readonly type: "txBadSponsorship";
    get value(): null;
    toXdrObject(): Extract<InnerTransactionResultResultWire, {
        code: -14;
    }>;
}
export declare class InnerTransactionResultResultTxBadMinSeqAgeOrGap extends InnerTransactionResultResultBase {
    readonly type: "txBadMinSeqAgeOrGap";
    get value(): null;
    toXdrObject(): Extract<InnerTransactionResultResultWire, {
        code: -15;
    }>;
}
export declare class InnerTransactionResultResultTxMalformed extends InnerTransactionResultResultBase {
    readonly type: "txMalformed";
    get value(): null;
    toXdrObject(): Extract<InnerTransactionResultResultWire, {
        code: -16;
    }>;
}
export declare class InnerTransactionResultResultTxSorobanInvalid extends InnerTransactionResultResultBase {
    readonly type: "txSorobanInvalid";
    get value(): null;
    toXdrObject(): Extract<InnerTransactionResultResultWire, {
        code: -17;
    }>;
}
export declare class InnerTransactionResultResultTxFrozenKeyAccessed extends InnerTransactionResultResultBase {
    readonly type: "txFrozenKeyAccessed";
    get value(): null;
    toXdrObject(): Extract<InnerTransactionResultResultWire, {
        code: -18;
    }>;
}
export type InnerTransactionResultResult = InnerTransactionResultResultTxSuccess | InnerTransactionResultResultTxFailed | InnerTransactionResultResultTxTooEarly | InnerTransactionResultResultTxTooLate | InnerTransactionResultResultTxMissingOperation | InnerTransactionResultResultTxBadSeq | InnerTransactionResultResultTxBadAuth | InnerTransactionResultResultTxInsufficientBalance | InnerTransactionResultResultTxNoAccount | InnerTransactionResultResultTxInsufficientFee | InnerTransactionResultResultTxBadAuthExtra | InnerTransactionResultResultTxInternalError | InnerTransactionResultResultTxNotSupported | InnerTransactionResultResultTxBadSponsorship | InnerTransactionResultResultTxBadMinSeqAgeOrGap | InnerTransactionResultResultTxMalformed | InnerTransactionResultResultTxSorobanInvalid | InnerTransactionResultResultTxFrozenKeyAccessed;
export declare const InnerTransactionResultResult: typeof InnerTransactionResultResultBase;
export {};
