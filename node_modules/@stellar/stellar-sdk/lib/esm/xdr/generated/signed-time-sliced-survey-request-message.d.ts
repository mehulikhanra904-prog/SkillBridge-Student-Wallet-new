import type { XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { Signature, type SignatureWire } from "./signature.js";
import { TimeSlicedSurveyRequestMessage, type TimeSlicedSurveyRequestMessageWire } from "./time-sliced-survey-request-message.js";
export interface SignedTimeSlicedSurveyRequestMessageWire {
    requestSignature: SignatureWire;
    request: TimeSlicedSurveyRequestMessageWire;
}
/**
 * ```xdr
 * struct SignedTimeSlicedSurveyRequestMessage
 * {
 *     Signature requestSignature;
 *     TimeSlicedSurveyRequestMessage request;
 * };
 * ```
 */
export declare class SignedTimeSlicedSurveyRequestMessage extends XdrValue {
    readonly requestSignature: Signature;
    readonly request: TimeSlicedSurveyRequestMessage;
    static readonly schema: XdrType<SignedTimeSlicedSurveyRequestMessageWire>;
    constructor(input: {
        requestSignature: Signature | Uint8Array | string;
        request: TimeSlicedSurveyRequestMessage;
    });
    toXdrObject(): SignedTimeSlicedSurveyRequestMessageWire;
    static fromXdrObject(wire: SignedTimeSlicedSurveyRequestMessageWire): SignedTimeSlicedSurveyRequestMessage;
}
