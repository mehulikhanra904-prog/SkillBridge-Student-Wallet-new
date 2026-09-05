import { struct } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { Signature } from './signature.js';
import { TimeSlicedSurveyRequestMessage } from './time-sliced-survey-request-message.js';

class SignedTimeSlicedSurveyRequestMessage extends XdrValue {
  requestSignature;
  request;
  static schema = struct("SignedTimeSlicedSurveyRequestMessage", {
    requestSignature: Signature.schema,
    request: TimeSlicedSurveyRequestMessage.schema
  });
  constructor(input) {
    super();
    this.requestSignature = input.requestSignature instanceof Signature ? input.requestSignature : new Signature(input.requestSignature);
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
      requestSignature: Signature.fromXdrObject(wire.requestSignature),
      request: TimeSlicedSurveyRequestMessage.fromXdrObject(wire.request)
    });
  }
}

export { SignedTimeSlicedSurveyRequestMessage };
//# sourceMappingURL=signed-time-sliced-survey-request-message.js.map
