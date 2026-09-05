import { XdrError } from '@stellar/js-xdr';

const MASK_64 = (1n << 64n) - 1n;
const LOG10_OF_2 = 0.30103;
const DIGIT_BUDGET_SLACK = 2;
const MASK_HI_SIGNED_128 = 1n << 127n;
const MASK_HI_SIGNED_256 = 1n << 255n;
function intRange(signed, bits) {
  const width = BigInt(bits);
  if (signed) {
    const limit = 1n << width - 1n;
    return [-limit, limit - 1n];
  }
  return [0n, (1n << width) - 1n];
}
function assertBigIntFits(value, signed, bits, name) {
  const [min, max] = intRange(signed, bits);
  if (value < min || value > max) {
    throw new XdrError(`${name}: value ${value} out of range [${min}, ${max}]`);
  }
}
function assertDecimalDigitBudget(s, bits, name) {
  const maxDigits = Math.ceil(bits * LOG10_OF_2) + DIGIT_BUDGET_SLACK;
  if (s.length > maxDigits) {
    throw new XdrError(
      `${name}: decimal string length ${s.length} exceeds the ${maxDigits}-character budget for a ${bits}-bit integer`
    );
  }
}
const DECIMAL_INTEGER = /^[+-]?[0-9]+$/;
function assertDecimalString(s, name) {
  if (!DECIMAL_INTEGER.test(s)) {
    throw new XdrError(`${name}: "${s}" is not a decimal integer string`);
  }
}
function assertIntFits(value, signed, bits, name) {
  if (!Number.isInteger(value)) {
    throw new XdrError(`${name}: value ${value} is not an integer`);
  }
  const max = signed ? 2 ** (bits - 1) - 1 : 2 ** bits - 1;
  const min = signed ? -2147483648 : 0;
  if (value < min || value > max) {
    throw new XdrError(`${name}: value ${value} out of range [${min}, ${max}]`);
  }
}
function bigIntTo128Parts(value, signed) {
  const unsigned = signed && value < 0n ? value + MASK_HI_SIGNED_128 * 2n : value;
  const lo = unsigned & MASK_64;
  const hiBits = unsigned >> 64n & MASK_64;
  const hi = signed ? toSigned64(hiBits) : hiBits;
  return { hi, lo };
}
function partsTo128BigInt(parts, signed) {
  const hi = signed ? to64Bits(parts.hi) : parts.hi;
  const combined = hi << 64n | parts.lo & MASK_64;
  return signed && combined >= MASK_HI_SIGNED_128 ? combined - MASK_HI_SIGNED_128 * 2n : combined;
}
function bigIntTo256Parts(value, signed) {
  const unsigned = signed && value < 0n ? value + MASK_HI_SIGNED_256 * 2n : value;
  const loLo = unsigned & MASK_64;
  const loHi = unsigned >> 64n & MASK_64;
  const hiLo = unsigned >> 128n & MASK_64;
  const hiHiBits = unsigned >> 192n & MASK_64;
  const hiHi = signed ? toSigned64(hiHiBits) : hiHiBits;
  return { hiHi, hiLo, loHi, loLo };
}
function partsTo256BigInt(parts, signed) {
  const hiHi = signed ? to64Bits(parts.hiHi) : parts.hiHi;
  const combined = hiHi << 192n | (parts.hiLo & MASK_64) << 128n | (parts.loHi & MASK_64) << 64n | parts.loLo & MASK_64;
  return signed && combined >= MASK_HI_SIGNED_256 ? combined - MASK_HI_SIGNED_256 * 2n : combined;
}
function toSigned64(bits) {
  return bits >= 1n << 63n ? bits - (1n << 64n) : bits;
}
function to64Bits(value) {
  return value < 0n ? value + (1n << 64n) : value;
}

export { assertBigIntFits, assertDecimalDigitBudget, assertDecimalString, assertIntFits, bigIntTo128Parts, bigIntTo256Parts, intRange, partsTo128BigInt, partsTo256BigInt };
//# sourceMappingURL=bigint-parts.js.map
