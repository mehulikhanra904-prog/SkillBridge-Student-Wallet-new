'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var signature = require('./signature.js');
var timeSlicedSurveyRequestMessage = require('./time-sliced-survey-request-message.js');

class SignedTimeSlicedSurveyRequestMessage extends xdrValue.XdrValue {
  requestSignature;
  request;
  static schema = jsXdr.struct("SignedTimeSlicedSurveyRequestMessage", {
    requestSignature: signature.Signature.schema,
    request: timeSlicedSurveyRequestMessage.TimeSlicedSurveyRequestMessage.schema
  });
  constructor(input) {
    super();
    this.requestSignature = input.requestSignature instanceof signature.Signature ? input.requestSignature : new signature.Signature(input.requestSignature);
    this.request = input.request;
  }
  toXdrObject() {
    return {
      requestSignature: this.requestSignature.toXdrObject(),
      request: this.request.toXdrObject()
    };
  }
  static fromXdrObject(wire) {
    return new SignedTimeSlicedSurveyRequestMessage({
      requestSignature: signature.Signature.fromXdrObject(wire.requestSignature),
      request: timeSlicedSurveyRequestMessage.TimeSlicedSurveyRequestMessage.fromXdrObject(wire.request)
    });
  }
}

exports.SignedTimeSlicedSurveyRequestMessage = SignedTimeSlicedSurveyRequestMessage;
//# sourceMappingURL=signed-time-sliced-survey-request-message.js.map
