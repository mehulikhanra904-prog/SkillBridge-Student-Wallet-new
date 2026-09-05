import { enumType } from '@stellar/js-xdr';
import { EnumValue, withMemberPrefix, enumFromValue, enumFromName } from '../values/enum-value.js';

class ThresholdIndexes extends EnumValue {
  static thresholdMasterWeight = new ThresholdIndexes(
    "thresholdMasterWeight",
    0
  );
  static thresholdLow = new ThresholdIndexes("thresholdLow", 1);
  static thresholdMed = new ThresholdIndexes("thresholdMed", 2);
  static thresholdHigh = new ThresholdIndexes("thresholdHigh", 3);
  static schema = withMemberPrefix(
    enumType("ThresholdIndexes", {
      thresholdMasterWeight: 0,
      thresholdLow: 1,
      thresholdMed: 2,
      thresholdHigh: 3
    }),
    "threshold"
  );
  static fromValue(value) {
    return enumFromValue(
      "ThresholdIndexes",
      ThresholdIndexes.schema,
      ThresholdIndexes,
      value
    );
  }
  static fromName(name) {
    return enumFromName("ThresholdIndexes", ThresholdIndexes, name);
  }
  static fromXdrObject(wire) {
    return ThresholdIndexes.fromValue(wire);
  }
}

export { ThresholdIndexes };
//# sourceMappingURL=threshold-indexes.js.map
