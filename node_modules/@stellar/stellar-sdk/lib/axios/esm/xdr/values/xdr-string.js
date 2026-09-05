import { areUint8ArraysEqual } from 'uint8array-extras';
import { XdrError, BaseType, string } from '@stellar/js-xdr';

const HEX = "0123456789abcdef";
class XdrString {
  bytes;
  constructor(input) {
    if (input instanceof XdrString) {
      this.bytes = input.bytes.slice();
    } else if (typeof input === "string") {
      this.bytes = new TextEncoder().encode(input);
    } else if (input instanceof Uint8Array) {
      this.bytes = input;
    } else {
      throw new TypeError(
        "XdrString: expected string, Uint8Array, or XdrString"
      );
    }
  }
  get length() {
    return this.bytes.length;
  }
  /**
   * Strict UTF-8 decode. Throws if the bytes aren't valid UTF-8.
   * Use this when you know the content is text and want to fail loudly
   * if a binary payload sneaks in. Note that implicit JS string coercion
   * (e.g. template literals) calls the lenient `toString()` instead.
   */
  toStringStrict() {
    return new TextDecoder("utf-8", { fatal: true, ignoreBOM: true }).decode(
      this.bytes
    );
  }
  /**
   * Lenient UTF-8 decode. Invalid sequences are replaced with U+FFFD, but no error is thrown. Use this when you want to be resilient to binary payloads
   * and just want something readable out of the bytes, even if it's not the
   * original intended string.
   */
  toString() {
    return new TextDecoder("utf-8", { fatal: false, ignoreBOM: true }).decode(
      this.bytes
    );
  }
  /**
   * Best-effort decode. Returns a JS string if the bytes are valid UTF-8,
   * otherwise returns the raw bytes. Lets callers pattern-match on what
   * came back without try/catch.
   */
  asStringOrBytes() {
    try {
      return this.toStringStrict();
    } catch {
      return this.bytes;
    }
  }
  /**
   * SEP-0051 escape form — printable ASCII passes through, control bytes
   * and high bytes are escaped (`\0` `\t` `\n` `\r` `\\` `\xNN`). Suitable
   * for log lines and JSON embedding; reversible via `XdrString.fromJson`.
   */
  toJson() {
    let out = "";
    for (let i = 0; i < this.bytes.length; i += 1) {
      const b = this.bytes[i];
      switch (b) {
        case 0:
          out += "\\0";
          break;
        case 9:
          out += "\\t";
          break;
        case 10:
          out += "\\n";
          break;
        case 13:
          out += "\\r";
          break;
        case 92:
          out += "\\\\";
          break;
        default:
          if (b >= 32 && b <= 126) {
            out += String.fromCharCode(b);
          } else {
            out += "\\x" + HEX[b >> 4 & 15] + HEX[b & 15];
          }
      }
    }
    return out;
  }
  /**
   * JavaScript-standard `JSON.stringify` hook — delegates to {@link toJson};
   * call that instead. (Duplicated from `XdrValue` because `XdrString` does
   * not extend it.)
   */
  toJSON() {
    return this.toJson();
  }
  /** Inverse of `toJson` — parse a SEP-0051 escape string to an XdrString. */
  static fromJson(escaped) {
    const out = [];
    for (let i = 0; i < escaped.length; i += 1) {
      const ch = escaped.charCodeAt(i);
      if (ch === 92) {
        const next = escaped.charCodeAt(i + 1);
        switch (next) {
          case 92:
            out.push(92);
            i += 1;
            break;
          case 48:
            out.push(0);
            i += 1;
            break;
          case 116:
            out.push(9);
            i += 1;
            break;
          case 110:
            out.push(10);
            i += 1;
            break;
          case 114:
            out.push(13);
            i += 1;
            break;
          case 120:
          case 88: {
            if (i + 3 >= escaped.length) {
              throw new XdrError(
                `XdrString: truncated \\x escape at index ${i}`
              );
            }
            const hi = hexDigit(escaped.charCodeAt(i + 2));
            const lo = hexDigit(escaped.charCodeAt(i + 3));
            if (hi < 0 || lo < 0) {
              throw new XdrError(
                `XdrString: invalid \\x escape "${escaped.slice(i, i + 4)}"`
              );
            }
            out.push(hi << 4 | lo);
            i += 3;
            break;
          }
          default:
            throw new XdrError(
              `XdrString: unsupported escape \\${escaped[i + 1] ?? ""}`
            );
        }
      } else if (ch >= 32 && ch <= 126) {
        out.push(ch);
      } else {
        throw new XdrError(
          `XdrString: non-ASCII char (code 0x${ch.toString(16)}) at index ${i}`
        );
      }
    }
    return new XdrString(Uint8Array.from(out));
  }
  equals(other) {
    if (this === other) return true;
    if (!(other instanceof XdrString)) return false;
    return areUint8ArraysEqual(this.bytes, other.bytes);
  }
}
function hexDigit(code) {
  if (code >= 48 && code <= 57) return code - 48;
  if (code >= 65 && code <= 70) return code - 65 + 10;
  if (code >= 97 && code <= 102) return code - 97 + 10;
  return -1;
}
class XdrStringType extends BaseType {
  kind = "string";
  maxLength;
  #inner;
  constructor(maxLength) {
    super();
    this.maxLength = maxLength;
    this.#inner = string(maxLength);
  }
  _read(reader, path) {
    return new XdrString(this.#inner._read(reader, path));
  }
  _write(value, writer, path) {
    if (!(value instanceof XdrString) && typeof value !== "string" && !(value instanceof Uint8Array)) {
      throw new XdrError(`${path}: expected string, Uint8Array, or XdrString`);
    }
    const xs = value instanceof XdrString ? value : new XdrString(value);
    this.#inner._write(xs.bytes, writer, path);
  }
}
function xdrString(maxLength) {
  return new XdrStringType(maxLength);
}

export { XdrString, xdrString };
//# sourceMappingURL=xdr-string.js.map
