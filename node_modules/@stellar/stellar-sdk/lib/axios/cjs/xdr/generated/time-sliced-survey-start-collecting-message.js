'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var publicKey = require('./public-key.js');

class TimeSlicedSurveyStartCollectingMessage extends xdrValue.XdrValue {
  surveyorId;
  nonce;
  ledgerNum;
  static schema = jsXdr.struct("TimeSlicedSurveyStartCollectingMessage", {
    surveyorId: publicKey.PublicKey.schema,
    nonce: jsXdr.uint32(),
    ledgerNum: jsXdr.uint32()
  });
  constructor(input) {
    super();
    this.surveyorId = input.surveyorId;
    this.nonce = input.nonce;
    this.ledgerNum = input.ledgerNum;
  }
  toXdrObject() {
    return {
      surveyorId: this.surveyorId.toXdrObject(),
      nonce: this.nonce,
      ledgerNum: this.ledgerNum
    };
  }
  static fromXdrObject(wire) {
    return new TimeSlicedSurveyStartCollectingMessage({
      surveyorId: publicKey.PublicKey.fromXdrObject(wire.surveyorId),
      nonce: wire.nonce,
      ledgerNum: wire.ledgerNum
    });
  }
}

exports.TimeSlicedSurveyStartCollectingMessage = TimeSlicedSurveyStartCollectingMessage;
//# sourceMappingURL=time-sliced-survey-start-collecting-message.js.map
