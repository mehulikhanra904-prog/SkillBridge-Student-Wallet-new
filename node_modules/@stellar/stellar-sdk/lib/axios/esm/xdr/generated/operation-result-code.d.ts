import { EnumValue } from "../values/enum-value.js";
export type OperationResultCodeWire = number;
export type OperationResultCodeName = "opInner" | "opBadAuth" | "opNoAccount" | "opNotSupported" | "opTooManySubentries" | "opExceededWorkLimit" | "opTooManySponsoring";
/**
 * ```xdr
 * enum OperationResultCode
 * {
 *     opINNER = 0, // inner object result is valid
 *
 *     opBAD_AUTH = -1,            // too few valid signatures / wrong network
 *     opNO_ACCOUNT = -2,          // source account was not found
 *     opNOT_SUPPORTED = -3,       // operation not supported at this time
 *     opTOO_MANY_SUBENTRIES = -4, // max number of subentries already reached
 *     opEXCEEDED_WORK_LIMIT = -5, // operation did too much work
 *     opTOO_MANY_SPONSORING = -6  // account is sponsoring too many entries
 * };
 * ```
 */
export declare class OperationResultCode extends EnumValue<OperationResultCodeName> {
    static readonly opInner: OperationResultCode;
    static readonly opBadAuth: OperationResultCode;
    static readonly opNoAccount: OperationResultCode;
    static readonly opNotSupported: OperationResultCode;
    static readonly opTooManySubentries: OperationResultCode;
    static readonly opExceededWorkLimit: OperationResultCode;
    static readonly opTooManySponsoring: OperationResultCode;
    static readonly schema: import("@stellar/js-xdr").EnumSchema<"OperationResultCode", {
        readonly opInner: 0;
        readonly opBadAuth: -1;
        readonly opNoAccount: -2;
        readonly opNotSupported: -3;
        readonly opTooManySubentries: -4;
        readonly opExceededWorkLimit: -5;
        readonly opTooManySponsoring: -6;
    }>;
    static fromValue(value: number): OperationResultCode;
    static fromName(name: OperationResultCodeName): OperationResultCode;
    static fromXdrObject(wire: number): OperationResultCode;
}
