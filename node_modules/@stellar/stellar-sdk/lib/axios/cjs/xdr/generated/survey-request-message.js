'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var publicKey = require('./public-key.js');
var curve25519Public = require('./curve25519-public.js');
var surveyMessageCommandType = require('./survey-message-command-type.js');

class SurveyRequestMessage extends xdrValue.XdrValue {
  surveyorPeerId;
  surveyedPeerId;
  ledgerNum;
  encryptionKey;
  commandType;
  static schema = jsXdr.struct(
    "SurveyRequestMessage",
    {
      surveyorPeerId: publicKey.PublicKey.schema,
      surveyedPeerId: publicKey.PublicKey.schema,
      ledgerNum: jsXdr.uint32(),
      encryptionKey: curve25519Public.Curve25519Public.schema,
      commandType: surveyMessageCommandType.SurveyMessageCommandType.schema
    }
  );
  constructor(input) {
    super();
    this.surveyorPeerId = input.surveyorPeerId;
    this.surveyedPeerId = input.surveyedPeerId;
    this.ledgerNum = input.ledgerNum;
    this.encryptionKey = input.encryptionKey;
    this.commandType = input.commandType;
  }
  toXdrObject() {
    return {
      surveyorPeerId: this.surveyorPeerId.toXdrObject(),
      surveyedPeerId: this.surveyedPeerId.toXdrObject(),
      ledgerNum: this.ledgerNum,
      encryptionKey: this.encryptionKey.toXdrObject(),
      commandType: this.commandType.toXdrObject()
    };
  }
  static fromXdrObject(wire) {
    return new SurveyRequestMessage({
      surveyorPeerId: publicKey.PublicKey.fromXdrObject(wire.surveyorPeerId),
      surveyedPeerId: publicKey.PublicKey.fromXdrObject(wire.surveyedPeerId),
      ledgerNum: wire.ledgerNum,
      encryptionKey: curve25519Public.Curve25519Public.fromXdrObject(wire.encryptionKey),
      commandType: surveyMessageCommandType.SurveyMessageCommandType.fromXdrObject(wire.commandType)
    });
  }
}

exports.SurveyRequestMessage = SurveyRequestMessage;
//# sourceMappingURL=survey-request-message.js.map
