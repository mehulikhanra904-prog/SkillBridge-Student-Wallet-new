'use strict';

var bigintValue = require('../values/bigint-value.js');
var bigintParts = require('../values/bigint-parts.js');
var uint256Parts = require('../generated/uint256-parts.js');

const [MIN, MAX] = bigintParts.intRange(false, 256);
class Uint256 extends bigintValue.BigIntValue {
  static signed = false;
  static bits = 256;
  static MIN_VALUE = MIN;
  static MAX_VALUE = MAX;
  static schema = uint256Parts.Uint256Parts.schema;
  toXdrObject() {
    return bigintParts.bigIntTo256Parts(this.value, false);
  }
  toParts() {
    return this.toXdrObject();
  }
  static fromXdrObject(wire) {
    return new Uint256(bigintParts.partsTo256BigInt(wire, false));
  }
}

exports.Uint256 = Uint256;
//# sourceMappingURL=uint256.js.map
