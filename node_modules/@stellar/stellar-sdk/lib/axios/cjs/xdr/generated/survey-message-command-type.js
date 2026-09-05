'use strict';

var jsXdr = require('@stellar/js-xdr');
var enumValue = require('../values/enum-value.js');

class SurveyMessageCommandType extends enumValue.EnumValue {
  static timeSlicedSurveyTopology = new SurveyMessageCommandType(
    "timeSlicedSurveyTopology",
    1
  );
  static schema = jsXdr.enumType("SurveyMessageCommandType", {
    timeSlicedSurveyTopology: 1
  });
  static fromValue(value) {
    return enumValue.enumFromValue(
      "SurveyMessageCommandType",
      SurveyMessageCommandType.schema,
      SurveyMessageCommandType,
      value
    );
  }
  static fromName(name) {
    return enumValue.enumFromName(
      "SurveyMessageCommandType",
      SurveyMessageCommandType,
      name
    );
  }
  static fromXdrObject(wire) {
    return SurveyMessageCommandType.fromValue(wire);
  }
}

exports.SurveyMessageCommandType = SurveyMessageCommandType;
//# sourceMappingURL=survey-message-command-type.js.map
