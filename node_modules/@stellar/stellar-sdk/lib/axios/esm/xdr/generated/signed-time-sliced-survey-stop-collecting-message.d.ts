import type { XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { Signature, type SignatureWire } from "./signature.js";
import { TimeSlicedSurveyStopCollectingMessage, type TimeSlicedSurveyStopCollectingMessageWire } from "./time-sliced-survey-stop-collecting-message.js";
export interface SignedTimeSlicedSurveyStopCollectingMessageWire {
    signature: SignatureWire;
    stopCollecting: TimeSlicedSurveyStopCollectingMessageWire;
}
/**
 * ```xdr
 * struct SignedTimeSlicedSurveyStopCollectingMessage
 * {
 *     Signature signature;
 *     TimeSlicedSurveyStopCollectingMessage stopCollecting;
 * };
 * ```
 */
export declare class SignedTimeSlicedSurveyStopCollectingMessage extends XdrValue {
    readonly signature: Signature;
    readonly stopCollecting: TimeSlicedSurveyStopCollectingMessage;
    static readonly schema: XdrType<SignedTimeSlicedSurveyStopCollectingMessageWire>;
    constructor(input: {
        signature: Signature | Uint8Array | string;
        stopCollecting: TimeSlicedSurveyStopCollectingMessage;
    });
    toXdrObject(): SignedTimeSlicedSurveyStopCollectingMessageWire;
    static fromXdrObject(wire: SignedTimeSlicedSurveyStopCollectingMessageWire): SignedTimeSlicedSurveyStopCollectingMessage;
}
