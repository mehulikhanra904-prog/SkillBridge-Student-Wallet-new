import { enumType } from '@stellar/js-xdr';
import { EnumValue, enumFromValue, enumFromName } from '../values/enum-value.js';

class SurveyMessageResponseType extends EnumValue {
  static surveyTopologyResponseV2 = new SurveyMessageResponseType(
    "surveyTopologyResponseV2",
    2
  );
  static schema = enumType("SurveyMessageResponseType", {
    surveyTopologyResponseV2: 2
  });
  static fromValue(value) {
    return enumFromValue(
      "SurveyMessageResponseType",
      SurveyMessageResponseType.schema,
      SurveyMessageResponseType,
      value
    );
  }
  static fromName(name) {
    return enumFromName(
      "SurveyMessageResponseType",
      SurveyMessageResponseType,
      name
    );
  }
  static fromXdrObject(wire) {
    return SurveyMessageResponseType.fromValue(wire);
  }
}

export { SurveyMessageResponseType };
//# sourceMappingURL=survey-message-response-type.js.map
