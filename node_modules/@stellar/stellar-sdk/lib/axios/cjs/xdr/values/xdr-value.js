'use strict';

var uint8arrayExtras = require('uint8array-extras');
var base64 = require('../../base/util/base64.js');
var jsXdr = require('@stellar/js-xdr');
var toJson = require('./to-json.js');

class XdrValue {
  toXdr(format = "raw") {
    const ctor = this.constructor;
    if (!ctor.schema) {
      throw new jsXdr.XdrError(`${ctor.name}: missing static schema`);
    }
    const bytes = ctor.schema.encode(this.toXdrObject());
    return encodeBytes(bytes, format);
  }
  toXDR(format = "raw") {
    return encodeBytes(this.toXdr(), format);
  }
  toString() {
    return base64.uint8ArrayToBase64(this.toXdr());
  }
  toJson() {
    const ctor = this.constructor;
    if (!ctor.schema) {
      throw new jsXdr.XdrError(`${ctor.name}: missing static schema`);
    }
    return toJson.walkToJson(this.toXdrObject(), ctor.schema);
  }
  /**
   * JavaScript-standard `JSON.stringify` hook — delegates to {@link toJson};
   * call that instead. Without this hook, stringify would throw on bigint
   * fields (`int64`/`uint64`) and dump raw byte internals. To substitute a
   * custom encoding, pass a replacer to `JSON.stringify` (its `this[key]` is
   * the original instance).
   */
  toJSON() {
    return this.toJson();
  }
  // Widened to `XdrValue` (not `this`): polymorphic `this` in parameter
  // position intersects a union's arms to `never`, making equals uncallable
  // on union-typed values (ScVal, Memo, ...). Cross-type calls return false.
  equals(other) {
    if (this === other) return true;
    if (other == null || !(other instanceof XdrValue)) return false;
    if (this.constructor !== other.constructor) return false;
    return uint8arrayExtras.areUint8ArraysEqual(this.toXdr(), other.toXdr());
  }
  static fromXdr(input, format) {
    assertXdrType(this, "fromXdr", true);
    const bytes = decodeBytes(input, format);
    return this.fromXdrObject(this.schema.decode(bytes));
  }
  /**
   * @deprecated Use {@link XdrValue.fromXdr} instead.
   * Deprecated in version v17.0.0
   */
  static fromXDR(input, format) {
    const bytes = decodeBytes(input, format);
    return this.fromXdrObject(this.schema.decode(bytes));
  }
  static validateXdr(input, format) {
    assertXdrType(this, "validateXdr");
    let bytes;
    try {
      bytes = decodeBytes(input, format);
    } catch {
      return false;
    }
    return this.schema.validateXdr(bytes);
  }
  /**
   * @deprecated Use {@link XdrValue.validateXdr} instead.
   * Deprecated in version v17.0.0
   */
  static validateXDR(input, format) {
    let bytes;
    try {
      bytes = decodeBytes(input, format);
    } catch {
      return false;
    }
    return this.schema.validateXdr(bytes);
  }
  static fromJson(json) {
    assertXdrType(this, "fromJson", true);
    return this.fromXdrObject(toJson.walkFromJson(json, this.schema));
  }
}
function decodeStream(type, input, format) {
  assertXdrType(type, "decodeStream", true);
  const reader = new jsXdr.Reader(decodeBytes(input, format));
  const path = type.schema.name ?? type.name;
  const out = [];
  while (reader.remaining > 0) {
    out.push(type.fromXdrObject(type.schema._read(reader, path)));
  }
  return out;
}
function encodeArray(type, values, formatOrOptions, maybeOptions) {
  const [format, options] = splitArrayArgs(formatOrOptions, maybeOptions);
  assertXdrType(type, "encodeArray");
  const codec = jsXdr.array(type.schema, options.maxLength ?? jsXdr.UNBOUNDED_MAX_LENGTH);
  const bytes = codec.encode(
    values.map((v) => v.toXdrObject()),
    { maxDepth: options.maxDepth }
  );
  return encodeBytes(bytes, format ?? "raw");
}
function decodeArray(type, input, formatOrOptions, maybeOptions) {
  const [format, options] = splitArrayArgs(formatOrOptions, maybeOptions);
  assertXdrType(type, "decodeArray", true);
  const codec = jsXdr.array(type.schema, options.maxLength ?? jsXdr.UNBOUNDED_MAX_LENGTH);
  const wires = codec.decode(
    decodeBytes(input, format),
    { maxDepth: options.maxDepth }
  );
  return wires.map((w) => type.fromXdrObject(w));
}
function describeType(type) {
  if (typeof type === "function") {
    return type.name || "an anonymous function or class";
  }
  if (type === null || type === void 0) return String(type);
  if (typeof type === "object") {
    return `an instance of ${type.constructor?.name || "an anonymous object"}`;
  }
  return typeof type === "string" ? `the string "${type}"` : `the ${typeof type} ${String(type)}`;
}
function assertXdrType(type, fn, needsFromXdrObject = false) {
  if (!type?.schema) {
    throw new TypeError(
      `${fn}: ${describeType(type)} has no static schema, so it is not a usable XDR type. Pass a generated class such as xdr.ScVal, or declare \`static readonly schema\` on a class of your own.`
    );
  }
  if (needsFromXdrObject && typeof type.fromXdrObject !== "function") {
    throw new TypeError(
      `${fn}: ${describeType(type)} has a static schema but no static fromXdrObject, so it can encode but not decode. Declare \`static fromXdrObject(wire)\` on it.`
    );
  }
}
function splitArrayArgs(formatOrOptions, maybeOptions) {
  return typeof formatOrOptions === "string" ? [formatOrOptions, maybeOptions ?? {}] : [void 0, formatOrOptions ?? maybeOptions ?? {}];
}
function encodeBytes(bytes, format) {
  switch (format) {
    case "raw":
      return bytes;
    case "hex":
      return uint8arrayExtras.uint8ArrayToHex(bytes);
    case "base64":
      return base64.uint8ArrayToBase64(bytes);
    default:
      throw new jsXdr.XdrError(`toXdr: unknown format "${String(format)}"`);
  }
}
function decodeBytes(input, format) {
  if (input instanceof Uint8Array) return input;
  if (typeof input !== "string") {
    throw new TypeError(
      `fromXdr: expected a string or Uint8Array, got ${typeof input}`
    );
  }
  if (format === void 0 || format === "raw") {
    throw new jsXdr.XdrError(
      "fromXdr: string input requires format ('hex' | 'base64')"
    );
  }
  if (format === "hex" || format === "base64") {
    try {
      return format === "hex" ? uint8arrayExtras.hexToUint8Array(input) : base64.base64ToUint8Array(input);
    } catch {
      throw new jsXdr.XdrError(`invalid ${format} input`);
    }
  }
  throw new jsXdr.XdrError(`fromXdr: unknown format "${String(format)}"`);
}

exports.XdrValue = XdrValue;
exports.decodeArray = decodeArray;
exports.decodeBytes = decodeBytes;
exports.decodeStream = decodeStream;
exports.encodeArray = encodeArray;
exports.encodeBytes = encodeBytes;
//# sourceMappingURL=xdr-value.js.map
