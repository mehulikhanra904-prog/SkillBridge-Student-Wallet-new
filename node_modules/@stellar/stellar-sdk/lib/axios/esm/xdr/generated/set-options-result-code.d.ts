import { EnumValue } from "../values/enum-value.js";
export type SetOptionsResultCodeWire = number;
export type SetOptionsResultCodeName = "setOptionsSuccess" | "setOptionsLowReserve" | "setOptionsTooManySigners" | "setOptionsBadFlags" | "setOptionsInvalidInflation" | "setOptionsCantChange" | "setOptionsUnknownFlag" | "setOptionsThresholdOutOfRange" | "setOptionsBadSigner" | "setOptionsInvalidHomeDomain" | "setOptionsAuthRevocableRequired";
/**
 * ```xdr
 * enum SetOptionsResultCode
 * {
 *     // codes considered as "success" for the operation
 *     SET_OPTIONS_SUCCESS = 0,
 *     // codes considered as "failure" for the operation
 *     SET_OPTIONS_LOW_RESERVE = -1,      // not enough funds to add a signer
 *     SET_OPTIONS_TOO_MANY_SIGNERS = -2, // max number of signers already reached
 *     SET_OPTIONS_BAD_FLAGS = -3,        // invalid combination of clear/set flags
 *     SET_OPTIONS_INVALID_INFLATION = -4,      // inflation account does not exist
 *     SET_OPTIONS_CANT_CHANGE = -5,            // can no longer change this option
 *     SET_OPTIONS_UNKNOWN_FLAG = -6,           // can't set an unknown flag
 *     SET_OPTIONS_THRESHOLD_OUT_OF_RANGE = -7, // bad value for weight/threshold
 *     SET_OPTIONS_BAD_SIGNER = -8,             // signer cannot be masterkey
 *     SET_OPTIONS_INVALID_HOME_DOMAIN = -9,    // malformed home domain
 *     SET_OPTIONS_AUTH_REVOCABLE_REQUIRED =
 *         -10 // auth revocable is required for clawback
 * };
 * ```
 */
export declare class SetOptionsResultCode extends EnumValue<SetOptionsResultCodeName> {
    static readonly setOptionsSuccess: SetOptionsResultCode;
    static readonly setOptionsLowReserve: SetOptionsResultCode;
    static readonly setOptionsTooManySigners: SetOptionsResultCode;
    static readonly setOptionsBadFlags: SetOptionsResultCode;
    static readonly setOptionsInvalidInflation: SetOptionsResultCode;
    static readonly setOptionsCantChange: SetOptionsResultCode;
    static readonly setOptionsUnknownFlag: SetOptionsResultCode;
    static readonly setOptionsThresholdOutOfRange: SetOptionsResultCode;
    static readonly setOptionsBadSigner: SetOptionsResultCode;
    static readonly setOptionsInvalidHomeDomain: SetOptionsResultCode;
    static readonly setOptionsAuthRevocableRequired: SetOptionsResultCode;
    static readonly schema: import("@stellar/js-xdr").XdrType<import("@stellar/js-xdr").EnumMember<{
        readonly setOptionsSuccess: 0;
        readonly setOptionsLowReserve: -1;
        readonly setOptionsTooManySigners: -2;
        readonly setOptionsBadFlags: -3;
        readonly setOptionsInvalidInflation: -4;
        readonly setOptionsCantChange: -5;
        readonly setOptionsUnknownFlag: -6;
        readonly setOptionsThresholdOutOfRange: -7;
        readonly setOptionsBadSigner: -8;
        readonly setOptionsInvalidHomeDomain: -9;
        readonly setOptionsAuthRevocableRequired: -10;
    }>> & {
        readonly kind: "enum";
        readonly name: "SetOptionsResultCode";
        readonly nameByValue: ReadonlyMap<number, "setOptionsSuccess" | "setOptionsLowReserve" | "setOptionsTooManySigners" | "setOptionsBadFlags" | "setOptionsInvalidInflation" | "setOptionsCantChange" | "setOptionsUnknownFlag" | "setOptionsThresholdOutOfRange" | "setOptionsBadSigner" | "setOptionsInvalidHomeDomain" | "setOptionsAuthRevocableRequired">;
    } & {
        readonly setOptionsSuccess: 0;
        readonly setOptionsLowReserve: -1;
        readonly setOptionsTooManySigners: -2;
        readonly setOptionsBadFlags: -3;
        readonly setOptionsInvalidInflation: -4;
        readonly setOptionsCantChange: -5;
        readonly setOptionsUnknownFlag: -6;
        readonly setOptionsThresholdOutOfRange: -7;
        readonly setOptionsBadSigner: -8;
        readonly setOptionsInvalidHomeDomain: -9;
        readonly setOptionsAuthRevocableRequired: -10;
    } & import("../values/enum-value.js").PrefixedEnumSchema;
    static fromValue(value: number): SetOptionsResultCode;
    static fromName(name: SetOptionsResultCodeName): SetOptionsResultCode;
    static fromXdrObject(wire: number): SetOptionsResultCode;
}
