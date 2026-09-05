import { type XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { OperationResultTr, type OperationResultTrWire } from "./operation-result-tr.js";
export type OperationResultWire = {
    code: 0;
    tr: OperationResultTrWire;
} | {
    code: -1;
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
};
export type OperationResultVariantName = "opInner" | "opBadAuth" | "opNoAccount" | "opNotSupported" | "opTooManySubentries" | "opExceededWorkLimit" | "opTooManySponsoring";
/**
 * ```xdr
 * union OperationResult switch (OperationResultCode code)
 * {
 * case opINNER:
 *     union switch (OperationType type)
 *     {
 *     case CREATE_ACCOUNT:
 *         CreateAccountResult createAccountResult;
 *     case PAYMENT:
 *         PaymentResult paymentResult;
 *     case PATH_PAYMENT_STRICT_RECEIVE:
 *         PathPaymentStrictReceiveResult pathPaymentStrictReceiveResult;
 *     case MANAGE_SELL_OFFER:
 *         ManageSellOfferResult manageSellOfferResult;
 *     case CREATE_PASSIVE_SELL_OFFER:
 *         ManageSellOfferResult createPassiveSellOfferResult;
 *     case SET_OPTIONS:
 *         SetOptionsResult setOptionsResult;
 *     case CHANGE_TRUST:
 *         ChangeTrustResult changeTrustResult;
 *     case ALLOW_TRUST:
 *         AllowTrustResult allowTrustResult;
 *     case ACCOUNT_MERGE:
 *         AccountMergeResult accountMergeResult;
 *     case INFLATION:
 *         InflationResult inflationResult;
 *     case MANAGE_DATA:
 *         ManageDataResult manageDataResult;
 *     case BUMP_SEQUENCE:
 *         BumpSequenceResult bumpSeqResult;
 *     case MANAGE_BUY_OFFER:
 *         ManageBuyOfferResult manageBuyOfferResult;
 *     case PATH_PAYMENT_STRICT_SEND:
 *         PathPaymentStrictSendResult pathPaymentStrictSendResult;
 *     case CREATE_CLAIMABLE_BALANCE:
 *         CreateClaimableBalanceResult createClaimableBalanceResult;
 *     case CLAIM_CLAIMABLE_BALANCE:
 *         ClaimClaimableBalanceResult claimClaimableBalanceResult;
 *     case BEGIN_SPONSORING_FUTURE_RESERVES:
 *         BeginSponsoringFutureReservesResult beginSponsoringFutureReservesResult;
 *     case END_SPONSORING_FUTURE_RESERVES:
 *         EndSponsoringFutureReservesResult endSponsoringFutureReservesResult;
 *     case REVOKE_SPONSORSHIP:
 *         RevokeSponsorshipResult revokeSponsorshipResult;
 *     case CLAWBACK:
 *         ClawbackResult clawbackResult;
 *     case CLAWBACK_CLAIMABLE_BALANCE:
 *         ClawbackClaimableBalanceResult clawbackClaimableBalanceResult;
 *     case SET_TRUST_LINE_FLAGS:
 *         SetTrustLineFlagsResult setTrustLineFlagsResult;
 *     case LIQUIDITY_POOL_DEPOSIT:
 *         LiquidityPoolDepositResult liquidityPoolDepositResult;
 *     case LIQUIDITY_POOL_WITHDRAW:
 *         LiquidityPoolWithdrawResult liquidityPoolWithdrawResult;
 *     case INVOKE_HOST_FUNCTION:
 *         InvokeHostFunctionResult invokeHostFunctionResult;
 *     case EXTEND_FOOTPRINT_TTL:
 *         ExtendFootprintTTLResult extendFootprintTTLResult;
 *     case RESTORE_FOOTPRINT:
 *         RestoreFootprintResult restoreFootprintResult;
 *     }
 *     tr;
 * case opBAD_AUTH:
 * case opNO_ACCOUNT:
 * case opNOT_SUPPORTED:
 * case opTOO_MANY_SUBENTRIES:
 * case opEXCEEDED_WORK_LIMIT:
 * case opTOO_MANY_SPONSORING:
 *     void;
 * };
 * ```
 */
declare abstract class OperationResultBase extends XdrValue {
    abstract readonly type: OperationResultVariantName;
    constructor();
    static readonly schema: XdrType<OperationResultWire>;
    static opInner(tr: OperationResultTr): OperationResultOpInner;
    static opBadAuth(): OperationResultOpBadAuth;
    static opNoAccount(): OperationResultOpNoAccount;
    static opNotSupported(): OperationResultOpNotSupported;
    static opTooManySubentries(): OperationResultOpTooManySubentries;
    static opExceededWorkLimit(): OperationResultOpExceededWorkLimit;
    static opTooManySponsoring(): OperationResultOpTooManySponsoring;
    static fromXdrObject(wire: OperationResultWire): OperationResult;
    /**
     * Type guard narrowing an unknown value to a concrete OperationResult variant.
     * Use this instead of `instanceof OperationResult`: the exported `OperationResult` value
     * is the abstract base, so `instanceof` narrows to the base (not the
     * variant union) and forces a cast. `OperationResult.is(x)` narrows to the union.
     */
    static is(value: unknown): value is OperationResult;
    abstract toXdrObject(): OperationResultWire;
}
export declare class OperationResultOpInner extends OperationResultBase {
    readonly type: "opInner";
    readonly tr: OperationResultTr;
    constructor(tr: OperationResultTr);
    get value(): OperationResultTr;
    toXdrObject(): Extract<OperationResultWire, {
        code: 0;
    }>;
}
export declare class OperationResultOpBadAuth extends OperationResultBase {
    readonly type: "opBadAuth";
    get value(): null;
    toXdrObject(): Extract<OperationResultWire, {
        code: -1;
    }>;
}
export declare class OperationResultOpNoAccount extends OperationResultBase {
    readonly type: "opNoAccount";
    get value(): null;
    toXdrObject(): Extract<OperationResultWire, {
        code: -2;
    }>;
}
export declare class OperationResultOpNotSupported extends OperationResultBase {
    readonly type: "opNotSupported";
    get value(): null;
    toXdrObject(): Extract<OperationResultWire, {
        code: -3;
    }>;
}
export declare class OperationResultOpTooManySubentries extends OperationResultBase {
    readonly type: "opTooManySubentries";
    get value(): null;
    toXdrObject(): Extract<OperationResultWire, {
        code: -4;
    }>;
}
export declare class OperationResultOpExceededWorkLimit extends OperationResultBase {
    readonly type: "opExceededWorkLimit";
    get value(): null;
    toXdrObject(): Extract<OperationResultWire, {
        code: -5;
    }>;
}
export declare class OperationResultOpTooManySponsoring extends OperationResultBase {
    readonly type: "opTooManySponsoring";
    get value(): null;
    toXdrObject(): Extract<OperationResultWire, {
        code: -6;
    }>;
}
export type OperationResult = OperationResultOpInner | OperationResultOpBadAuth | OperationResultOpNoAccount | OperationResultOpNotSupported | OperationResultOpTooManySubentries | OperationResultOpExceededWorkLimit | OperationResultOpTooManySponsoring;
export declare const OperationResult: typeof OperationResultBase;
export {};
