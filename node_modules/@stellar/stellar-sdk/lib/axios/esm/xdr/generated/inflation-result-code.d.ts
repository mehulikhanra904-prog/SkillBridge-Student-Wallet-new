import { EnumValue } from "../values/enum-value.js";
export type InflationResultCodeWire = number;
export type InflationResultCodeName = "inflationSuccess" | "inflationNotTime";
/**
 * ```xdr
 * enum InflationResultCode
 * {
 *     // codes considered as "success" for the operation
 *     INFLATION_SUCCESS = 0,
 *     // codes considered as "failure" for the operation
 *     INFLATION_NOT_TIME = -1
 * };
 * ```
 */
export declare class InflationResultCode extends EnumValue<InflationResultCodeName> {
    static readonly inflationSuccess: InflationResultCode;
    static readonly inflationNotTime: InflationResultCode;
    static readonly schema: import("@stellar/js-xdr").XdrType<import("@stellar/js-xdr").EnumMember<{
        readonly inflationSuccess: 0;
        readonly inflationNotTime: -1;
    }>> & {
        readonly kind: "enum";
        readonly name: "InflationResultCode";
        readonly nameByValue: ReadonlyMap<number, "inflationSuccess" | "inflationNotTime">;
    } & {
        readonly inflationSuccess: 0;
        readonly inflationNotTime: -1;
    } & import("../values/enum-value.js").PrefixedEnumSchema;
    static fromValue(value: number): InflationResultCode;
    static fromName(name: InflationResultCodeName): InflationResultCode;
    static fromXdrObject(wire: number): InflationResultCode;
}
