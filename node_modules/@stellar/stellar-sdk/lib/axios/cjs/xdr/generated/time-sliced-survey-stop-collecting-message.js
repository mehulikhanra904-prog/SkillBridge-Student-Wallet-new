'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var publicKey = require('./public-key.js');

class TimeSlicedSurveyStopCollectingMessage extends xdrValue.XdrValue {
  surveyorId;
  nonce;
  ledgerNum;
  static schema = jsXdr.struct("TimeSlicedSurveyStopCollectingMessage", {
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
    return new TimeSlicedSurveyStopCollectingMessage({
      surveyorId: publicKey.PublicKey.fromXdrObject(wire.surveyorId),
      nonce: wire.nonce,
      ledgerNum: wire.ledgerNum
    });
  }
}

exports.TimeSlicedSurveyStopCollectingMessage = TimeSlicedSurveyStopCollectingMessage;
//# sourceMappingURL=time-sliced-survey-stop-collecting-message.js.map
