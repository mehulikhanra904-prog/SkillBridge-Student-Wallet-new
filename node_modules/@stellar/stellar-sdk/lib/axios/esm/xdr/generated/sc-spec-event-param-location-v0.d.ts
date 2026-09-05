import { EnumValue } from "../values/enum-value.js";
export type ScSpecEventParamLocationV0Wire = number;
export type ScSpecEventParamLocationV0Name = "scSpecEventParamLocationData" | "scSpecEventParamLocationTopicList";
/**
 * ```xdr
 * enum SCSpecEventParamLocationV0
 * {
 *     SC_SPEC_EVENT_PARAM_LOCATION_DATA = 0,
 *     SC_SPEC_EVENT_PARAM_LOCATION_TOPIC_LIST = 1
 * };
 * ```
 */
export declare class ScSpecEventParamLocationV0 extends EnumValue<ScSpecEventParamLocationV0Name> {
    static readonly scSpecEventParamLocationData: ScSpecEventParamLocationV0;
    static readonly scSpecEventParamLocationTopicList: ScSpecEventParamLocationV0;
    static readonly schema: import("@stellar/js-xdr").XdrType<import("@stellar/js-xdr").EnumMember<{
        readonly scSpecEventParamLocationData: 0;
        readonly scSpecEventParamLocationTopicList: 1;
    }>> & {
        readonly kind: "enum";
        readonly name: "ScSpecEventParamLocationV0";
        readonly nameByValue: ReadonlyMap<number, "scSpecEventParamLocationData" | "scSpecEventParamLocationTopicList">;
    } & {
        readonly scSpecEventParamLocationData: 0;
        readonly scSpecEventParamLocationTopicList: 1;
    } & import("../values/enum-value.js").PrefixedEnumSchema;
    static fromValue(value: number): ScSpecEventParamLocationV0;
    static fromName(name: ScSpecEventParamLocationV0Name): ScSpecEventParamLocationV0;
    static fromXdrObject(wire: number): ScSpecEventParamLocationV0;
}
