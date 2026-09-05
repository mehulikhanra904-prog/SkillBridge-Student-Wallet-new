import { EnumValue } from "../values/enum-value.js";
export type OperationTypeWire = number;
export type OperationTypeName = "createAccount" | "payment" | "pathPaymentStrictReceive" | "manageSellOffer" | "createPassiveSellOffer" | "setOptions" | "changeTrust" | "allowTrust" | "accountMerge" | "inflation" | "manageData" | "bumpSequence" | "manageBuyOffer" | "pathPaymentStrictSend" | "createClaimableBalance" | "claimClaimableBalance" | "beginSponsoringFutureReserves" | "endSponsoringFutureReserves" | "revokeSponsorship" | "clawback" | "clawbackClaimableBalance" | "setTrustLineFlags" | "liquidityPoolDeposit" | "liquidityPoolWithdraw" | "invokeHostFunction" | "extendFootprintTtl" | "restoreFootprint";
/**
 * ```xdr
 * enum OperationType
 * {
 *     CREATE_ACCOUNT = 0,
 *     PAYMENT = 1,
 *     PATH_PAYMENT_STRICT_RECEIVE = 2,
 *     MANAGE_SELL_OFFER = 3,
 *     CREATE_PASSIVE_SELL_OFFER = 4,
 *     SET_OPTIONS = 5,
 *     CHANGE_TRUST = 6,
 *     ALLOW_TRUST = 7,
 *     ACCOUNT_MERGE = 8,
 *     INFLATION = 9,
 *     MANAGE_DATA = 10,
 *     BUMP_SEQUENCE = 11,
 *     MANAGE_BUY_OFFER = 12,
 *     PATH_PAYMENT_STRICT_SEND = 13,
 *     CREATE_CLAIMABLE_BALANCE = 14,
 *     CLAIM_CLAIMABLE_BALANCE = 15,
 *     BEGIN_SPONSORING_FUTURE_RESERVES = 16,
 *     END_SPONSORING_FUTURE_RESERVES = 17,
 *     REVOKE_SPONSORSHIP = 18,
 *     CLAWBACK = 19,
 *     CLAWBACK_CLAIMABLE_BALANCE = 20,
 *     SET_TRUST_LINE_FLAGS = 21,
 *     LIQUIDITY_POOL_DEPOSIT = 22,
 *     LIQUIDITY_POOL_WITHDRAW = 23,
 *     INVOKE_HOST_FUNCTION = 24,
 *     EXTEND_FOOTPRINT_TTL = 25,
 *     RESTORE_FOOTPRINT = 26
 * };
 * ```
 */
export declare class OperationType extends EnumValue<OperationTypeName> {
    static readonly createAccount: OperationType;
    static readonly payment: OperationType;
    static readonly pathPaymentStrictReceive: OperationType;
    static readonly manageSellOffer: OperationType;
    static readonly createPassiveSellOffer: OperationType;
    static readonly setOptions: OperationType;
    static readonly changeTrust: OperationType;
    static readonly allowTrust: OperationType;
    static readonly accountMerge: OperationType;
    static readonly inflation: OperationType;
    static readonly manageData: OperationType;
    static readonly bumpSequence: OperationType;
    static readonly manageBuyOffer: OperationType;
    static readonly pathPaymentStrictSend: OperationType;
    static readonly createClaimableBalance: OperationType;
    static readonly claimClaimableBalance: OperationType;
    static readonly beginSponsoringFutureReserves: OperationType;
    static readonly endSponsoringFutureReserves: OperationType;
    static readonly revokeSponsorship: OperationType;
    static readonly clawback: OperationType;
    static readonly clawbackClaimableBalance: OperationType;
    static readonly setTrustLineFlags: OperationType;
    static readonly liquidityPoolDeposit: OperationType;
    static readonly liquidityPoolWithdraw: OperationType;
    static readonly invokeHostFunction: OperationType;
    static readonly extendFootprintTtl: OperationType;
    static readonly restoreFootprint: OperationType;
    static readonly schema: import("@stellar/js-xdr").EnumSchema<"OperationType", {
        readonly createAccount: 0;
        readonly payment: 1;
        readonly pathPaymentStrictReceive: 2;
        readonly manageSellOffer: 3;
        readonly createPassiveSellOffer: 4;
        readonly setOptions: 5;
        readonly changeTrust: 6;
        readonly allowTrust: 7;
        readonly accountMerge: 8;
        readonly inflation: 9;
        readonly manageData: 10;
        readonly bumpSequence: 11;
        readonly manageBuyOffer: 12;
        readonly pathPaymentStrictSend: 13;
        readonly createClaimableBalance: 14;
        readonly claimClaimableBalance: 15;
        readonly beginSponsoringFutureReserves: 16;
        readonly endSponsoringFutureReserves: 17;
        readonly revokeSponsorship: 18;
        readonly clawback: 19;
        readonly clawbackClaimableBalance: 20;
        readonly setTrustLineFlags: 21;
        readonly liquidityPoolDeposit: 22;
        readonly liquidityPoolWithdraw: 23;
        readonly invokeHostFunction: 24;
        readonly extendFootprintTtl: 25;
        readonly restoreFootprint: 26;
    }>;
    static fromValue(value: number): OperationType;
    static fromName(name: OperationTypeName): OperationType;
    static fromXdrObject(wire: number): OperationType;
}
