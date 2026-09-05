import type { XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { PublicKey, type PublicKeyWire } from "./public-key.js";
export interface TimeSlicedSurveyStartCollectingMessageWire {
    surveyorId: PublicKeyWire;
    nonce: number;
    ledgerNum: number;
}
/**
 * ```xdr
 * struct TimeSlicedSurveyStartCollectingMessage
 * {
 *     NodeID surveyorID;
 *     uint32 nonce;
 *     uint32 ledgerNum;
 * };
 * ```
 */
export declare class TimeSlicedSurveyStartCollectingMessage extends XdrValue {
    readonly surveyorId: PublicKey;
    readonly nonce: number;
    readonly ledgerNum: number;
    static readonly schema: XdrType<TimeSlicedSurveyStartCollectingMessageWire>;
    constructor(input: {
        surveyorId: PublicKey;
        nonce: number;
        ledgerNum: number;
    });
    toXdrObject(): TimeSlicedSurveyStartCollectingMessageWire;
    static fromXdrObject(wire: TimeSlicedSurveyStartCollectingMessageWire): TimeSlicedSurveyStartCollectingMessage;
}
