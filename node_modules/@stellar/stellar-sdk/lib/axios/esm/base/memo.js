import { hexToUint8Array, stringToUint8Array } from 'uint8array-extras';
import BigNumber from './util/bignumber.js';
import { Uint64 } from '../xdr/index.js';
import { Memo as Memo$1 } from '../xdr/generated/memo.js';
import { Hash } from '../xdr/generated/hash.js';

const MemoNone = "none";
const MemoID = "id";
const MemoText = "text";
const MemoHash = "hash";
const MemoReturn = "return";
class Memo {
  _type;
  _value;
  /**
   * @param type - `MemoNone`, `MemoID`, `MemoText`, `MemoHash` or `MemoReturn`
   * @param value - `string` for `MemoID`, `MemoText`, `Uint8Array` or hex string for `MemoHash` or `MemoReturn`
   */
  constructor(type, value = null) {
    this._type = type;
    this._value = value;
    switch (this._type) {
      case MemoNone:
        break;
      case MemoID:
        Memo._validateIdValue(value);
        break;
      case MemoText:
        Memo._validateTextValue(value);
        break;
      case MemoHash:
      case MemoReturn:
        Memo._validateHashValue(value);
        if (typeof value === "string") {
          this._value = hexToUint8Array(value);
        }
        break;
      default:
        throw new Error("Invalid memo type");
    }
  }
  /**
   * Contains memo type: `MemoNone`, `MemoID`, `MemoText`, `MemoHash` or `MemoReturn`
   */
  get type() {
    return this._type;
  }
  set type(_type) {
    throw new Error("Memo is immutable");
  }
  /**
   * Contains memo value:
   * * `null` for `MemoNone`,
   * * `string` for `MemoID`,
   * * `Uint8Array` for `MemoText` after decoding using `fromXdrObject`, original value otherwise,
   * * `Uint8Array` for `MemoHash`, `MemoReturn`.
   */
  get value() {
    switch (this._type) {
      case MemoNone:
        return null;
      case MemoID:
      case MemoText:
        return this._value;
      case MemoHash:
      case MemoReturn:
        return Uint8Array.from(this._value);
      default:
        throw new Error("Invalid memo type");
    }
  }
  set value(_value) {
    throw new Error("Memo is immutable");
  }
  static _validateIdValue(value) {
    const error = new Error(`Expects a uint64 as a string. Got ${value}`);
    if (typeof value !== "string") {
      throw error;
    }
    if (!/^[0-9]+$/.test(value)) {
      throw error;
    }
    let number;
    try {
      number = new BigNumber(value);
    } catch {
      throw error;
    }
    if (!number.isFinite()) {
      throw error;
    }
    if (number.isNaN()) {
      throw error;
    }
    if (number.isNegative()) {
      throw error;
    }
    if (!number.isInteger()) {
      throw error;
    }
    if (number.isGreaterThan("18446744073709551615")) {
      throw error;
    }
  }
  static _validateTextValue(value) {
    if (typeof value === "string") {
      if (stringToUint8Array(value).length > 28) {
        throw new Error("Expects string or Uint8Array, max 28 bytes");
      }
    } else if (value instanceof Uint8Array) {
      if (value.length > 28) {
        throw new Error("Expects string or Uint8Array, max 28 bytes");
      }
    } else {
      throw new Error("Expects string or Uint8Array, max 28 bytes");
    }
  }
  static _validateHashValue(value) {
    const error = new Error(
      `Expects a 32 byte hash value or hex encoded string. Got ${String(value)}`
    );
    if (value === null || typeof value === "undefined") {
      throw error;
    }
    let valueBytes;
    if (typeof value === "string") {
      if (!/^[0-9A-Fa-f]{64}$/g.test(value)) {
        throw error;
      }
      valueBytes = hexToUint8Array(value);
    } else if (value instanceof Uint8Array) {
      valueBytes = value;
    } else {
      throw error;
    }
    if (!valueBytes.length || valueBytes.length !== 32) {
      throw error;
    }
  }
  /**
   * Returns an empty memo (`MemoNone`).
   */
  static none() {
    return new Memo(MemoNone);
  }
  /**
   * Creates and returns a `MemoText` memo.
   *
   * @param text - memo text. A JS string is UTF-8 encoded on the wire;
   *   pass a `Uint8Array` for byte-exact content. A plain `number[]` is not
   *   accepted (16.2.0 and earlier took one); wrap it: `new Uint8Array(arr)`.
   */
  static text(text) {
    return new Memo(MemoText, text);
  }
  /**
   * Creates and returns a `MemoID` memo.
   *
   * @param id - 64-bit number represented as a string
   */
  static id(id) {
    return new Memo(MemoID, id);
  }
  /**
   * Creates and returns a `MemoHash` memo.
   *
   * @param hash - 32 byte hash or hex encoded string
   */
  static hash(hash) {
    return new Memo(MemoHash, hash);
  }
  /**
   * Creates and returns a `MemoReturn` memo.
   *
   * @param hash - 32 byte hash or hex encoded string
   */
  static return(hash) {
    return new Memo(MemoReturn, hash);
  }
  /**
   * Returns XDR memo object.
   */
  toXdrObject() {
    switch (this._type) {
      case MemoNone:
        return Memo$1.memoNone();
      case MemoID:
        return Memo$1.memoId(Uint64.fromString(this._value));
      case MemoText:
        return Memo$1.memoText(this._value);
      case MemoHash:
        return Memo$1.memoHash(new Hash(this._value));
      case MemoReturn:
        return Memo$1.memoReturn(new Hash(this._value));
      default:
        throw new Error("Invalid memo type");
    }
  }
  /**
   * Returns {@link Memo} from XDR memo object.
   *
   * @param object - XDR memo object
   */
  static fromXdrObject(object) {
    switch (object.type) {
      case "memoId":
        return Memo.id(object.value.toString());
      case "memoText":
        return Memo.text(Uint8Array.from(object.text.bytes));
      case "memoHash":
        return Memo.hash(object.value.toBytes());
      case "memoReturn":
        return Memo.return(object.value.toBytes());
      case "memoNone":
        return Memo.none();
    }
    throw new Error("Unknown type");
  }
  /**
   * @deprecated Use {@link toXdrObject} instead.
   * Deprecated in version v17.0.0
   */
  toXDRObject() {
    return this.toXdrObject();
  }
  /**
   * @deprecated Use {@link Memo.fromXdrObject} instead.
   * Deprecated in version v17.0.0
   */
  static fromXDRObject(object) {
    return Memo.fromXdrObject(object);
  }
}

export { Memo, MemoHash, MemoID, MemoNone, MemoReturn, MemoText };
//# sourceMappingURL=memo.js.map
