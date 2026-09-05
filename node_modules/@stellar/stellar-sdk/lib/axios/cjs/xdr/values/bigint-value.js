'use strict';

var bigintParts = require('./bigint-parts.js');
var xdrValue = require('./xdr-value.js');

class BigIntValue extends xdrValue.XdrValue {
  value;
  constructor(value, ...legacySlices) {
    super();
    if (legacySlices.length > 0) {
      throw new TypeError(
        `${this.constructor.name} takes a single value; to combine little-endian 64-bit slices use new XdrLargeInt("<type>", [lo, hi, \u2026]).toBigInt()`
      );
    }
    const ctor = this.constructor;
    const v = typeof value === "bigint" ? value : BigInt(value);
    bigintParts.assertBigIntFits(v, ctor.signed, ctor.bits, ctor.name);
    this.value = v;
  }
  toJson() {
    return this.value.toString();
  }
}

exports.bigIntTo128Parts = bigintParts.bigIntTo128Parts;
exports.bigIntTo256Parts = bigintParts.bigIntTo256Parts;
exports.partsTo128BigInt = bigintParts.partsTo128BigInt;
exports.partsTo256BigInt = bigintParts.partsTo256BigInt;
exports.BigIntValue = BigIntValue;
//# sourceMappingURL=bigint-value.js.map
