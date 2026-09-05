'use strict';

var uint8arrayExtras = require('uint8array-extras');
var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('./xdr-value.js');

function decodeBytesInput(input, encoding) {
  if (input instanceof Uint8Array) return input;
  if (encoding === "ascii") return uint8arrayExtras.stringToUint8Array(input);
  return xdrValue.decodeBytes(input, encoding);
}
function encodeBytesOutput(bytes, encoding) {
  if (encoding === "ascii") return uint8arrayExtras.uint8ArrayToString(bytes);
  return xdrValue.encodeBytes(bytes, encoding);
}
class BytesValue extends xdrValue.XdrValue {
  value;
  constructor(value) {
    super();
    const ctor = this.constructor;
    let bytes = decodeBytesInput(value, ctor.encoding);
    if (typeof value === "string" && ctor.padTo !== void 0 && bytes.length < ctor.padTo) {
      const padded = new Uint8Array(ctor.padTo);
      padded.set(bytes);
      bytes = padded;
    }
    if (ctor.byteLength !== void 0 && bytes.length !== ctor.byteLength) {
      throw new jsXdr.XdrError(
        `${ctor.name}: expected ${ctor.byteLength} byte(s), got ${bytes.length}`
      );
    }
    this.value = bytes;
  }
  /**
   * Render the bytes in the class's declared `encoding`.
   *
   * For the XDR wire form regardless of the declared encoding, use
   * {@link XdrValue.toXdr | `toXdr("base64")`}.
   */
  toString() {
    const ctor = this.constructor;
    return encodeBytesOutput(this.value, ctor.encoding);
  }
  toXdrObject() {
    return this.value;
  }
  // `toJson()` is inherited from `XdrValue` — the JSON walker dispatches
  // on schema name. With named-schema codegen for typedef-opaque aliases
  // (Hash, AssetCode4, PoolId, ContractId, …), the walker fires the
  // appropriate override; without one, falls through to the kind-based
  // default (`opaque`/`varOpaque` → hex per SEP-0051).
  toBytes() {
    return this.value;
  }
}

exports.BytesValue = BytesValue;
//# sourceMappingURL=bytes-value.js.map
