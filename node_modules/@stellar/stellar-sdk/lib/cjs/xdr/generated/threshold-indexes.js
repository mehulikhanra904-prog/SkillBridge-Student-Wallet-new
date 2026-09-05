'use strict';

var jsXdr = require('@stellar/js-xdr');
var enumValue = require('../values/enum-value.js');

class ThresholdIndexes extends enumValue.EnumValue {
  static thresholdMasterWeight = new ThresholdIndexes(
    "thresholdMasterWeight",
    0
  );
  static thresholdLow = new ThresholdIndexes("thresholdLow", 1);
  static thresholdMed = new ThresholdIndexes("thresholdMed", 2);
  static thresholdHigh = new ThresholdIndexes("thresholdHigh", 3);
  static schema = enumValue.withMemberPrefix(
    jsXdr.enumType("ThresholdIndexes", {
      thresholdMasterWeight: 0,
      thresholdLow: 1,
      thresholdMed: 2,
      thresholdHigh: 3
    }),
    "threshold"
  );
  static fromValue(value) {
    return enumValue.enumFromValue(
      "ThresholdIndexes",
      ThresholdIndexes.schema,
      ThresholdIndexes,
      value
    );
  }
  static fromName(name) {
    return enumValue.enumFromName("ThresholdIndexes", ThresholdIndexes, name);
  }
  static fromXdrObject(wire) {
    return ThresholdIndexes.fromValue(wire);
  }
}

exports.ThresholdIndexes = ThresholdIndexes;
//# sourceMappingURL=threshold-indexes.js.map
