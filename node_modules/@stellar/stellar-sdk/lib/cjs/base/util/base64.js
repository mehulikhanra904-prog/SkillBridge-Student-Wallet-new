'use strict';

function base64ToUint8Array(base64) {
  if (typeof base64 !== "string") {
    throw new TypeError(`Expected \`string\`, got \`${typeof base64}\``);
  }
  const normalized = base64.includes("-") || base64.includes("_") ? base64.replace(/-/g, "+").replace(/_/g, "/") : base64;
  const binary = atob(normalized);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i += 1) {
    bytes[i] = binary.charCodeAt(i);
  }
  return bytes;
}
const ENCODE_CHUNK_SIZE = 65535;
function uint8ArrayToBase64(bytes) {
  if (!(bytes instanceof Uint8Array)) {
    throw new TypeError(`Expected \`Uint8Array\`, got \`${typeof bytes}\``);
  }
  let base64 = "";
  for (let i = 0; i < bytes.length; i += ENCODE_CHUNK_SIZE) {
    const chunk = bytes.subarray(i, i + ENCODE_CHUNK_SIZE);
    base64 += btoa(
      String.fromCharCode.apply(null, chunk)
    );
  }
  return base64;
}

exports.base64ToUint8Array = base64ToUint8Array;
exports.uint8ArrayToBase64 = uint8ArrayToBase64;
//# sourceMappingURL=base64.js.map
