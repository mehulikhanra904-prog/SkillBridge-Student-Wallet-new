import type { XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { Signature, type SignatureWire } from "./signature.js";
import { TimeSlicedSurveyResponseMessage, type TimeSlicedSurveyResponseMessageWire } from "./time-sliced-survey-response-message.js";
export interface SignedTimeSlicedSurveyResponseMessageWire {
    responseSignature: SignatureWire;
    response: TimeSlicedSurveyResponseMessageWire;
}
/**
 * ```xdr
 * struct SignedTimeSlicedSurveyResponseMessage
 * {
 *     Signature responseSignature;
 *     TimeSlicedSurveyResponseMessage response;
 * };
 * ```
 */
export declare class SignedTimeSlicedSurveyResponseMessage extends XdrValue {
    readonly responseSignature: Signature;
    readonly response: TimeSlicedSurveyResponseMessage;
    static readonly schema: XdrType<SignedTimeSlicedSurveyResponseMessageWire>;
    constructor(input: {
        responseSignature: Signature | Uint8Array | string;
        response: TimeSlicedSurveyResponseMessage;
    });
    toXdrObject(): SignedTimeSlicedSurveyResponseMessageWire;
    static fromXdrObject(wire: SignedTimeSlicedSurveyResponseMessageWire): SignedTimeSlicedSurveyResponseMessage;
}
