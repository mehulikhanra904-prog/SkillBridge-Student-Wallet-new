import type { XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { Signature, type SignatureWire } from "./signature.js";
import { TimeSlicedSurveyStartCollectingMessage, type TimeSlicedSurveyStartCollectingMessageWire } from "./time-sliced-survey-start-collecting-message.js";
export interface SignedTimeSlicedSurveyStartCollectingMessageWire {
    signature: SignatureWire;
    startCollecting: TimeSlicedSurveyStartCollectingMessageWire;
}
/**
 * ```xdr
 * struct SignedTimeSlicedSurveyStartCollectingMessage
 * {
 *     Signature signature;
 *     TimeSlicedSurveyStartCollectingMessage startCollecting;
 * };
 * ```
 */
export declare class SignedTimeSlicedSurveyStartCollectingMessage extends XdrValue {
    readonly signature: Signature;
    readonly startCollecting: TimeSlicedSurveyStartCollectingMessage;
    static readonly schema: XdrType<SignedTimeSlicedSurveyStartCollectingMessageWire>;
    constructor(input: {
        signature: Signature | Uint8Array | string;
        startCollecting: TimeSlicedSurveyStartCollectingMessage;
    });
    toXdrObject(): SignedTimeSlicedSurveyStartCollectingMessageWire;
    static fromXdrObject(wire: SignedTimeSlicedSurveyStartCollectingMessageWire): SignedTimeSlicedSurveyStartCollectingMessage;
}
