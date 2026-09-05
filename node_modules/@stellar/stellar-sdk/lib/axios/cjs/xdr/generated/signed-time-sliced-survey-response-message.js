'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var signature = require('./signature.js');
var timeSlicedSurveyResponseMessage = require('./time-sliced-survey-response-message.js');

class SignedTimeSlicedSurveyResponseMessage extends xdrValue.XdrValue {
  responseSignature;
  response;
  static schema = jsXdr.struct("SignedTimeSlicedSurveyResponseMessage", {
    responseSignature: signature.Signature.schema,
    response: timeSlicedSurveyResponseMessage.TimeSlicedSurveyResponseMessage.schema
  });
  constructor(input) {
    super();
    this.responseSignature = input.responseSignature instanceof signature.Signature ? input.responseSignature : new signature.Signature(input.responseSignature);
    this.response = input.response;
  }
  toXdrObject() {
    return {
      responseSignature: this.responseSignature.toXdrObject(),
      response: this.response.toXdrObject()
    };
  }
  static fromXdrObject(wire) {
    return new SignedTimeSlicedSurveyResponseMessage({
      responseSignature: signature.Signature.fromXdrObject(wire.responseSignature),
      response: timeSlicedSurveyResponseMessage.TimeSlicedSurveyResponseMessage.fromXdrObject(wire.response)
    });
  }
}

exports.SignedTimeSlicedSurveyResponseMessage = SignedTimeSlicedSurveyResponseMessage;
//# sourceMappingURL=signed-time-sliced-survey-response-message.js.map
