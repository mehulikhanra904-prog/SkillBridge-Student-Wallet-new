import { BigIntValue } from '../values/bigint-value.js';
import { intRange, bigIntTo256Parts, partsTo256BigInt } from '../values/bigint-parts.js';
import { Uint256Parts } from '../generated/uint256-parts.js';

const [MIN, MAX] = intRange(false, 256);
class Uint256 extends BigIntValue {
  static signed = false;
  static bits = 256;
  static MIN_VALUE = MIN;
  static MAX_VALUE = MAX;
  static schema = Uint256Parts.schema;
  toXdrObject() {
    return bigIntTo256Parts(this.value, false);
  }
  toParts() {
    return this.toXdrObject();
  }
  static fromXdrObject(wire) {
    return new Uint256(partsTo256BigInt(wire, false));
  }
}

export { Uint256 };
//# sourceMappingURL=uint256.js.map
