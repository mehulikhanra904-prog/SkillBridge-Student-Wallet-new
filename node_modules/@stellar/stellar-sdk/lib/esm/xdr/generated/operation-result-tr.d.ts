import { type XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { CreateAccountResult, type CreateAccountResultWire } from "./create-account-result.js";
import { PaymentResult, type PaymentResultWire } from "./payment-result.js";
import { PathPaymentStrictReceiveResult, type PathPaymentStrictReceiveResultWire } from "./path-payment-strict-receive-result.js";
import { ManageSellOfferResult, type ManageSellOfferResultWire } from "./manage-sell-offer-result.js";
import { SetOptionsResult, type SetOptionsResultWire } from "./set-options-result.js";
import { ChangeTrustResult, type ChangeTrustResultWire } from "./change-trust-result.js";
import { AllowTrustResult, type AllowTrustResultWire } from "./allow-trust-result.js";
import { AccountMergeResult, type AccountMergeResultWire } from "./account-merge-result.js";
import { InflationResult, type InflationResultWire } from "./inflation-result.js";
import { ManageDataResult, type ManageDataResultWire } from "./manage-data-result.js";
import { BumpSequenceResult, type BumpSequenceResultWire } from "./bump-sequence-result.js";
import { ManageBuyOfferResult, type ManageBuyOfferResultWire } from "./manage-buy-offer-result.js";
import { PathPaymentStrictSendResult, type PathPaymentStrictSendResultWire } from "./path-payment-strict-send-result.js";
import { CreateClaimableBalanceResult, type CreateClaimableBalanceResultWire } from "./create-claimable-balance-result.js";
import { ClaimClaimableBalanceResult, type ClaimClaimableBalanceResultWire } from "./claim-claimable-balance-result.js";
import { BeginSponsoringFutureReservesResult, type BeginSponsoringFutureReservesResultWire } from "./begin-sponsoring-future-reserves-result.js";
import { EndSponsoringFutureReservesResult, type EndSponsoringFutureReservesResultWire } from "./end-sponsoring-future-reserves-result.js";
import { RevokeSponsorshipResult, type RevokeSponsorshipResultWire } from "./revoke-sponsorship-result.js";
import { ClawbackResult, type ClawbackResultWire } from "./clawback-result.js";
import { ClawbackClaimableBalanceResult, type ClawbackClaimableBalanceResultWire } from "./clawback-claimable-balance-result.js";
import { SetTrustLineFlagsResult, type SetTrustLineFlagsResultWire } from "./set-trust-line-flags-result.js";
import { LiquidityPoolDepositResult, type LiquidityPoolDepositResultWire } from "./liquidity-pool-deposit-result.js";
import { LiquidityPoolWithdrawResult, type LiquidityPoolWithdrawResultWire } from "./liquidity-pool-withdraw-result.js";
import { InvokeHostFunctionResult, type InvokeHostFunctionResultWire } from "./invoke-host-function-result.js";
import { ExtendFootprintTtlResult, type ExtendFootprintTtlResultWire } from "./extend-footprint-ttl-result.js";
import { RestoreFootprintResult, type RestoreFootprintResultWire } from "./restore-footprint-result.js";
export type OperationResultTrWire = {
    type: 0;
    createAccountResult: CreateAccountResultWire;
} | {
    type: 1;
    paymentResult: PaymentResultWire;
} | {
    type: 2;
    pathPaymentStrictReceiveResult: PathPaymentStrictReceiveResultWire;
} | {
    type: 3;
    manageSellOfferResult: ManageSellOfferResultWire;
} | {
    type: 4;
    createPassiveSellOfferResult: ManageSellOfferResultWire;
} | {
    type: 5;
    setOptionsResult: SetOptionsResultWire;
} | {
    type: 6;
    changeTrustResult: ChangeTrustResultWire;
} | {
    type: 7;
    allowTrustResult: AllowTrustResultWire;
} | {
    type: 8;
    accountMergeResult: AccountMergeResultWire;
} | {
    type: 9;
    inflationResult: InflationResultWire;
} | {
    type: 10;
    manageDataResult: ManageDataResultWire;
} | {
    type: 11;
    bumpSeqResult: BumpSequenceResultWire;
} | {
    type: 12;
    manageBuyOfferResult: ManageBuyOfferResultWire;
} | {
    type: 13;
    pathPaymentStrictSendResult: PathPaymentStrictSendResultWire;
} | {
    type: 14;
    createClaimableBalanceResult: CreateClaimableBalanceResultWire;
} | {
    type: 15;
    claimClaimableBalanceResult: ClaimClaimableBalanceResultWire;
} | {
    type: 16;
    beginSponsoringFutureReservesResult: BeginSponsoringFutureReservesResultWire;
} | {
    type: 17;
    endSponsoringFutureReservesResult: EndSponsoringFutureReservesResultWire;
} | {
    type: 18;
    revokeSponsorshipResult: RevokeSponsorshipResultWire;
} | {
    type: 19;
    clawbackResult: ClawbackResultWire;
} | {
    type: 20;
    clawbackClaimableBalanceResult: ClawbackClaimableBalanceResultWire;
} | {
    type: 21;
    setTrustLineFlagsResult: SetTrustLineFlagsResultWire;
} | {
    type: 22;
    liquidityPoolDepositResult: LiquidityPoolDepositResultWire;
} | {
    type: 23;
    liquidityPoolWithdrawResult: LiquidityPoolWithdrawResultWire;
} | {
    type: 24;
    invokeHostFunctionResult: InvokeHostFunctionResultWire;
} | {
    type: 25;
    extendFootprintTtlResult: ExtendFootprintTtlResultWire;
} | {
    type: 26;
    restoreFootprintResult: RestoreFootprintResultWire;
};
export type OperationResultTrVariantName = "createAccount" | "payment" | "pathPaymentStrictReceive" | "manageSellOffer" | "createPassiveSellOffer" | "setOptions" | "changeTrust" | "allowTrust" | "accountMerge" | "inflation" | "manageData" | "bumpSequence" | "manageBuyOffer" | "pathPaymentStrictSend" | "createClaimableBalance" | "claimClaimableBalance" | "beginSponsoringFutureReserves" | "endSponsoringFutureReserves" | "revokeSponsorship" | "clawback" | "clawbackClaimableBalance" | "setTrustLineFlags" | "liquidityPoolDeposit" | "liquidityPoolWithdraw" | "invokeHostFunction" | "extendFootprintTtl" | "restoreFootprint";
/**
 * ```xdr
 * union switch (OperationType type)
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
 * ```
 */
declare abstract class OperationResultTrBase extends XdrValue {
    abstract readonly type: OperationResultTrVariantName;
    constructor();
    static readonly schema: XdrType<OperationResultTrWire>;
    static createAccount(createAccountResult: CreateAccountResult): OperationResultTrCreateAccount;
    static payment(paymentResult: PaymentResult): OperationResultTrPayment;
    static pathPaymentStrictReceive(pathPaymentStrictReceiveResult: PathPaymentStrictReceiveResult): OperationResultTrPathPaymentStrictReceive;
    static manageSellOffer(manageSellOfferResult: ManageSellOfferResult): OperationResultTrManageSellOffer;
    static createPassiveSellOffer(createPassiveSellOfferResult: ManageSellOfferResult): OperationResultTrCreatePassiveSellOffer;
    static setOptions(setOptionsResult: SetOptionsResult): OperationResultTrSetOptions;
    static changeTrust(changeTrustResult: ChangeTrustResult): OperationResultTrChangeTrust;
    static allowTrust(allowTrustResult: AllowTrustResult): OperationResultTrAllowTrust;
    static accountMerge(accountMergeResult: AccountMergeResult): OperationResultTrAccountMerge;
    static inflation(inflationResult: InflationResult): OperationResultTrInflation;
    static manageData(manageDataResult: ManageDataResult): OperationResultTrManageData;
    static bumpSequence(bumpSeqResult: BumpSequenceResult): OperationResultTrBumpSequence;
    static manageBuyOffer(manageBuyOfferResult: ManageBuyOfferResult): OperationResultTrManageBuyOffer;
    static pathPaymentStrictSend(pathPaymentStrictSendResult: PathPaymentStrictSendResult): OperationResultTrPathPaymentStrictSend;
    static createClaimableBalance(createClaimableBalanceResult: CreateClaimableBalanceResult): OperationResultTrCreateClaimableBalance;
    static claimClaimableBalance(claimClaimableBalanceResult: ClaimClaimableBalanceResult): OperationResultTrClaimClaimableBalance;
    static beginSponsoringFutureReserves(beginSponsoringFutureReservesResult: BeginSponsoringFutureReservesResult): OperationResultTrBeginSponsoringFutureReserves;
    static endSponsoringFutureReserves(endSponsoringFutureReservesResult: EndSponsoringFutureReservesResult): OperationResultTrEndSponsoringFutureReserves;
    static revokeSponsorship(revokeSponsorshipResult: RevokeSponsorshipResult): OperationResultTrRevokeSponsorship;
    static clawback(clawbackResult: ClawbackResult): OperationResultTrClawback;
    static clawbackClaimableBalance(clawbackClaimableBalanceResult: ClawbackClaimableBalanceResult): OperationResultTrClawbackClaimableBalance;
    static setTrustLineFlags(setTrustLineFlagsResult: SetTrustLineFlagsResult): OperationResultTrSetTrustLineFlags;
    static liquidityPoolDeposit(liquidityPoolDepositResult: LiquidityPoolDepositResult): OperationResultTrLiquidityPoolDeposit;
    static liquidityPoolWithdraw(liquidityPoolWithdrawResult: LiquidityPoolWithdrawResult): OperationResultTrLiquidityPoolWithdraw;
    static invokeHostFunction(invokeHostFunctionResult: InvokeHostFunctionResult): OperationResultTrInvokeHostFunction;
    static extendFootprintTtl(extendFootprintTtlResult: ExtendFootprintTtlResult): OperationResultTrExtendFootprintTtl;
    static restoreFootprint(restoreFootprintResult: RestoreFootprintResult): OperationResultTrRestoreFootprint;
    static fromXdrObject(wire: OperationResultTrWire): OperationResultTr;
    /**
     * Type guard narrowing an unknown value to a concrete OperationResultTr variant.
     * Use this instead of `instanceof OperationResultTr`: the exported `OperationResultTr` value
     * is the abstract base, so `instanceof` narrows to the base (not the
     * variant union) and forces a cast. `OperationResultTr.is(x)` narrows to the union.
     */
    static is(value: unknown): value is OperationResultTr;
    abstract toXdrObject(): OperationResultTrWire;
}
export declare class OperationResultTrCreateAccount extends OperationResultTrBase {
    readonly type: "createAccount";
    readonly createAccountResult: CreateAccountResult;
    constructor(createAccountResult: CreateAccountResult);
    get value(): CreateAccountResult;
    toXdrObject(): Extract<OperationResultTrWire, {
        type: 0;
    }>;
}
export declare class OperationResultTrPayment extends OperationResultTrBase {
    readonly type: "payment";
    readonly paymentResult: PaymentResult;
    constructor(paymentResult: PaymentResult);
    get value(): PaymentResult;
    toXdrObject(): Extract<OperationResultTrWire, {
        type: 1;
    }>;
}
export declare class OperationResultTrPathPaymentStrictReceive extends OperationResultTrBase {
    readonly type: "pathPaymentStrictReceive";
    readonly pathPaymentStrictReceiveResult: PathPaymentStrictReceiveResult;
    constructor(pathPaymentStrictReceiveResult: PathPaymentStrictReceiveResult);
    get value(): PathPaymentStrictReceiveResult;
    toXdrObject(): Extract<OperationResultTrWire, {
        type: 2;
    }>;
}
export declare class OperationResultTrManageSellOffer extends OperationResultTrBase {
    readonly type: "manageSellOffer";
    readonly manageSellOfferResult: ManageSellOfferResult;
    constructor(manageSellOfferResult: ManageSellOfferResult);
    get value(): ManageSellOfferResult;
    toXdrObject(): Extract<OperationResultTrWire, {
        type: 3;
    }>;
}
export declare class OperationResultTrCreatePassiveSellOffer extends OperationResultTrBase {
    readonly type: "createPassiveSellOffer";
    readonly createPassiveSellOfferResult: ManageSellOfferResult;
    constructor(createPassiveSellOfferResult: ManageSellOfferResult);
    get value(): ManageSellOfferResult;
    toXdrObject(): Extract<OperationResultTrWire, {
        type: 4;
    }>;
}
export declare class OperationResultTrSetOptions extends OperationResultTrBase {
    readonly type: "setOptions";
    readonly setOptionsResult: SetOptionsResult;
    constructor(setOptionsResult: SetOptionsResult);
    get value(): SetOptionsResult;
    toXdrObject(): Extract<OperationResultTrWire, {
        type: 5;
    }>;
}
export declare class OperationResultTrChangeTrust extends OperationResultTrBase {
    readonly type: "changeTrust";
    readonly changeTrustResult: ChangeTrustResult;
    constructor(changeTrustResult: ChangeTrustResult);
    get value(): ChangeTrustResult;
    toXdrObject(): Extract<OperationResultTrWire, {
        type: 6;
    }>;
}
export declare class OperationResultTrAllowTrust extends OperationResultTrBase {
    readonly type: "allowTrust";
    readonly allowTrustResult: AllowTrustResult;
    constructor(allowTrustResult: AllowTrustResult);
    get value(): AllowTrustResult;
    toXdrObject(): Extract<OperationResultTrWire, {
        type: 7;
    }>;
}
export declare class OperationResultTrAccountMerge extends OperationResultTrBase {
    readonly type: "accountMerge";
    readonly accountMergeResult: AccountMergeResult;
    constructor(accountMergeResult: AccountMergeResult);
    get value(): AccountMergeResult;
    toXdrObject(): Extract<OperationResultTrWire, {
        type: 8;
    }>;
}
export declare class OperationResultTrInflation extends OperationResultTrBase {
    readonly type: "inflation";
    readonly inflationResult: InflationResult;
    constructor(inflationResult: InflationResult);
    get value(): InflationResult;
    toXdrObject(): Extract<OperationResultTrWire, {
        type: 9;
    }>;
}
export declare class OperationResultTrManageData extends OperationResultTrBase {
    readonly type: "manageData";
    readonly manageDataResult: ManageDataResult;
    constructor(manageDataResult: ManageDataResult);
    get value(): ManageDataResult;
    toXdrObject(): Extract<OperationResultTrWire, {
        type: 10;
    }>;
}
export declare class OperationResultTrBumpSequence extends OperationResultTrBase {
    readonly type: "bumpSequence";
    readonly bumpSeqResult: BumpSequenceResult;
    constructor(bumpSeqResult: BumpSequenceResult);
    get value(): BumpSequenceResult;
    toXdrObject(): Extract<OperationResultTrWire, {
        type: 11;
    }>;
}
export declare class OperationResultTrManageBuyOffer extends OperationResultTrBase {
    readonly type: "manageBuyOffer";
    readonly manageBuyOfferResult: ManageBuyOfferResult;
    constructor(manageBuyOfferResult: ManageBuyOfferResult);
    get value(): ManageBuyOfferResult;
    toXdrObject(): Extract<OperationResultTrWire, {
        type: 12;
    }>;
}
export declare class OperationResultTrPathPaymentStrictSend extends OperationResultTrBase {
    readonly type: "pathPaymentStrictSend";
    readonly pathPaymentStrictSendResult: PathPaymentStrictSendResult;
    constructor(pathPaymentStrictSendResult: PathPaymentStrictSendResult);
    get value(): PathPaymentStrictSendResult;
    toXdrObject(): Extract<OperationResultTrWire, {
        type: 13;
    }>;
}
export declare class OperationResultTrCreateClaimableBalance extends OperationResultTrBase {
    readonly type: "createClaimableBalance";
    readonly createClaimableBalanceResult: CreateClaimableBalanceResult;
    constructor(createClaimableBalanceResult: CreateClaimableBalanceResult);
    get value(): CreateClaimableBalanceResult;
    toXdrObject(): Extract<OperationResultTrWire, {
        type: 14;
    }>;
}
export declare class OperationResultTrClaimClaimableBalance extends OperationResultTrBase {
    readonly type: "claimClaimableBalance";
    readonly claimClaimableBalanceResult: ClaimClaimableBalanceResult;
    constructor(claimClaimableBalanceResult: ClaimClaimableBalanceResult);
    get value(): ClaimClaimableBalanceResult;
    toXdrObject(): Extract<OperationResultTrWire, {
        type: 15;
    }>;
}
export declare class OperationResultTrBeginSponsoringFutureReserves extends OperationResultTrBase {
    readonly type: "beginSponsoringFutureReserves";
    readonly beginSponsoringFutureReservesResult: BeginSponsoringFutureReservesResult;
    constructor(beginSponsoringFutureReservesResult: BeginSponsoringFutureReservesResult);
    get value(): BeginSponsoringFutureReservesResult;
    toXdrObject(): Extract<OperationResultTrWire, {
        type: 16;
    }>;
}
export declare class OperationResultTrEndSponsoringFutureReserves extends OperationResultTrBase {
    readonly type: "endSponsoringFutureReserves";
    readonly endSponsoringFutureReservesResult: EndSponsoringFutureReservesResult;
    constructor(endSponsoringFutureReservesResult: EndSponsoringFutureReservesResult);
    get value(): EndSponsoringFutureReservesResult;
    toXdrObject(): Extract<OperationResultTrWire, {
        type: 17;
    }>;
}
export declare class OperationResultTrRevokeSponsorship extends OperationResultTrBase {
    readonly type: "revokeSponsorship";
    readonly revokeSponsorshipResult: RevokeSponsorshipResult;
    constructor(revokeSponsorshipResult: RevokeSponsorshipResult);
    get value(): RevokeSponsorshipResult;
    toXdrObject(): Extract<OperationResultTrWire, {
        type: 18;
    }>;
}
export declare class OperationResultTrClawback extends OperationResultTrBase {
    readonly type: "clawback";
    readonly clawbackResult: ClawbackResult;
    constructor(clawbackResult: ClawbackResult);
    get value(): ClawbackResult;
    toXdrObject(): Extract<OperationResultTrWire, {
        type: 19;
    }>;
}
export declare class OperationResultTrClawbackClaimableBalance extends OperationResultTrBase {
    readonly type: "clawbackClaimableBalance";
    readonly clawbackClaimableBalanceResult: ClawbackClaimableBalanceResult;
    constructor(clawbackClaimableBalanceResult: ClawbackClaimableBalanceResult);
    get value(): ClawbackClaimableBalanceResult;
    toXdrObject(): Extract<OperationResultTrWire, {
        type: 20;
    }>;
}
export declare class OperationResultTrSetTrustLineFlags extends OperationResultTrBase {
    readonly type: "setTrustLineFlags";
    readonly setTrustLineFlagsResult: SetTrustLineFlagsResult;
    constructor(setTrustLineFlagsResult: SetTrustLineFlagsResult);
    get value(): SetTrustLineFlagsResult;
    toXdrObject(): Extract<OperationResultTrWire, {
        type: 21;
    }>;
}
export declare class OperationResultTrLiquidityPoolDeposit extends OperationResultTrBase {
    readonly type: "liquidityPoolDeposit";
    readonly liquidityPoolDepositResult: LiquidityPoolDepositResult;
    constructor(liquidityPoolDepositResult: LiquidityPoolDepositResult);
    get value(): LiquidityPoolDepositResult;
    toXdrObject(): Extract<OperationResultTrWire, {
        type: 22;
    }>;
}
export declare class OperationResultTrLiquidityPoolWithdraw extends OperationResultTrBase {
    readonly type: "liquidityPoolWithdraw";
    readonly liquidityPoolWithdrawResult: LiquidityPoolWithdrawResult;
    constructor(liquidityPoolWithdrawResult: LiquidityPoolWithdrawResult);
    get value(): LiquidityPoolWithdrawResult;
    toXdrObject(): Extract<OperationResultTrWire, {
        type: 23;
    }>;
}
export declare class OperationResultTrInvokeHostFunction extends OperationResultTrBase {
    readonly type: "invokeHostFunction";
    readonly invokeHostFunctionResult: InvokeHostFunctionResult;
    constructor(invokeHostFunctionResult: InvokeHostFunctionResult);
    get value(): InvokeHostFunctionResult;
    toXdrObject(): Extract<OperationResultTrWire, {
        type: 24;
    }>;
}
export declare class OperationResultTrExtendFootprintTtl extends OperationResultTrBase {
    readonly type: "extendFootprintTtl";
    readonly extendFootprintTtlResult: ExtendFootprintTtlResult;
    constructor(extendFootprintTtlResult: ExtendFootprintTtlResult);
    get value(): ExtendFootprintTtlResult;
    toXdrObject(): Extract<OperationResultTrWire, {
        type: 25;
    }>;
}
export declare class OperationResultTrRestoreFootprint extends OperationResultTrBase {
    readonly type: "restoreFootprint";
    readonly restoreFootprintResult: RestoreFootprintResult;
    constructor(restoreFootprintResult: RestoreFootprintResult);
    get value(): RestoreFootprintResult;
    toXdrObject(): Extract<OperationResultTrWire, {
        type: 26;
    }>;
}
export type OperationResultTr = OperationResultTrCreateAccount | OperationResultTrPayment | OperationResultTrPathPaymentStrictReceive | OperationResultTrManageSellOffer | OperationResultTrCreatePassiveSellOffer | OperationResultTrSetOptions | OperationResultTrChangeTrust | OperationResultTrAllowTrust | OperationResultTrAccountMerge | OperationResultTrInflation | OperationResultTrManageData | OperationResultTrBumpSequence | OperationResultTrManageBuyOffer | OperationResultTrPathPaymentStrictSend | OperationResultTrCreateClaimableBalance | OperationResultTrClaimClaimableBalance | OperationResultTrBeginSponsoringFutureReserves | OperationResultTrEndSponsoringFutureReserves | OperationResultTrRevokeSponsorship | OperationResultTrClawback | OperationResultTrClawbackClaimableBalance | OperationResultTrSetTrustLineFlags | OperationResultTrLiquidityPoolDeposit | OperationResultTrLiquidityPoolWithdraw | OperationResultTrInvokeHostFunction | OperationResultTrExtendFootprintTtl | OperationResultTrRestoreFootprint;
export declare const OperationResultTr: typeof OperationResultTrBase;
export {};
