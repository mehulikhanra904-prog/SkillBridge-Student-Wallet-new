'use strict';

var jsXdr = require('@stellar/js-xdr');
var enumValue = require('../values/enum-value.js');

class MemoType extends enumValue.EnumValue {
  static memoNone = new MemoType("memoNone", 0);
  static memoText = new MemoType("memoText", 1);
  static memoId = new MemoType("memoId", 2);
  static memoHash = new MemoType("memoHash", 3);
  static memoReturn = new MemoType("memoReturn", 4);
  static schema = enumValue.withMemberPrefix(
    jsXdr.enumType("MemoType", {
      memoNone: 0,
      memoText: 1,
      memoId: 2,
      memoHash: 3,
      memoReturn: 4
    }),
    "memo"
  );
  static fromValue(value) {
    return enumValue.enumFromValue("MemoType", MemoType.schema, MemoType, value);
  }
  static fromName(name) {
    return enumValue.enumFromName("MemoType", MemoType, name);
  }
  static fromXdrObject(wire) {
    return MemoType.fromValue(wire);
  }
}

exports.MemoType = MemoType;
//# sourceMappingURL=memo-type.js.map
