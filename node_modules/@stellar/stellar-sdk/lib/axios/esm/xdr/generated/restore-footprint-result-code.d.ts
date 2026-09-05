import { EnumValue } from "../values/enum-value.js";
export type RestoreFootprintResultCodeWire = number;
export type RestoreFootprintResultCodeName = "restoreFootprintSuccess" | "restoreFootprintMalformed" | "restoreFootprintResourceLimitExceeded" | "restoreFootprintInsufficientRefundableFee";
/**
 * ```xdr
 * enum RestoreFootprintResultCode
 * {
 *     // codes considered as "success" for the operation
 *     RESTORE_FOOTPRINT_SUCCESS = 0,
 *
 *     // codes considered as "failure" for the operation
 *     RESTORE_FOOTPRINT_MALFORMED = -1,
 *     RESTORE_FOOTPRINT_RESOURCE_LIMIT_EXCEEDED = -2,
 *     RESTORE_FOOTPRINT_INSUFFICIENT_REFUNDABLE_FEE = -3
 * };
 * ```
 */
export declare class RestoreFootprintResultCode extends EnumValue<RestoreFootprintResultCodeName> {
    static readonly restoreFootprintSuccess: RestoreFootprintResultCode;
    static readonly restoreFootprintMalformed: RestoreFootprintResultCode;
    static readonly restoreFootprintResourceLimitExceeded: RestoreFootprintResultCode;
    static readonly restoreFootprintInsufficientRefundableFee: RestoreFootprintResultCode;
    static readonly schema: import("@stellar/js-xdr").XdrType<import("@stellar/js-xdr").EnumMember<{
        readonly restoreFootprintSuccess: 0;
        readonly restoreFootprintMalformed: -1;
        readonly restoreFootprintResourceLimitExceeded: -2;
        readonly restoreFootprintInsufficientRefundableFee: -3;
    }>> & {
        readonly kind: "enum";
        readonly name: "RestoreFootprintResultCode";
        readonly nameByValue: ReadonlyMap<number, "restoreFootprintSuccess" | "restoreFootprintMalformed" | "restoreFootprintResourceLimitExceeded" | "restoreFootprintInsufficientRefundableFee">;
    } & {
        readonly restoreFootprintSuccess: 0;
        readonly restoreFootprintMalformed: -1;
        readonly restoreFootprintResourceLimitExceeded: -2;
        readonly restoreFootprintInsufficientRefundableFee: -3;
    } & import("../values/enum-value.js").PrefixedEnumSchema;
    static fromValue(value: number): RestoreFootprintResultCode;
    static fromName(name: RestoreFootprintResultCodeName): RestoreFootprintResultCode;
    static fromXdrObject(wire: number): RestoreFootprintResultCode;
}
