'use strict';

var strkey = require('./strkey.js');
var scval = require('./scval.js');

function extractEvent(event) {
  const contractId = event.contractId;
  const body = event.body.value;
  return {
    ...contractId !== null && contractId !== void 0 && {
      contractId: strkey.StrKey.encodeContract(contractId.toBytes())
    },
    type: event.type.name,
    topics: body.topics.map((t) => scval.scValToNative(t)),
    data: scval.scValToNative(body.data)
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

exports.humanizeEvents = humanizeEvents;
//# sourceMappingURL=events.js.map
