import { EnumValue } from "../values/enum-value.js";
export type SurveyMessageCommandTypeWire = number;
export type SurveyMessageCommandTypeName = "timeSlicedSurveyTopology";
/**
 * ```xdr
 * enum SurveyMessageCommandType
 * {
 *     TIME_SLICED_SURVEY_TOPOLOGY = 1
 * };
 * ```
 */
export declare class SurveyMessageCommandType extends EnumValue<SurveyMessageCommandTypeName> {
    static readonly timeSlicedSurveyTopology: SurveyMessageCommandType;
    static readonly schema: import("@stellar/js-xdr").EnumSchema<"SurveyMessageCommandType", {
        readonly timeSlicedSurveyTopology: 1;
    }>;
    static fromValue(value: number): SurveyMessageCommandType;
    static fromName(name: SurveyMessageCommandTypeName): SurveyMessageCommandType;
    static fromXdrObject(wire: number): SurveyMessageCommandType;
}
