import { struct } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { Signature } from './signature.js';
import { TimeSlicedSurveyResponseMessage } from './time-sliced-survey-response-message.js';

class SignedTimeSlicedSurveyResponseMessage extends XdrValue {
  responseSignature;
  response;
  static schema = struct("SignedTimeSlicedSurveyResponseMessage", {
    responseSignature: Signature.schema,
    response: TimeSlicedSurveyResponseMessage.schema
  });
  constructor(input) {
    super();
    this.responseSignature = input.responseSignature instanceof Signature ? input.responseSignature : new Signature(input.responseSignature);
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
      responseSignature: Signature.fromXdrObject(wire.responseSignature),
      response: TimeSlicedSurveyResponseMessage.fromXdrObject(wire.response)
    });
  }
}

export { SignedTimeSlicedSurveyResponseMessage };
//# sourceMappingURL=signed-time-sliced-survey-response-message.js.map
