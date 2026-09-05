import { struct, uint32 } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { PublicKey } from './public-key.js';

class TimeSlicedSurveyStartCollectingMessage extends XdrValue {
  surveyorId;
  nonce;
  ledgerNum;
  static schema = struct("TimeSlicedSurveyStartCollectingMessage", {
    surveyorId: PublicKey.schema,
    nonce: uint32(),
    ledgerNum: uint32()
  });
  constructor(input) {
    super();
    this.surveyorId = input.surveyorId;
    this.nonce = input.nonce;
    this.ledgerNum = input.ledgerNum;
  }
  toXdrObject() {
    return {
      surveyorId: this.surveyorId.toXdrObject(),
      nonce: this.nonce,
      ledgerNum: this.ledgerNum
    };
  }
  static fromXdrObject(wire) {
    return new TimeSlicedSurveyStartCollectingMessage({
      surveyorId: PublicKey.fromXdrObject(wire.surveyorId),
      nonce: wire.nonce,
      ledgerNum: wire.ledgerNum
    });
  }
}

export { TimeSlicedSurveyStartCollectingMessage };
//# sourceMappingURL=time-sliced-survey-start-collecting-message.js.map
