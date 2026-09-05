import { EnumValue } from "../values/enum-value.js";
export type SetTrustLineFlagsResultCodeWire = number;
export type SetTrustLineFlagsResultCodeName = "setTrustLineFlagsSuccess" | "setTrustLineFlagsMalformed" | "setTrustLineFlagsNoTrustLine" | "setTrustLineFlagsCantRevoke" | "setTrustLineFlagsInvalidState" | "setTrustLineFlagsLowReserve";
/**
 * ```xdr
 * enum SetTrustLineFlagsResultCode
 * {
 *     // codes considered as "success" for the operation
 *     SET_TRUST_LINE_FLAGS_SUCCESS = 0,
 *
 *     // codes considered as "failure" for the operation
 *     SET_TRUST_LINE_FLAGS_MALFORMED = -1,
 *     SET_TRUST_LINE_FLAGS_NO_TRUST_LINE = -2,
 *     SET_TRUST_LINE_FLAGS_CANT_REVOKE = -3,
 *     SET_TRUST_LINE_FLAGS_INVALID_STATE = -4,
 *     SET_TRUST_LINE_FLAGS_LOW_RESERVE = -5 // claimable balances can't be created
 *                                           // on revoke due to low reserves
 * };
 * ```
 */
export declare class SetTrustLineFlagsResultCode extends EnumValue<SetTrustLineFlagsResultCodeName> {
    static readonly setTrustLineFlagsSuccess: SetTrustLineFlagsResultCode;
    static readonly setTrustLineFlagsMalformed: SetTrustLineFlagsResultCode;
    static readonly setTrustLineFlagsNoTrustLine: SetTrustLineFlagsResultCode;
    static readonly setTrustLineFlagsCantRevoke: SetTrustLineFlagsResultCode;
    static readonly setTrustLineFlagsInvalidState: SetTrustLineFlagsResultCode;
    static readonly setTrustLineFlagsLowReserve: SetTrustLineFlagsResultCode;
    static readonly schema: import("@stellar/js-xdr").XdrType<import("@stellar/js-xdr").EnumMember<{
        readonly setTrustLineFlagsSuccess: 0;
        readonly setTrustLineFlagsMalformed: -1;
        readonly setTrustLineFlagsNoTrustLine: -2;
        readonly setTrustLineFlagsCantRevoke: -3;
        readonly setTrustLineFlagsInvalidState: -4;
        readonly setTrustLineFlagsLowReserve: -5;
    }>> & {
        readonly kind: "enum";
        readonly name: "SetTrustLineFlagsResultCode";
        readonly nameByValue: ReadonlyMap<number, "setTrustLineFlagsSuccess" | "setTrustLineFlagsMalformed" | "setTrustLineFlagsNoTrustLine" | "setTrustLineFlagsCantRevoke" | "setTrustLineFlagsInvalidState" | "setTrustLineFlagsLowReserve">;
    } & {
        readonly setTrustLineFlagsSuccess: 0;
        readonly setTrustLineFlagsMalformed: -1;
        readonly setTrustLineFlagsNoTrustLine: -2;
        readonly setTrustLineFlagsCantRevoke: -3;
        readonly setTrustLineFlagsInvalidState: -4;
        readonly setTrustLineFlagsLowReserve: -5;
    } & import("../values/enum-value.js").PrefixedEnumSchema;
    static fromValue(value: number): SetTrustLineFlagsResultCode;
    static fromName(name: SetTrustLineFlagsResultCodeName): SetTrustLineFlagsResultCode;
    static fromXdrObject(wire: number): SetTrustLineFlagsResultCode;
}
