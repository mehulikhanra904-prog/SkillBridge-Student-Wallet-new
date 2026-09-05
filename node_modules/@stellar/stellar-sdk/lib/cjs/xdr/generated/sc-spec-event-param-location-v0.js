'use strict';

var jsXdr = require('@stellar/js-xdr');
var enumValue = require('../values/enum-value.js');

class ScSpecEventParamLocationV0 extends enumValue.EnumValue {
  static scSpecEventParamLocationData = new ScSpecEventParamLocationV0(
    "scSpecEventParamLocationData",
    0
  );
  static scSpecEventParamLocationTopicList = new ScSpecEventParamLocationV0("scSpecEventParamLocationTopicList", 1);
  static schema = enumValue.withMemberPrefix(
    jsXdr.enumType("ScSpecEventParamLocationV0", {
      scSpecEventParamLocationData: 0,
      scSpecEventParamLocationTopicList: 1
    }),
    "scSpecEventParamLocation"
  );
  static fromValue(value) {
    return enumValue.enumFromValue(
      "ScSpecEventParamLocationV0",
      ScSpecEventParamLocationV0.schema,
      ScSpecEventParamLocationV0,
      value
    );
  }
  static fromName(name) {
    return enumValue.enumFromName(
      "ScSpecEventParamLocationV0",
      ScSpecEventParamLocationV0,
      name
    );
  }
  static fromXdrObject(wire) {
    return ScSpecEventParamLocationV0.fromValue(wire);
  }
}

exports.ScSpecEventParamLocationV0 = ScSpecEventParamLocationV0;
//# sourceMappingURL=sc-spec-event-param-location-v0.js.map
