'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var surveyResponseMessage = require('./survey-response-message.js');

class TimeSlicedSurveyResponseMessage extends xdrValue.XdrValue {
  response;
  nonce;
  static schema = jsXdr.struct(
    "TimeSlicedSurveyResponseMessage",
    {
      response: surveyResponseMessage.SurveyResponseMessage.schema,
      nonce: jsXdr.uint32()
    }
  );
  constructor(input) {
    super();
    this.response = input.response;
    this.nonce = input.nonce;
  }
  toXdrObject() {
    return {
      response: this.response.toXdrObject(),
      nonce: this.nonce
    };
  }
  static fromXdrObject(wire) {
    return new TimeSlicedSurveyResponseMessage({
      response: surveyResponseMessage.SurveyResponseMessage.fromXdrObject(wire.response),
      nonce: wire.nonce
    });
  }
}

exports.TimeSlicedSurveyResponseMessage = TimeSlicedSurveyResponseMessage;
//# sourceMappingURL=time-sliced-survey-response-message.js.map
