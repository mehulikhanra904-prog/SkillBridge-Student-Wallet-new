import type { XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { SurveyResponseMessage, type SurveyResponseMessageWire } from "./survey-response-message.js";
export interface TimeSlicedSurveyResponseMessageWire {
    response: SurveyResponseMessageWire;
    nonce: number;
}
/**
 * ```xdr
 * struct TimeSlicedSurveyResponseMessage
 * {
 *     SurveyResponseMessage response;
 *     uint32 nonce;
 * };
 * ```
 */
export declare class TimeSlicedSurveyResponseMessage extends XdrValue {
    readonly response: SurveyResponseMessage;
    readonly nonce: number;
    static readonly schema: XdrType<TimeSlicedSurveyResponseMessageWire>;
    constructor(input: {
        response: SurveyResponseMessage;
        nonce: number;
    });
    toXdrObject(): TimeSlicedSurveyResponseMessageWire;
    static fromXdrObject(wire: TimeSlicedSurveyResponseMessageWire): TimeSlicedSurveyResponseMessage;
}
