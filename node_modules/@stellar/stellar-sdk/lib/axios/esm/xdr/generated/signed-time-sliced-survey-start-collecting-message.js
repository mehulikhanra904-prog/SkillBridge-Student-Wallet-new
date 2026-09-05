import { struct } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { Signature } from './signature.js';
import { TimeSlicedSurveyStartCollectingMessage } from './time-sliced-survey-start-collecting-message.js';

class SignedTimeSlicedSurveyStartCollectingMessage extends XdrValue {
  signature;
  startCollecting;
  static schema = struct("SignedTimeSlicedSurveyStartCollectingMessage", {
    signature: Signature.schema,
    startCollecting: TimeSlicedSurveyStartCollectingMessage.schema
  });
  constructor(input) {
    super();
    this.signature = input.signature instanceof Signature ? input.signature : new Signature(input.signature);
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
      signature: Signature.fromXdrObject(wire.signature),
      startCollecting: TimeSlicedSurveyStartCollectingMessage.fromXdrObject(
        wire.startCollecting
      )
    });
  }
}

export { SignedTimeSlicedSurveyStartCollectingMessage };
//# sourceMappingURL=signed-time-sliced-survey-start-collecting-message.js.map
