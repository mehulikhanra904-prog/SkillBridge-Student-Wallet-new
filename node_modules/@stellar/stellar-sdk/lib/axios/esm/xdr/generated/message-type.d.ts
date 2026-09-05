import { EnumValue } from "../values/enum-value.js";
export type MessageTypeWire = number;
export type MessageTypeName = "errorMsg" | "auth" | "dontHave" | "peers" | "getTxSet" | "txSet" | "generalizedTxSet" | "transaction" | "getScpQuorumset" | "scpQuorumset" | "scpMessage" | "getScpState" | "hello" | "sendMore" | "sendMoreExtended" | "floodAdvert" | "floodDemand" | "timeSlicedSurveyRequest" | "timeSlicedSurveyResponse" | "timeSlicedSurveyStartCollecting" | "timeSlicedSurveyStopCollecting";
/**
 * ```xdr
 * enum MessageType
 * {
 *     ERROR_MSG = 0,
 *     AUTH = 2,
 *     DONT_HAVE = 3,
 *     // GET_PEERS (4) is deprecated
 *
 *     PEERS = 5,
 *
 *     GET_TX_SET = 6, // gets a particular txset by hash
 *     TX_SET = 7,
 *     GENERALIZED_TX_SET = 17,
 *
 *     TRANSACTION = 8, // pass on a tx you have heard about
 *
 *     // SCP
 *     GET_SCP_QUORUMSET = 9,
 *     SCP_QUORUMSET = 10,
 *     SCP_MESSAGE = 11,
 *     GET_SCP_STATE = 12,
 *
 *     // new messages
 *     HELLO = 13,
 *
 *     // SURVEY_REQUEST (14) removed and replaced by TIME_SLICED_SURVEY_REQUEST
 *     // SURVEY_RESPONSE (15) removed and replaced by TIME_SLICED_SURVEY_RESPONSE
 *
 *     SEND_MORE = 16,
 *     SEND_MORE_EXTENDED = 20,
 *
 *     FLOOD_ADVERT = 18,
 *     FLOOD_DEMAND = 19,
 *
 *     TIME_SLICED_SURVEY_REQUEST = 21,
 *     TIME_SLICED_SURVEY_RESPONSE = 22,
 *     TIME_SLICED_SURVEY_START_COLLECTING = 23,
 *     TIME_SLICED_SURVEY_STOP_COLLECTING = 24
 * };
 * ```
 */
export declare class MessageType extends EnumValue<MessageTypeName> {
    static readonly errorMsg: MessageType;
    static readonly auth: MessageType;
    static readonly dontHave: MessageType;
    static readonly peers: MessageType;
    static readonly getTxSet: MessageType;
    static readonly txSet: MessageType;
    static readonly generalizedTxSet: MessageType;
    static readonly transaction: MessageType;
    static readonly getScpQuorumset: MessageType;
    static readonly scpQuorumset: MessageType;
    static readonly scpMessage: MessageType;
    static readonly getScpState: MessageType;
    static readonly hello: MessageType;
    static readonly sendMore: MessageType;
    static readonly sendMoreExtended: MessageType;
    static readonly floodAdvert: MessageType;
    static readonly floodDemand: MessageType;
    static readonly timeSlicedSurveyRequest: MessageType;
    static readonly timeSlicedSurveyResponse: MessageType;
    static readonly timeSlicedSurveyStartCollecting: MessageType;
    static readonly timeSlicedSurveyStopCollecting: MessageType;
    static readonly schema: import("@stellar/js-xdr").EnumSchema<"MessageType", {
        readonly errorMsg: 0;
        readonly auth: 2;
        readonly dontHave: 3;
        readonly peers: 5;
        readonly getTxSet: 6;
        readonly txSet: 7;
        readonly generalizedTxSet: 17;
        readonly transaction: 8;
        readonly getScpQuorumset: 9;
        readonly scpQuorumset: 10;
        readonly scpMessage: 11;
        readonly getScpState: 12;
        readonly hello: 13;
        readonly sendMore: 16;
        readonly sendMoreExtended: 20;
        readonly floodAdvert: 18;
        readonly floodDemand: 19;
        readonly timeSlicedSurveyRequest: 21;
        readonly timeSlicedSurveyResponse: 22;
        readonly timeSlicedSurveyStartCollecting: 23;
        readonly timeSlicedSurveyStopCollecting: 24;
    }>;
    static fromValue(value: number): MessageType;
    static fromName(name: MessageTypeName): MessageType;
    static fromXdrObject(wire: number): MessageType;
}
