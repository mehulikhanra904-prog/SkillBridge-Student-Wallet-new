'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var surveyRequestMessage = require('./survey-request-message.js');

class TimeSlicedSurveyRequestMessage extends xdrValue.XdrValue {
  request;
  nonce;
  inboundPeersIndex;
  outboundPeersIndex;
  static schema = jsXdr.struct(
    "TimeSlicedSurveyRequestMessage",
    {
      request: surveyRequestMessage.SurveyRequestMessage.schema,
      nonce: jsXdr.uint32(),
      inboundPeersIndex: jsXdr.uint32(),
      outboundPeersIndex: jsXdr.uint32()
    }
  );
  constructor(input) {
    super();
    this.request = input.request;
    this.nonce = input.nonce;
    this.inboundPeersIndex = input.inboundPeersIndex;
    this.outboundPeersIndex = input.outboundPeersIndex;
  }
  toXdrObject() {
    return {
      request: this.request.toXdrObject(),
      nonce: this.nonce,
      inboundPeersIndex: this.inboundPeersIndex,
      outboundPeersIndex: this.outboundPeersIndex
    };
  }
  static fromXdrObject(wire) {
    return new TimeSlicedSurveyRequestMessage({
      request: surveyRequestMessage.SurveyRequestMessage.fromXdrObject(wire.request),
      nonce: wire.nonce,
      inboundPeersIndex: wire.inboundPeersIndex,
      outboundPeersIndex: wire.outboundPeersIndex
    });
  }
}

exports.TimeSlicedSurveyRequestMessage = TimeSlicedSurveyRequestMessage;
//# sourceMappingURL=time-sliced-survey-request-message.js.map
