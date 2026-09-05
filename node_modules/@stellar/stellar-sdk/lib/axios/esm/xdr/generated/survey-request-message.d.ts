import type { XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { PublicKey, type PublicKeyWire } from "./public-key.js";
import { Curve25519Public, type Curve25519PublicWire } from "./curve25519-public.js";
import { SurveyMessageCommandType, type SurveyMessageCommandTypeWire } from "./survey-message-command-type.js";
export interface SurveyRequestMessageWire {
    surveyorPeerId: PublicKeyWire;
    surveyedPeerId: PublicKeyWire;
    ledgerNum: number;
    encryptionKey: Curve25519PublicWire;
    commandType: SurveyMessageCommandTypeWire;
}
/**
 * ```xdr
 * struct SurveyRequestMessage
 * {
 *     NodeID surveyorPeerID;
 *     NodeID surveyedPeerID;
 *     uint32 ledgerNum;
 *     Curve25519Public encryptionKey;
 *     SurveyMessageCommandType commandType;
 * };
 * ```
 */
export declare class SurveyRequestMessage extends XdrValue {
    readonly surveyorPeerId: PublicKey;
    readonly surveyedPeerId: PublicKey;
    readonly ledgerNum: number;
    readonly encryptionKey: Curve25519Public;
    readonly commandType: SurveyMessageCommandType;
    static readonly schema: XdrType<SurveyRequestMessageWire>;
    constructor(input: {
        surveyorPeerId: PublicKey;
        surveyedPeerId: PublicKey;
        ledgerNum: number;
        encryptionKey: Curve25519Public;
        commandType: SurveyMessageCommandType;
    });
    toXdrObject(): SurveyRequestMessageWire;
    static fromXdrObject(wire: SurveyRequestMessageWire): SurveyRequestMessage;
}
