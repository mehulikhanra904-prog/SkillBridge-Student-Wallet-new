import { union, case as _case, field, array, uint32, XdrError } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { MessageType } from './message-type.js';
import { Error } from './error.js';
import { Hello } from './hello.js';
import { Auth } from './auth.js';
import { DontHave } from './dont-have.js';
import { PeerAddress } from './peer-address.js';
import { Uint256Bytes } from './uint256-bytes.js';
import { TransactionSet } from './transaction-set.js';
import { GeneralizedTransactionSet } from './generalized-transaction-set.js';
import { TransactionEnvelope } from './transaction-envelope.js';
import { SignedTimeSlicedSurveyRequestMessage } from './signed-time-sliced-survey-request-message.js';
import { SignedTimeSlicedSurveyResponseMessage } from './signed-time-sliced-survey-response-message.js';
import { SignedTimeSlicedSurveyStartCollectingMessage } from './signed-time-sliced-survey-start-collecting-message.js';
import { SignedTimeSlicedSurveyStopCollectingMessage } from './signed-time-sliced-survey-stop-collecting-message.js';
import { ScpQuorumSet } from './scp-quorum-set.js';
import { ScpEnvelope } from './scp-envelope.js';
import { SendMore } from './send-more.js';
import { SendMoreExtended } from './send-more-extended.js';
import { FloodAdvert } from './flood-advert.js';
import { FloodDemand } from './flood-demand.js';

class StellarMessageBase extends XdrValue {
  constructor() {
    super();
    if (new.target === StellarMessageBase) {
      throw new TypeError(
        "new xdr.StellarMessage(...) is not supported: XDR unions are built from per-variant factories. Call xdr.StellarMessage.errorMsg(...) (or another arm factory) instead."
      );
    }
  }
  static schema = union(
    "StellarMessage",
    {
      switchOn: MessageType.schema,
      cases: [
        _case("errorMsg", 0, field("error", Error.schema)),
        _case("hello", 13, field("hello", Hello.schema)),
        _case("auth", 2, field("auth", Auth.schema)),
        _case("dontHave", 3, field("dontHave", DontHave.schema)),
        _case("peers", 5, field("peers", array(PeerAddress.schema, 100))),
        _case("getTxSet", 6, field("txSetHash", Uint256Bytes.schema)),
        _case("txSet", 7, field("txSet", TransactionSet.schema)),
        _case(
          "generalizedTxSet",
          17,
          field("generalizedTxSet", GeneralizedTransactionSet.schema)
        ),
        _case(
          "transaction",
          8,
          field("transaction", TransactionEnvelope.schema)
        ),
        _case(
          "timeSlicedSurveyRequest",
          21,
          field(
            "signedTimeSlicedSurveyRequestMessage",
            SignedTimeSlicedSurveyRequestMessage.schema
          )
        ),
        _case(
          "timeSlicedSurveyResponse",
          22,
          field(
            "signedTimeSlicedSurveyResponseMessage",
            SignedTimeSlicedSurveyResponseMessage.schema
          )
        ),
        _case(
          "timeSlicedSurveyStartCollecting",
          23,
          field(
            "signedTimeSlicedSurveyStartCollectingMessage",
            SignedTimeSlicedSurveyStartCollectingMessage.schema
          )
        ),
        _case(
          "timeSlicedSurveyStopCollecting",
          24,
          field(
            "signedTimeSlicedSurveyStopCollectingMessage",
            SignedTimeSlicedSurveyStopCollectingMessage.schema
          )
        ),
        _case("getScpQuorumset", 9, field("qSetHash", Uint256Bytes.schema)),
        _case("scpQuorumset", 10, field("qSet", ScpQuorumSet.schema)),
        _case("scpMessage", 11, field("envelope", ScpEnvelope.schema)),
        _case("getScpState", 12, field("getScpLedgerSeq", uint32())),
        _case("sendMore", 16, field("sendMoreMessage", SendMore.schema)),
        _case(
          "sendMoreExtended",
          20,
          field("sendMoreExtendedMessage", SendMoreExtended.schema)
        ),
        _case("floodAdvert", 18, field("floodAdvert", FloodAdvert.schema)),
        _case("floodDemand", 19, field("floodDemand", FloodDemand.schema))
      ]
    }
  );
  static errorMsg(error) {
    return new StellarMessageErrorMsg(error);
  }
  static hello(hello) {
    return new StellarMessageHello(hello);
  }
  static auth(auth) {
    return new StellarMessageAuth(auth);
  }
  static dontHave(dontHave) {
    return new StellarMessageDontHave(dontHave);
  }
  static peers(peers) {
    return new StellarMessagePeers(peers);
  }
  static getTxSet(txSetHash) {
    return new StellarMessageGetTxSet(txSetHash);
  }
  static txSet(txSet) {
    return new StellarMessageTxSet(txSet);
  }
  static generalizedTxSet(generalizedTxSet) {
    return new StellarMessageGeneralizedTxSet(generalizedTxSet);
  }
  static transaction(transaction) {
    return new StellarMessageTransaction(transaction);
  }
  static timeSlicedSurveyRequest(signedTimeSlicedSurveyRequestMessage) {
    return new StellarMessageTimeSlicedSurveyRequest(
      signedTimeSlicedSurveyRequestMessage
    );
  }
  static timeSlicedSurveyResponse(signedTimeSlicedSurveyResponseMessage) {
    return new StellarMessageTimeSlicedSurveyResponse(
      signedTimeSlicedSurveyResponseMessage
    );
  }
  static timeSlicedSurveyStartCollecting(signedTimeSlicedSurveyStartCollectingMessage) {
    return new StellarMessageTimeSlicedSurveyStartCollecting(
      signedTimeSlicedSurveyStartCollectingMessage
    );
  }
  static timeSlicedSurveyStopCollecting(signedTimeSlicedSurveyStopCollectingMessage) {
    return new StellarMessageTimeSlicedSurveyStopCollecting(
      signedTimeSlicedSurveyStopCollectingMessage
    );
  }
  static getScpQuorumset(qSetHash) {
    return new StellarMessageGetScpQuorumset(qSetHash);
  }
  static scpQuorumset(qSet) {
    return new StellarMessageScpQuorumset(qSet);
  }
  static scpMessage(envelope) {
    return new StellarMessageScpMessage(envelope);
  }
  static getScpState(getScpLedgerSeq) {
    return new StellarMessageGetScpState(getScpLedgerSeq);
  }
  static sendMore(sendMoreMessage) {
    return new StellarMessageSendMore(sendMoreMessage);
  }
  static sendMoreExtended(sendMoreExtendedMessage) {
    return new StellarMessageSendMoreExtended(sendMoreExtendedMessage);
  }
  static floodAdvert(floodAdvert) {
    return new StellarMessageFloodAdvert(floodAdvert);
  }
  static floodDemand(floodDemand) {
    return new StellarMessageFloodDemand(floodDemand);
  }
  static fromXdrObject(wire) {
    switch (wire.type) {
      case 0:
        return new StellarMessageErrorMsg(Error.fromXdrObject(wire.error));
      case 13:
        return new StellarMessageHello(Hello.fromXdrObject(wire.hello));
      case 2:
        return new StellarMessageAuth(Auth.fromXdrObject(wire.auth));
      case 3:
        return new StellarMessageDontHave(
          DontHave.fromXdrObject(wire.dontHave)
        );
      case 5:
        return new StellarMessagePeers(
          wire.peers.map((w) => PeerAddress.fromXdrObject(w))
        );
      case 6:
        return new StellarMessageGetTxSet(
          Uint256Bytes.fromXdrObject(wire.txSetHash)
        );
      case 7:
        return new StellarMessageTxSet(
          TransactionSet.fromXdrObject(wire.txSet)
        );
      case 17:
        return new StellarMessageGeneralizedTxSet(
          GeneralizedTransactionSet.fromXdrObject(wire.generalizedTxSet)
        );
      case 8:
        return new StellarMessageTransaction(
          TransactionEnvelope.fromXdrObject(wire.transaction)
        );
      case 21:
        return new StellarMessageTimeSlicedSurveyRequest(
          SignedTimeSlicedSurveyRequestMessage.fromXdrObject(
            wire.signedTimeSlicedSurveyRequestMessage
          )
        );
      case 22:
        return new StellarMessageTimeSlicedSurveyResponse(
          SignedTimeSlicedSurveyResponseMessage.fromXdrObject(
            wire.signedTimeSlicedSurveyResponseMessage
          )
        );
      case 23:
        return new StellarMessageTimeSlicedSurveyStartCollecting(
          SignedTimeSlicedSurveyStartCollectingMessage.fromXdrObject(
            wire.signedTimeSlicedSurveyStartCollectingMessage
          )
        );
      case 24:
        return new StellarMessageTimeSlicedSurveyStopCollecting(
          SignedTimeSlicedSurveyStopCollectingMessage.fromXdrObject(
            wire.signedTimeSlicedSurveyStopCollectingMessage
          )
        );
      case 9:
        return new StellarMessageGetScpQuorumset(
          Uint256Bytes.fromXdrObject(wire.qSetHash)
        );
      case 10:
        return new StellarMessageScpQuorumset(
          ScpQuorumSet.fromXdrObject(wire.qSet)
        );
      case 11:
        return new StellarMessageScpMessage(
          ScpEnvelope.fromXdrObject(wire.envelope)
        );
      case 12:
        return new StellarMessageGetScpState(wire.getScpLedgerSeq);
      case 16:
        return new StellarMessageSendMore(
          SendMore.fromXdrObject(wire.sendMoreMessage)
        );
      case 20:
        return new StellarMessageSendMoreExtended(
          SendMoreExtended.fromXdrObject(wire.sendMoreExtendedMessage)
        );
      case 18:
        return new StellarMessageFloodAdvert(
          FloodAdvert.fromXdrObject(wire.floodAdvert)
        );
      case 19:
        return new StellarMessageFloodDemand(
          FloodDemand.fromXdrObject(wire.floodDemand)
        );
    }
    throw new XdrError(
      `StellarMessage: unknown type ${wire.type}`
    );
  }
  /**
   * Type guard narrowing an unknown value to a concrete StellarMessage variant.
   * Use this instead of `instanceof StellarMessage`: the exported `StellarMessage` value
   * is the abstract base, so `instanceof` narrows to the base (not the
   * variant union) and forces a cast. `StellarMessage.is(x)` narrows to the union.
   */
  static is(value) {
    return value instanceof StellarMessageBase;
  }
}
class StellarMessageErrorMsg extends StellarMessageBase {
  type = "errorMsg";
  error;
  constructor(error) {
    super();
    this.error = error;
  }
  get value() {
    return this.error;
  }
  toXdrObject() {
    return { type: 0, error: this.error.toXdrObject() };
  }
}
class StellarMessageHello extends StellarMessageBase {
  type = "hello";
  hello;
  constructor(hello) {
    super();
    this.hello = hello;
  }
  get value() {
    return this.hello;
  }
  toXdrObject() {
    return { type: 13, hello: this.hello.toXdrObject() };
  }
}
class StellarMessageAuth extends StellarMessageBase {
  type = "auth";
  auth;
  constructor(auth) {
    super();
    this.auth = auth;
  }
  get value() {
    return this.auth;
  }
  toXdrObject() {
    return { type: 2, auth: this.auth.toXdrObject() };
  }
}
class StellarMessageDontHave extends StellarMessageBase {
  type = "dontHave";
  dontHave;
  constructor(dontHave) {
    super();
    this.dontHave = dontHave;
  }
  get value() {
    return this.dontHave;
  }
  toXdrObject() {
    return { type: 3, dontHave: this.dontHave.toXdrObject() };
  }
}
class StellarMessagePeers extends StellarMessageBase {
  type = "peers";
  peers;
  constructor(peers) {
    super();
    this.peers = peers;
  }
  get value() {
    return this.peers;
  }
  toXdrObject() {
    return { type: 5, peers: this.peers.map((v) => v.toXdrObject()) };
  }
}
class StellarMessageGetTxSet extends StellarMessageBase {
  type = "getTxSet";
  txSetHash;
  constructor(txSetHash) {
    super();
    this.txSetHash = txSetHash instanceof Uint256Bytes ? txSetHash : new Uint256Bytes(txSetHash);
  }
  get value() {
    return this.txSetHash;
  }
  toXdrObject() {
    return { type: 6, txSetHash: this.txSetHash.toXdrObject() };
  }
}
class StellarMessageTxSet extends StellarMessageBase {
  type = "txSet";
  txSet;
  constructor(txSet) {
    super();
    this.txSet = txSet;
  }
  get value() {
    return this.txSet;
  }
  toXdrObject() {
    return { type: 7, txSet: this.txSet.toXdrObject() };
  }
}
class StellarMessageGeneralizedTxSet extends StellarMessageBase {
  type = "generalizedTxSet";
  generalizedTxSet;
  constructor(generalizedTxSet) {
    super();
    this.generalizedTxSet = generalizedTxSet;
  }
  get value() {
    return this.generalizedTxSet;
  }
  toXdrObject() {
    return { type: 17, generalizedTxSet: this.generalizedTxSet.toXdrObject() };
  }
}
class StellarMessageTransaction extends StellarMessageBase {
  type = "transaction";
  transaction;
  constructor(transaction) {
    super();
    this.transaction = transaction;
  }
  get value() {
    return this.transaction;
  }
  toXdrObject() {
    return { type: 8, transaction: this.transaction.toXdrObject() };
  }
}
class StellarMessageTimeSlicedSurveyRequest extends StellarMessageBase {
  type = "timeSlicedSurveyRequest";
  signedTimeSlicedSurveyRequestMessage;
  constructor(signedTimeSlicedSurveyRequestMessage) {
    super();
    this.signedTimeSlicedSurveyRequestMessage = signedTimeSlicedSurveyRequestMessage;
  }
  get value() {
    return this.signedTimeSlicedSurveyRequestMessage;
  }
  toXdrObject() {
    return {
      type: 21,
      signedTimeSlicedSurveyRequestMessage: this.signedTimeSlicedSurveyRequestMessage.toXdrObject()
    };
  }
}
class StellarMessageTimeSlicedSurveyResponse extends StellarMessageBase {
  type = "timeSlicedSurveyResponse";
  signedTimeSlicedSurveyResponseMessage;
  constructor(signedTimeSlicedSurveyResponseMessage) {
    super();
    this.signedTimeSlicedSurveyResponseMessage = signedTimeSlicedSurveyResponseMessage;
  }
  get value() {
    return this.signedTimeSlicedSurveyResponseMessage;
  }
  toXdrObject() {
    return {
      type: 22,
      signedTimeSlicedSurveyResponseMessage: this.signedTimeSlicedSurveyResponseMessage.toXdrObject()
    };
  }
}
class StellarMessageTimeSlicedSurveyStartCollecting extends StellarMessageBase {
  type = "timeSlicedSurveyStartCollecting";
  signedTimeSlicedSurveyStartCollectingMessage;
  constructor(signedTimeSlicedSurveyStartCollectingMessage) {
    super();
    this.signedTimeSlicedSurveyStartCollectingMessage = signedTimeSlicedSurveyStartCollectingMessage;
  }
  get value() {
    return this.signedTimeSlicedSurveyStartCollectingMessage;
  }
  toXdrObject() {
    return {
      type: 23,
      signedTimeSlicedSurveyStartCollectingMessage: this.signedTimeSlicedSurveyStartCollectingMessage.toXdrObject()
    };
  }
}
class StellarMessageTimeSlicedSurveyStopCollecting extends StellarMessageBase {
  type = "timeSlicedSurveyStopCollecting";
  signedTimeSlicedSurveyStopCollectingMessage;
  constructor(signedTimeSlicedSurveyStopCollectingMessage) {
    super();
    this.signedTimeSlicedSurveyStopCollectingMessage = signedTimeSlicedSurveyStopCollectingMessage;
  }
  get value() {
    return this.signedTimeSlicedSurveyStopCollectingMessage;
  }
  toXdrObject() {
    return {
      type: 24,
      signedTimeSlicedSurveyStopCollectingMessage: this.signedTimeSlicedSurveyStopCollectingMessage.toXdrObject()
    };
  }
}
class StellarMessageGetScpQuorumset extends StellarMessageBase {
  type = "getScpQuorumset";
  qSetHash;
  constructor(qSetHash) {
    super();
    this.qSetHash = qSetHash instanceof Uint256Bytes ? qSetHash : new Uint256Bytes(qSetHash);
  }
  get value() {
    return this.qSetHash;
  }
  toXdrObject() {
    return { type: 9, qSetHash: this.qSetHash.toXdrObject() };
  }
}
class StellarMessageScpQuorumset extends StellarMessageBase {
  type = "scpQuorumset";
  qSet;
  constructor(qSet) {
    super();
    this.qSet = qSet;
  }
  get value() {
    return this.qSet;
  }
  toXdrObject() {
    return { type: 10, qSet: this.qSet.toXdrObject() };
  }
}
class StellarMessageScpMessage extends StellarMessageBase {
  type = "scpMessage";
  envelope;
  constructor(envelope) {
    super();
    this.envelope = envelope;
  }
  get value() {
    return this.envelope;
  }
  toXdrObject() {
    return { type: 11, envelope: this.envelope.toXdrObject() };
  }
}
class StellarMessageGetScpState extends StellarMessageBase {
  type = "getScpState";
  getScpLedgerSeq;
  constructor(getScpLedgerSeq) {
    super();
    this.getScpLedgerSeq = getScpLedgerSeq;
  }
  get value() {
    return this.getScpLedgerSeq;
  }
  toXdrObject() {
    return { type: 12, getScpLedgerSeq: this.getScpLedgerSeq };
  }
}
class StellarMessageSendMore extends StellarMessageBase {
  type = "sendMore";
  sendMoreMessage;
  constructor(sendMoreMessage) {
    super();
    this.sendMoreMessage = sendMoreMessage;
  }
  get value() {
    return this.sendMoreMessage;
  }
  toXdrObject() {
    return { type: 16, sendMoreMessage: this.sendMoreMessage.toXdrObject() };
  }
}
class StellarMessageSendMoreExtended extends StellarMessageBase {
  type = "sendMoreExtended";
  sendMoreExtendedMessage;
  constructor(sendMoreExtendedMessage) {
    super();
    this.sendMoreExtendedMessage = sendMoreExtendedMessage;
  }
  get value() {
    return this.sendMoreExtendedMessage;
  }
  toXdrObject() {
    return {
      type: 20,
      sendMoreExtendedMessage: this.sendMoreExtendedMessage.toXdrObject()
    };
  }
}
class StellarMessageFloodAdvert extends StellarMessageBase {
  type = "floodAdvert";
  floodAdvert;
  constructor(floodAdvert) {
    super();
    this.floodAdvert = floodAdvert;
  }
  get value() {
    return this.floodAdvert;
  }
  toXdrObject() {
    return { type: 18, floodAdvert: this.floodAdvert.toXdrObject() };
  }
}
class StellarMessageFloodDemand extends StellarMessageBase {
  type = "floodDemand";
  floodDemand;
  constructor(floodDemand) {
    super();
    this.floodDemand = floodDemand;
  }
  get value() {
    return this.floodDemand;
  }
  toXdrObject() {
    return { type: 19, floodDemand: this.floodDemand.toXdrObject() };
  }
}
const StellarMessage = StellarMessageBase;

export { StellarMessage, StellarMessageAuth, StellarMessageDontHave, StellarMessageErrorMsg, StellarMessageFloodAdvert, StellarMessageFloodDemand, StellarMessageGeneralizedTxSet, StellarMessageGetScpQuorumset, StellarMessageGetScpState, StellarMessageGetTxSet, StellarMessageHello, StellarMessagePeers, StellarMessageScpMessage, StellarMessageScpQuorumset, StellarMessageSendMore, StellarMessageSendMoreExtended, StellarMessageTimeSlicedSurveyRequest, StellarMessageTimeSlicedSurveyResponse, StellarMessageTimeSlicedSurveyStartCollecting, StellarMessageTimeSlicedSurveyStopCollecting, StellarMessageTransaction, StellarMessageTxSet };
//# sourceMappingURL=stellar-message.js.map
