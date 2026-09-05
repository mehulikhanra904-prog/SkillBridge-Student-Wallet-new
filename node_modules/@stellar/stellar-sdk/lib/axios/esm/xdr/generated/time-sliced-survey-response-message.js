import { struct, uint32 } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { SurveyResponseMessage } from './survey-response-message.js';

class TimeSlicedSurveyResponseMessage extends XdrValue {
  response;
  nonce;
  static schema = struct(
    "TimeSlicedSurveyResponseMessage",
    {
      response: SurveyResponseMessage.schema,
      nonce: uint32()
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
      response: SurveyResponseMessage.fromXdrObject(wire.response),
      nonce: wire.nonce
    });
  }
}

export { TimeSlicedSurveyResponseMessage };
//# sourceMappingURL=time-sliced-survey-response-message.js.map
