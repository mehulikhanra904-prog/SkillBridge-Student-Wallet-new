'use strict';

var bigintValue = require('../values/bigint-value.js');
var bigintParts = require('../values/bigint-parts.js');
var int256Parts = require('../generated/int256-parts.js');

const [MIN, MAX] = bigintParts.intRange(true, 256);
class Int256 extends bigintValue.BigIntValue {
  static signed = true;
  static bits = 256;
  static MIN_VALUE = MIN;
  static MAX_VALUE = MAX;
  static schema = int256Parts.Int256Parts.schema;
  toXdrObject() {
    return bigintParts.bigIntTo256Parts(this.value, true);
  }
  toParts() {
    return this.toXdrObject();
  }
  static fromXdrObject(wire) {
    return new Int256(bigintParts.partsTo256BigInt(wire, true));
  }
}

exports.Int256 = Int256;
//# sourceMappingURL=int256.js.map
