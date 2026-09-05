import { BigIntValue } from '../values/bigint-value.js';
import { intRange, bigIntTo256Parts, partsTo256BigInt } from '../values/bigint-parts.js';
import { Int256Parts } from '../generated/int256-parts.js';

const [MIN, MAX] = intRange(true, 256);
class Int256 extends BigIntValue {
  static signed = true;
  static bits = 256;
  static MIN_VALUE = MIN;
  static MAX_VALUE = MAX;
  static schema = Int256Parts.schema;
  toXdrObject() {
    return bigIntTo256Parts(this.value, true);
  }
  toParts() {
    return this.toXdrObject();
  }
  static fromXdrObject(wire) {
    return new Int256(partsTo256BigInt(wire, true));
  }
}

export { Int256 };
//# sourceMappingURL=int256.js.map
