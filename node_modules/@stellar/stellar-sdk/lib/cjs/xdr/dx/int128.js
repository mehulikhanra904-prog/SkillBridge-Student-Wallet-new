'use strict';

var bigintValue = require('../values/bigint-value.js');
var bigintParts = require('../values/bigint-parts.js');
var int128Parts = require('../generated/int128-parts.js');

const [MIN, MAX] = bigintParts.intRange(true, 128);
class Int128 extends bigintValue.BigIntValue {
  static signed = true;
  static bits = 128;
  // Kept for parity with the legacy LargeInt-based class: callers range-check
  // against these (`if (v > Int128.MAX_VALUE)`), and in JS a missing static
  // would compare against `undefined` and silently pass.
  static MIN_VALUE = MIN;
  static MAX_VALUE = MAX;
  // Reuse the generated `Int128Parts` schema — the wire shape is identical.
  static schema = int128Parts.Int128Parts.schema;
  toXdrObject() {
    return bigintParts.bigIntTo128Parts(this.value, true);
  }
  toParts() {
    return this.toXdrObject();
  }
  static fromXdrObject(wire) {
    return new Int128(bigintParts.partsTo128BigInt(wire, true));
  }
}

exports.Int128 = Int128;
//# sourceMappingURL=int128.js.map
