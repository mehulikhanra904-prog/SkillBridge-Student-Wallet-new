import { EnumValue } from "../values/enum-value.js";
export type CreateClaimableBalanceResultCodeWire = number;
export type CreateClaimableBalanceResultCodeName = "createClaimableBalanceSuccess" | "createClaimableBalanceMalformed" | "createClaimableBalanceLowReserve" | "createClaimableBalanceNoTrust" | "createClaimableBalanceNotAuthorized" | "createClaimableBalanceUnderfunded";
/**
 * ```xdr
 * enum CreateClaimableBalanceResultCode
 * {
 *     CREATE_CLAIMABLE_BALANCE_SUCCESS = 0,
 *     CREATE_CLAIMABLE_BALANCE_MALFORMED = -1,
 *     CREATE_CLAIMABLE_BALANCE_LOW_RESERVE = -2,
 *     CREATE_CLAIMABLE_BALANCE_NO_TRUST = -3,
 *     CREATE_CLAIMABLE_BALANCE_NOT_AUTHORIZED = -4,
 *     CREATE_CLAIMABLE_BALANCE_UNDERFUNDED = -5
 * };
 * ```
 */
export declare class CreateClaimableBalanceResultCode extends EnumValue<CreateClaimableBalanceResultCodeName> {
    static readonly createClaimableBalanceSuccess: CreateClaimableBalanceResultCode;
    static readonly createClaimableBalanceMalformed: CreateClaimableBalanceResultCode;
    static readonly createClaimableBalanceLowReserve: CreateClaimableBalanceResultCode;
    static readonly createClaimableBalanceNoTrust: CreateClaimableBalanceResultCode;
    static readonly createClaimableBalanceNotAuthorized: CreateClaimableBalanceResultCode;
    static readonly createClaimableBalanceUnderfunded: CreateClaimableBalanceResultCode;
    static readonly schema: import("@stellar/js-xdr").XdrType<import("@stellar/js-xdr").EnumMember<{
        readonly createClaimableBalanceSuccess: 0;
        readonly createClaimableBalanceMalformed: -1;
        readonly createClaimableBalanceLowReserve: -2;
        readonly createClaimableBalanceNoTrust: -3;
        readonly createClaimableBalanceNotAuthorized: -4;
        readonly createClaimableBalanceUnderfunded: -5;
    }>> & {
        readonly kind: "enum";
        readonly name: "CreateClaimableBalanceResultCode";
        readonly nameByValue: ReadonlyMap<number, "createClaimableBalanceSuccess" | "createClaimableBalanceMalformed" | "createClaimableBalanceLowReserve" | "createClaimableBalanceNoTrust" | "createClaimableBalanceNotAuthorized" | "createClaimableBalanceUnderfunded">;
    } & {
        readonly createClaimableBalanceSuccess: 0;
        readonly createClaimableBalanceMalformed: -1;
        readonly createClaimableBalanceLowReserve: -2;
        readonly createClaimableBalanceNoTrust: -3;
        readonly createClaimableBalanceNotAuthorized: -4;
        readonly createClaimableBalanceUnderfunded: -5;
    } & import("../values/enum-value.js").PrefixedEnumSchema;
    static fromValue(value: number): CreateClaimableBalanceResultCode;
    static fromName(name: CreateClaimableBalanceResultCodeName): CreateClaimableBalanceResultCode;
    static fromXdrObject(wire: number): CreateClaimableBalanceResultCode;
}
