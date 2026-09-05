import { EnumValue } from "../values/enum-value.js";
export type ScErrorCodeWire = number;
export type ScErrorCodeName = "scecArithDomain" | "scecIndexBounds" | "scecInvalidInput" | "scecMissingValue" | "scecExistingValue" | "scecExceededLimit" | "scecInvalidAction" | "scecInternalError" | "scecUnexpectedType" | "scecUnexpectedSize";
/**
 * ```xdr
 * enum SCErrorCode
 * {
 *     SCEC_ARITH_DOMAIN = 0,      // Some arithmetic was undefined (overflow, divide-by-zero).
 *     SCEC_INDEX_BOUNDS = 1,      // Something was indexed beyond its bounds.
 *     SCEC_INVALID_INPUT = 2,     // User provided some otherwise-bad data.
 *     SCEC_MISSING_VALUE = 3,     // Some value was required but not provided.
 *     SCEC_EXISTING_VALUE = 4,    // Some value was provided where not allowed.
 *     SCEC_EXCEEDED_LIMIT = 5,    // Some arbitrary limit -- gas or otherwise -- was hit.
 *     SCEC_INVALID_ACTION = 6,    // Data was valid but action requested was not.
 *     SCEC_INTERNAL_ERROR = 7,    // The host detected an error in its own logic.
 *     SCEC_UNEXPECTED_TYPE = 8,   // Some type wasn't as expected.
 *     SCEC_UNEXPECTED_SIZE = 9    // Something's size wasn't as expected.
 * };
 * ```
 */
export declare class ScErrorCode extends EnumValue<ScErrorCodeName> {
    static readonly scecArithDomain: ScErrorCode;
    static readonly scecIndexBounds: ScErrorCode;
    static readonly scecInvalidInput: ScErrorCode;
    static readonly scecMissingValue: ScErrorCode;
    static readonly scecExistingValue: ScErrorCode;
    static readonly scecExceededLimit: ScErrorCode;
    static readonly scecInvalidAction: ScErrorCode;
    static readonly scecInternalError: ScErrorCode;
    static readonly scecUnexpectedType: ScErrorCode;
    static readonly scecUnexpectedSize: ScErrorCode;
    static readonly schema: import("@stellar/js-xdr").XdrType<import("@stellar/js-xdr").EnumMember<{
        readonly scecArithDomain: 0;
        readonly scecIndexBounds: 1;
        readonly scecInvalidInput: 2;
        readonly scecMissingValue: 3;
        readonly scecExistingValue: 4;
        readonly scecExceededLimit: 5;
        readonly scecInvalidAction: 6;
        readonly scecInternalError: 7;
        readonly scecUnexpectedType: 8;
        readonly scecUnexpectedSize: 9;
    }>> & {
        readonly kind: "enum";
        readonly name: "ScErrorCode";
        readonly nameByValue: ReadonlyMap<number, "scecArithDomain" | "scecIndexBounds" | "scecInvalidInput" | "scecMissingValue" | "scecExistingValue" | "scecExceededLimit" | "scecInvalidAction" | "scecInternalError" | "scecUnexpectedType" | "scecUnexpectedSize">;
    } & {
        readonly scecArithDomain: 0;
        readonly scecIndexBounds: 1;
        readonly scecInvalidInput: 2;
        readonly scecMissingValue: 3;
        readonly scecExistingValue: 4;
        readonly scecExceededLimit: 5;
        readonly scecInvalidAction: 6;
        readonly scecInternalError: 7;
        readonly scecUnexpectedType: 8;
        readonly scecUnexpectedSize: 9;
    } & import("../values/enum-value.js").PrefixedEnumSchema;
    static fromValue(value: number): ScErrorCode;
    static fromName(name: ScErrorCodeName): ScErrorCode;
    static fromXdrObject(wire: number): ScErrorCode;
}
