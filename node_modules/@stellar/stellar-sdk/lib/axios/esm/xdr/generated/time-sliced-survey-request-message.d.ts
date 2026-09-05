import type { XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { SurveyRequestMessage, type SurveyRequestMessageWire } from "./survey-request-message.js";
export interface TimeSlicedSurveyRequestMessageWire {
    request: SurveyRequestMessageWire;
    nonce: number;
    inboundPeersIndex: number;
    outboundPeersIndex: number;
}
/**
 * ```xdr
 * struct TimeSlicedSurveyRequestMessage
 * {
 *     SurveyRequestMessage request;
 *     uint32 nonce;
 *     uint32 inboundPeersIndex;
 *     uint32 outboundPeersIndex;
 * };
 * ```
 */
export declare class TimeSlicedSurveyRequestMessage extends XdrValue {
    readonly request: SurveyRequestMessage;
    readonly nonce: number;
    readonly inboundPeersIndex: number;
    readonly outboundPeersIndex: number;
    static readonly schema: XdrType<TimeSlicedSurveyRequestMessageWire>;
    constructor(input: {
        request: SurveyRequestMessage;
        nonce: number;
        inboundPeersIndex: number;
        outboundPeersIndex: number;
    });
    toXdrObject(): TimeSlicedSurveyRequestMessageWire;
    static fromXdrObject(wire: TimeSlicedSurveyRequestMessageWire): TimeSlicedSurveyRequestMessage;
}
