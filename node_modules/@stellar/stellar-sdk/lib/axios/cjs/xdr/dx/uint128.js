'use strict';

var bigintValue = require('../values/bigint-value.js');
var bigintParts = require('../values/bigint-parts.js');
var uint128Parts = require('../generated/uint128-parts.js');

const [MIN, MAX] = bigintParts.intRange(false, 128);
class Uint128 extends bigintValue.BigIntValue {
  static signed = false;
  static bits = 128;
  static MIN_VALUE = MIN;
  static MAX_VALUE = MAX;
  static schema = uint128Parts.Uint128Parts.schema;
  toXdrObject() {
    return bigintParts.bigIntTo128Parts(this.value, false);
  }
  toParts() {
    return this.toXdrObject();
  }
  static fromXdrObject(wire) {
    return new Uint128(bigintParts.partsTo128BigInt(wire, false));
  }
}

exports.Uint128 = Uint128;
//# sourceMappingURL=uint128.js.map
