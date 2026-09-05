import { type XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { CreateAccountOp, type CreateAccountOpWire } from "./create-account-op.js";
import { PaymentOp, type PaymentOpWire } from "./payment-op.js";
import { PathPaymentStrictReceiveOp, type PathPaymentStrictReceiveOpWire } from "./path-payment-strict-receive-op.js";
import { ManageSellOfferOp, type ManageSellOfferOpWire } from "./manage-sell-offer-op.js";
import { CreatePassiveSellOfferOp, type CreatePassiveSellOfferOpWire } from "./create-passive-sell-offer-op.js";
import { SetOptionsOp, type SetOptionsOpWire } from "./set-options-op.js";
import { ChangeTrustOp, type ChangeTrustOpWire } from "./change-trust-op.js";
import { AllowTrustOp, type AllowTrustOpWire } from "./allow-trust-op.js";
import { MuxedAccount, type MuxedAccountWire } from "./muxed-account.js";
import { ManageDataOp, type ManageDataOpWire } from "./manage-data-op.js";
import { BumpSequenceOp, type BumpSequenceOpWire } from "./bump-sequence-op.js";
import { ManageBuyOfferOp, type ManageBuyOfferOpWire } from "./manage-buy-offer-op.js";
import { PathPaymentStrictSendOp, type PathPaymentStrictSendOpWire } from "./path-payment-strict-send-op.js";
import { CreateClaimableBalanceOp, type CreateClaimableBalanceOpWire } from "./create-claimable-balance-op.js";
import { ClaimClaimableBalanceOp, type ClaimClaimableBalanceOpWire } from "./claim-claimable-balance-op.js";
import { BeginSponsoringFutureReservesOp, type BeginSponsoringFutureReservesOpWire } from "./begin-sponsoring-future-reserves-op.js";
import { RevokeSponsorshipOp, type RevokeSponsorshipOpWire } from "./revoke-sponsorship-op.js";
import { ClawbackOp, type ClawbackOpWire } from "./clawback-op.js";
import { ClawbackClaimableBalanceOp, type ClawbackClaimableBalanceOpWire } from "./clawback-claimable-balance-op.js";
import { SetTrustLineFlagsOp, type SetTrustLineFlagsOpWire } from "./set-trust-line-flags-op.js";
import { LiquidityPoolDepositOp, type LiquidityPoolDepositOpWire } from "./liquidity-pool-deposit-op.js";
import { LiquidityPoolWithdrawOp, type LiquidityPoolWithdrawOpWire } from "./liquidity-pool-withdraw-op.js";
import { InvokeHostFunctionOp, type InvokeHostFunctionOpWire } from "./invoke-host-function-op.js";
import { ExtendFootprintTtlOp, type ExtendFootprintTtlOpWire } from "./extend-footprint-ttl-op.js";
import { RestoreFootprintOp, type RestoreFootprintOpWire } from "./restore-footprint-op.js";
export type OperationBodyWire = {
    type: 0;
    createAccountOp: CreateAccountOpWire;
} | {
    type: 1;
    paymentOp: PaymentOpWire;
} | {
    type: 2;
    pathPaymentStrictReceiveOp: PathPaymentStrictReceiveOpWire;
} | {
    type: 3;
    manageSellOfferOp: ManageSellOfferOpWire;
} | {
    type: 4;
    createPassiveSellOfferOp: CreatePassiveSellOfferOpWire;
} | {
    type: 5;
    setOptionsOp: SetOptionsOpWire;
} | {
    type: 6;
    changeTrustOp: ChangeTrustOpWire;
} | {
    type: 7;
    allowTrustOp: AllowTrustOpWire;
} | {
    type: 8;
    destination: MuxedAccountWire;
} | {
    type: 9;
} | {
    type: 10;
    manageDataOp: ManageDataOpWire;
} | {
    type: 11;
    bumpSequenceOp: BumpSequenceOpWire;
} | {
    type: 12;
    manageBuyOfferOp: ManageBuyOfferOpWire;
} | {
    type: 13;
    pathPaymentStrictSendOp: PathPaymentStrictSendOpWire;
} | {
    type: 14;
    createClaimableBalanceOp: CreateClaimableBalanceOpWire;
} | {
    type: 15;
    claimClaimableBalanceOp: ClaimClaimableBalanceOpWire;
} | {
    type: 16;
    beginSponsoringFutureReservesOp: BeginSponsoringFutureReservesOpWire;
} | {
    type: 17;
} | {
    type: 18;
    revokeSponsorshipOp: RevokeSponsorshipOpWire;
} | {
    type: 19;
    clawbackOp: ClawbackOpWire;
} | {
    type: 20;
    clawbackClaimableBalanceOp: ClawbackClaimableBalanceOpWire;
} | {
    type: 21;
    setTrustLineFlagsOp: SetTrustLineFlagsOpWire;
} | {
    type: 22;
    liquidityPoolDepositOp: LiquidityPoolDepositOpWire;
} | {
    type: 23;
    liquidityPoolWithdrawOp: LiquidityPoolWithdrawOpWire;
} | {
    type: 24;
    invokeHostFunctionOp: InvokeHostFunctionOpWire;
} | {
    type: 25;
    extendFootprintTtlOp: ExtendFootprintTtlOpWire;
} | {
    type: 26;
    restoreFootprintOp: RestoreFootprintOpWire;
};
export type OperationBodyVariantName = "createAccount" | "payment" | "pathPaymentStrictReceive" | "manageSellOffer" | "createPassiveSellOffer" | "setOptions" | "changeTrust" | "allowTrust" | "accountMerge" | "inflation" | "manageData" | "bumpSequence" | "manageBuyOffer" | "pathPaymentStrictSend" | "createClaimableBalance" | "claimClaimableBalance" | "beginSponsoringFutureReserves" | "endSponsoringFutureReserves" | "revokeSponsorship" | "clawback" | "clawbackClaimableBalance" | "setTrustLineFlags" | "liquidityPoolDeposit" | "liquidityPoolWithdraw" | "invokeHostFunction" | "extendFootprintTtl" | "restoreFootprint";
/**
 * ```xdr
 * union switch (OperationType type)
 *     {
 *     case CREATE_ACCOUNT:
 *         CreateAccountOp createAccountOp;
 *     case PAYMENT:
 *         PaymentOp paymentOp;
 *     case PATH_PAYMENT_STRICT_RECEIVE:
 *         PathPaymentStrictReceiveOp pathPaymentStrictReceiveOp;
 *     case MANAGE_SELL_OFFER:
 *         ManageSellOfferOp manageSellOfferOp;
 *     case CREATE_PASSIVE_SELL_OFFER:
 *         CreatePassiveSellOfferOp createPassiveSellOfferOp;
 *     case SET_OPTIONS:
 *         SetOptionsOp setOptionsOp;
 *     case CHANGE_TRUST:
 *         ChangeTrustOp changeTrustOp;
 *     case ALLOW_TRUST:
 *         AllowTrustOp allowTrustOp;
 *     case ACCOUNT_MERGE:
 *         MuxedAccount destination;
 *     case INFLATION:
 *         void;
 *     case MANAGE_DATA:
 *         ManageDataOp manageDataOp;
 *     case BUMP_SEQUENCE:
 *         BumpSequenceOp bumpSequenceOp;
 *     case MANAGE_BUY_OFFER:
 *         ManageBuyOfferOp manageBuyOfferOp;
 *     case PATH_PAYMENT_STRICT_SEND:
 *         PathPaymentStrictSendOp pathPaymentStrictSendOp;
 *     case CREATE_CLAIMABLE_BALANCE:
 *         CreateClaimableBalanceOp createClaimableBalanceOp;
 *     case CLAIM_CLAIMABLE_BALANCE:
 *         ClaimClaimableBalanceOp claimClaimableBalanceOp;
 *     case BEGIN_SPONSORING_FUTURE_RESERVES:
 *         BeginSponsoringFutureReservesOp beginSponsoringFutureReservesOp;
 *     case END_SPONSORING_FUTURE_RESERVES:
 *         void;
 *     case REVOKE_SPONSORSHIP:
 *         RevokeSponsorshipOp revokeSponsorshipOp;
 *     case CLAWBACK:
 *         ClawbackOp clawbackOp;
 *     case CLAWBACK_CLAIMABLE_BALANCE:
 *         ClawbackClaimableBalanceOp clawbackClaimableBalanceOp;
 *     case SET_TRUST_LINE_FLAGS:
 *         SetTrustLineFlagsOp setTrustLineFlagsOp;
 *     case LIQUIDITY_POOL_DEPOSIT:
 *         LiquidityPoolDepositOp liquidityPoolDepositOp;
 *     case LIQUIDITY_POOL_WITHDRAW:
 *         LiquidityPoolWithdrawOp liquidityPoolWithdrawOp;
 *     case INVOKE_HOST_FUNCTION:
 *         InvokeHostFunctionOp invokeHostFunctionOp;
 *     case EXTEND_FOOTPRINT_TTL:
 *         ExtendFootprintTTLOp extendFootprintTTLOp;
 *     case RESTORE_FOOTPRINT:
 *         RestoreFootprintOp restoreFootprintOp;
 *     }
 * ```
 */
declare abstract class OperationBodyBase extends XdrValue {
    abstract readonly type: OperationBodyVariantName;
    constructor();
    static readonly schema: XdrType<OperationBodyWire>;
    static createAccount(createAccountOp: CreateAccountOp): OperationBodyCreateAccount;
    static payment(paymentOp: PaymentOp): OperationBodyPayment;
    static pathPaymentStrictReceive(pathPaymentStrictReceiveOp: PathPaymentStrictReceiveOp): OperationBodyPathPaymentStrictReceive;
    static manageSellOffer(manageSellOfferOp: ManageSellOfferOp): OperationBodyManageSellOffer;
    static createPassiveSellOffer(createPassiveSellOfferOp: CreatePassiveSellOfferOp): OperationBodyCreatePassiveSellOffer;
    static setOptions(setOptionsOp: SetOptionsOp): OperationBodySetOptions;
    static changeTrust(changeTrustOp: ChangeTrustOp): OperationBodyChangeTrust;
    static allowTrust(allowTrustOp: AllowTrustOp): OperationBodyAllowTrust;
    static accountMerge(destination: MuxedAccount): OperationBodyAccountMerge;
    static inflation(): OperationBodyInflation;
    static manageData(manageDataOp: ManageDataOp): OperationBodyManageData;
    static bumpSequence(bumpSequenceOp: BumpSequenceOp): OperationBodyBumpSequence;
    static manageBuyOffer(manageBuyOfferOp: ManageBuyOfferOp): OperationBodyManageBuyOffer;
    static pathPaymentStrictSend(pathPaymentStrictSendOp: PathPaymentStrictSendOp): OperationBodyPathPaymentStrictSend;
    static createClaimableBalance(createClaimableBalanceOp: CreateClaimableBalanceOp): OperationBodyCreateClaimableBalance;
    static claimClaimableBalance(claimClaimableBalanceOp: ClaimClaimableBalanceOp): OperationBodyClaimClaimableBalance;
    static beginSponsoringFutureReserves(beginSponsoringFutureReservesOp: BeginSponsoringFutureReservesOp): OperationBodyBeginSponsoringFutureReserves;
    static endSponsoringFutureReserves(): OperationBodyEndSponsoringFutureReserves;
    static revokeSponsorship(revokeSponsorshipOp: RevokeSponsorshipOp): OperationBodyRevokeSponsorship;
    static clawback(clawbackOp: ClawbackOp): OperationBodyClawback;
    static clawbackClaimableBalance(clawbackClaimableBalanceOp: ClawbackClaimableBalanceOp): OperationBodyClawbackClaimableBalance;
    static setTrustLineFlags(setTrustLineFlagsOp: SetTrustLineFlagsOp): OperationBodySetTrustLineFlags;
    static liquidityPoolDeposit(liquidityPoolDepositOp: LiquidityPoolDepositOp): OperationBodyLiquidityPoolDeposit;
    static liquidityPoolWithdraw(liquidityPoolWithdrawOp: LiquidityPoolWithdrawOp): OperationBodyLiquidityPoolWithdraw;
    static invokeHostFunction(invokeHostFunctionOp: InvokeHostFunctionOp): OperationBodyInvokeHostFunction;
    static extendFootprintTtl(extendFootprintTtlOp: ExtendFootprintTtlOp): OperationBodyExtendFootprintTtl;
    static restoreFootprint(restoreFootprintOp: RestoreFootprintOp): OperationBodyRestoreFootprint;
    static fromXdrObject(wire: OperationBodyWire): OperationBody;
    /**
     * Type guard narrowing an unknown value to a concrete OperationBody variant.
     * Use this instead of `instanceof OperationBody`: the exported `OperationBody` value
     * is the abstract base, so `instanceof` narrows to the base (not the
     * variant union) and forces a cast. `OperationBody.is(x)` narrows to the union.
     */
    static is(value: unknown): value is OperationBody;
    abstract toXdrObject(): OperationBodyWire;
}
export declare class OperationBodyCreateAccount extends OperationBodyBase {
    readonly type: "createAccount";
    readonly createAccountOp: CreateAccountOp;
    constructor(createAccountOp: CreateAccountOp);
    get value(): CreateAccountOp;
    toXdrObject(): Extract<OperationBodyWire, {
        type: 0;
    }>;
}
export declare class OperationBodyPayment extends OperationBodyBase {
    readonly type: "payment";
    readonly paymentOp: PaymentOp;
    constructor(paymentOp: PaymentOp);
    get value(): PaymentOp;
    toXdrObject(): Extract<OperationBodyWire, {
        type: 1;
    }>;
}
export declare class OperationBodyPathPaymentStrictReceive extends OperationBodyBase {
    readonly type: "pathPaymentStrictReceive";
    readonly pathPaymentStrictReceiveOp: PathPaymentStrictReceiveOp;
    constructor(pathPaymentStrictReceiveOp: PathPaymentStrictReceiveOp);
    get value(): PathPaymentStrictReceiveOp;
    toXdrObject(): Extract<OperationBodyWire, {
        type: 2;
    }>;
}
export declare class OperationBodyManageSellOffer extends OperationBodyBase {
    readonly type: "manageSellOffer";
    readonly manageSellOfferOp: ManageSellOfferOp;
    constructor(manageSellOfferOp: ManageSellOfferOp);
    get value(): ManageSellOfferOp;
    toXdrObject(): Extract<OperationBodyWire, {
        type: 3;
    }>;
}
export declare class OperationBodyCreatePassiveSellOffer extends OperationBodyBase {
    readonly type: "createPassiveSellOffer";
    readonly createPassiveSellOfferOp: CreatePassiveSellOfferOp;
    constructor(createPassiveSellOfferOp: CreatePassiveSellOfferOp);
    get value(): CreatePassiveSellOfferOp;
    toXdrObject(): Extract<OperationBodyWire, {
        type: 4;
    }>;
}
export declare class OperationBodySetOptions extends OperationBodyBase {
    readonly type: "setOptions";
    readonly setOptionsOp: SetOptionsOp;
    constructor(setOptionsOp: SetOptionsOp);
    get value(): SetOptionsOp;
    toXdrObject(): Extract<OperationBodyWire, {
        type: 5;
    }>;
}
export declare class OperationBodyChangeTrust extends OperationBodyBase {
    readonly type: "changeTrust";
    readonly changeTrustOp: ChangeTrustOp;
    constructor(changeTrustOp: ChangeTrustOp);
    get value(): ChangeTrustOp;
    toXdrObject(): Extract<OperationBodyWire, {
        type: 6;
    }>;
}
export declare class OperationBodyAllowTrust extends OperationBodyBase {
    readonly type: "allowTrust";
    readonly allowTrustOp: AllowTrustOp;
    constructor(allowTrustOp: AllowTrustOp);
    get value(): AllowTrustOp;
    toXdrObject(): Extract<OperationBodyWire, {
        type: 7;
    }>;
}
export declare class OperationBodyAccountMerge extends OperationBodyBase {
    readonly type: "accountMerge";
    readonly destination: MuxedAccount;
    constructor(destination: MuxedAccount);
    get value(): MuxedAccount;
    toXdrObject(): Extract<OperationBodyWire, {
        type: 8;
    }>;
}
export declare class OperationBodyInflation extends OperationBodyBase {
    readonly type: "inflation";
    get value(): null;
    toXdrObject(): Extract<OperationBodyWire, {
        type: 9;
    }>;
}
export declare class OperationBodyManageData extends OperationBodyBase {
    readonly type: "manageData";
    readonly manageDataOp: ManageDataOp;
    constructor(manageDataOp: ManageDataOp);
    get value(): ManageDataOp;
    toXdrObject(): Extract<OperationBodyWire, {
        type: 10;
    }>;
}
export declare class OperationBodyBumpSequence extends OperationBodyBase {
    readonly type: "bumpSequence";
    readonly bumpSequenceOp: BumpSequenceOp;
    constructor(bumpSequenceOp: BumpSequenceOp);
    get value(): BumpSequenceOp;
    toXdrObject(): Extract<OperationBodyWire, {
        type: 11;
    }>;
}
export declare class OperationBodyManageBuyOffer extends OperationBodyBase {
    readonly type: "manageBuyOffer";
    readonly manageBuyOfferOp: ManageBuyOfferOp;
    constructor(manageBuyOfferOp: ManageBuyOfferOp);
    get value(): ManageBuyOfferOp;
    toXdrObject(): Extract<OperationBodyWire, {
        type: 12;
    }>;
}
export declare class OperationBodyPathPaymentStrictSend extends OperationBodyBase {
    readonly type: "pathPaymentStrictSend";
    readonly pathPaymentStrictSendOp: PathPaymentStrictSendOp;
    constructor(pathPaymentStrictSendOp: PathPaymentStrictSendOp);
    get value(): PathPaymentStrictSendOp;
    toXdrObject(): Extract<OperationBodyWire, {
        type: 13;
    }>;
}
export declare class OperationBodyCreateClaimableBalance extends OperationBodyBase {
    readonly type: "createClaimableBalance";
    readonly createClaimableBalanceOp: CreateClaimableBalanceOp;
    constructor(createClaimableBalanceOp: CreateClaimableBalanceOp);
    get value(): CreateClaimableBalanceOp;
    toXdrObject(): Extract<OperationBodyWire, {
        type: 14;
    }>;
}
export declare class OperationBodyClaimClaimableBalance extends OperationBodyBase {
    readonly type: "claimClaimableBalance";
    readonly claimClaimableBalanceOp: ClaimClaimableBalanceOp;
    constructor(claimClaimableBalanceOp: ClaimClaimableBalanceOp);
    get value(): ClaimClaimableBalanceOp;
    toXdrObject(): Extract<OperationBodyWire, {
        type: 15;
    }>;
}
export declare class OperationBodyBeginSponsoringFutureReserves extends OperationBodyBase {
    readonly type: "beginSponsoringFutureReserves";
    readonly beginSponsoringFutureReservesOp: BeginSponsoringFutureReservesOp;
    constructor(beginSponsoringFutureReservesOp: BeginSponsoringFutureReservesOp);
    get value(): BeginSponsoringFutureReservesOp;
    toXdrObject(): Extract<OperationBodyWire, {
        type: 16;
    }>;
}
export declare class OperationBodyEndSponsoringFutureReserves extends OperationBodyBase {
    readonly type: "endSponsoringFutureReserves";
    get value(): null;
    toXdrObject(): Extract<OperationBodyWire, {
        type: 17;
    }>;
}
export declare class OperationBodyRevokeSponsorship extends OperationBodyBase {
    readonly type: "revokeSponsorship";
    readonly revokeSponsorshipOp: RevokeSponsorshipOp;
    constructor(revokeSponsorshipOp: RevokeSponsorshipOp);
    get value(): RevokeSponsorshipOp;
    toXdrObject(): Extract<OperationBodyWire, {
        type: 18;
    }>;
}
export declare class OperationBodyClawback extends OperationBodyBase {
    readonly type: "clawback";
    readonly clawbackOp: ClawbackOp;
    constructor(clawbackOp: ClawbackOp);
    get value(): ClawbackOp;
    toXdrObject(): Extract<OperationBodyWire, {
        type: 19;
    }>;
}
export declare class OperationBodyClawbackClaimableBalance extends OperationBodyBase {
    readonly type: "clawbackClaimableBalance";
    readonly clawbackClaimableBalanceOp: ClawbackClaimableBalanceOp;
    constructor(clawbackClaimableBalanceOp: ClawbackClaimableBalanceOp);
    get value(): ClawbackClaimableBalanceOp;
    toXdrObject(): Extract<OperationBodyWire, {
        type: 20;
    }>;
}
export declare class OperationBodySetTrustLineFlags extends OperationBodyBase {
    readonly type: "setTrustLineFlags";
    readonly setTrustLineFlagsOp: SetTrustLineFlagsOp;
    constructor(setTrustLineFlagsOp: SetTrustLineFlagsOp);
    get value(): SetTrustLineFlagsOp;
    toXdrObject(): Extract<OperationBodyWire, {
        type: 21;
    }>;
}
export declare class OperationBodyLiquidityPoolDeposit extends OperationBodyBase {
    readonly type: "liquidityPoolDeposit";
    readonly liquidityPoolDepositOp: LiquidityPoolDepositOp;
    constructor(liquidityPoolDepositOp: LiquidityPoolDepositOp);
    get value(): LiquidityPoolDepositOp;
    toXdrObject(): Extract<OperationBodyWire, {
        type: 22;
    }>;
}
export declare class OperationBodyLiquidityPoolWithdraw extends OperationBodyBase {
    readonly type: "liquidityPoolWithdraw";
    readonly liquidityPoolWithdrawOp: LiquidityPoolWithdrawOp;
    constructor(liquidityPoolWithdrawOp: LiquidityPoolWithdrawOp);
    get value(): LiquidityPoolWithdrawOp;
    toXdrObject(): Extract<OperationBodyWire, {
        type: 23;
    }>;
}
export declare class OperationBodyInvokeHostFunction extends OperationBodyBase {
    readonly type: "invokeHostFunction";
    readonly invokeHostFunctionOp: InvokeHostFunctionOp;
    constructor(invokeHostFunctionOp: InvokeHostFunctionOp);
    get value(): InvokeHostFunctionOp;
    toXdrObject(): Extract<OperationBodyWire, {
        type: 24;
    }>;
}
export declare class OperationBodyExtendFootprintTtl extends OperationBodyBase {
    readonly type: "extendFootprintTtl";
    readonly extendFootprintTtlOp: ExtendFootprintTtlOp;
    constructor(extendFootprintTtlOp: ExtendFootprintTtlOp);
    get value(): ExtendFootprintTtlOp;
    toXdrObject(): Extract<OperationBodyWire, {
        type: 25;
    }>;
}
export declare class OperationBodyRestoreFootprint extends OperationBodyBase {
    readonly type: "restoreFootprint";
    readonly restoreFootprintOp: RestoreFootprintOp;
    constructor(restoreFootprintOp: RestoreFootprintOp);
    get value(): RestoreFootprintOp;
    toXdrObject(): Extract<OperationBodyWire, {
        type: 26;
    }>;
}
export type OperationBody = OperationBodyCreateAccount | OperationBodyPayment | OperationBodyPathPaymentStrictReceive | OperationBodyManageSellOffer | OperationBodyCreatePassiveSellOffer | OperationBodySetOptions | OperationBodyChangeTrust | OperationBodyAllowTrust | OperationBodyAccountMerge | OperationBodyInflation | OperationBodyManageData | OperationBodyBumpSequence | OperationBodyManageBuyOffer | OperationBodyPathPaymentStrictSend | OperationBodyCreateClaimableBalance | OperationBodyClaimClaimableBalance | OperationBodyBeginSponsoringFutureReserves | OperationBodyEndSponsoringFutureReserves | OperationBodyRevokeSponsorship | OperationBodyClawback | OperationBodyClawbackClaimableBalance | OperationBodySetTrustLineFlags | OperationBodyLiquidityPoolDeposit | OperationBodyLiquidityPoolWithdraw | OperationBodyInvokeHostFunction | OperationBodyExtendFootprintTtl | OperationBodyRestoreFootprint;
export declare const OperationBody: typeof OperationBodyBase;
export {};
