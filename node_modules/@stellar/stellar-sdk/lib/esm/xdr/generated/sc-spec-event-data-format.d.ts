import { EnumValue } from "../values/enum-value.js";
export type ScSpecEventDataFormatWire = number;
export type ScSpecEventDataFormatName = "scSpecEventDataFormatSingleValue" | "scSpecEventDataFormatVec" | "scSpecEventDataFormatMap";
/**
 * ```xdr
 * enum SCSpecEventDataFormat
 * {
 *     SC_SPEC_EVENT_DATA_FORMAT_SINGLE_VALUE = 0,
 *     SC_SPEC_EVENT_DATA_FORMAT_VEC = 1,
 *     SC_SPEC_EVENT_DATA_FORMAT_MAP = 2
 * };
 * ```
 */
export declare class ScSpecEventDataFormat extends EnumValue<ScSpecEventDataFormatName> {
    static readonly scSpecEventDataFormatSingleValue: ScSpecEventDataFormat;
    static readonly scSpecEventDataFormatVec: ScSpecEventDataFormat;
    static readonly scSpecEventDataFormatMap: ScSpecEventDataFormat;
    static readonly schema: import("@stellar/js-xdr").XdrType<import("@stellar/js-xdr").EnumMember<{
        readonly scSpecEventDataFormatSingleValue: 0;
        readonly scSpecEventDataFormatVec: 1;
        readonly scSpecEventDataFormatMap: 2;
    }>> & {
        readonly kind: "enum";
        readonly name: "ScSpecEventDataFormat";
        readonly nameByValue: ReadonlyMap<number, "scSpecEventDataFormatSingleValue" | "scSpecEventDataFormatVec" | "scSpecEventDataFormatMap">;
    } & {
        readonly scSpecEventDataFormatSingleValue: 0;
        readonly scSpecEventDataFormatVec: 1;
        readonly scSpecEventDataFormatMap: 2;
    } & import("../values/enum-value.js").PrefixedEnumSchema;
    static fromValue(value: number): ScSpecEventDataFormat;
    static fromName(name: ScSpecEventDataFormatName): ScSpecEventDataFormat;
    static fromXdrObject(wire: number): ScSpecEventDataFormat;
}
