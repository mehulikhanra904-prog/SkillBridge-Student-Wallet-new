import { EnumValue } from "../values/enum-value.js";
export type ErrorCodeWire = number;
export type ErrorCodeName = "errMisc" | "errData" | "errConf" | "errAuth" | "errLoad";
/**
 * ```xdr
 * enum ErrorCode
 * {
 *     ERR_MISC = 0, // Unspecific error
 *     ERR_DATA = 1, // Malformed data
 *     ERR_CONF = 2, // Misconfiguration error
 *     ERR_AUTH = 3, // Authentication failure
 *     ERR_LOAD = 4  // System overloaded
 * };
 * ```
 */
export declare class ErrorCode extends EnumValue<ErrorCodeName> {
    static readonly errMisc: ErrorCode;
    static readonly errData: ErrorCode;
    static readonly errConf: ErrorCode;
    static readonly errAuth: ErrorCode;
    static readonly errLoad: ErrorCode;
    static readonly schema: import("@stellar/js-xdr").XdrType<import("@stellar/js-xdr").EnumMember<{
        readonly errMisc: 0;
        readonly errData: 1;
        readonly errConf: 2;
        readonly errAuth: 3;
        readonly errLoad: 4;
    }>> & {
        readonly kind: "enum";
        readonly name: "ErrorCode";
        readonly nameByValue: ReadonlyMap<number, "errMisc" | "errData" | "errConf" | "errAuth" | "errLoad">;
    } & {
        readonly errMisc: 0;
        readonly errData: 1;
        readonly errConf: 2;
        readonly errAuth: 3;
        readonly errLoad: 4;
    } & import("../values/enum-value.js").PrefixedEnumSchema;
    static fromValue(value: number): ErrorCode;
    static fromName(name: ErrorCodeName): ErrorCode;
    static fromXdrObject(wire: number): ErrorCode;
}
