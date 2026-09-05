import type { XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { PublicKey, type PublicKeyWire } from "./public-key.js";
export interface TimeSlicedSurveyStopCollectingMessageWire {
    surveyorId: PublicKeyWire;
    nonce: number;
    ledgerNum: number;
}
/**
 * ```xdr
 * struct TimeSlicedSurveyStopCollectingMessage
 * {
 *     NodeID surveyorID;
 *     uint32 nonce;
 *     uint32 ledgerNum;
 * };
 * ```
 */
export declare class TimeSlicedSurveyStopCollectingMessage extends XdrValue {
    readonly surveyorId: PublicKey;
    readonly nonce: number;
    readonly ledgerNum: number;
    static readonly schema: XdrType<TimeSlicedSurveyStopCollectingMessageWire>;
    constructor(input: {
        surveyorId: PublicKey;
        nonce: number;
        ledgerNum: number;
    });
    toXdrObject(): TimeSlicedSurveyStopCollectingMessageWire;
    static fromXdrObject(wire: TimeSlicedSurveyStopCollectingMessageWire): TimeSlicedSurveyStopCollectingMessage;
}
