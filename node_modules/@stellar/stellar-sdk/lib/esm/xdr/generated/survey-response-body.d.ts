import { type XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { TopologyResponseBodyV2, type TopologyResponseBodyV2Wire } from "./topology-response-body-v2.js";
export type SurveyResponseBodyWire = {
    type: 2;
    topologyResponseBodyV2: TopologyResponseBodyV2Wire;
};
export type SurveyResponseBodyVariantName = "surveyTopologyResponseV2";
/**
 * ```xdr
 * union SurveyResponseBody switch (SurveyMessageResponseType type)
 * {
 * case SURVEY_TOPOLOGY_RESPONSE_V2:
 *     TopologyResponseBodyV2 topologyResponseBodyV2;
 * };
 * ```
 */
declare abstract class SurveyResponseBodyBase extends XdrValue {
    abstract readonly type: SurveyResponseBodyVariantName;
    constructor();
    static readonly schema: XdrType<SurveyResponseBodyWire>;
    static surveyTopologyResponseV2(topologyResponseBodyV2: TopologyResponseBodyV2): SurveyResponseBodySurveyTopologyResponseV2;
    static fromXdrObject(wire: SurveyResponseBodyWire): SurveyResponseBody;
    /**
     * Type guard narrowing an unknown value to a concrete SurveyResponseBody variant.
     * Use this instead of `instanceof SurveyResponseBody`: the exported `SurveyResponseBody` value
     * is the abstract base, so `instanceof` narrows to the base (not the
     * variant union) and forces a cast. `SurveyResponseBody.is(x)` narrows to the union.
     */
    static is(value: unknown): value is SurveyResponseBody;
    abstract toXdrObject(): SurveyResponseBodyWire;
}
export declare class SurveyResponseBodySurveyTopologyResponseV2 extends SurveyResponseBodyBase {
    readonly type: "surveyTopologyResponseV2";
    readonly topologyResponseBodyV2: TopologyResponseBodyV2;
    constructor(topologyResponseBodyV2: TopologyResponseBodyV2);
    get value(): TopologyResponseBodyV2;
    toXdrObject(): Extract<SurveyResponseBodyWire, {
        type: 2;
    }>;
}
export type SurveyResponseBody = SurveyResponseBodySurveyTopologyResponseV2;
export declare const SurveyResponseBody: typeof SurveyResponseBodyBase;
export {};
