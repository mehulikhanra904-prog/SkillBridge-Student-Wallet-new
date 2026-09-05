'use strict';

var jsXdr = require('@stellar/js-xdr');
var enumValue = require('../values/enum-value.js');

class BumpSequenceResultCode extends enumValue.EnumValue {
  static bumpSequenceSuccess = new BumpSequenceResultCode(
    "bumpSequenceSuccess",
    0
  );
  static bumpSequenceBadSeq = new BumpSequenceResultCode(
    "bumpSequenceBadSeq",
    -1
  );
  static schema = enumValue.withMemberPrefix(
    jsXdr.enumType("BumpSequenceResultCode", {
      bumpSequenceSuccess: 0,
      bumpSequenceBadSeq: -1
    }),
    "bumpSequence"
  );
  static fromValue(value) {
    return enumValue.enumFromValue(
      "BumpSequenceResultCode",
      BumpSequenceResultCode.schema,
      BumpSequenceResultCode,
      value
    );
  }
  static fromName(name) {
    return enumValue.enumFromName("BumpSequenceResultCode", BumpSequenceResultCode, name);
  }
  static fromXdrObject(wire) {
    return BumpSequenceResultCode.fromValue(wire);
  }
}

exports.BumpSequenceResultCode = BumpSequenceResultCode;
//# sourceMappingURL=bump-sequence-result-code.js.map
