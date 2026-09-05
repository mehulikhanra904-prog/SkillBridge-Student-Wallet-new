import { enumType } from '@stellar/js-xdr';
import { EnumValue, withMemberPrefix, enumFromValue, enumFromName } from '../values/enum-value.js';

class ScSpecEventParamLocationV0 extends EnumValue {
  static scSpecEventParamLocationData = new ScSpecEventParamLocationV0(
    "scSpecEventParamLocationData",
    0
  );
  static scSpecEventParamLocationTopicList = new ScSpecEventParamLocationV0("scSpecEventParamLocationTopicList", 1);
  static schema = withMemberPrefix(
    enumType("ScSpecEventParamLocationV0", {
      scSpecEventParamLocationData: 0,
      scSpecEventParamLocationTopicList: 1
    }),
    "scSpecEventParamLocation"
  );
  static fromValue(value) {
    return enumFromValue(
      "ScSpecEventParamLocationV0",
      ScSpecEventParamLocationV0.schema,
      ScSpecEventParamLocationV0,
      value
    );
  }
  static fromName(name) {
    return enumFromName(
      "ScSpecEventParamLocationV0",
      ScSpecEventParamLocationV0,
      name
    );
  }
  static fromXdrObject(wire) {
    return ScSpecEventParamLocationV0.fromValue(wire);
  }
}

export { ScSpecEventParamLocationV0 };
//# sourceMappingURL=sc-spec-event-param-location-v0.js.map
