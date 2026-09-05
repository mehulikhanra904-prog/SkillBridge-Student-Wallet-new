import { StrKey } from './strkey.js';
import { scValToNative } from './scval.js';

function extractEvent(event) {
  const contractId = event.contractId;
  const body = event.body.value;
  return {
    ...contractId !== null && contractId !== void 0 && {
      contractId: StrKey.encodeContract(contractId.toBytes())
    },
    type: event.type.name,
    topics: body.topics.map((t) => scValToNative(t)),
    data: scValToNative(body.data)
  };
}
function humanizeEvents(events) {
  return events.map((e) => {
    if ("inSuccessfulContractCall" in e) {
      return extractEvent(e.event);
    }
    return extractEvent(e);
  });
}

export { humanizeEvents };
//# sourceMappingURL=events.js.map
