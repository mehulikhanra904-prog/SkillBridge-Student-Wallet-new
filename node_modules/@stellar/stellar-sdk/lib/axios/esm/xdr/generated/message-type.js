import { enumType } from '@stellar/js-xdr';
import { EnumValue, enumFromValue, enumFromName } from '../values/enum-value.js';

class MessageType extends EnumValue {
  static errorMsg = new MessageType("errorMsg", 0);
  static auth = new MessageType("auth", 2);
  static dontHave = new MessageType("dontHave", 3);
  static peers = new MessageType("peers", 5);
  static getTxSet = new MessageType("getTxSet", 6);
  static txSet = new MessageType("txSet", 7);
  static generalizedTxSet = new MessageType("generalizedTxSet", 17);
  static transaction = new MessageType("transaction", 8);
  static getScpQuorumset = new MessageType("getScpQuorumset", 9);
  static scpQuorumset = new MessageType("scpQuorumset", 10);
  static scpMessage = new MessageType("scpMessage", 11);
  static getScpState = new MessageType("getScpState", 12);
  static hello = new MessageType("hello", 13);
  static sendMore = new MessageType("sendMore", 16);
  static sendMoreExtended = new MessageType("sendMoreExtended", 20);
  static floodAdvert = new MessageType("floodAdvert", 18);
  static floodDemand = new MessageType("floodDemand", 19);
  static timeSlicedSurveyRequest = new MessageType(
    "timeSlicedSurveyRequest",
    21
  );
  static timeSlicedSurveyResponse = new MessageType(
    "timeSlicedSurveyResponse",
    22
  );
  static timeSlicedSurveyStartCollecting = new MessageType(
    "timeSlicedSurveyStartCollecting",
    23
  );
  static timeSlicedSurveyStopCollecting = new MessageType(
    "timeSlicedSurveyStopCollecting",
    24
  );
  static schema = enumType("MessageType", {
    errorMsg: 0,
    auth: 2,
    dontHave: 3,
    peers: 5,
    getTxSet: 6,
    txSet: 7,
    generalizedTxSet: 17,
    transaction: 8,
    getScpQuorumset: 9,
    scpQuorumset: 10,
    scpMessage: 11,
    getScpState: 12,
    hello: 13,
    sendMore: 16,
    sendMoreExtended: 20,
    floodAdvert: 18,
    floodDemand: 19,
    timeSlicedSurveyRequest: 21,
    timeSlicedSurveyResponse: 22,
    timeSlicedSurveyStartCollecting: 23,
    timeSlicedSurveyStopCollecting: 24
  });
  static fromValue(value) {
    return enumFromValue("MessageType", MessageType.schema, MessageType, value);
  }
  static fromName(name) {
    return enumFromName("MessageType", MessageType, name);
  }
  static fromXdrObject(wire) {
    return MessageType.fromValue(wire);
  }
}

export { MessageType };
//# sourceMappingURL=message-type.js.map
