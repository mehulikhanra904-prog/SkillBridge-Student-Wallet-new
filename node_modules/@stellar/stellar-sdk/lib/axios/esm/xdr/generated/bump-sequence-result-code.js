import { enumType } from '@stellar/js-xdr';
import { EnumValue, withMemberPrefix, enumFromValue, enumFromName } from '../values/enum-value.js';

class BumpSequenceResultCode extends EnumValue {
  static bumpSequenceSuccess = new BumpSequenceResultCode(
    "bumpSequenceSuccess",
    0
  );
  static bumpSequenceBadSeq = new BumpSequenceResultCode(
    "bumpSequenceBadSeq",
    -1
  );
  static schema = withMemberPrefix(
    enumType("BumpSequenceResultCode", {
      bumpSequenceSuccess: 0,
      bumpSequenceBadSeq: -1
    }),
    "bumpSequence"
  );
  static fromValue(value) {
    return enumFromValue(
      "BumpSequenceResultCode",
      BumpSequenceResultCode.schema,
      BumpSequenceResultCode,
      value
    );
  }
  static fromName(name) {
    return enumFromName("BumpSequenceResultCode", BumpSequenceResultCode, name);
  }
  static fromXdrObject(wire) {
    return BumpSequenceResultCode.fromValue(wire);
  }
}

export { BumpSequenceResultCode };
//# sourceMappingURL=bump-sequence-result-code.js.map
