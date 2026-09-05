'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var signature = require('./signature.js');
var timeSlicedSurveyStartCollectingMessage = require('./time-sliced-survey-start-collecting-message.js');

class SignedTimeSlicedSurveyStartCollectingMessage extends xdrValue.XdrValue {
  signature;
  startCollecting;
  static schema = jsXdr.struct("SignedTimeSlicedSurveyStartCollectingMessage", {
    signature: signature.Signature.schema,
    startCollecting: timeSlicedSurveyStartCollectingMessage.TimeSlicedSurveyStartCollectingMessage.schema
  });
  constructor(input) {
    super();
    this.signature = input.signature instanceof signature.Signature ? input.signature : new signature.Signature(input.signature);
    this.startCollecting = input.startCollecting;
  }
  toXdrObject() {
    return {
      signature: this.signature.toXdrObject(),
      startCollecting: this.startCollecting.toXdrObject()
    };
  }
  static fromXdrObject(wire) {
    return new SignedTimeSlicedSurveyStartCollectingMessage({
      signature: signature.Signature.fromXdrObject(wire.signature),
      startCollecting: timeSlicedSurveyStartCollectingMessage.TimeSlicedSurveyStartCollectingMessage.fromXdrObject(
        wire.startCollecting
      )
    });
  }
}

exports.SignedTimeSlicedSurveyStartCollectingMessage = SignedTimeSlicedSurveyStartCollectingMessage;
//# sourceMappingURL=signed-time-sliced-survey-start-collecting-message.js.map
