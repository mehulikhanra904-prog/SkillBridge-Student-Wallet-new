import { BigIntValue } from '../values/bigint-value.js';
import { intRange, bigIntTo128Parts, partsTo128BigInt } from '../values/bigint-parts.js';
import { Uint128Parts } from '../generated/uint128-parts.js';

const [MIN, MAX] = intRange(false, 128);
class Uint128 extends BigIntValue {
  static signed = false;
  static bits = 128;
  static MIN_VALUE = MIN;
  static MAX_VALUE = MAX;
  static schema = Uint128Parts.schema;
  toXdrObject() {
    return bigIntTo128Parts(this.value, false);
  }
  toParts() {
    return this.toXdrObject();
  }
  static fromXdrObject(wire) {
    return new Uint128(partsTo128BigInt(wire, false));
  }
}

export { Uint128 };
//# sourceMappingURL=uint128.js.map
