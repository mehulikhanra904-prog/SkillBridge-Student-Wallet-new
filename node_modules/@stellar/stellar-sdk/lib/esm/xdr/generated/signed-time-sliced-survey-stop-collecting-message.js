import { struct } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { Signature } from './signature.js';
import { TimeSlicedSurveyStopCollectingMessage } from './time-sliced-survey-stop-collecting-message.js';

class SignedTimeSlicedSurveyStopCollectingMessage extends XdrValue {
  signature;
  stopCollecting;
  static schema = struct("SignedTimeSlicedSurveyStopCollectingMessage", {
    signature: Signature.schema,
    stopCollecting: TimeSlicedSurveyStopCollectingMessage.schema
  });
  constructor(input) {
    super();
    this.signature = input.signature instanceof Signature ? input.signature : new Signature(input.signature);
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
      signature: Signature.fromXdrObject(wire.signature),
      stopCollecting: TimeSlicedSurveyStopCollectingMessage.fromXdrObject(
        wire.stopCollecting
      )
    });
  }
}

export { SignedTimeSlicedSurveyStopCollectingMessage };
//# sourceMappingURL=signed-time-sliced-survey-stop-collecting-message.js.map
