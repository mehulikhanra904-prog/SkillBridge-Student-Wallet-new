import { enumType } from '@stellar/js-xdr';
import { EnumValue, enumFromValue, enumFromName } from '../values/enum-value.js';

class SurveyMessageCommandType extends EnumValue {
  static timeSlicedSurveyTopology = new SurveyMessageCommandType(
    "timeSlicedSurveyTopology",
    1
  );
  static schema = enumType("SurveyMessageCommandType", {
    timeSlicedSurveyTopology: 1
  });
  static fromValue(value) {
    return enumFromValue(
      "SurveyMessageCommandType",
      SurveyMessageCommandType.schema,
      SurveyMessageCommandType,
      value
    );
  }
  static fromName(name) {
    return enumFromName(
      "SurveyMessageCommandType",
      SurveyMessageCommandType,
      name
    );
  }
  static fromXdrObject(wire) {
    return SurveyMessageCommandType.fromValue(wire);
  }
}

export { SurveyMessageCommandType };
//# sourceMappingURL=survey-message-command-type.js.map
