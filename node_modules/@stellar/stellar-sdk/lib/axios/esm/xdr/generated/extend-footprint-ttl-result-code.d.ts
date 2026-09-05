import { EnumValue } from "../values/enum-value.js";
export type ExtendFootprintTtlResultCodeWire = number;
export type ExtendFootprintTtlResultCodeName = "extendFootprintTtlSuccess" | "extendFootprintTtlMalformed" | "extendFootprintTtlResourceLimitExceeded" | "extendFootprintTtlInsufficientRefundableFee";
/**
 * ```xdr
 * enum ExtendFootprintTTLResultCode
 * {
 *     // codes considered as "success" for the operation
 *     EXTEND_FOOTPRINT_TTL_SUCCESS = 0,
 *
 *     // codes considered as "failure" for the operation
 *     EXTEND_FOOTPRINT_TTL_MALFORMED = -1,
 *     EXTEND_FOOTPRINT_TTL_RESOURCE_LIMIT_EXCEEDED = -2,
 *     EXTEND_FOOTPRINT_TTL_INSUFFICIENT_REFUNDABLE_FEE = -3
 * };
 * ```
 */
export declare class ExtendFootprintTtlResultCode extends EnumValue<ExtendFootprintTtlResultCodeName> {
    static readonly extendFootprintTtlSuccess: ExtendFootprintTtlResultCode;
    static readonly extendFootprintTtlMalformed: ExtendFootprintTtlResultCode;
    static readonly extendFootprintTtlResourceLimitExceeded: ExtendFootprintTtlResultCode;
    static readonly extendFootprintTtlInsufficientRefundableFee: ExtendFootprintTtlResultCode;
    static readonly schema: import("@stellar/js-xdr").XdrType<import("@stellar/js-xdr").EnumMember<{
        readonly extendFootprintTtlSuccess: 0;
        readonly extendFootprintTtlMalformed: -1;
        readonly extendFootprintTtlResourceLimitExceeded: -2;
        readonly extendFootprintTtlInsufficientRefundableFee: -3;
    }>> & {
        readonly kind: "enum";
        readonly name: "ExtendFootprintTtlResultCode";
        readonly nameByValue: ReadonlyMap<number, "extendFootprintTtlSuccess" | "extendFootprintTtlMalformed" | "extendFootprintTtlResourceLimitExceeded" | "extendFootprintTtlInsufficientRefundableFee">;
    } & {
        readonly extendFootprintTtlSuccess: 0;
        readonly extendFootprintTtlMalformed: -1;
        readonly extendFootprintTtlResourceLimitExceeded: -2;
        readonly extendFootprintTtlInsufficientRefundableFee: -3;
    } & import("../values/enum-value.js").PrefixedEnumSchema;
    static fromValue(value: number): ExtendFootprintTtlResultCode;
    static fromName(name: ExtendFootprintTtlResultCodeName): ExtendFootprintTtlResultCode;
    static fromXdrObject(wire: number): ExtendFootprintTtlResultCode;
}
