'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var publicKey = require('./public-key.js');
var surveyMessageCommandType = require('./survey-message-command-type.js');
var encryptedBody = require('./encrypted-body.js');

class SurveyResponseMessage extends xdrValue.XdrValue {
  surveyorPeerId;
  surveyedPeerId;
  ledgerNum;
  commandType;
  encryptedBody;
  static schema = jsXdr.struct(
    "SurveyResponseMessage",
    {
      surveyorPeerId: publicKey.PublicKey.schema,
      surveyedPeerId: publicKey.PublicKey.schema,
      ledgerNum: jsXdr.uint32(),
      commandType: surveyMessageCommandType.SurveyMessageCommandType.schema,
      encryptedBody: encryptedBody.EncryptedBody.schema
    }
  );
  constructor(input) {
    super();
    this.surveyorPeerId = input.surveyorPeerId;
    this.surveyedPeerId = input.surveyedPeerId;
    this.ledgerNum = input.ledgerNum;
    this.commandType = input.commandType;
    this.encryptedBody = input.encryptedBody instanceof encryptedBody.EncryptedBody ? input.encryptedBody : new encryptedBody.EncryptedBody(input.encryptedBody);
  }
  toXdrObject() {
    return {
      surveyorPeerId: this.surveyorPeerId.toXdrObject(),
      surveyedPeerId: this.surveyedPeerId.toXdrObject(),
      ledgerNum: this.ledgerNum,
      commandType: this.commandType.toXdrObject(),
      encryptedBody: this.encryptedBody.toXdrObject()
    };
  }
  static fromXdrObject(wire) {
    return new SurveyResponseMessage({
      surveyorPeerId: publicKey.PublicKey.fromXdrObject(wire.surveyorPeerId),
      surveyedPeerId: publicKey.PublicKey.fromXdrObject(wire.surveyedPeerId),
      ledgerNum: wire.ledgerNum,
      commandType: surveyMessageCommandType.SurveyMessageCommandType.fromXdrObject(wire.commandType),
      encryptedBody: encryptedBody.EncryptedBody.fromXdrObject(wire.encryptedBody)
    });
  }
}

exports.SurveyResponseMessage = SurveyResponseMessage;
//# sourceMappingURL=survey-response-message.js.map
