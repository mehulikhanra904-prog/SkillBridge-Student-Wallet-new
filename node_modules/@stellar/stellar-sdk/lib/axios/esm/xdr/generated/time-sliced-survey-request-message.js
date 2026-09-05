import { struct, uint32 } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { SurveyRequestMessage } from './survey-request-message.js';

class TimeSlicedSurveyRequestMessage extends XdrValue {
  request;
  nonce;
  inboundPeersIndex;
  outboundPeersIndex;
  static schema = struct(
    "TimeSlicedSurveyRequestMessage",
    {
      request: SurveyRequestMessage.schema,
      nonce: uint32(),
      inboundPeersIndex: uint32(),
      outboundPeersIndex: uint32()
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
      request: SurveyRequestMessage.fromXdrObject(wire.request),
      nonce: wire.nonce,
      inboundPeersIndex: wire.inboundPeersIndex,
      outboundPeersIndex: wire.outboundPeersIndex
    });
  }
}

export { TimeSlicedSurveyRequestMessage };
//# sourceMappingURL=time-sliced-survey-request-message.js.map
