'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var bumpSequenceResultCode = require('./bump-sequence-result-code.js');

class BumpSequenceResultBase extends xdrValue.XdrValue {
  constructor() {
    super();
    if (new.target === BumpSequenceResultBase) {
      throw new TypeError(
        "new xdr.BumpSequenceResult(...) is not supported: XDR unions are built from per-variant factories. Call xdr.BumpSequenceResult.bumpSequenceSuccess() (or another arm factory) instead."
      );
    }
  }
  static schema = jsXdr.union(
    "BumpSequenceResult",
    {
      switchOn: bumpSequenceResultCode.BumpSequenceResultCode.schema,
      cases: [
        jsXdr.case("bumpSequenceSuccess", 0, jsXdr.void()),
        jsXdr.case("bumpSequenceBadSeq", -1, jsXdr.void())
      ],
      switchKey: "code"
    }
  );
  static bumpSequenceSuccess() {
    return new BumpSequenceResultSuccess();
  }
  static bumpSequenceBadSeq() {
    return new BumpSequenceResultBadSeq();
  }
  static fromXdrObject(wire) {
    switch (wire.code) {
      case 0:
        return new BumpSequenceResultSuccess();
      case -1:
        return new BumpSequenceResultBadSeq();
    }
    throw new jsXdr.XdrError(
      `BumpSequenceResult: unknown code ${wire.code}`
    );
  }
  /**
   * Type guard narrowing an unknown value to a concrete BumpSequenceResult variant.
   * Use this instead of `instanceof BumpSequenceResult`: the exported `BumpSequenceResult` value
   * is the abstract base, so `instanceof` narrows to the base (not the
   * variant union) and forces a cast. `BumpSequenceResult.is(x)` narrows to the union.
   */
  static is(value) {
    return value instanceof BumpSequenceResultBase;
  }
}
class BumpSequenceResultSuccess extends BumpSequenceResultBase {
  type = "bumpSequenceSuccess";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: 0 };
  }
}
class BumpSequenceResultBadSeq extends BumpSequenceResultBase {
  type = "bumpSequenceBadSeq";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -1 };
  }
}
const BumpSequenceResult = BumpSequenceResultBase;

exports.BumpSequenceResult = BumpSequenceResult;
exports.BumpSequenceResultBadSeq = BumpSequenceResultBadSeq;
exports.BumpSequenceResultSuccess = BumpSequenceResultSuccess;
//# sourceMappingURL=bump-sequence-result.js.map
