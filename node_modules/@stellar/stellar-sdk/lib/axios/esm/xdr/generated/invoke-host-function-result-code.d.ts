import { EnumValue } from "../values/enum-value.js";
export type InvokeHostFunctionResultCodeWire = number;
export type InvokeHostFunctionResultCodeName = "invokeHostFunctionSuccess" | "invokeHostFunctionMalformed" | "invokeHostFunctionTrapped" | "invokeHostFunctionResourceLimitExceeded" | "invokeHostFunctionEntryArchived" | "invokeHostFunctionInsufficientRefundableFee";
/**
 * ```xdr
 * enum InvokeHostFunctionResultCode
 * {
 *     // codes considered as "success" for the operation
 *     INVOKE_HOST_FUNCTION_SUCCESS = 0,
 *
 *     // codes considered as "failure" for the operation
 *     INVOKE_HOST_FUNCTION_MALFORMED = -1,
 *     INVOKE_HOST_FUNCTION_TRAPPED = -2,
 *     INVOKE_HOST_FUNCTION_RESOURCE_LIMIT_EXCEEDED = -3,
 *     INVOKE_HOST_FUNCTION_ENTRY_ARCHIVED = -4,
 *     INVOKE_HOST_FUNCTION_INSUFFICIENT_REFUNDABLE_FEE = -5
 * };
 * ```
 */
export declare class InvokeHostFunctionResultCode extends EnumValue<InvokeHostFunctionResultCodeName> {
    static readonly invokeHostFunctionSuccess: InvokeHostFunctionResultCode;
    static readonly invokeHostFunctionMalformed: InvokeHostFunctionResultCode;
    static readonly invokeHostFunctionTrapped: InvokeHostFunctionResultCode;
    static readonly invokeHostFunctionResourceLimitExceeded: InvokeHostFunctionResultCode;
    static readonly invokeHostFunctionEntryArchived: InvokeHostFunctionResultCode;
    static readonly invokeHostFunctionInsufficientRefundableFee: InvokeHostFunctionResultCode;
    static readonly schema: import("@stellar/js-xdr").XdrType<import("@stellar/js-xdr").EnumMember<{
        readonly invokeHostFunctionSuccess: 0;
        readonly invokeHostFunctionMalformed: -1;
        readonly invokeHostFunctionTrapped: -2;
        readonly invokeHostFunctionResourceLimitExceeded: -3;
        readonly invokeHostFunctionEntryArchived: -4;
        readonly invokeHostFunctionInsufficientRefundableFee: -5;
    }>> & {
        readonly kind: "enum";
        readonly name: "InvokeHostFunctionResultCode";
        readonly nameByValue: ReadonlyMap<number, "invokeHostFunctionSuccess" | "invokeHostFunctionMalformed" | "invokeHostFunctionTrapped" | "invokeHostFunctionResourceLimitExceeded" | "invokeHostFunctionEntryArchived" | "invokeHostFunctionInsufficientRefundableFee">;
    } & {
        readonly invokeHostFunctionSuccess: 0;
        readonly invokeHostFunctionMalformed: -1;
        readonly invokeHostFunctionTrapped: -2;
        readonly invokeHostFunctionResourceLimitExceeded: -3;
        readonly invokeHostFunctionEntryArchived: -4;
        readonly invokeHostFunctionInsufficientRefundableFee: -5;
    } & import("../values/enum-value.js").PrefixedEnumSchema;
    static fromValue(value: number): InvokeHostFunctionResultCode;
    static fromName(name: InvokeHostFunctionResultCodeName): InvokeHostFunctionResultCode;
    static fromXdrObject(wire: number): InvokeHostFunctionResultCode;
}
