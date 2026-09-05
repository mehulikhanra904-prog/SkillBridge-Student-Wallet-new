'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var signature = require('./signature.js');
var timeSlicedSurveyStopCollectingMessage = require('./time-sliced-survey-stop-collecting-message.js');

class SignedTimeSlicedSurveyStopCollectingMessage extends xdrValue.XdrValue {
  signature;
  stopCollecting;
  static schema = jsXdr.struct("SignedTimeSlicedSurveyStopCollectingMessage", {
    signature: signature.Signature.schema,
    stopCollecting: timeSlicedSurveyStopCollectingMessage.TimeSlicedSurveyStopCollectingMessage.schema
  });
  constructor(input) {
    super();
    this.signature = input.signature instanceof signature.Signature ? input.signature : new signature.Signature(input.signature);
    this.stopCollecting = input.stopCollecting;
  }
  toXdrObject() {
    return {
      signature: this.signature.toXdrObject(),
      stopCollecting: this.stopCollecting.toXdrObject()
    };
  }
  static fromXdrObject(wire) {
    return new SignedTimeSlicedSurveyStopCollectingMessage({
      signature: signature.Signature.fromXdrObject(wire.signature),
      stopCollecting: timeSlicedSurveyStopCollectingMessage.TimeSlicedSurveyStopCollectingMessage.fromXdrObject(
        wire.stopCollecting
      )
    });
  }
}

exports.SignedTimeSlicedSurveyStopCollectingMessage = SignedTimeSlicedSurveyStopCollectingMessage;
//# sourceMappingURL=signed-time-sliced-survey-stop-collecting-message.js.map
