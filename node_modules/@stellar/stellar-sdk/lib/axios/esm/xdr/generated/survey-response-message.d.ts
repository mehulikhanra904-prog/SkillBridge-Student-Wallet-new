import type { XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { PublicKey, type PublicKeyWire } from "./public-key.js";
import { SurveyMessageCommandType, type SurveyMessageCommandTypeWire } from "./survey-message-command-type.js";
import { EncryptedBody, type EncryptedBodyWire } from "./encrypted-body.js";
export interface SurveyResponseMessageWire {
    surveyorPeerId: PublicKeyWire;
    surveyedPeerId: PublicKeyWire;
    ledgerNum: number;
    commandType: SurveyMessageCommandTypeWire;
    encryptedBody: EncryptedBodyWire;
}
/**
 * ```xdr
 * struct SurveyResponseMessage
 * {
 *     NodeID surveyorPeerID;
 *     NodeID surveyedPeerID;
 *     uint32 ledgerNum;
 *     SurveyMessageCommandType commandType;
 *     EncryptedBody encryptedBody;
 * };
 * ```
 */
export declare class SurveyResponseMessage extends XdrValue {
    readonly surveyorPeerId: PublicKey;
    readonly surveyedPeerId: PublicKey;
    readonly ledgerNum: number;
    readonly commandType: SurveyMessageCommandType;
    readonly encryptedBody: EncryptedBody;
    static readonly schema: XdrType<SurveyResponseMessageWire>;
    constructor(input: {
        surveyorPeerId: PublicKey;
        surveyedPeerId: PublicKey;
        ledgerNum: number;
        commandType: SurveyMessageCommandType;
        encryptedBody: EncryptedBody | Uint8Array | string;
    });
    toXdrObject(): SurveyResponseMessageWire;
    static fromXdrObject(wire: SurveyResponseMessageWire): SurveyResponseMessage;
}
