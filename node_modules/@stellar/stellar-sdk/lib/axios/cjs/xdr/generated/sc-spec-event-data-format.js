'use strict';

var jsXdr = require('@stellar/js-xdr');
var enumValue = require('../values/enum-value.js');

class ScSpecEventDataFormat extends enumValue.EnumValue {
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
  static schema = enumValue.withMemberPrefix(
    jsXdr.enumType("ScSpecEventDataFormat", {
      scSpecEventDataFormatSingleValue: 0,
      scSpecEventDataFormatVec: 1,
      scSpecEventDataFormatMap: 2
    }),
    "scSpecEventDataFormat"
  );
  static fromValue(value) {
    return enumValue.enumFromValue(
      "ScSpecEventDataFormat",
      ScSpecEventDataFormat.schema,
      ScSpecEventDataFormat,
      value
    );
  }
  static fromName(name) {
    return enumValue.enumFromName("ScSpecEventDataFormat", ScSpecEventDataFormat, name);
  }
  static fromXdrObject(wire) {
    return ScSpecEventDataFormat.fromValue(wire);
  }
}

exports.ScSpecEventDataFormat = ScSpecEventDataFormat;
//# sourceMappingURL=sc-spec-event-data-format.js.map
