import { BigIntValue } from '../values/bigint-value.js';
import { intRange, bigIntTo128Parts, partsTo128BigInt } from '../values/bigint-parts.js';
import { Int128Parts } from '../generated/int128-parts.js';

const [MIN, MAX] = intRange(true, 128);
class Int128 extends BigIntValue {
  static signed = true;
  static bits = 128;
  // Kept for parity with the legacy LargeInt-based class: callers range-check
  // against these (`if (v > Int128.MAX_VALUE)`), and in JS a missing static
  // would compare against `undefined` and silently pass.
  static MIN_VALUE = MIN;
  static MAX_VALUE = MAX;
  // Reuse the generated `Int128Parts` schema — the wire shape is identical.
  static schema = Int128Parts.schema;
  toXdrObject() {
    return bigIntTo128Parts(this.value, true);
  }
  toParts() {
    return this.toXdrObject();
  }
  static fromXdrObject(wire) {
    return new Int128(partsTo128BigInt(wire, true));
  }
}

export { Int128 };
//# sourceMappingURL=int128.js.map
