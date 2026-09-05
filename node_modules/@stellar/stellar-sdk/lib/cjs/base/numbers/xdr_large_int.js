'use strict';

require('../../xdr/index.js');
var bigintParts = require('../../xdr/values/bigint-parts.js');
var int128Parts = require('../../xdr/generated/int128-parts.js');
var uint128Parts = require('../../xdr/generated/uint128-parts.js');
var int256Parts = require('../../xdr/generated/int256-parts.js');
var uint256Parts = require('../../xdr/generated/uint256-parts.js');
var scVal = require('../../xdr/generated/sc-val.js');

const SIZE = {
  i64: 64,
  u64: 64,
  timepoint: 64,
  duration: 64,
  i128: 128,
  u128: 128,
  i256: 256,
  u256: 256
};
const SIGNED = {
  i64: true,
  i128: true,
  i256: true,
  u64: false,
  u128: false,
  u256: false,
  timepoint: false,
  duration: false
};
function assertInRange(value, name, bits, signed) {
  if (!signed && value < 0n) {
    throw new RangeError(`expected a positive value, got: ${value}`);
  }
  const [min, max] = bigintParts.intRange(signed, bits);
  if (value < min || value > max) {
    throw new RangeError(
      `bigint value ${value} for ${name} out of range [${min}, ${max}]`
    );
  }
}
class XdrLargeInt {
  /** The underlying bigint value (always exact, untruncated). */
  value;
  type;
  /**
   * @param type - specifies a data type to use to represent the integer, one
   *    of: 'i64', 'u64', 'i128', 'u128', 'i256', 'u256', 'timepoint', and 'duration'
   *    (see {@link XdrLargeInt.isType})
   * @param values - a single integer-like value, or a list of slices in
   *    **little-endian** order (parts[0] is the least-significant slice),
   *    matching the legacy `LargeInt` contract — e.g.
   *    `new XdrLargeInt("i128", [parts.lo, parts.hi])`. Slice width is
   *    `SIZE[type] / values.length`; each slice must fit its width or a
   *    `RangeError` is thrown.
   */
  constructor(type, values) {
    if (!XdrLargeInt.isType(type)) {
      throw new TypeError(`invalid type: ${type}`);
    }
    const parts = (Array.isArray(values) ? values : [values]).map(
      (i) => {
        if (typeof i === "bigint") return i;
        if (typeof i === "object" && i !== null && "toBigInt" in i && typeof i.toBigInt === "function") {
          return BigInt(i.toBigInt());
        }
        return BigInt(i);
      }
    );
    const value = combineParts(parts, SIZE[type], SIGNED[type]);
    if (parts.length === 1) {
      assertInRange(value, type, SIZE[type], SIGNED[type]);
    }
    this.value = value;
    this.type = type;
  }
  /**
   * Converts to a native JS number.
   *
   * @throws a `RangeError` if the value can't fit into a Number
   */
  toNumber() {
    const bi = this.value;
    if (bi > Number.MAX_SAFE_INTEGER || bi < Number.MIN_SAFE_INTEGER) {
      throw RangeError(
        `value ${bi} not in range for Number [${Number.MIN_SAFE_INTEGER}, ${Number.MAX_SAFE_INTEGER}]`
      );
    }
    return Number(bi);
  }
  /** Converts to a native BigInt. */
  toBigInt() {
    return this.value;
  }
  /**
   * The integer encoded with `ScValType = I64`.
   *
   * @throws a `RangeError` if the value cannot fit in 64 bits
   */
  toI64() {
    this._sizeCheck(64);
    const v = this.value;
    assertInRange(v, "i64", 64, true);
    return scVal.ScVal.scvI64(v);
  }
  /** The integer encoded with `ScValType = U64` */
  toU64() {
    this._sizeCheck(64);
    return scVal.ScVal.scvU64(BigInt.asUintN(64, this.value));
  }
  /** The integer encoded with `ScValType = Timepoint` */
  toTimepoint() {
    this._sizeCheck(64);
    return scVal.ScVal.scvTimepoint(BigInt.asUintN(64, this.value));
  }
  /** The integer encoded with `ScValType = Duration` */
  toDuration() {
    this._sizeCheck(64);
    return scVal.ScVal.scvDuration(BigInt.asUintN(64, this.value));
  }
  /**
   * The integer encoded with `ScValType = I128`.
   *
   * @throws a `RangeError` if the value cannot fit in 128 bits
   */
  toI128() {
    this._sizeCheck(128);
    const v = this.value;
    assertInRange(v, "i128", 128, true);
    return scVal.ScVal.scvI128(
      new int128Parts.Int128Parts({
        hi: BigInt.asIntN(64, v >> 64n),
        lo: BigInt.asUintN(64, v)
      })
    );
  }
  /**
   * The integer encoded with `ScValType = U128`.
   *
   * @throws a `RangeError` if the value cannot fit in 128 bits
   */
  toU128() {
    this._sizeCheck(128);
    const v = this.value;
    return scVal.ScVal.scvU128(
      new uint128Parts.Uint128Parts({
        hi: BigInt.asUintN(64, v >> 64n),
        lo: BigInt.asUintN(64, v)
      })
    );
  }
  /**
   * The integer encoded with `ScValType = I256`
   *
   * @throws a `RangeError` if the value cannot fit in a signed 256-bit integer
   */
  toI256() {
    const v = this.value;
    assertInRange(v, "i256", 256, true);
    return scVal.ScVal.scvI256(
      new int256Parts.Int256Parts({
        hiHi: BigInt.asIntN(64, v >> 192n),
        hiLo: BigInt.asUintN(64, v >> 128n),
        loHi: BigInt.asUintN(64, v >> 64n),
        loLo: BigInt.asUintN(64, v)
      })
    );
  }
  /**
   * The integer encoded with `ScValType = U256`
   *
   * Note: No size check needed - U256 is the largest unsigned type.
   */
  toU256() {
    const v = this.value;
    return scVal.ScVal.scvU256(
      new uint256Parts.Uint256Parts({
        hiHi: BigInt.asUintN(64, v >> 192n),
        hiLo: BigInt.asUintN(64, v >> 128n),
        loHi: BigInt.asUintN(64, v >> 64n),
        loLo: BigInt.asUintN(64, v)
      })
    );
  }
  /** The smallest interpretation of the stored value */
  toScVal() {
    switch (this.type) {
      case "i64":
        return this.toI64();
      case "i128":
        return this.toI128();
      case "i256":
        return this.toI256();
      case "u64":
        return this.toU64();
      case "u128":
        return this.toU128();
      case "u256":
        return this.toU256();
      case "timepoint":
        return this.toTimepoint();
      case "duration":
        return this.toDuration();
      default:
        throw TypeError(`invalid type: ${this.type}`);
    }
  }
  /** Returns the primitive value of this integer. */
  valueOf() {
    return this.value;
  }
  /** Returns the string representation of this integer. */
  toString() {
    return this.value.toString();
  }
  /** Returns a JSON-friendly representation with `value` and `type` fields. */
  toJson() {
    return {
      value: this.value.toString(),
      type: this.type
    };
  }
  /**
   * JavaScript-standard `JSON.stringify` hook. Without it, stringify would
   * enumerate the bigint `value` field and throw a TypeError.
   */
  toJSON() {
    return this.toJson();
  }
  _sizeCheck(bits) {
    if (SIZE[this.type] > bits) {
      throw RangeError(`cannot encode ${this.type} as ${bits} bits`);
    }
  }
  /** Returns true if the given string is a valid XDR large integer type name. */
  static isType(type) {
    switch (type) {
      case "i64":
      case "i128":
      case "i256":
      case "u64":
      case "u128":
      case "u256":
      case "timepoint":
      case "duration":
        return true;
      default:
        return false;
    }
  }
  /**
   * Convert the raw `ScValType` string (e.g. 'scvI128', generated by the XDR)
   * to a type description for {@link XdrLargeInt} construction (e.g. 'i128')
   *
   * @param scvType - the `xdr.ScValType` as a string
   * @returns the corresponding {@link ScIntType} if it's an integer type, or
   *    `undefined` if it's not an integer type
   */
  static getType(scvType) {
    const type = scvType.slice(3).toLowerCase();
    if (this.isType(type)) {
      return type;
    }
    return void 0;
  }
}
function combineParts(parts, totalBits, signed) {
  if (parts.length === 0) {
    throw new RangeError("expected at least one slice value, got none");
  }
  if (parts.length === 1) return parts[0];
  if (totalBits % parts.length !== 0) {
    throw new TypeError(
      `${parts.length} slices do not evenly divide ${totalBits} bits`
    );
  }
  const sliceBits = totalBits / parts.length;
  const width = BigInt(sliceBits);
  let value = 0n;
  for (let i = parts.length - 1; i >= 0; i--) {
    const p = parts[i];
    if (BigInt.asUintN(sliceBits, p) !== p && BigInt.asIntN(sliceBits, p) !== p) {
      throw new RangeError(
        `slice value ${p} does not fit in ${sliceBits} bits`
      );
    }
    value = value << width | BigInt.asUintN(sliceBits, p);
  }
  return signed ? BigInt.asIntN(totalBits, value) : value;
}

exports.XdrLargeInt = XdrLargeInt;
//# sourceMappingURL=xdr_large_int.js.map
