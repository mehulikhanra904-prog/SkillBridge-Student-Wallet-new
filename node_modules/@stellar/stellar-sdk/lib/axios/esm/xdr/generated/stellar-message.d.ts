import { type XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { Error, type ErrorWire } from "./error.js";
import { Hello, type HelloWire } from "./hello.js";
import { Auth, type AuthWire } from "./auth.js";
import { DontHave, type DontHaveWire } from "./dont-have.js";
import { PeerAddress, type PeerAddressWire } from "./peer-address.js";
import { Uint256Bytes, type Uint256BytesWire } from "./uint256-bytes.js";
import { TransactionSet, type TransactionSetWire } from "./transaction-set.js";
import { GeneralizedTransactionSet, type GeneralizedTransactionSetWire } from "./generalized-transaction-set.js";
import { TransactionEnvelope, type TransactionEnvelopeWire } from "./transaction-envelope.js";
import { SignedTimeSlicedSurveyRequestMessage, type SignedTimeSlicedSurveyRequestMessageWire } from "./signed-time-sliced-survey-request-message.js";
import { SignedTimeSlicedSurveyResponseMessage, type SignedTimeSlicedSurveyResponseMessageWire } from "./signed-time-sliced-survey-response-message.js";
import { SignedTimeSlicedSurveyStartCollectingMessage, type SignedTimeSlicedSurveyStartCollectingMessageWire } from "./signed-time-sliced-survey-start-collecting-message.js";
import { SignedTimeSlicedSurveyStopCollectingMessage, type SignedTimeSlicedSurveyStopCollectingMessageWire } from "./signed-time-sliced-survey-stop-collecting-message.js";
import { ScpQuorumSet, type ScpQuorumSetWire } from "./scp-quorum-set.js";
import { ScpEnvelope, type ScpEnvelopeWire } from "./scp-envelope.js";
import { SendMore, type SendMoreWire } from "./send-more.js";
import { SendMoreExtended, type SendMoreExtendedWire } from "./send-more-extended.js";
import { FloodAdvert, type FloodAdvertWire } from "./flood-advert.js";
import { FloodDemand, type FloodDemandWire } from "./flood-demand.js";
export type StellarMessageWire = {
    type: 0;
    error: ErrorWire;
} | {
    type: 13;
    hello: HelloWire;
} | {
    type: 2;
    auth: AuthWire;
} | {
    type: 3;
    dontHave: DontHaveWire;
} | {
    type: 5;
    peers: PeerAddressWire[];
} | {
    type: 6;
    txSetHash: Uint256BytesWire;
} | {
    type: 7;
    txSet: TransactionSetWire;
} | {
    type: 17;
    generalizedTxSet: GeneralizedTransactionSetWire;
} | {
    type: 8;
    transaction: TransactionEnvelopeWire;
} | {
    type: 21;
    signedTimeSlicedSurveyRequestMessage: SignedTimeSlicedSurveyRequestMessageWire;
} | {
    type: 22;
    signedTimeSlicedSurveyResponseMessage: SignedTimeSlicedSurveyResponseMessageWire;
} | {
    type: 23;
    signedTimeSlicedSurveyStartCollectingMessage: SignedTimeSlicedSurveyStartCollectingMessageWire;
} | {
    type: 24;
    signedTimeSlicedSurveyStopCollectingMessage: SignedTimeSlicedSurveyStopCollectingMessageWire;
} | {
    type: 9;
    qSetHash: Uint256BytesWire;
} | {
    type: 10;
    qSet: ScpQuorumSetWire;
} | {
    type: 11;
    envelope: ScpEnvelopeWire;
} | {
    type: 12;
    getScpLedgerSeq: number;
} | {
    type: 16;
    sendMoreMessage: SendMoreWire;
} | {
    type: 20;
    sendMoreExtendedMessage: SendMoreExtendedWire;
} | {
    type: 18;
    floodAdvert: FloodAdvertWire;
} | {
    type: 19;
    floodDemand: FloodDemandWire;
};
export type StellarMessageVariantName = "errorMsg" | "hello" | "auth" | "dontHave" | "peers" | "getTxSet" | "txSet" | "generalizedTxSet" | "transaction" | "timeSlicedSurveyRequest" | "timeSlicedSurveyResponse" | "timeSlicedSurveyStartCollecting" | "timeSlicedSurveyStopCollecting" | "getScpQuorumset" | "scpQuorumset" | "scpMessage" | "getScpState" | "sendMore" | "sendMoreExtended" | "floodAdvert" | "floodDemand";
/**
 * ```xdr
 * union StellarMessage switch (MessageType type)
 * {
 * case ERROR_MSG:
 *     Error error;
 * case HELLO:
 *     Hello hello;
 * case AUTH:
 *     Auth auth;
 * case DONT_HAVE:
 *     DontHave dontHave;
 * case PEERS:
 *     PeerAddress peers<100>;
 *
 * case GET_TX_SET:
 *     uint256 txSetHash;
 * case TX_SET:
 *     TransactionSet txSet;
 * case GENERALIZED_TX_SET:
 *     GeneralizedTransactionSet generalizedTxSet;
 *
 * case TRANSACTION:
 *     TransactionEnvelope transaction;
 *
 * case TIME_SLICED_SURVEY_REQUEST:
 *     SignedTimeSlicedSurveyRequestMessage signedTimeSlicedSurveyRequestMessage;
 *
 * case TIME_SLICED_SURVEY_RESPONSE:
 *     SignedTimeSlicedSurveyResponseMessage signedTimeSlicedSurveyResponseMessage;
 *
 * case TIME_SLICED_SURVEY_START_COLLECTING:
 *     SignedTimeSlicedSurveyStartCollectingMessage
 *         signedTimeSlicedSurveyStartCollectingMessage;
 *
 * case TIME_SLICED_SURVEY_STOP_COLLECTING:
 *     SignedTimeSlicedSurveyStopCollectingMessage
 *         signedTimeSlicedSurveyStopCollectingMessage;
 *
 * // SCP
 * case GET_SCP_QUORUMSET:
 *     uint256 qSetHash;
 * case SCP_QUORUMSET:
 *     SCPQuorumSet qSet;
 * case SCP_MESSAGE:
 *     SCPEnvelope envelope;
 * case GET_SCP_STATE:
 *     uint32 getSCPLedgerSeq; // ledger seq requested ; if 0, requests the latest
 * case SEND_MORE:
 *     SendMore sendMoreMessage;
 * case SEND_MORE_EXTENDED:
 *     SendMoreExtended sendMoreExtendedMessage;
 * // Pull mode
 * case FLOOD_ADVERT:
 *      FloodAdvert floodAdvert;
 * case FLOOD_DEMAND:
 *      FloodDemand floodDemand;
 * };
 * ```
 */
declare abstract class StellarMessageBase extends XdrValue {
    abstract readonly type: StellarMessageVariantName;
    constructor();
    static readonly schema: XdrType<StellarMessageWire>;
    static errorMsg(error: Error): StellarMessageErrorMsg;
    static hello(hello: Hello): StellarMessageHello;
    static auth(auth: Auth): StellarMessageAuth;
    static dontHave(dontHave: DontHave): StellarMessageDontHave;
    static peers(peers: PeerAddress[]): StellarMessagePeers;
    static getTxSet(txSetHash: Uint256Bytes | Uint8Array | string): StellarMessageGetTxSet;
    static txSet(txSet: TransactionSet): StellarMessageTxSet;
    static generalizedTxSet(generalizedTxSet: GeneralizedTransactionSet): StellarMessageGeneralizedTxSet;
    static transaction(transaction: TransactionEnvelope): StellarMessageTransaction;
    static timeSlicedSurveyRequest(signedTimeSlicedSurveyRequestMessage: SignedTimeSlicedSurveyRequestMessage): StellarMessageTimeSlicedSurveyRequest;
    static timeSlicedSurveyResponse(signedTimeSlicedSurveyResponseMessage: SignedTimeSlicedSurveyResponseMessage): StellarMessageTimeSlicedSurveyResponse;
    static timeSlicedSurveyStartCollecting(signedTimeSlicedSurveyStartCollectingMessage: SignedTimeSlicedSurveyStartCollectingMessage): StellarMessageTimeSlicedSurveyStartCollecting;
    static timeSlicedSurveyStopCollecting(signedTimeSlicedSurveyStopCollectingMessage: SignedTimeSlicedSurveyStopCollectingMessage): StellarMessageTimeSlicedSurveyStopCollecting;
    static getScpQuorumset(qSetHash: Uint256Bytes | Uint8Array | string): StellarMessageGetScpQuorumset;
    static scpQuorumset(qSet: ScpQuorumSet): StellarMessageScpQuorumset;
    static scpMessage(envelope: ScpEnvelope): StellarMessageScpMessage;
    static getScpState(getScpLedgerSeq: number): StellarMessageGetScpState;
    static sendMore(sendMoreMessage: SendMore): StellarMessageSendMore;
    static sendMoreExtended(sendMoreExtendedMessage: SendMoreExtended): StellarMessageSendMoreExtended;
    static floodAdvert(floodAdvert: FloodAdvert): StellarMessageFloodAdvert;
    static floodDemand(floodDemand: FloodDemand): StellarMessageFloodDemand;
    static fromXdrObject(wire: StellarMessageWire): StellarMessage;
    /**
     * Type guard narrowing an unknown value to a concrete StellarMessage variant.
     * Use this instead of `instanceof StellarMessage`: the exported `StellarMessage` value
     * is the abstract base, so `instanceof` narrows to the base (not the
     * variant union) and forces a cast. `StellarMessage.is(x)` narrows to the union.
     */
    static is(value: unknown): value is StellarMessage;
    abstract toXdrObject(): StellarMessageWire;
}
export declare class StellarMessageErrorMsg extends StellarMessageBase {
    readonly type: "errorMsg";
    readonly error: Error;
    constructor(error: Error);
    get value(): Error;
    toXdrObject(): Extract<StellarMessageWire, {
        type: 0;
    }>;
}
export declare class StellarMessageHello extends StellarMessageBase {
    readonly type: "hello";
    readonly hello: Hello;
    constructor(hello: Hello);
    get value(): Hello;
    toXdrObject(): Extract<StellarMessageWire, {
        type: 13;
    }>;
}
export declare class StellarMessageAuth extends StellarMessageBase {
    readonly type: "auth";
    readonly auth: Auth;
    constructor(auth: Auth);
    get value(): Auth;
    toXdrObject(): Extract<StellarMessageWire, {
        type: 2;
    }>;
}
export declare class StellarMessageDontHave extends StellarMessageBase {
    readonly type: "dontHave";
    readonly dontHave: DontHave;
    constructor(dontHave: DontHave);
    get value(): DontHave;
    toXdrObject(): Extract<StellarMessageWire, {
        type: 3;
    }>;
}
export declare class StellarMessagePeers extends StellarMessageBase {
    readonly type: "peers";
    readonly peers: PeerAddress[];
    constructor(peers: PeerAddress[]);
    get value(): PeerAddress[];
    toXdrObject(): Extract<StellarMessageWire, {
        type: 5;
    }>;
}
export declare class StellarMessageGetTxSet extends StellarMessageBase {
    readonly type: "getTxSet";
    readonly txSetHash: Uint256Bytes;
    constructor(txSetHash: Uint256Bytes | Uint8Array | string);
    get value(): Uint256Bytes;
    toXdrObject(): Extract<StellarMessageWire, {
        type: 6;
    }>;
}
export declare class StellarMessageTxSet extends StellarMessageBase {
    readonly type: "txSet";
    readonly txSet: TransactionSet;
    constructor(txSet: TransactionSet);
    get value(): TransactionSet;
    toXdrObject(): Extract<StellarMessageWire, {
        type: 7;
    }>;
}
export declare class StellarMessageGeneralizedTxSet extends StellarMessageBase {
    readonly type: "generalizedTxSet";
    readonly generalizedTxSet: GeneralizedTransactionSet;
    constructor(generalizedTxSet: GeneralizedTransactionSet);
    get value(): GeneralizedTransactionSet;
    toXdrObject(): Extract<StellarMessageWire, {
        type: 17;
    }>;
}
export declare class StellarMessageTransaction extends StellarMessageBase {
    readonly type: "transaction";
    readonly transaction: TransactionEnvelope;
    constructor(transaction: TransactionEnvelope);
    get value(): TransactionEnvelope;
    toXdrObject(): Extract<StellarMessageWire, {
        type: 8;
    }>;
}
export declare class StellarMessageTimeSlicedSurveyRequest extends StellarMessageBase {
    readonly type: "timeSlicedSurveyRequest";
    readonly signedTimeSlicedSurveyRequestMessage: SignedTimeSlicedSurveyRequestMessage;
    constructor(signedTimeSlicedSurveyRequestMessage: SignedTimeSlicedSurveyRequestMessage);
    get value(): SignedTimeSlicedSurveyRequestMessage;
    toXdrObject(): Extract<StellarMessageWire, {
        type: 21;
    }>;
}
export declare class StellarMessageTimeSlicedSurveyResponse extends StellarMessageBase {
    readonly type: "timeSlicedSurveyResponse";
    readonly signedTimeSlicedSurveyResponseMessage: SignedTimeSlicedSurveyResponseMessage;
    constructor(signedTimeSlicedSurveyResponseMessage: SignedTimeSlicedSurveyResponseMessage);
    get value(): SignedTimeSlicedSurveyResponseMessage;
    toXdrObject(): Extract<StellarMessageWire, {
        type: 22;
    }>;
}
export declare class StellarMessageTimeSlicedSurveyStartCollecting extends StellarMessageBase {
    readonly type: "timeSlicedSurveyStartCollecting";
    readonly signedTimeSlicedSurveyStartCollectingMessage: SignedTimeSlicedSurveyStartCollectingMessage;
    constructor(signedTimeSlicedSurveyStartCollectingMessage: SignedTimeSlicedSurveyStartCollectingMessage);
    get value(): SignedTimeSlicedSurveyStartCollectingMessage;
    toXdrObject(): Extract<StellarMessageWire, {
        type: 23;
    }>;
}
export declare class StellarMessageTimeSlicedSurveyStopCollecting extends StellarMessageBase {
    readonly type: "timeSlicedSurveyStopCollecting";
    readonly signedTimeSlicedSurveyStopCollectingMessage: SignedTimeSlicedSurveyStopCollectingMessage;
    constructor(signedTimeSlicedSurveyStopCollectingMessage: SignedTimeSlicedSurveyStopCollectingMessage);
    get value(): SignedTimeSlicedSurveyStopCollectingMessage;
    toXdrObject(): Extract<StellarMessageWire, {
        type: 24;
    }>;
}
export declare class StellarMessageGetScpQuorumset extends StellarMessageBase {
    readonly type: "getScpQuorumset";
    readonly qSetHash: Uint256Bytes;
    constructor(qSetHash: Uint256Bytes | Uint8Array | string);
    get value(): Uint256Bytes;
    toXdrObject(): Extract<StellarMessageWire, {
        type: 9;
    }>;
}
export declare class StellarMessageScpQuorumset extends StellarMessageBase {
    readonly type: "scpQuorumset";
    readonly qSet: ScpQuorumSet;
    constructor(qSet: ScpQuorumSet);
    get value(): ScpQuorumSet;
    toXdrObject(): Extract<StellarMessageWire, {
        type: 10;
    }>;
}
export declare class StellarMessageScpMessage extends StellarMessageBase {
    readonly type: "scpMessage";
    readonly envelope: ScpEnvelope;
    constructor(envelope: ScpEnvelope);
    get value(): ScpEnvelope;
    toXdrObject(): Extract<StellarMessageWire, {
        type: 11;
    }>;
}
export declare class StellarMessageGetScpState extends StellarMessageBase {
    readonly type: "getScpState";
    readonly getScpLedgerSeq: number;
    constructor(getScpLedgerSeq: number);
    get value(): number;
    toXdrObject(): Extract<StellarMessageWire, {
        type: 12;
    }>;
}
export declare class StellarMessageSendMore extends StellarMessageBase {
    readonly type: "sendMore";
    readonly sendMoreMessage: SendMore;
    constructor(sendMoreMessage: SendMore);
    get value(): SendMore;
    toXdrObject(): Extract<StellarMessageWire, {
        type: 16;
    }>;
}
export declare class StellarMessageSendMoreExtended extends StellarMessageBase {
    readonly type: "sendMoreExtended";
    readonly sendMoreExtendedMessage: SendMoreExtended;
    constructor(sendMoreExtendedMessage: SendMoreExtended);
    get value(): SendMoreExtended;
    toXdrObject(): Extract<StellarMessageWire, {
        type: 20;
    }>;
}
export declare class StellarMessageFloodAdvert extends StellarMessageBase {
    readonly type: "floodAdvert";
    readonly floodAdvert: FloodAdvert;
    constructor(floodAdvert: FloodAdvert);
    get value(): FloodAdvert;
    toXdrObject(): Extract<StellarMessageWire, {
        type: 18;
    }>;
}
export declare class StellarMessageFloodDemand extends StellarMessageBase {
    readonly type: "floodDemand";
    readonly floodDemand: FloodDemand;
    constructor(floodDemand: FloodDemand);
    get value(): FloodDemand;
    toXdrObject(): Extract<StellarMessageWire, {
        type: 19;
    }>;
}
export type StellarMessage = StellarMessageErrorMsg | StellarMessageHello | StellarMessageAuth | StellarMessageDontHave | StellarMessagePeers | StellarMessageGetTxSet | StellarMessageTxSet | StellarMessageGeneralizedTxSet | StellarMessageTransaction | StellarMessageTimeSlicedSurveyRequest | StellarMessageTimeSlicedSurveyResponse | StellarMessageTimeSlicedSurveyStartCollecting | StellarMessageTimeSlicedSurveyStopCollecting | StellarMessageGetScpQuorumset | StellarMessageScpQuorumset | StellarMessageScpMessage | StellarMessageGetScpState | StellarMessageSendMore | StellarMessageSendMoreExtended | StellarMessageFloodAdvert | StellarMessageFloodDemand;
export declare const StellarMessage: typeof StellarMessageBase;
export {};
