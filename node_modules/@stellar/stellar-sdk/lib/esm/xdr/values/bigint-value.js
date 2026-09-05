import { assertBigIntFits } from './bigint-parts.js';
export { bigIntTo128Parts, bigIntTo256Parts, partsTo128BigInt, partsTo256BigInt } from './bigint-parts.js';
import { XdrValue } from './xdr-value.js';

class BigIntValue extends XdrValue {
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
    assertBigIntFits(v, ctor.signed, ctor.bits, ctor.name);
    this.value = v;
  }
  toJson() {
    return this.value.toString();
  }
}

export { BigIntValue };
//# sourceMappingURL=bigint-value.js.map
