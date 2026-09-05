import { EnumValue } from "../values/enum-value.js";
export type ClawbackResultCodeWire = number;
export type ClawbackResultCodeName = "clawbackSuccess" | "clawbackMalformed" | "clawbackNotClawbackEnabled" | "clawbackNoTrust" | "clawbackUnderfunded";
/**
 * ```xdr
 * enum ClawbackResultCode
 * {
 *     // codes considered as "success" for the operation
 *     CLAWBACK_SUCCESS = 0,
 *
 *     // codes considered as "failure" for the operation
 *     CLAWBACK_MALFORMED = -1,
 *     CLAWBACK_NOT_CLAWBACK_ENABLED = -2,
 *     CLAWBACK_NO_TRUST = -3,
 *     CLAWBACK_UNDERFUNDED = -4
 * };
 * ```
 */
export declare class ClawbackResultCode extends EnumValue<ClawbackResultCodeName> {
    static readonly clawbackSuccess: ClawbackResultCode;
    static readonly clawbackMalformed: ClawbackResultCode;
    static readonly clawbackNotClawbackEnabled: ClawbackResultCode;
    static readonly clawbackNoTrust: ClawbackResultCode;
    static readonly clawbackUnderfunded: ClawbackResultCode;
    static readonly schema: import("@stellar/js-xdr").XdrType<import("@stellar/js-xdr").EnumMember<{
        readonly clawbackSuccess: 0;
        readonly clawbackMalformed: -1;
        readonly clawbackNotClawbackEnabled: -2;
        readonly clawbackNoTrust: -3;
        readonly clawbackUnderfunded: -4;
    }>> & {
        readonly kind: "enum";
        readonly name: "ClawbackResultCode";
        readonly nameByValue: ReadonlyMap<number, "clawbackSuccess" | "clawbackMalformed" | "clawbackNotClawbackEnabled" | "clawbackNoTrust" | "clawbackUnderfunded">;
    } & {
        readonly clawbackSuccess: 0;
        readonly clawbackMalformed: -1;
        readonly clawbackNotClawbackEnabled: -2;
        readonly clawbackNoTrust: -3;
        readonly clawbackUnderfunded: -4;
    } & import("../values/enum-value.js").PrefixedEnumSchema;
    static fromValue(value: number): ClawbackResultCode;
    static fromName(name: ClawbackResultCodeName): ClawbackResultCode;
    static fromXdrObject(wire: number): ClawbackResultCode;
}
