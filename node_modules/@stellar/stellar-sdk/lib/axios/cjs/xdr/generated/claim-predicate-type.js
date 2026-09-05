'use strict';

var jsXdr = require('@stellar/js-xdr');
var enumValue = require('../values/enum-value.js');

class ClaimPredicateType extends enumValue.EnumValue {
  static claimPredicateUnconditional = new ClaimPredicateType(
    "claimPredicateUnconditional",
    0
  );
  static claimPredicateAnd = new ClaimPredicateType(
    "claimPredicateAnd",
    1
  );
  static claimPredicateOr = new ClaimPredicateType(
    "claimPredicateOr",
    2
  );
  static claimPredicateNot = new ClaimPredicateType(
    "claimPredicateNot",
    3
  );
  static claimPredicateBeforeAbsoluteTime = new ClaimPredicateType(
    "claimPredicateBeforeAbsoluteTime",
    4
  );
  static claimPredicateBeforeRelativeTime = new ClaimPredicateType(
    "claimPredicateBeforeRelativeTime",
    5
  );
  static schema = enumValue.withMemberPrefix(
    jsXdr.enumType("ClaimPredicateType", {
      claimPredicateUnconditional: 0,
      claimPredicateAnd: 1,
      claimPredicateOr: 2,
      claimPredicateNot: 3,
      claimPredicateBeforeAbsoluteTime: 4,
      claimPredicateBeforeRelativeTime: 5
    }),
    "claimPredicate"
  );
  static fromValue(value) {
    return enumValue.enumFromValue(
      "ClaimPredicateType",
      ClaimPredicateType.schema,
      ClaimPredicateType,
      value
    );
  }
  static fromName(name) {
    return enumValue.enumFromName("ClaimPredicateType", ClaimPredicateType, name);
  }
  static fromXdrObject(wire) {
    return ClaimPredicateType.fromValue(wire);
  }
}

exports.ClaimPredicateType = ClaimPredicateType;
//# sourceMappingURL=claim-predicate-type.js.map
