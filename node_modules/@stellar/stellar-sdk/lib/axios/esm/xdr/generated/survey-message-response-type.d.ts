import { EnumValue } from "../values/enum-value.js";
export type SurveyMessageResponseTypeWire = number;
export type SurveyMessageResponseTypeName = "surveyTopologyResponseV2";
/**
 * ```xdr
 * enum SurveyMessageResponseType
 * {
 *     SURVEY_TOPOLOGY_RESPONSE_V2 = 2
 * };
 * ```
 */
export declare class SurveyMessageResponseType extends EnumValue<SurveyMessageResponseTypeName> {
    static readonly surveyTopologyResponseV2: SurveyMessageResponseType;
    static readonly schema: import("@stellar/js-xdr").EnumSchema<"SurveyMessageResponseType", {
        readonly surveyTopologyResponseV2: 2;
    }>;
    static fromValue(value: number): SurveyMessageResponseType;
    static fromName(name: SurveyMessageResponseTypeName): SurveyMessageResponseType;
    static fromXdrObject(wire: number): SurveyMessageResponseType;
}
