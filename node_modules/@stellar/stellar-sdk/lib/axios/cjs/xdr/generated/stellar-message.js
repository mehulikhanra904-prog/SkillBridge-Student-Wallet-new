'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var messageType = require('./message-type.js');
var error = require('./error.js');
var hello = require('./hello.js');
var auth = require('./auth.js');
var dontHave = require('./dont-have.js');
var peerAddress = require('./peer-address.js');
var uint256Bytes = require('./uint256-bytes.js');
var transactionSet = require('./transaction-set.js');
var generalizedTransactionSet = require('./generalized-transaction-set.js');
var transactionEnvelope = require('./transaction-envelope.js');
var signedTimeSlicedSurveyRequestMessage = require('./signed-time-sliced-survey-request-message.js');
var signedTimeSlicedSurveyResponseMessage = require('./signed-time-sliced-survey-response-message.js');
var signedTimeSlicedSurveyStartCollectingMessage = require('./signed-time-sliced-survey-start-collecting-message.js');
var signedTimeSlicedSurveyStopCollectingMessage = require('./signed-time-sliced-survey-stop-collecting-message.js');
var scpQuorumSet = require('./scp-quorum-set.js');
var scpEnvelope = require('./scp-envelope.js');
var sendMore = require('./send-more.js');
var sendMoreExtended = require('./send-more-extended.js');
var floodAdvert = require('./flood-advert.js');
var floodDemand = require('./flood-demand.js');

class StellarMessageBase extends xdrValue.XdrValue {
  constructor() {
    super();
    if (new.target === StellarMessageBase) {
      throw new TypeError(
        "new xdr.StellarMessage(...) is not supported: XDR unions are built from per-variant factories. Call xdr.StellarMessage.errorMsg(...) (or another arm factory) instead."
      );
    }
  }
  static schema = jsXdr.union(
    "StellarMessage",
    {
      switchOn: messageType.MessageType.schema,
      cases: [
        jsXdr.case("errorMsg", 0, jsXdr.field("error", error.Error.schema)),
        jsXdr.case("hello", 13, jsXdr.field("hello", hello.Hello.schema)),
        jsXdr.case("auth", 2, jsXdr.field("auth", auth.Auth.schema)),
        jsXdr.case("dontHave", 3, jsXdr.field("dontHave", dontHave.DontHave.schema)),
        jsXdr.case("peers", 5, jsXdr.field("peers", jsXdr.array(peerAddress.PeerAddress.schema, 100))),
        jsXdr.case("getTxSet", 6, jsXdr.field("txSetHash", uint256Bytes.Uint256Bytes.schema)),
        jsXdr.case("txSet", 7, jsXdr.field("txSet", transactionSet.TransactionSet.schema)),
        jsXdr.case(
          "generalizedTxSet",
          17,
          jsXdr.field("generalizedTxSet", generalizedTransactionSet.GeneralizedTransactionSet.schema)
        ),
        jsXdr.case(
          "transaction",
          8,
          jsXdr.field("transaction", transactionEnvelope.TransactionEnvelope.schema)
        ),
        jsXdr.case(
          "timeSlicedSurveyRequest",
          21,
          jsXdr.field(
            "signedTimeSlicedSurveyRequestMessage",
            signedTimeSlicedSurveyRequestMessage.SignedTimeSlicedSurveyRequestMessage.schema
          )
        ),
        jsXdr.case(
          "timeSlicedSurveyResponse",
          22,
          jsXdr.field(
            "signedTimeSlicedSurveyResponseMessage",
            signedTimeSlicedSurveyResponseMessage.SignedTimeSlicedSurveyResponseMessage.schema
          )
        ),
        jsXdr.case(
          "timeSlicedSurveyStartCollecting",
          23,
          jsXdr.field(
            "signedTimeSlicedSurveyStartCollectingMessage",
            signedTimeSlicedSurveyStartCollectingMessage.SignedTimeSlicedSurveyStartCollectingMessage.schema
          )
        ),
        jsXdr.case(
          "timeSlicedSurveyStopCollecting",
          24,
          jsXdr.field(
            "signedTimeSlicedSurveyStopCollectingMessage",
            signedTimeSlicedSurveyStopCollectingMessage.SignedTimeSlicedSurveyStopCollectingMessage.schema
          )
        ),
        jsXdr.case("getScpQuorumset", 9, jsXdr.field("qSetHash", uint256Bytes.Uint256Bytes.schema)),
        jsXdr.case("scpQuorumset", 10, jsXdr.field("qSet", scpQuorumSet.ScpQuorumSet.schema)),
        jsXdr.case("scpMessage", 11, jsXdr.field("envelope", scpEnvelope.ScpEnvelope.schema)),
        jsXdr.case("getScpState", 12, jsXdr.field("getScpLedgerSeq", jsXdr.uint32())),
        jsXdr.case("sendMore", 16, jsXdr.field("sendMoreMessage", sendMore.SendMore.schema)),
        jsXdr.case(
          "sendMoreExtended",
          20,
          jsXdr.field("sendMoreExtendedMessage", sendMoreExtended.SendMoreExtended.schema)
        ),
        jsXdr.case("floodAdvert", 18, jsXdr.field("floodAdvert", floodAdvert.FloodAdvert.schema)),
        jsXdr.case("floodDemand", 19, jsXdr.field("floodDemand", floodDemand.FloodDemand.schema))
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
        return new StellarMessageErrorMsg(error.Error.fromXdrObject(wire.error));
      case 13:
        return new StellarMessageHello(hello.Hello.fromXdrObject(wire.hello));
      case 2:
        return new StellarMessageAuth(auth.Auth.fromXdrObject(wire.auth));
      case 3:
        return new StellarMessageDontHave(
          dontHave.DontHave.fromXdrObject(wire.dontHave)
        );
      case 5:
        return new StellarMessagePeers(
          wire.peers.map((w) => peerAddress.PeerAddress.fromXdrObject(w))
        );
      case 6:
        return new StellarMessageGetTxSet(
          uint256Bytes.Uint256Bytes.fromXdrObject(wire.txSetHash)
        );
      case 7:
        return new StellarMessageTxSet(
          transactionSet.TransactionSet.fromXdrObject(wire.txSet)
        );
      case 17:
        return new StellarMessageGeneralizedTxSet(
          generalizedTransactionSet.GeneralizedTransactionSet.fromXdrObject(wire.generalizedTxSet)
        );
      case 8:
        return new StellarMessageTransaction(
          transactionEnvelope.TransactionEnvelope.fromXdrObject(wire.transaction)
        );
      case 21:
        return new StellarMessageTimeSlicedSurveyRequest(
          signedTimeSlicedSurveyRequestMessage.SignedTimeSlicedSurveyRequestMessage.fromXdrObject(
            wire.signedTimeSlicedSurveyRequestMessage
          )
        );
      case 22:
        return new StellarMessageTimeSlicedSurveyResponse(
          signedTimeSlicedSurveyResponseMessage.SignedTimeSlicedSurveyResponseMessage.fromXdrObject(
            wire.signedTimeSlicedSurveyResponseMessage
          )
        );
      case 23:
        return new StellarMessageTimeSlicedSurveyStartCollecting(
          signedTimeSlicedSurveyStartCollectingMessage.SignedTimeSlicedSurveyStartCollectingMessage.fromXdrObject(
            wire.signedTimeSlicedSurveyStartCollectingMessage
          )
        );
      case 24:
        return new StellarMessageTimeSlicedSurveyStopCollecting(
          signedTimeSlicedSurveyStopCollectingMessage.SignedTimeSlicedSurveyStopCollectingMessage.fromXdrObject(
            wire.signedTimeSlicedSurveyStopCollectingMessage
          )
        );
      case 9:
        return new StellarMessageGetScpQuorumset(
          uint256Bytes.Uint256Bytes.fromXdrObject(wire.qSetHash)
        );
      case 10:
        return new StellarMessageScpQuorumset(
          scpQuorumSet.ScpQuorumSet.fromXdrObject(wire.qSet)
        );
      case 11:
        return new StellarMessageScpMessage(
          scpEnvelope.ScpEnvelope.fromXdrObject(wire.envelope)
        );
      case 12:
        return new StellarMessageGetScpState(wire.getScpLedgerSeq);
      case 16:
        return new StellarMessageSendMore(
          sendMore.SendMore.fromXdrObject(wire.sendMoreMessage)
        );
      case 20:
        return new StellarMessageSendMoreExtended(
          sendMoreExtended.SendMoreExtended.fromXdrObject(wire.sendMoreExtendedMessage)
        );
      case 18:
        return new StellarMessageFloodAdvert(
          floodAdvert.FloodAdvert.fromXdrObject(wire.floodAdvert)
        );
      case 19:
        return new StellarMessageFloodDemand(
          floodDemand.FloodDemand.fromXdrObject(wire.floodDemand)
        );
    }
    throw new jsXdr.XdrError(
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
    this.txSetHash = txSetHash instanceof uint256Bytes.Uint256Bytes ? txSetHash : new uint256Bytes.Uint256Bytes(txSetHash);
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
    this.qSetHash = qSetHash instanceof uint256Bytes.Uint256Bytes ? qSetHash : new uint256Bytes.Uint256Bytes(qSetHash);
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

exports.StellarMessage = StellarMessage;
exports.StellarMessageAuth = StellarMessageAuth;
exports.StellarMessageDontHave = StellarMessageDontHave;
exports.StellarMessageErrorMsg = StellarMessageErrorMsg;
exports.StellarMessageFloodAdvert = StellarMessageFloodAdvert;
exports.StellarMessageFloodDemand = StellarMessageFloodDemand;
exports.StellarMessageGeneralizedTxSet = StellarMessageGeneralizedTxSet;
exports.StellarMessageGetScpQuorumset = StellarMessageGetScpQuorumset;
exports.StellarMessageGetScpState = StellarMessageGetScpState;
exports.StellarMessageGetTxSet = StellarMessageGetTxSet;
exports.StellarMessageHello = StellarMessageHello;
exports.StellarMessagePeers = StellarMessagePeers;
exports.StellarMessageScpMessage = StellarMessageScpMessage;
exports.StellarMessageScpQuorumset = StellarMessageScpQuorumset;
exports.StellarMessageSendMore = StellarMessageSendMore;
exports.StellarMessageSendMoreExtended = StellarMessageSendMoreExtended;
exports.StellarMessageTimeSlicedSurveyRequest = StellarMessageTimeSlicedSurveyRequest;
exports.StellarMessageTimeSlicedSurveyResponse = StellarMessageTimeSlicedSurveyResponse;
exports.StellarMessageTimeSlicedSurveyStartCollecting = StellarMessageTimeSlicedSurveyStartCollecting;
exports.StellarMessageTimeSlicedSurveyStopCollecting = StellarMessageTimeSlicedSurveyStopCollecting;
exports.StellarMessageTransaction = StellarMessageTransaction;
exports.StellarMessageTxSet = StellarMessageTxSet;
//# sourceMappingURL=stellar-message.js.map
