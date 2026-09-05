'use strict';

var jsXdr = require('@stellar/js-xdr');
var enumValue = require('../values/enum-value.js');

class SurveyMessageResponseType extends enumValue.EnumValue {
  static surveyTopologyResponseV2 = new SurveyMessageResponseType(
    "surveyTopologyResponseV2",
    2
  );
  static schema = jsXdr.enumType("SurveyMessageResponseType", {
    surveyTopologyResponseV2: 2
  });
  static fromValue(value) {
    return enumValue.enumFromValue(
      "SurveyMessageResponseType",
      SurveyMessageResponseType.schema,
      SurveyMessageResponseType,
      value
    );
  }
  static fromName(name) {
    return enumValue.enumFromName(
      "SurveyMessageResponseType",
      SurveyMessageResponseType,
      name
    );
  }
  static fromXdrObject(wire) {
    return SurveyMessageResponseType.fromValue(wire);
  }
}

exports.SurveyMessageResponseType = SurveyMessageResponseType;
//# sourceMappingURL=survey-message-response-type.js.map
