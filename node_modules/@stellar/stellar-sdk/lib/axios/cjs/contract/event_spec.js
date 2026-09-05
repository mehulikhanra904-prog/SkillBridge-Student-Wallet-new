'use strict';

require('../xdr/index.js');
var scSpecEventDataFormat = require('../xdr/generated/sc-spec-event-data-format.js');
var scSpecEventParamLocationV0 = require('../xdr/generated/sc-spec-event-param-location-v0.js');
var scVal = require('../xdr/generated/sc-val.js');

function events(entries) {
  return entries.filter(
    (entry) => entry.type === "scSpecEntryEventV0"
  ).map((entry) => entry.value);
}
function findEvent(entries, name, occurrence = 0) {
  if (!Number.isInteger(occurrence) || occurrence < 0) {
    throw new Error(
      `invalid occurrence for event ${name}: ${occurrence} (expected a non-negative integer)`
    );
  }
  return events(entries).filter((e) => e.name.toString() === name)[occurrence];
}
function topicListParams(event) {
  return event.params.filter(
    (p) => p.location.value === scSpecEventParamLocationV0.ScSpecEventParamLocationV0.scSpecEventParamLocationTopicList.value
  );
}
function dataParams(event) {
  return event.params.filter(
    (p) => p.location.value === scSpecEventParamLocationV0.ScSpecEventParamLocationV0.scSpecEventParamLocationData.value
  );
}
function prefixTopicText(topic) {
  switch (topic.type) {
    case "scvSymbol":
    case "scvString":
      return topic.value.toString();
    default:
      return void 0;
  }
}
function matchesTopics(event, topics) {
  const prefixTopics = event.prefixTopics;
  const tlParams = topicListParams(event);
  if (topics.length < prefixTopics.length + tlParams.length) {
    return void 0;
  }
  for (let i = 0; i < prefixTopics.length; i++) {
    if (prefixTopicText(topics[i]) !== prefixTopics[i].toString()) {
      return void 0;
    }
  }
  return tlParams;
}
function parseEvent(spec, entries, topics, data) {
  let topicVals;
  let dataVal;
  try {
    topicVals = topics.map(
      (t) => typeof t === "string" ? scVal.ScVal.fromXdr(t, "base64") : t
    );
    dataVal = typeof data === "string" ? scVal.ScVal.fromXdr(data, "base64") : data;
  } catch {
    return void 0;
  }
  const specEvents = events(entries);
  for (const event of specEvents) {
    const tlParams = matchesTopics(event, topicVals);
    if (!tlParams) {
      continue;
    }
    try {
      const prefixLen = event.prefixTopics.length;
      const dataOut = /* @__PURE__ */ Object.create(null);
      tlParams.forEach((param, i) => {
        const val = topicVals[prefixLen + i];
        dataOut[param.name.toString()] = spec.scValToNative(val, param.type);
      });
      const dParams = dataParams(event);
      const format = event.dataFormat.value;
      if (format === scSpecEventDataFormat.ScSpecEventDataFormat.scSpecEventDataFormatSingleValue.value) {
        const param = dParams[0];
        if (param) {
          dataOut[param.name.toString()] = spec.scValToNative(
            dataVal,
            param.type
          );
        }
      } else if (format === scSpecEventDataFormat.ScSpecEventDataFormat.scSpecEventDataFormatVec.value) {
        const vec = (dataVal.type === "scvVec" ? dataVal.value : null) ?? [];
        if (vec.length < dParams.length) {
          continue;
        }
        dParams.forEach((param, i) => {
          dataOut[param.name.toString()] = spec.scValToNative(
            vec[i],
            param.type
          );
        });
      } else if (format === scSpecEventDataFormat.ScSpecEventDataFormat.scSpecEventDataFormatMap.value) {
        const map = (dataVal.type === "scvMap" ? dataVal.value : null) ?? [];
        dParams.forEach((param) => {
          const name = param.name.toString();
          const entry = map.find(
            (e) => e.key.type === "scvSymbol" && e.key.value.toString() === name
          );
          if (entry) {
            dataOut[name] = spec.scValToNative(entry.val, param.type);
          }
        });
      }
      return {
        name: event.name.toString(),
        data: dataOut
      };
    } catch {
      continue;
    }
  }
  return void 0;
}
function eventTopicFilter(spec, entries, name, topicValues, occurrence = 0) {
  const event = findEvent(entries, name, occurrence);
  if (!event) {
    throw new Error(
      occurrence > 0 ? `no such event: ${name} (occurrence ${occurrence})` : `no such event: ${name}`
    );
  }
  const filter = event.prefixTopics.map(
    (topic) => scVal.ScVal.scvSymbol(topic.toString()).toXdr("base64")
  );
  topicListParams(event).forEach((param) => {
    const paramName = param.name.toString();
    if (topicValues && Object.prototype.hasOwnProperty.call(topicValues, paramName)) {
      const scVal = spec.nativeToScVal(topicValues[paramName], param.type);
      filter.push(scVal.toXdr("base64"));
    } else {
      filter.push("*");
    }
  });
  return filter;
}

exports.eventTopicFilter = eventTopicFilter;
exports.events = events;
exports.findEvent = findEvent;
exports.parseEvent = parseEvent;
//# sourceMappingURL=event_spec.js.map
