'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var surveyMessageResponseType = require('./survey-message-response-type.js');
var topologyResponseBodyV2 = require('./topology-response-body-v2.js');

class SurveyResponseBodyBase extends xdrValue.XdrValue {
  constructor() {
    super();
    if (new.target === SurveyResponseBodyBase) {
      throw new TypeError(
        "new xdr.SurveyResponseBody(...) is not supported: XDR unions are built from per-variant factories. Call xdr.SurveyResponseBody.surveyTopologyResponseV2(...) (or another arm factory) instead."
      );
    }
  }
  static schema = jsXdr.union(
    "SurveyResponseBody",
    {
      switchOn: surveyMessageResponseType.SurveyMessageResponseType.schema,
      cases: [
        jsXdr.case(
          "surveyTopologyResponseV2",
          2,
          jsXdr.field("topologyResponseBodyV2", topologyResponseBodyV2.TopologyResponseBodyV2.schema)
        )
      ]
    }
  );
  static surveyTopologyResponseV2(topologyResponseBodyV2) {
    return new SurveyResponseBodySurveyTopologyResponseV2(
      topologyResponseBodyV2
    );
  }
  static fromXdrObject(wire) {
    switch (wire.type) {
      case 2:
        return new SurveyResponseBodySurveyTopologyResponseV2(
          topologyResponseBodyV2.TopologyResponseBodyV2.fromXdrObject(wire.topologyResponseBodyV2)
        );
    }
    throw new jsXdr.XdrError(
      `SurveyResponseBody: unknown type ${wire.type}`
    );
  }
  /**
   * Type guard narrowing an unknown value to a concrete SurveyResponseBody variant.
   * Use this instead of `instanceof SurveyResponseBody`: the exported `SurveyResponseBody` value
   * is the abstract base, so `instanceof` narrows to the base (not the
   * variant union) and forces a cast. `SurveyResponseBody.is(x)` narrows to the union.
   */
  static is(value) {
    return value instanceof SurveyResponseBodyBase;
  }
}
class SurveyResponseBodySurveyTopologyResponseV2 extends SurveyResponseBodyBase {
  type = "surveyTopologyResponseV2";
  topologyResponseBodyV2;
  constructor(topologyResponseBodyV2) {
    super();
    this.topologyResponseBodyV2 = topologyResponseBodyV2;
  }
  get value() {
    return this.topologyResponseBodyV2;
  }
  toXdrObject() {
    return {
      type: 2,
      topologyResponseBodyV2: this.topologyResponseBodyV2.toXdrObject()
    };
  }
}
const SurveyResponseBody = SurveyResponseBodyBase;

exports.SurveyResponseBody = SurveyResponseBody;
exports.SurveyResponseBodySurveyTopologyResponseV2 = SurveyResponseBodySurveyTopologyResponseV2;
//# sourceMappingURL=survey-response-body.js.map
