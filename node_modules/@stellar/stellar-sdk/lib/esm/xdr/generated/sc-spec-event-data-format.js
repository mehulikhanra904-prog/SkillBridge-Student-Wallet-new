import { enumType } from '@stellar/js-xdr';
import { EnumValue, withMemberPrefix, enumFromValue, enumFromName } from '../values/enum-value.js';

class ScSpecEventDataFormat extends EnumValue {
  static scSpecEventDataFormatSingleValue = new ScSpecEventDataFormat(
    "scSpecEventDataFormatSingleValue",
    0
  );
  static scSpecEventDataFormatVec = new ScSpecEventDataFormat(
    "scSpecEventDataFormatVec",
    1
  );
  static scSpecEventDataFormatMap = new ScSpecEventDataFormat(
    "scSpecEventDataFormatMap",
    2
  );
  static schema = withMemberPrefix(
    enumType("ScSpecEventDataFormat", {
      scSpecEventDataFormatSingleValue: 0,
      scSpecEventDataFormatVec: 1,
      scSpecEventDataFormatMap: 2
    }),
    "scSpecEventDataFormat"
  );
  static fromValue(value) {
    return enumFromValue(
      "ScSpecEventDataFormat",
      ScSpecEventDataFormat.schema,
      ScSpecEventDataFormat,
      value
    );
  }
  static fromName(name) {
    return enumFromName("ScSpecEventDataFormat", ScSpecEventDataFormat, name);
  }
  static fromXdrObject(wire) {
    return ScSpecEventDataFormat.fromValue(wire);
  }
}

export { ScSpecEventDataFormat };
//# sourceMappingURL=sc-spec-event-data-format.js.map
